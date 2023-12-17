import axios from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();
const instance_auth = axios.create({
  baseURL: "http://localhost:8080/auth",
  timeout: 1000,
});

try {
  instance_auth.interceptors.request.use(
    async (configs) => {
      const _ut = cookies.get("_ut");
      if (_ut) {
        configs.headers.Authorization = `Bearer ${_ut}`;
        configs.headers["Content-Type"] = "application/json";
      }
      return configs;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  instance_auth.interceptors.response.use(
    async (res) => {
      return res;
    },
    async (error) => {
      const originRequest = error.config;
      if (error.response.status === 403 && !originRequest._retry) {
        originRequest._retry = true;
        const _ur = cookies.get("_ur");
        if (_ur) {
          try {
            await instance_auth({
              method: "post",
              url: "/r_auth",
              data: { massage: "Authorize" },
              headers: {
                Authorization: `Bearer ${_ur}`,
                "Content-Type": "application/json",
              },
            }).then((res) => {
              if (res.status === 200) {
                const date = new Date();
                cookies.set("_ut", res.data._ut, {
                  expires: new Date(date.setMinutes(date.getMinutes() + 5)),
                  secure: true,
                  sameSite: "strict",
                });
                cookies.set("_ur", res.data._ur, {
                  expires: new Date(date.setDate(date.getDate() + 15)),
                  secure: true,
                  sameSite: "strict",
                });
              }
            });
            return instance_auth(originRequest);
          } catch (err) {
            console.log(err);
          }
        }
      }
      return Promise.reject(error);
    }
  );
} catch (error) {
  console.log(error);
}

export default instance_auth;
