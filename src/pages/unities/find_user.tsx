import { FormEvent, FunctionComponent, useState } from "react";
import instance from "./axios_instance";
import { Cookies } from "react-cookie";

interface user_Type {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  imgURL: string;
  createdAt: Date;
  updatedAt: Date;
}
const Find_user: FunctionComponent = () => {
  const [data, setData] = useState<string>("");
  const [err, setError] = useState<string>("");
  const [user, setUser] = useState<user_Type>();
  const [send, setSend] = useState<boolean>(false);

  const handlerSubmit_findUser = async (e: FormEvent) => {
    e.preventDefault();
    if (data) {
      try {
        await instance({
          method: "post",
          url: "/public/reset_password/find_user",
          responseType: "json",
          headers: {
            "Content-Type": "application/json",
          },
          data: { email: data },
        }).then((res) => {
          if (res.status === 200) {
            setUser(res.data);
          } else {
            setError(res.data);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handlerSubmit_send = async () => {
    if (user) {
      try {
        await instance({
          method: "post",
          url: "/public/reset_password/send_email",
          responseType: "json",
          headers: {
            "Content-Type": "application/json",
          },
          data: { email: user.email },
        }).then((res) => {
          if (res.status === 200) {
            const cookies = new Cookies();
            const date = new Date();
            cookies.set("_re", res.data._re, {
              expires: new Date(date.setMinutes(date.getMinutes() + 5)),
              path: "/",
              secure: true,
              sameSite: "strict",
            });
            setUser(undefined);
            setSend(true);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      {user ? (
        <div className=" flex flex-col absolute top-[10%] left-[40%] gap-[10px]">
          <div className=" text-[12px]">นี้ใช่บัญชีของคุณหรือไม่</div>
          <div className=" flex flex-row shadow-sm drop-shadow-sm bg-gray-100/10 text-gray-500 w-fit pr-5 justify-start items-center gap-[10px]">
            <img
              src={`${import.meta.env.VITE_BASE_API}/img/${user.imgURL}`}
              alt=""
              className=" w-[50px] h-[50px]"
            />
            <div>{`${user.first_name} ${user.last_name}`}</div>
          </div>
          <div
            onClick={handlerSubmit_send}
            className=" text-green-500 bg-green-50 relative left-[120px] w-fit p-2 rounded-md top-[20px] cursor-pointer"
          >
            ส่งรหัส
          </div>
        </div>
      ) : send ? (
        <div className=" flex flex-col absolute top-[10%] left-[40%] text-[20px]">
          เราได้ส่งลิงค์รีเซตรหัสผ่านไปทางอีเมล์ของคุณแล้ว
        </div>
      ) : (
        <div className=" absolute w-full top-[10%] items-start justify-start left-[40%] flex flex-col gap-3">
          <span className=" text-branding-error">{err}</span>
          <label htmlFor="find_user">Your Email</label>
          <input
            form="find"
            type="text"
            name="find_user"
            id="find_user"
            className="border border-black border-solid outline-none rounded-sm relative left-[0px] w-[200px]"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setData(e.target.value)
            }
            required
          />
          <form id="find" onSubmit={handlerSubmit_findUser}>
            <button
              type="submit"
              className=" text-green-500 bg-green-50 p-2 rounded-sm cursor-pointer relative left-[160px] font-sans font-semibold top-2"
            >
              send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Find_user;
