import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios, { AxiosResponse } from "axios";
import GoogleButton from "react-google-button";
import { Dialog, DialogContent, useMediaQuery, useTheme } from "@mui/material";
import { faL, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import instance from "./unities/axios_instance";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

interface openSignIn {
  SignIn: {
    openSignIn: boolean;
    setOpenSignIn: (e: boolean) => void;
  };
}
interface data {
  email: string;
  password: string;
}

export const SignIn: FunctionComponent<openSignIn> = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [uinfo, setUinfo] = useState<data>({} as data);
  const [err, setErr] = useState<data>({} as data);
  const [incorrect, setIncorrect] = useState<boolean>(false);
  const [passEye, setPassEye] = useState<boolean>(false);
  const LoginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      await axios({
        method: "get",
        url: "https://www.googleapis.com/oauth2/v3/userinfo",
        headers: {
          Authorization: `${
            tokenResponse.token_type + tokenResponse.access_token
          }`,
        },
      }).then(async (res) => {
        if (res.status === 200) {
          await instance({
            method: "post",
            url: "/public/register/google",
            data: {
              email: res.data.email,
              password: res.data.sub,
              first_name: res.data.given_name,
              last_name: res.data.family_name,
              imgURL: res.data.picture,
              accept: 1,
            },
            headers: {
              "Content-Type": "application/json",
            },
            responseType: "json",
          }).then((res) => {
            if (res.status === 200) {
              const date = new Date();
              cookies.set("_ut", res.data._ut, {
                expires: new Date(date.setMinutes(date.getMinutes() + 5)),
                path: "/",
                secure: true,
                sameSite: "strict",
              });
              cookies.set("_ur", res.data._ur, {
                expires: new Date(date.setDate(date.getDate() + 15)),
                path: "/",
                secure: true,
                sameSite: "strict",
              });
              return (location.href = "/");
            }
          });
        }
      });
    },
    onError: (err) => console.log(err),
  });

  const passwordEye = () => {
    const el = document.querySelector("#passwordSignIn");
    if (el?.getAttribute("type") === "password") {
      el.setAttribute("type", "text");
      setPassEye(true);
    } else {
      el?.setAttribute("type", "password");
      setPassEye(false);
    }
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErr(handleValidateForm(uinfo));
    if (Object.keys(handleValidateForm(uinfo)).length === 0) {
      handlefinish();
    }
  };
  const handleValidateForm = (data: data) => {
    const errors = {} as data;
    if (!data.email.match(/[0-9A-Za-z]+@gmail.com\b/i)) {
      errors.email = "incorrect email platern math";
    }
    if (data.password.replace(/\s/g, "").trim().toLowerCase().length < 8) {
      errors.password = "incorrect password 8 character";
    }
    return errors;
  };
  const handlefinish = async () => {
    try {
      await instance({
        method: "post",
        url: "/public/login/auth/username",
        data: uinfo,
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "json",
      }).then((res: AxiosResponse) => {
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
          return (location.href = "/");
        }
      });
    } catch (err) {
      setIncorrect(true);
    }
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        onClose={() => props.SignIn.setOpenSignIn(false)}
        open={props.SignIn.openSignIn}
      >
        <DialogContent>
          <div className="flex flex-col rounded-lg bg-gray-scale-white items-center justify-center  gap-[20px]  ">
            <div className="flex flex-row justify-end w-full box-border">
              <FontAwesomeIcon
                onClick={() => {
                  props.SignIn.setOpenSignIn(false);
                  setErr({} as data);
                  setUinfo({} as data);
                  setIncorrect(false);
                }}
                icon={faXmark}
                size="lg"
                className="cursor-pointer p-[5px] opacity-50 active:bg-slate-300 active:bg-opacity-60 float-right "
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-6">
              <div>เข้าสู่ระบบ</div>
              <div className="text-xs leading-[120%] font-semibold ">
                {incorrect && (
                  <span className=" text-branding-error ">
                    อีเมลล์หรือรหัสผ่านไม่ถูกต้อง
                  </span>
                )}
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-[10px] text-base text-gray-scale-gray-400">
                {err.email && (
                  <span className=" text-[12px] text-branding-error">
                    {err.email}
                  </span>
                )}
                <input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUinfo({ ...uinfo, email: e.target.value })
                  }
                  form="passwordEyeForm"
                  type="email"
                  placeholder="อีเมลล์"
                  className="w-full p-2 text-[#373636] bg-transparent focus:outline-none rounded-md border-[1px] border-solid border-gray-scale-gray-100"
                  required
                />
                {err.password && (
                  <span className=" text-[12px] text-branding-error ">
                    {err.password}
                  </span>
                )}
                <div className="relative w-full">
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUinfo({
                        ...uinfo,
                        password: e.target.value.replace(/\s/g, "").trim(),
                      })
                    }
                    form="passwordEyeForm"
                    type="password"
                    id="passwordSignIn"
                    placeholder="รหัสผ่าน"
                    className="  text-[#373636] bg-transparent focus:outline-none rounded-md w-full p-2 border-[1px] border-solid border-gray-scale-gray-100"
                    required
                  />
                  {passEye ? (
                    <Visibility
                      onClick={passwordEye}
                      fontSize="small"
                      sx={{ color: "black" }}
                      className="absolute top-[6px] end-0 cursor-pointer"
                    />
                  ) : (
                    <VisibilityOff
                      onClick={passwordEye}
                      fontSize="small"
                      sx={{ color: "black" }}
                      className=" absolute top-[6px] end-0 cursor-pointer"
                    />
                  )}
                </div>

                <div className=" flex flex-row items-center justify-between text-sm text-gray-scale-gray-600">
                  <div className="flex flex-row items-center justify-center gap-[6px]" />
                  <Link
                    to={"/reset-password"}
                    reloadDocument
                    className="no-underline text-black leading-[150%]"
                  >
                    ลืมรหัสผ่าน
                  </Link>
                </div>
              </div>
              <form id="passwordEyeForm" onSubmit={handleSubmit}>
                <button
                  type="submit"
                  className="cursor-pointer rounded-24xl bg-branding-success  flex flex-row items-center justify-center py-3.5 px-8 box-border text-gray-scale-white"
                >
                  <div className=" leading-[120%] font-semibold">
                    เข้าสู่ระบบ
                  </div>
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-row items-start justify-start pt-1 px-0 pb-0 text-gray-scale-gray-600">
                <div className="relative leading-[150%]">
                  ลงชื่อด้วยวิธีอื่น
                </div>
              </div>
              <div>
                <GoogleButton
                  type="light"
                  label="เข้าสู่ระบบด้วย Google"
                  onClick={() => LoginGoogle()}
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
