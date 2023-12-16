import {
  FunctionComponent,
  ReactElement,
  Ref,
  forwardRef,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import GoogleButton from "react-google-button";
import { Dialog, DialogContent, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import instance from "./unities/axios_instance";

export const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return (
    <>
      <Slide direction="down" ref={ref} {...props} />
    </>
  );
});

interface openSignIn {
  SignIn: {
    openSignIn: boolean;
    setOpenSignIn: (e: boolean) => void;
  };
}
export const SignIn: FunctionComponent<openSignIn> = (props) => {
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
      }).then((res) => {
        console.log(res);
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
  return (
    <>
      <Dialog
        fullWidth={true}
        onClose={() => props.SignIn.setOpenSignIn(false)}
        open={props.SignIn.openSignIn}
        // TransitionComponent={Transition}
      >
        <DialogContent className="relative bg-gray-scale-white top-0 left-0 right-0 bottom-0 shadow-[0px_0px_56px_rgba(0,_38,_3,_0.08)] text-left text-sm text-gray-scale-gray-900 font-heading-05-heading-05-600">
          <div className=" relative rounded-lg bg-gray-scale-white  flex flex-col items-center justify-start pt-6 px-6 pb-8 gap-[20px]  ">
            <div className=" absolute box-border top-0 right-0">
              <FontAwesomeIcon
                onClick={() => props.SignIn.setOpenSignIn(false)}
                icon={faXmark}
                size="lg"
                className="cursor-pointer p-[5px] opacity-50 active:bg-slate-300 active:bg-opacity-60 float-right "
              />
            </div>
            <div className="relative text-13xl leading-[120%] font-semibold">
              Sign In
            </div>
            <div className="flex flex-col items-center justify-center gap-[16px] text-base text-gray-scale-gray-400">
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-center border-[1px] border-solid border-gray-scale-gray-100">
                  <div className="relative leading-[130%] inline-block w-[440px] h-[40px] shrink-0">
                    <input
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
                    <input
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
            <form id="passwordEyeForm">
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
