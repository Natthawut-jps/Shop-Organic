import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios, { AxiosResponse } from "axios";
import GoogleButton from "react-google-button";
import { Dialog, DialogContent } from "@mui/material";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import instance from "./unities/axios_instance";
import { Cookies } from "react-cookie";

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
        if(res.status === 200) {
          await instance({
            method: 'post',
            url: '/register/google',
            data: {email: res.data.email, password: res.data.sub, first_name: res.data.given_name,
               last_name: res.data.family_name, imgURL: res.data.picture, accept: 1},
            headers: {
              "Content-Type": "application/json"
            },
            responseType: 'json'
          }).then((res) => {
            if (res.status === 200) {
              const date = new Date();
              cookies.set("_ut", res.data._ut, {
                expires: new Date(date.setMinutes(date.getMinutes() + 5)),
                path: '/',
                secure: true,
                sameSite: "strict",
              });
              cookies.set("_ur", res.data._ur, {
                expires: new Date(date.setDate(date.getDate() + 15)),
                path: '/',
                secure: true,
                sameSite: "strict",
              });
              return location.href = '/';
            }
          })
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
  const cookies = new Cookies();
  const handlefinish = async () => {
    try {
      await instance({
        method: "post",
        url: "/login/auth/username",
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
          return location.href = '/';
        }
      });
    } catch(err) {
      setIncorrect(true)
    }
  };

  return (
    <>
      <Dialog
        fullWidth={true}
        onClose={() => props.SignIn.setOpenSignIn(false)}
        open={props.SignIn.openSignIn}
      >
        <DialogContent className="relative bg-gray-scale-white top-0 left-0 right-0 bottom-0 shadow-[0px_0px_56px_rgba(0,_38,_3,_0.08)] text-left text-sm text-gray-scale-gray-900 font-heading-05-heading-05-600">
          <div className=" relative rounded-lg bg-gray-scale-white  flex flex-col items-center justify-start pt-6 px-6 pb-8 gap-[20px]  ">
            <div className=" absolute box-border top-0 right-0">
              <FontAwesomeIcon
                onClick={() => {
                  props.SignIn.setOpenSignIn(false);
                  setErr({} as data);
                  setUinfo({} as data);
                }}
                icon={faXmark}
                size="lg"
                className="cursor-pointer p-[5px] opacity-50 active:bg-slate-300 active:bg-opacity-60 float-right "
              />
            </div>
            <div className="relative text-13xl leading-[120%] font-semibold top-[-10px]">
              {incorrect && (
                <span className=" absolute top-[35px] left-[-150px] text-[12px] text-branding-error w-[300px]">
                  username and password incorrect
                </span>
              )}
              Sign In
            </div>
            <div className="flex flex-col items-center justify-center gap-[16px] text-base text-gray-scale-gray-400">
              <div className="flex flex-col items-start justify-start gap-[25px]">
                <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-center border-[1px] border-solid border-gray-scale-gray-100">
                  <div className="relative leading-[130%] inline-block w-[440px] h-[40px] shrink-0">
                    {err.email && (
                      <span className=" text-[12px] text-branding-error absolute top-[-22px] left-1">
                        {err.email}
                      </span>
                    )}
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUinfo({ ...uinfo, email: e.target.value })
                      }
                      form="passwordEyeForm"
                      type="email"
                      placeholder="Email"
                      className="text-[#373636] relative bg-transparent focus:outline-none text-[16px] left-[10px] w-[424px] rounded-lg h-[37px] shrink-0"
                      required
                    />
                  </div>
                </div>
                <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start border-[1px] border-solid border-gray-scale-gray-100">
                  <div className="relative leading-[130%] inline-block w-[440px] h-[40px] shrink-0">
                    {err.password && (
                      <span className=" text-[12px] text-branding-error absolute top-[-22px] left-1">
                        {err.password}
                      </span>
                    )}
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUinfo({ ...uinfo, password: e.target.value.replace(/\s/g, '').trim() })
                      }
                      form="passwordEyeForm"
                      type="password"
                      id="passwordSignIn"
                      placeholder="Password"
                      className="text-[#373636] relative bg-transparent focus:outline-none text-[16px] left-[10px] w-[380px] h-[37px] rounded-lg shrink-0"
                      required
                    />
                  </div>
                  {passEye ? (
                    <Visibility
                      onClick={passwordEye}
                      fontSize="small"
                      sx={{ color: "black" }}
                      className=" cursor-pointer absolute right-[75px] w-5 h-5 overflow-hidden shrink-0"
                    />
                  ) : (
                    <VisibilityOff
                      onClick={passwordEye}
                      fontSize="small"
                      sx={{ color: "black" }}
                      className="cursor-pointer absolute right-[75px] w-5 h-5 overflow-hidden shrink-0"
                    />
                  )}
                </div>
              </div>
              <div className="w-[472px] flex flex-row items-center justify-between text-sm text-gray-scale-gray-600">
                <div className="flex flex-row items-center justify-center relative left-4 gap-[6px]">
                  <div className="relative w-5 h-5">
                    <input
                      type="checkbox"
                      className=" absolute top-[-4px] cursor-pointer h-full w-full rounded-10xs bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200"
                    />
                  </div>
                  <div className="relative left-2 leading-[150%]">
                    Remember me
                  </div>
                </div>
                <Link
                  to={""}
                  className=" right-7 no-underline text-black relative leading-[150%]"
                >
                  Forget Password
                </Link>
              </div>
            </div>
            <form id="passwordEyeForm" onSubmit={handleSubmit}>
              <button
                type="submit"
                className="text-[16px] cursor-pointer rounded-24xl bg-branding-success w-[472px] flex flex-row items-center justify-center py-3.5 px-8 box-border text-gray-scale-white"
              >
                <div className="relative leading-[120%] font-semibold">
                  Login
                </div>
              </button>
            </form>
            <div className="flex flex-row items-start justify-start pt-1 px-0 pb-0 text-gray-scale-gray-600">
              <div className="relative leading-[150%]">ลงชื่อด้วยวิธีอื่น</div>
            </div>
            <div>
              <div>
                <GoogleButton type="light" onClick={() => LoginGoogle()} />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
