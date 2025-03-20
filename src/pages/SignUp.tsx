import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Dialog, DialogContent, useMediaQuery, useTheme } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import instance from "./unities/axios_instance";

interface openSignUp {
  SignUp: {
    openSignUp: boolean;
    setOpenSignUp: (e: boolean) => void;
  };
}
interface uinfo {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  accept: number;
}
interface error {
  email: string;
  password: string;
}
export const SignUp: FunctionComponent<openSignUp> = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [uinfo, setUinfo] = useState<uinfo>({} as uinfo);
  const [err, setError] = useState<{ password: string; email: string }>(
    {} as error
  );
  const [confirm_pass, setConfirm_pass] = useState<string>();
  const [passEyeSignUp, setPassEyeSignUp] = useState<boolean>(false);
  const [passEyeConfirmSignUp, setPassEyeConfirmSignUp] =
    useState<boolean>(false);
  const passwordEyeNew = () => {
    const el = document.querySelector("#passwordNew");
    if (el?.getAttribute("type") === "password") {
      el.setAttribute("type", "text");
      setPassEyeSignUp(true);
    } else {
      el?.setAttribute("type", "password");
      setPassEyeSignUp(false);
    }
  };
  const passwordEyeConfirm = () => {
    const el = document.querySelector("#passwordConfirm");
    if (el?.getAttribute("type") === "password") {
      el.setAttribute("type", "text");
      setPassEyeConfirmSignUp(true);
    } else {
      el?.setAttribute("type", "password");
      setPassEyeConfirmSignUp(false);
    }
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(handleValidateForm(uinfo));
    if (Object.keys(handleValidateForm(uinfo)).length === 0) {
      handlfinish();
    }
  };
  const handleValidateForm = (data: uinfo) => {
    const errors = {} as error;
    if (!data.email.match(/[0-9A-Za-z]+@gmail.com\b/i)) {
      errors.email = "incorrect email platern math";
    }
    if (data.password !== confirm_pass || data.password.length < 8) {
      if (data.password.replace("/s/g", "").trim().toLowerCase().length < 8) {
        errors.password = "password incorrect 8 character";
      }
      if (data.password !== confirm_pass) {
        errors.password = "password incorrect math";
      }
    }
    return errors;
  };
  const handlfinish = async () => {
    try {
      await instance({
        method: "post",
        url: "/public/register/username",
        data: uinfo,
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 200) {
          return (location.href = "/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={"md"}
        fullWidth={true}
        onClose={() => props.SignUp.setOpenSignUp(false)}
        open={props.SignUp.openSignUp}
      >
        <DialogContent className="  bg-gray-scale-white text-left text-sm text-gray-scale-gray-900 font-body-small-body-small-400">
          <div className=" rounded-lg bg-gray-scale-white flex flex-col items-center justify-center gap-y-[20px]">
            <div className="w-full flex flex-row justify-end">
              <FontAwesomeIcon
                onClick={() => {
                  props.SignUp.setOpenSignUp(false);
                  setError({ password: "", email: "" });
                  setUinfo({
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    accept: 0,
                  });
                  setConfirm_pass("");
                }}
                icon={faXmark}
                size="lg"
                className="cursor-pointer opacity-50 active:bg-slate-300 active:bg-opacity-60 p-1 box-border"
              />
            </div>
            <div className=" text-lg leading-[120%] font-semibold">
              สมัครสมาชิก
            </div>
            <div className="flex flex-col text-base text-gray-scale-gray-400 w-full gap-2">
              <div className="flex flex-col gap-2">
                <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                  <div className="rounded-md bg-gray-scale-white border-[1px] border-solid border-gray-scale-gray-100 ">
                    <div className="  leading-[130%] inline-block w-full h-[40px] shrink-0">
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setUinfo({ ...uinfo, first_name: e.target.value })
                        }
                        form="createAccount"
                        type="text"
                        placeholder="ชื่อ"
                        className="text-[#373636] rounded-lg text-base bg-transparent focus:outline-none w-full h-[37px] shrink-0"
                        required
                      />
                    </div>
                  </div>
                  <div className=" rounded-md bg-gray-scale-white flex flex-row border-[1px] border-solid border-gray-scale-gray-100">
                    <div className=" leading-[130%] inline-block w-full h-[40px] shrink-0">
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setUinfo({ ...uinfo, last_name: e.target.value })
                        }
                        form="createAccount"
                        type="text"
                        placeholder="นามสกุล"
                        className=" text-[#373636] rounded-lg  bg-transparent focus:outline-none text-[16px] w-full h-[37px] shrink-0"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full rounded-md bg-gray-scale-white flex flex-row border-[1px] border-solid border-gray-scale-gray-100">
                  <div className=" leading-[130%] inline-block w-full h-[40px] shrink-0">
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUinfo({ ...uinfo, email: e.target.value })
                      }
                      form="createAccount"
                      type="email"
                      placeholder="อีเมลล์"
                      className=" text-[#373636] w-full bg-transparent focus:outline-none text-[16px] rounded-lg h-[37px] shrink-0"
                      required
                    />
                    <span className=" text-branding-error text-[11px]">
                      {err.email && err.email}
                    </span>
                  </div>
                </div>
                <div className="rounded-md bg-gray-scale-white w-full flex flex-row items-center border-[1px] border-solid border-gray-scale-gray-100 ">
                  <div className=" leading-[130%] inline-block w-full h-[40px] shrink-0">
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUinfo({
                          ...uinfo,
                          password: e.target.value.replace(/\s/g, "").trim(),
                        })
                      }
                      form="createAccount"
                      type="password"
                      id="passwordNew"
                      placeholder="รหัสผ่าน"
                      className=" text-[#373636]  bg-transparent max-w-[95%] w-full focus:outline-none text-[16px]  rounded-lg h-[37px] shrink-0"
                      required
                    />
                    <span className=" text-branding-error text-[10px]">
                      {err.password && err.password}
                    </span>
                  </div>
                  {passEyeSignUp ? (
                    <Visibility
                      onClick={passwordEyeNew}
                      fontSize="small"
                      sx={{ color: "black" }}
                      className=" cursor-pointer w-5 h-5 absolute end-0 mr-7"
                    />
                  ) : (
                    <VisibilityOff
                      onClick={passwordEyeNew}
                      fontSize="small"
                      sx={{ color: "black" }}
                      className="cursor-pointer w-5 h-5 absolute end-0 mr-7"
                    />
                  )}
                </div>
                <div className="rounded-md w-full bg-gray-scale-white flex flex-row items-center justify-start border-[1px] border-solid border-gray-scale-gray-100 ">
                  <div className=" leading-[130%] inline-block w-full h-[40px] shrink-0">
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setConfirm_pass(e.target.value)
                      }
                      form="createAccount"
                      type="password"
                      id="passwordConfirm"
                      placeholder="ยืนยันรหัสผ่าน"
                      className=" text-[#373636]  bg-transparent focus:outline-none text-[16px] rounded-lg max-w-[95%] w-full h-[37px] shrink-0"
                      required
                    />
                  </div>
                  {passEyeConfirmSignUp ? (
                    <Visibility
                      onClick={passwordEyeConfirm}
                      fontSize="small"
                      sx={{ color: "black" }}
                      className=" cursor-pointer w-5 h-5 absolute end-0 mr-7"
                    />
                  ) : (
                    <VisibilityOff
                      onClick={passwordEyeConfirm}
                      fontSize="small"
                      sx={{ color: "black" }}
                      className="cursor-pointer w-5 h-5 absolute end-0 mr-7"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px] text-sm text-gray-scale-gray-600 pb-5">
                <div className=" w-5 h-5">
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUinfo({ ...uinfo, accept: e.target.checked ? 1 : 0 })
                    }
                    type="checkbox"
                    form="createAccount"
                    className=" cursor-pointer rounded-10xs bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200"
                    required
                  />
                </div>
                <div className=" text-black left-2 leading-[150%]">{`ยอมรับข้อกำหนดและเงื่อนไขทั้งหมด`}</div>
              </div>
            </div>
            <form id="createAccount" onSubmit={onSubmit}>
              <button
                type="submit"
                className=" text-[16px] cursor-pointer rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3 px-7 box-border text-gray-scale-white"
              >
                <div className=" leading-[120%] font-semibold text-base">สมัครสมาชิก</div>
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
