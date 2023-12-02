import { FunctionComponent } from "react";
import { Header } from "./unities/Header";
import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Foorter } from "./unities/Foorter";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import GoogleButton from 'react-google-button'

export const SignInAndSignUp: FunctionComponent = () => {
  const { SignInAndSignUp } = useParams();
  const LoginGoogle =
    useGoogleLogin({
      onSuccess: async tokenResponse => {
        console.log(tokenResponse)
        await axios({
          method: 'get',
          url: 'https://www.googleapis.com/oauth2/v3/userinfo',
          headers: {
            Authorization: `${tokenResponse.token_type + tokenResponse.access_token}`
          }
        }).then(async (data) => {
          await axios({
            method: "post",
            url: "http://localhost/auth/google",
            data: data.data
          })
        })
      },
      onError: err => console.log(err)
    })


  return (
    <>
      {SignInAndSignUp === 'SignIn' &&
        <div className="relative bg-gray-scale-white w-full h-[1476px] overflow-hidden text-left text-sm text-gray-scale-gray-900 font-heading-05-heading-05-600">
          <Header />
          <Breadcrumbs categoies={SignInAndSignUp} tltle={undefined} />
          <div className=" absolute top-[395px] left-[550px] rounded-lg bg-gray-scale-white shadow-[0px_0px_56px_rgba(0,_38,_3,_0.08)] flex flex-col items-center justify-start pt-6 px-6 pb-8 gap-[20px] border-[1px] border-solid border-gray-scale-gray-50">
            <div className="relative text-13xl leading-[120%] font-semibold">
              Sign In
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-base text-gray-scale-gray-400">
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-center border-[1px] border-solid border-gray-scale-gray-100">
                  <div className="relative leading-[130%] inline-block w-[440px] h-[40px] shrink-0">
                    <input type="email" placeholder="Email" className="text-[#373636] relative bg-transparent focus:outline-none text-[16px] left-[20px] w-[400px] h-[40px] shrink-0" />
                  </div>
                </div>
                <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start border-[1px] border-solid border-gray-scale-gray-100">
                  <div className="relative leading-[130%] inline-block w-[440px] h-[40px] shrink-0">
                    <input type="password" placeholder="Password" className="text-[#373636] relative bg-transparent focus:outline-none text-[16px] left-[20px] w-[400px] h-[40px] shrink-0" />
                  </div>
                  <img
                    className=" absolute right-[75px] w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/img/eyeopen-1.svg"
                  />
                </div>
              </div>
              <div className="w-[472px] flex flex-row items-start justify-between text-sm text-gray-scale-gray-600">
                <div className="flex flex-row items-start justify-start gap-[6px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200" />
                  </div>
                  <div className="relative leading-[150%]">Remember me</div>
                </div>
                <Link to={''} className=" no-underline text-black relative leading-[150%]">Forget Password</Link>
              </div>
            </div>
            <div className=" cursor-pointer rounded-24xl bg-branding-success w-[472px] flex flex-row items-center justify-center py-3.5 px-8 box-border text-gray-scale-white">
              <div className="relative leading-[120%] font-semibold">Login</div>
            </div>
            <div className="flex flex-row items-start justify-start pt-1 px-0 pb-0 text-gray-scale-gray-600">
              <div className="relative leading-[150%]">Don’t have account?</div>
              <Link to={'/Acount/SignUp'} className=" no-underline relative leading-[150%] font-medium text-gray-scale-gray-900">
                {" "}
                &nbsp;Register
              </Link>
            </div>
            <div>
              <div>
                <GoogleButton
                  type="light"
                  onClick={() => LoginGoogle()}
                />
              </div>
            </div>
          </div>
          <Foorter />
        </div>
      }
      {SignInAndSignUp === 'SignUp' &&
        <div className="relative bg-gray-scale-white w-full h-[1637px] overflow-hidden text-left text-sm text-gray-scale-gray-900 font-body-small-body-small-400">
          <Header />
          <Breadcrumbs categoies={SignInAndSignUp} tltle={undefined} />
          <div className="absolute top-[395px] left-[300px] rounded-lg bg-gray-scale-white shadow-[0px_0px_56px_rgba(0,_38,_3,_0.08)] flex flex-col items-center justify-center pt-6 px-6 pb-8 gap-[20px] border-[1px] border-solid border-gray-scale-gray-50">
            <div className="relative text-13xl leading-[120%] font-semibold">
              Create Account
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-base text-gray-scale-gray-400">
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className=" flex gap-5">
                  <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-center border-[1px] border-solid border-gray-scale-gray-100">
                    <div className="relative leading-[130%] inline-block w-[440px] h-[40px] shrink-0">
                      <input type="text" placeholder="First name" className="text-[#373636] relative bg-transparent focus:outline-none text-[16px] left-[20px] w-[400px] h-[40px] shrink-0" />
                    </div>
                  </div>
                  <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-center border-[1px] border-solid border-gray-scale-gray-100">
                    <div className="relative leading-[130%] inline-block w-[440px] h-[40px] shrink-0">
                      <input type="text" placeholder="Last name" className="text-[#373636] relative bg-transparent focus:outline-none text-[16px] left-[20px] w-[400px] h-[40px] shrink-0" />
                    </div>
                  </div>
                </div>
                <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-center border-[1px] border-solid border-gray-scale-gray-100">
                  <div className="relative leading-[130%] inline-block w-[900px] h-[40px] shrink-0">
                    <input type="date" className="[-webkit-calendar-picker-indicator] text-[#373636] relative bg-transparent focus:outline-none text-[16px] left-[20px] w-fit h-[40px] shrink-0 " />
                  </div>
                </div>
                <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-center border-[1px] border-solid border-gray-scale-gray-100">
                  <div className="relative leading-[130%] inline-block w-[900px] h-[40px] shrink-0">
                    <input type="email" placeholder="Email" className="text-[#373636] relative bg-transparent focus:outline-none text-[16px] left-[20px] w-[900px] h-[40px] shrink-0" />
                  </div>
                </div>
                <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start border-[1px] border-solid border-gray-scale-gray-100">
                  <div className="relative leading-[130%] inline-block w-[900px] h-[40px] shrink-0">
                    <input type="password" placeholder="Password" className="text-[#373636] relative bg-transparent focus:outline-none text-[16px] left-[20px] w-[900px] h-[40px] shrink-0" />
                  </div>
                  <img
                    className=" absolute right-[60px] w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/img/eyeopen-1.svg"
                  />
                </div>
                <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start border-[1px] border-solid border-gray-scale-gray-100">
                  <div className="relative leading-[130%] inline-block w-[900px] h-[40px] shrink-0">
                    <input type="password" placeholder="Password" className="text-[#373636] relative bg-transparent focus:outline-none text-[16px] left-[20px] w-[900px] h-[40px] shrink-0" />
                  </div>
                  <img
                    className=" absolute right-[60px] w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/img/eyeopen-1.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px] text-sm text-gray-scale-gray-600">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200" />
                </div>
                <div className="relative leading-[150%]">{`Accept all terms & Conditions`}</div>
              </div>
            </div>
            <div className=" cursor-pointer rounded-24xl bg-branding-success w-[472px] flex flex-row items-center justify-center py-3.5 px-8 box-border text-gray-scale-white">
              <div className="relative leading-[120%] font-semibold">
                Create Account
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-1 px-0 pb-0 text-gray-scale-gray-600">
              <div className="relative leading-[150%]">Already have account</div>
              <Link to={'/Acount/Login'} className="relative no-underline leading-[150%] font-medium text-gray-scale-gray-900">
                {" "}
                &nbsp;Login
              </Link>
            </div>
          </div>
          <Foorter />
        </div>
      }

    </>
  );
};
