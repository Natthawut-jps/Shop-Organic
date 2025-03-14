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
    gmail: number;
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
        errors.pass = "รหัสผ่านต้องมีตั้งแต่ 8 ตัวขึ้น้ไป";
      }
      if (data.new_pass !== data.confirm_pass) {
        errors.pass = "รหัสผ่านไม่ถูกต้อง";
      }
    }
    return errors;
  };

  return (
    <>
      <Header />
      <Breadcrumbs
        categoies={undefined}
        tltle={undefined}
        Detail={undefined}
        EditAndadd={undefined}
      />
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-5 gap-3 justify-item-start">
        <NavAccount />
        <div className="lg:col-span-4 text-gray-scale-gray-900 font-body-small-body-small-400">
          <div>
            <div className="container mx-auto p-4 box-border grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:justify-items-start justify-items-center items-start">
              <div className="sm:col-span-2 md:col-span-1">
                <div className=" bg-gray-scale-white flex flex-col gap-3 ">
                  {/* {editAccount && (
                    <div className="flex flex-col gap-3">
                      <span className=" text-branding-success">
                        (ไม่จำเป็นต้องเลือก)
                      </span>
                      <label
                        htmlFor="files"
                        className="cursor-pointer flex justify-center items-center text-branding-success"
                      >
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
                            setFile_profile({
                              ...file_profile,
                              file: file_Resize,
                            });
                          }}
                          type="file"
                          id="profile"
                          name="profile"
                          className=" box-border file:cursor-pointer cursor-pointer"
                          accept="image/png, image/jpg, image/jpeg"
                        />
                      </label>
                    </div>
                  )} */}
                  <div>
                    <img
                      className="max-w-[200px] w-full object-cover"
                      alt=""
                      src={`${import.meta.env.VITE_BASE_API}/img/${
                        userinfo.imgURL
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">ชื่อ</div>
                  <div className=" rounded-md bg-gray-scale-white box-border text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    {editAccount ? (
                      <div className="leading-[130%]">
                        <input
                          value={userinfo.first_name}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setUserinfo({
                              ...userinfo,
                              first_name: e.target.value,
                            });
                          }}
                          form="account"
                          type="text"
                          placeholder="First name"
                          className=" disabled:cursor-not-allowed text-base focus:outline-none rounded-lg text-black"
                          required
                        />
                      </div>
                    ) : (
                      <div className="leading-[130%]">
                        <input
                          value={userinfo.first_name}
                          type="text"
                          placeholder="First name"
                          className="disabled:cursor-not-allowed text-base placeholder:pl-[5px] focus:outline-none rounded-lg text-gray-scale-gray-600"
                          disabled
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className="relative leading-[150%]">นามสกุล</div>
                  <div className="relative rounded-md bg-gray-scale-white box-border text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    {editAccount ? (
                      <div className="leading-[130%]">
                        <input
                          value={userinfo.last_name}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setUserinfo({
                              ...userinfo,
                              last_name: e.target.value,
                            });
                          }}
                          form="account"
                          type="text"
                          placeholder="Last Name"
                          className=" disabled:cursor-not-allowed text-base focus:outline-none rounded-lg text-black"
                          required
                        />
                      </div>
                    ) : (
                      <div className="leading-[130%]">
                        <input
                          value={userinfo.last_name}
                          type="text"
                          placeholder="Last Name"
                          className="disabled:cursor-not-allowed text-base placeholder:pl-[5px] focus:outline-none rounded-lg text-gray-scale-gray-600"
                          disabled
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className="relative leading-[150%]">อีเมลล์</div>
                  <div className="relative rounded-md bg-gray-scale-white box-border text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    {editAccount && userinfo.gmail === 0 ? (
                      <div className=" leading-[130%]">
                        <input
                          value={userinfo.email}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setUserinfo({ ...userinfo, email: e.target.value });
                          }}
                          form="account"
                          type="email"
                          placeholder="อีเมลล์"
                          className=" disabled:cursor-not-allowed text-base focus:outline-none rounded-lg text-black"
                          required
                        />
                      </div>
                    ) : (
                      <div className="leading-[130%]">
                        <input
                          value={userinfo.email}
                          type="email"
                          placeholder="อีเมลล์"
                          className="disabled:cursor-not-allowed text-base placeholder:pl-[5px] focus:outline-none rounded-lg text-gray-scale-gray-600"
                          disabled
                        />
                      </div>
                    )}
                  </div>
                </div>
                {editAccount ? (
                  <div className="flex flex-row justify-between w-full">
                    <div
                      onClick={() => location.reload()}
                      className="rounded-md w-fit cursor-pointer text-base text-red-500 border-[1px] border-red-500 border-solid px-3 py-1 flex flex-row items-center justify-center bg-transparent"
                    >
                      <div className=" leading-[120%] font-semibold">
                        ยกเลิก
                      </div>
                    </div>
                    <form id="account" onSubmit={handlerSubmitUinfo}>
                      <button
                        type="submit"
                        className="rounded-md w-fit cursor-pointer text-base text-branding-success border-[1px] border-branding-success border-solid px-3 py-1 flex flex-row items-center justify-center bg-transparent"
                      >
                        <div className=" leading-[120%] font-semibold">
                          ยืนยัน
                        </div>
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="w-full flex flex-row justify-end">
                    <div
                      onClick={() => setEditAccount(true)}
                      className="rounded-md w-fit cursor-pointer text-base text-branding-success border-[1px] border-branding-success border-solid px-3 py-1 flex flex-row items-center justify-center bg-transparent"
                    >
                      <div className=" leading-[120%] font-semibold">แก้ไข</div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className="rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] text-sm">
                  <span className=" text-branding-error text-[16px] ">
                    {inccorect_pass && inccorect_pass}
                  </span>
                </div>
                {userinfo.gmail === 0 ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col items-start justify-start gap-[6px]">
                      <div className=" leading-[150%]">รหัสผ่านปัจจุบัน</div>
                      <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-black border-[1px] border-solid border-gray-scale-gray-100">
                        {editPassword ? (
                          <div className="leading-[130%] shrink-0">
                            <input
                              value={changePassword.current_pass}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                setChangePassword({
                                  ...changePassword,
                                  current_pass: e.target.value,
                                });
                              }}
                              type="password"
                              id="CurrentPassword"
                              placeholder="รหัสผ่านปัจจุบัน"
                              className="bg-transparent text-base placeholder:text-sm text-black focus:outline-none rounded-lg"
                            />
                          </div>
                        ) : (
                          <div className="">
                            <input
                              type="password"
                              id="CurrentPassword"
                              placeholder="รหัสผ่านปัจจุบัน"
                              className="disabled:cursor-not-allowed placeholder:pl-[5px] text-[15px] text-gray-scale-gray-400 focus:outline-none rounded-lg"
                              disabled
                            />
                          </div>
                        )}
                        {editPassword && (
                          <div className="flex items-center justify-center pr-1">
                            {currentPass ? (
                              <Visibility
                                onClick={passwordCurrent}
                                fontSize="small"
                                sx={{ color: "black" }}
                                className=" p-[2px] cursor-pointer"
                              />
                            ) : (
                              <VisibilityOff
                                onClick={passwordCurrent}
                                fontSize="small"
                                sx={{ color: "black" }}
                                className="p-[2px] cursor-pointer"
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-[6px]">
                      <div className=" leading-[150%]">รหัสผ่านใหม่</div>
                      {errss && (
                        <span className="text-[13px] text-branding-error">
                          {errss.pass}
                        </span>
                      )}
                      <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100">
                        {editPassword ? (
                          <div className=" leading-[130%] inline-block shrink-0">
                            <input
                              value={changePassword.new_pass}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                setChangePassword({
                                  ...changePassword,
                                  new_pass: e.target.value,
                                });
                              }}
                              type="password"
                              id="NewPassword"
                              placeholder="รหัสผ่านใหม่"
                              className=" text-black text-base placeholder:text-sm focus:outline-none bg-transparent rounded-lg"
                            />
                          </div>
                        ) : (
                          <div className="leading-[130%] inline-block">
                            <input
                              type="password"
                              id="NewPassword"
                              placeholder="รหัสผ่านใหม่"
                              className="disabled:cursor-not-allowed text-[15px] placeholder:pl-[5px] text-gray-scale-gray-400 focus:outline-none rounded-lg "
                              disabled
                            />
                          </div>
                        )}
                        {editPassword && (
                          <div className="flex items-center justify-center pr-1">
                            {newPass ? (
                              <Visibility
                                onClick={passwordNew}
                                fontSize="small"
                                sx={{ color: "black" }}
                                className="cursor-pointer"
                              />
                            ) : (
                              <VisibilityOff
                                onClick={passwordNew}
                                fontSize="small"
                                sx={{ color: "black" }}
                                className="cursor-pointer"
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative leading-[150%]">
                        ยืนยันรหัสผ่าน
                      </div>
                      {errss && (
                        <span className="text-[13px] text-branding-error">
                          {errss.pass}
                        </span>
                      )}
                      <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100">
                        {editPassword ? (
                          <div className=" leading-[130%] inline-block shrink-0">
                            <input
                              value={changePassword.confirm_pass}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                setChangePassword({
                                  ...changePassword,
                                  confirm_pass: e.target.value,
                                });
                              }}
                              type="password"
                              id="ConfirmPassword"
                              placeholder="ยืนยันรหัสผ่าน"
                              className="text-base placeholder:text-sm text-blackfocus:outline-none bg-transparent rounded-lg"
                            />
                          </div>
                        ) : (
                          <div className="">
                            <input
                              type="password"
                              id="ConfirmPassword"
                              placeholder="ยืนยันรหัสผ่าน"
                              className=" disabled:cursor-not-allowed text-[15px] placeholder:pl-[5px] text-gray-scale-gray-400 focus:outline-none rounded-lg"
                              disabled
                            />
                          </div>
                        )}
                        {editPassword && (
                          <div className="flex items-center justify-center pr-1">
                            {confirmPass ? (
                              <Visibility
                                onClick={passwordConfirm}
                                fontSize="small"
                                sx={{ color: "black" }}
                                className="cursor-pointer"
                              />
                            ) : (
                              <VisibilityOff
                                onClick={passwordConfirm}
                                fontSize="small"
                                sx={{ color: "black" }}
                                className="cursor-pointer"
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    {editPassword ? (
                      <div className="flex flex-row justify-between w-full">
                        <div
                          onClick={() => location.reload()}
                          className="rounded-md w-fit cursor-pointer text-base text-red-500 border-[1px] border-red-500 border-solid px-3 py-1 flex flex-row items-center justify-center bg-transparent"
                        >
                          <div className="leading-[120%] font-semibold">
                            ยกเลิก
                          </div>
                        </div>
                        <form
                          id="password"
                          onSubmit={handlerSubmitChangePassword}
                        >
                          <button
                            type="submit"
                            className="rounded-md w-fit cursor-pointer text-base text-branding-success border-[1px] border-branding-success border-solid px-3 py-1 flex flex-row items-center justify-center bg-transparent"
                          >
                            <div className="relative leading-[120%] font-semibold">
                              ยืนยัน
                            </div>
                          </button>
                        </form>
                      </div>
                    ) : (
                      <div className="w-full flex flex-row justify-end">
                        <div
                          onClick={() => setEditPassword(true)}
                          className="rounded-md w-fit cursor-pointer text-base text-branding-success border-[1px] border-branding-success border-solid px-3 py-1 flex flex-row items-center justify-center bg-transparent"
                        >
                          <div className=" leading-[120%] font-semibold">
                            แก้ไข
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className=" text-gray-500">
                    บัญชีนี้ได้ลงชื่อด้วยบัญชี Google <br />* หมายเหตุ
                    บัญชีที่ลงชื่อด้วยบัญชี Google
                    จะไม่สามารถเปลี่ยนที่อยู่อีเมล์และระหัสผ่านได้
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foorter />
    </>
  );
};
