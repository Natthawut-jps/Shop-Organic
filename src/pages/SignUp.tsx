import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Dialog, DialogContent } from "@mui/material";
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
  const handlfinish = async() => {
    try {
      await instance({
        method: "post",
        url: "/public/register/usr",
        data: uinfo,
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 200) {
          return location.href = '/';
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Dialog
        maxWidth={"md"}
        onClose={() => props.SignUp.setOpenSignUp(false)}
        open={props.SignUp.openSignUp}
      >
        <DialogContent className="relative bg-gray-scale-white text-left text-sm text-gray-scale-gray-900 font-body-small-body-small-400">
          <div className=" relative top-[0px] left-[0px] rounded-lg bg-gray-scale-white flex flex-col items-center justify-center pt-6 pb-8 gap-[20px]">
            <div className=" absolute box-border top-0 right-0">
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
                className="cursor-pointer p-[5px] opacity-50 active:bg-slate-300 active:bg-opacity-60 float-right "
              />
            </div>
            <div className="relative text-13xl leading-[120%] font-semibold">
              Create Account
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-base text-gray-scale-gray-400">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className=" flex gap-5">
                  <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-center border-[1px] border-solid border-gray-scale-gray-100 w-[412px] pr-[5px]">
                    <div className="relative leading-[130%] inline-block w-full h-[40px] shrink-0">
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setUinfo({ ...uinfo, first_name: e.target.value })
                        }
                        form="createAccount"
                        type="text"
                        placeholder="First name"
                        className="text-[#373636] rounded-lg relative bg-transparent focus:outline-none text-[16px] left-[20px] w-[393px] h-[37px] shrink-0"
                        required
                      />
                    </div>
                  </div>
                  <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-center border-[1px] border-solid border-gray-scale-gray-100 w-[412px]">
                    <div className="relative leading-[130%] inline-block w-full h-[40px] shrink-0">
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setUinfo({ ...uinfo, last_name: e.target.value })
                        }
                        form="createAccount"
                        type="text"
                        placeholder="Last name"
                        className="text-[#373636] rounded-lg relative bg-transparent focus:outline-none text-[16px] left-[20px] w-[386px] h-[37px] shrink-0"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-center border-[1px] border-solid border-gray-scale-gray-100 w-[850px]">
                  <div className="relative leading-[130%] inline-block w-full h-[40px] shrink-0">
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUinfo({ ...uinfo, email: e.target.value })
                      }
                      form="createAccount"
                      type="email"
                      placeholder="Email"
                      className="text-[#373636] relative bg-transparent focus:outline-none text-[16px] left-[20px] w-[824px] rounded-lg h-[37px] shrink-0"
                      required
                    />
                    <span className=" text-branding-error text-[11px] relative pl-6">
                      {err.email && err.email}
                    </span>
                  </div>
                </div>
                <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start border-[1px] border-solid border-gray-scale-gray-100 w-[850px]">
                  <div className="relative leading-[130%] inline-block w-full h-[40px] shrink-0">
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
                      placeholder="Password"
                      className="text-[#373636] relative bg-transparent focus:outline-none text-[16px] left-[20px] w-[780px] rounded-lg h-[37px] shrink-0"
                      required
                    />
                    <span className=" text-branding-error text-[10px] relative pl-6 ">
                      {err.password && err.password}
                    </span>
                  </div>
                  {passEyeSignUp ? (
                    <Visibility
                      onClick={passwordEyeNew}
                      fontSize="small"
                      sx={{ color: "black" }}
                      className=" cursor-pointer absolute right-[20px] w-5 h-5 overflow-hidden shrink-0"
                    />
                  ) : (
                    <VisibilityOff
                      onClick={passwordEyeNew}
                      fontSize="small"
                      sx={{ color: "black" }}
                      className="cursor-pointer absolute right-[20px] w-5 h-5 overflow-hidden shrink-0"
                    />
                  )}
                </div>
                <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start border-[1px] border-solid border-gray-scale-gray-100 w-[850px]">
                  <div className="relative leading-[130%] inline-block w-full h-[40px] shrink-0">
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setConfirm_pass(e.target.value)
                      }
                      form="createAccount"
                      type="password"
                      id="passwordConfirm"
                      placeholder="Confirm Password"
                      className="text-[#373636] relative bg-transparent focus:outline-none text-[16px] left-[20px] w-[780px] rounded-lg h-[37px] shrink-0"
                      required
                    />
                  </div>
                  {passEyeConfirmSignUp ? (
                    <Visibility
                      onClick={passwordEyeConfirm}
                      fontSize="small"
                      sx={{ color: "black" }}
                      className=" cursor-pointer absolute right-[20px] w-5 h-5 overflow-hidden shrink-0"
                    />
                  ) : (
                    <VisibilityOff
                      onClick={passwordEyeConfirm}
                      fontSize="small"
                      sx={{ color: "black" }}
                      className="cursor-pointer absolute right-[20px] w-5 h-5 overflow-hidden shrink-0"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px] text-sm text-gray-scale-gray-600">
                <div className="relative w-5 h-5">
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUinfo({ ...uinfo, accept: e.target.checked ? 1 : 0 })
                    }
                    type="checkbox"
                    form="createAccount"
                    // value={0}
                    className="absolute cursor-pointer h-full w-full top-[-2px] left-1 rounded-10xs bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200"
                    required
                  />
                </div>
                <div className="relative text-black left-2 leading-[150%]">{`Accept all terms & Conditions`}</div>
              </div>
            </div>
            <form id="createAccount" onSubmit={onSubmit}>
              <button
                type="submit"
                className="text-[16px] cursor-pointer rounded-24xl bg-branding-success w-[472px] flex flex-row items-center justify-center py-3.5 px-8 box-border text-gray-scale-white"
              >
                <div className="relative leading-[120%] font-semibold">
                  Create Account
                </div>
              </button>
            </form>
            <div className="flex flex-row items-start justify-start pt-1 px-0 pb-0 text-gray-scale-gray-600">
              <div className="relative leading-[150%]">Create here account</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
