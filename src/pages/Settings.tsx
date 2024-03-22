import React, { FunctionComponent, useState, useEffect } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { NavAccount } from "./unities/NavAccount";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import instance_auth from "./unities/instance_auth";
import Resizer from "react-image-file-resizer";
import { AxiosResponse } from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const Settings: FunctionComponent = () => {
  // main
  const [editAccount, setEditAccount] = useState<boolean>(false);
  const [editPassword, setEditPassword] = useState<boolean>(false);
  // password
  const [currentPass, setCurrentPass] = useState<boolean>(false);
  const [newPass, setNewPass] = useState<boolean>(false);
  const [confirmPass, setConfirmPass] = useState<boolean>(false);

  // password validate
  const passwordCurrent = () => {
    const elCurrent: Element | null =
      document.querySelector("#CurrentPassword");
    if (elCurrent) {
      if (elCurrent?.getAttribute("type") === "password") {
        elCurrent?.setAttribute("type", "text");
        setCurrentPass(true);
      } else {
        elCurrent?.setAttribute("type", "password");
        setCurrentPass(false);
      }
    }
  };
  const passwordNew = () => {
    const elNew: Element | null = document.querySelector("#NewPassword");
    if (elNew) {
      if (elNew?.getAttribute("type") === "password") {
        elNew?.setAttribute("type", "text");
        setNewPass(true);
      } else {
        elNew?.setAttribute("type", "password");
        setNewPass(false);
      }
    }
  };
  const passwordConfirm = () => {
    const elConfirm: Element | null =
      document.querySelector("#ConfirmPassword");
    if (elConfirm) {
      if (elConfirm?.getAttribute("type") === "password") {
        elConfirm?.setAttribute("type", "text");
        setConfirmPass(true);
      } else {
        elConfirm?.setAttribute("type", "password");
        setConfirmPass(false);
      }
    }
  };

  // User info
  interface user_Type {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    imgURL: string;
    createdAt: Date;
    updatedAt: Date;
  }
  const [userinfo, setUserinfo] = useState<user_Type>({} as user_Type);
  const user_info = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/user/user_info",
        responseType: "json",
      }).then((res: AxiosResponse) => {
        if (res.status === 200) {
          setUserinfo(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  interface file_Type {
    file: File;
  }
  const [file_profile, setFile_profile] = useState<file_Type>({} as file_Type);
  const handlerSubmitUinfo = async (event: React.FormEvent) => {
    const formdata = new FormData();
    formdata.append("first_name", userinfo.first_name);
    formdata.append("last_name", userinfo.last_name);
    formdata.append("email", userinfo.email);
    formdata.append("imgURL", userinfo.imgURL);
    formdata.append("profile", file_profile.file);

    event.preventDefault();
    await instance_auth({
      method: "post",
      url: "/user/update",
      data: formdata,
      responseType: "json",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log(res.status);
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
        location.reload();
      } else if (res.status === 201) {
        location.reload();
      }
    });
  };
  useEffect(() => {
    user_info();
  }, []);

  // password
  interface change_password {
    current_pass: string;
    new_pass: string;
    confirm_pass: string;
  }
  interface validate_pass {
    pass: string;
  }
  const [changePassword, setChangePassword] = useState<change_password>(
    {} as change_password
  );
  const [inccorect_pass, setInccorect_pass] = useState<string>("");
  const [errss, setErrs] = useState<validate_pass>({} as validate_pass);
  const handlerSubmitChangePassword = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrs(handerValidate_pass(changePassword));
    if (Object.keys(handerValidate_pass(changePassword)).length === 0) {
      if (changePassword.confirm_pass === changePassword.new_pass) {
        await instance_auth({
          method: "post",
          url: "/user/change_password",
          data: {
            new_password: changePassword.new_pass,
            password_old: changePassword.current_pass,
          },
          responseType: "json",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status === 200) {
            location.reload();
          } else {
            setInccorect_pass(res.data);
          }
        });
      }
    }
  };
  const handerValidate_pass = (data: change_password) => {
    const errors = {} as validate_pass;
    if (data.new_pass !== data.confirm_pass || data.new_pass.length < 8) {
      if (data.new_pass.replace("/s/g", "").trim().toLowerCase().length < 8) {
        errors.pass = "password incorrect 8 character";
      }
      if (data.new_pass !== data.confirm_pass) {
        errors.pass = "password incorrect math";
      }
    }
    return errors;
  };

  return (
    <div className="relative bg-gray-scale-white w-full h-[1900px] overflow-hidden text-left text-sm text-gray-scale-gray-900 font-body-small-body-small-400">
      <Header />
      <Breadcrumbs
        categoies={undefined}
        tltle={undefined}
        Detail={undefined}
        EditAndadd={undefined}
      />
      <NavAccount />
      <div className="absolute top-[347px] left-[400px] w-[984px] h-[533px]">
        <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[500px] border-[1px] border-solid border-gray-scale-gray-100" />
        {editAccount ? (
          <div>
            <form id="account" onSubmit={handlerSubmitUinfo}>
              <button
                type="submit"
                className="absolute cursor-pointer top-[420px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white"
              >
                <div className="relative leading-[120%] font-semibold">
                  Save Changes
                </div>
              </button>
            </form>
            <div
              onClick={() => location.reload()}
              className="absolute cursor-pointer top-[420px] left-[250px] rounded-24xl bg-branding-error flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white"
            >
              <div className="relative leading-[120%] font-semibold">
                Cancle
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => setEditAccount(true)}
            className="absolute underline cursor-pointer top-[420px] left-[24px] rounded-24xl text-[18px] text-branding-success flex flex-row items-center justify-center py-1 px-1"
          >
            <div className="relative leading-[120%] font-semibold">Edit</div>
          </div>
        )}
        <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[150%]">First name</div>
            <div className="relative rounded-md bg-gray-scale-white box-border w-[512px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
              {editAccount ? (
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    value={userinfo.first_name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUserinfo({ ...userinfo, first_name: e.target.value });
                    }}
                    form="account"
                    type="text"
                    placeholder="First name"
                    className=" disabled:cursor-not-allowed text-[15px] focus:outline-none rounded-lg w-[500px] h-[45px] text-gray-scale-gray-600"
                    required
                  />
                </div>
              ) : (
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    value={userinfo.first_name}
                    type="text"
                    placeholder="First name"
                    className="disabled:cursor-not-allowed text-[15px] placeholder:pl-[5px] focus:outline-none rounded-lg w-[505px] h-[45px] text-gray-scale-gray-600"
                    disabled
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[150%]">Last Name</div>
            <div className="relative rounded-md bg-gray-scale-white box-border w-[512px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
              {editAccount ? (
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    value={userinfo.last_name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUserinfo({ ...userinfo, last_name: e.target.value });
                    }}
                    form="account"
                    type="text"
                    placeholder="Last Name"
                    className=" disabled:cursor-not-allowed text-[15px] focus:outline-none rounded-lg w-[500px] h-[45px] text-gray-scale-gray-600"
                    required
                  />
                </div>
              ) : (
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    value={userinfo.last_name}
                    type="text"
                    placeholder="Last Name"
                    className="disabled:cursor-not-allowed text-[15px] placeholder:pl-[5px] focus:outline-none rounded-lg w-[505px] h-[45px] text-gray-scale-gray-600"
                    disabled
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[150%]">Email</div>
            <div className="relative rounded-md bg-gray-scale-white box-border w-[512px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
              {editAccount ? (
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    value={userinfo.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUserinfo({ ...userinfo, email: e.target.value });
                    }}
                    form="account"
                    type="email"
                    placeholder="email"
                    className=" disabled:cursor-not-allowed text-[15px] focus:outline-none rounded-lg w-[500px] h-[45px] text-gray-scale-gray-600"
                    required
                  />
                </div>
              ) : (
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    value={userinfo.email}
                    type="email"
                    placeholder="email"
                    className="disabled:cursor-not-allowed text-[15px] placeholder:pl-[5px] focus:outline-none rounded-lg w-[505px] h-[45px] text-gray-scale-gray-600"
                    disabled
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-[2px] left-[0px] rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] w-[984px] h-[62px] text-xl">
          <div className="absolute top-[16px] left-[24px] leading-[150%] font-medium">
            Account Settings
          </div>
        </div>
        <div className="absolute top-[120px] left-[648px] w-[224px] h-[289px]">
          <div className="absolute top-[243px] left-[57px] bg-gray-scale-white flex flex-row items-center justify-center ">
            <div className="relative leading-[120%] font-semibold">
              {editAccount ? (
                <div>
                  <span className=" absolute text-branding-success left-[130px] top-[9px]">
                    (optional)
                  </span>
                  <label
                    htmlFor="files"
                    className="cursor-pointer flex justify-center items-center text-branding-success border-[2px] border-solid border-branding-success rounded-24xl px-3 py-1.5"
                  >
                    Chose Image
                    <input
                      onChange={async (
                        e: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        const file: File | null =
                          e.target.files && e.target.files[0];
                        const resizeFile = (file: File) =>
                          new Promise((resolve) => {
                            Resizer.imageFileResizer(
                              file,
                              400,
                              400,
                              "png",
                              100,
                              0,
                              (uri: unknown) => {
                                resolve(uri);
                              },
                              "blob"
                            );
                          });
                        const resize: Blob | unknown = await resizeFile(
                          file as File
                        );
                        const file_Resize = new File(
                          [resize as Blob],
                          file?.name as string,
                          { type: "image/png" }
                        );
                        setFile_profile({ ...file_profile, file: file_Resize });
                      }}
                      type="file"
                      id="profile"
                      name="profile"
                      className="w-full top-[40px] file:hidden py-1.5 rounded-24xl file:cursor-pointer absolute cursor-pointer bg-transparent file:text-transparent file:bg-transparent file:border-none"
                      accept="image/png, image/jpg, image/jpeg"
                    />
                  </label>
                </div>
              ) : (
                <label
                  htmlFor="files"
                  className="flex justify-center items-center cursor-not-allowed text-branding-success/70 border-[2px] border-solid border-branding-success/70 rounded-24xl px-2 py-1.5"
                >
                  Chose Image{" "}
                </label>
              )}
            </div>
          </div>
          {file_profile.file ? (
            <img
              className="absolute top-[0px] left-[0px] rounded-[50%] w-56 h-56 object-cover"
              alt=""
              src={URL.createObjectURL(new Blob([file_profile.file]))}
            />
          ) : (
            <img
              className="absolute top-[0px] left-[0px] rounded-[50%] w-56 h-56 object-cover"
              alt=""
              src={`${import.meta.env.VITE_BASE_API}/img/${userinfo.imgURL}`}
            />
          )}
        </div>
      </div>
      <div className="absolute top-[900px] left-[400px] w-[984px] h-[349px]">
        <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[351px] border-[1px] border-solid border-gray-scale-gray-100" />
        {editPassword ? (
          <div>
            <form id="password" onSubmit={handlerSubmitChangePassword}>
              <button
                type="submit"
                className="absolute cursor-pointer top-[280px] text-[16px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white"
              >
                <div className="relative leading-[120%] font-semibold">
                  Change Password
                </div>
              </button>
            </form>
            <div
              onClick={() => location.reload()}
              className="absolute cursor-pointer top-[280px] left-[250px] rounded-24xl bg-branding-error flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white"
            >
              <div className="relative leading-[120%] font-semibold">
                Cancle
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => setEditPassword(true)}
            className="absolute cursor-pointer top-[280px] left-[24px] rounded-24xl text-[18px] underline text-branding-success flex flex-row items-center justify-center py-1 px-1"
          >
            <div className="relative leading-[120%] font-semibold">Edit</div>
          </div>
        )}
        <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Current Password</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100">
            {editPassword ? (
              <div className="relative left-[5px] leading-[130%] inline-block w-[884px] shrink-0">
                <input
                  value={changePassword.current_pass}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setChangePassword({
                      ...changePassword,
                      current_pass: e.target.value,
                    });
                  }}
                  type="password"
                  id="CurrentPassword"
                  placeholder="Password"
                  className="bg-transparent text-[15px] text-gray-scale-gray-400 focus:outline-none w-[820px] h-[45px] rounded-lg"
                />
              </div>
            ) : (
              <div className="relative left-[0px] leading-[130%] inline-block w-[884px] shrink-0">
                <input
                  type="password"
                  id="CurrentPassword"
                  placeholder="Password"
                  className="disabled:cursor-not-allowed placeholder:pl-[5px] text-[15px] text-gray-scale-gray-400 focus:outline-none w-[880px] h-[45px] rounded-lg"
                  disabled
                />
              </div>
            )}
            {editPassword && (
              <div className=" absolute top-[40px]">
                {currentPass ? (
                  <Visibility
                    onClick={passwordCurrent}
                    fontSize="small"
                    sx={{ color: "black" }}
                    className="absolute left-[840px] p-[2px] cursor-pointer"
                  />
                ) : (
                  <VisibilityOff
                    onClick={passwordCurrent}
                    fontSize="small"
                    sx={{ color: "black" }}
                    className="absolute left-[840px] p-[2px] cursor-pointer"
                  />
                )}
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-[180px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">New Password Password</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100">
            {editPassword ? (
              <div className="relative left-[5px] leading-[130%] inline-block w-[408px] shrink-0">
                <input
                  value={changePassword.new_pass}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setChangePassword({
                      ...changePassword,
                      new_pass: e.target.value,
                    });
                  }}
                  type="password"
                  id="NewPassword"
                  placeholder="New Password"
                  className="text-[15px] text-gray-scale-gray-400 focus:outline-none w-[350px] h-[45px] bg-transparent rounded-lg"
                />
                {errss && (
                  <span className=" absolute top-[-25px] right-[20px] text-[13px] text-branding-error">
                    {errss.pass}
                  </span>
                )}
              </div>
            ) : (
              <div className="relative left-[0px] leading-[130%] inline-block w-[408px] shrink-0">
                <input
                  type="password"
                  id="NewPassword"
                  placeholder="New Password"
                  className="disabled:cursor-not-allowed text-[15px] placeholder:pl-[5px] text-gray-scale-gray-400 focus:outline-none w-[403px] h-[45px] rounded-lg"
                  disabled
                />
              </div>
            )}
            {editPassword && (
              <div className=" absolute top-[40px]">
                {newPass ? (
                  <Visibility
                    onClick={passwordNew}
                    fontSize="small"
                    sx={{ color: "black" }}
                    className="absolute left-[370px] p-[2px] cursor-pointer"
                  />
                ) : (
                  <VisibilityOff
                    onClick={passwordNew}
                    fontSize="small"
                    sx={{ color: "black" }}
                    className="absolute left-[370px] p-[2px] cursor-pointer"
                  />
                )}
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-[180px] left-[500px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Confirm Password</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100">
            {editPassword ? (
              <div className="relative left-[5px] leading-[130%] inline-block w-[408px] shrink-0">
                <input
                  value={changePassword.confirm_pass}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setChangePassword({
                      ...changePassword,
                      confirm_pass: e.target.value,
                    });
                  }}
                  type="password"
                  id="ConfirmPassword"
                  placeholder="Confirm Password"
                  className="text-[15px] text-gray-scale-gray-400 focus:outline-none w-[350px] h-[45px] bg-transparent rounded-lg"
                />
                {errss && (
                  <span className=" absolute top-[-25px] right-[70px] text-[13px] text-branding-error">
                    {errss.pass}
                  </span>
                )}
              </div>
            ) : (
              <div className="relative left-[0px] leading-[130%] inline-block w-[408px] shrink-0">
                <input
                  type="password"
                  id="ConfirmPassword"
                  placeholder="Confirm Password"
                  className=" disabled:cursor-not-allowed text-[15px] placeholder:pl-[5px] text-gray-scale-gray-400 focus:outline-none w-[403px] h-[45px] rounded-lg"
                  disabled
                />
              </div>
            )}
            {editPassword && (
              <div className=" absolute top-[40px]">
                {confirmPass ? (
                  <Visibility
                    onClick={passwordConfirm}
                    fontSize="small"
                    sx={{ color: "black" }}
                    className="absolute left-[370px] p-[2px] cursor-pointer"
                  />
                ) : (
                  <VisibilityOff
                    onClick={passwordConfirm}
                    fontSize="small"
                    sx={{ color: "black" }}
                    className="absolute left-[370px] p-[2px] cursor-pointer"
                  />
                )}
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-[2px] left-[0px] rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] w-[984px] h-[62px] text-xl">
          <div className="absolute top-[16px] left-[24px] leading-[150%] font-medium">
            Change Password{" "}
            <span className=" text-branding-error text-[16px] relative left-10">
              {inccorect_pass && inccorect_pass}
            </span>
          </div>
        </div>
      </div>
      <Foorter />
    </div>
  );
};
