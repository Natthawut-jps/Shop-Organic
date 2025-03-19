import { Link } from "react-router-dom";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Header } from "./unities/Header";
import { NavAccount } from "./unities/NavAccount";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useEffect, useState } from "react";
import instance_auth from "./unities/instance_auth";
import { Foorter } from "./unities/Foorter";
import { Divider } from "@mui/material";

interface addressType {
  id: number;
  first_name: string;
  last_name: string;
  company: string;
  street: string;
  county: string;
  tambon: string;
  states: string;
  zipCode: number;
  email: string;
  phone: string;
  status: number;
  createdAt: string;
}
export const Address = () => {
  const [address, setAddress] = useState<addressType[]>([]);
  useEffect(() => {
    const address = async () => {
      try {
        await instance_auth({
          method: "get",
          url: "/address/all",
          responseType: "json",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status === 200) {
            setAddress(res.data);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    address();
  }, []);

  const Deflut = async (id: number, status: number) => {
    await instance_auth({
      method: "post",
      url: "/address/setdefultaddress",
      data: { id: id, status: status },
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        location.reload();
      }
    });
  };
  const Delete = async (id: number) => {
    await instance_auth({
      method: "post",
      url: "/address/deleted",
      data: { id: id },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        location.reload();
      }
    });
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
        <div className="container mx-auto p-4 box-border col-span-1 lg:col-span-4 bg-gray-scale-white text-base text-gray-scale-gray-600 font-caps-lock-small-caps-lock">
          <div className=" bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-100">
            <div className=" container mx-auto p-4 box-border rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] text-base">
              <div className="leading-[150%] font-medium">ที่อยู่จัดส่ง</div>
            </div>
            <div className="container mx-auto p-4 box-border grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-2 ">
              {address
                .sort((a, b) => b.status - a.status)
                .map((item, index) => (
                  <div
                    key={index}
                    className=" container p-4 box-border rounded-md bg-gray-scale-white border-[1px] border-solid border-gray-scale-gray-100 "
                  >
                    <div className="container py-2 box-border">
                      <div className="flex flex-row justify-between">
                        <Link
                          state={item}
                          to={"/Account/Address/Edit"}
                          className=" no-underline flex flex-row text-[#06e102] tracking-[0.03em] leading-[100%] font-medium"
                        >
                          แก้ไข
                        </Link>
                        {item.status === 0 && (
                          <div
                            onClick={() => Delete(item.id)}
                            className=" cursor-pointer hover:text-red-400 text-red-600 tracking-[0.03em] leading-[100%] font-medium"
                          >
                            ลบที่อยู่
                          </div>
                        )}
                      </div>
                      <Divider className="p-1 box-border" />
                    </div>
                    <div className="box-border pl-[0px] flex flex-col gap-2">
                      <div>
                        <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium  underline">
                          ชื่อผู้รับ
                        </div>
                        <div className="box-border text-base leading-[150%] text-gray-scale-gray-600 break-words">
                          {`${item.first_name} ${item.last_name}`}
                        </div>
                      </div>
                      <div>
                        <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium underline ">
                          ที่อยู่จัดส่ง
                        </div>
                        <div className="  break-words box-border leading-[150%] text-gray-scale-gray-600 inline-block ">
                          {`${item.street}, ${item.county}, ${item.states},
                       ${item.tambon}, ${item.zipCode}`}
                        </div>
                      </div>
                      <div className="box-border flex flex-col items-start justify-start gap-y-[4px] text-base">
                        <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium underline ">
                          เบอร์โทร
                        </div>
                        <div className=" break-words text-sm leading-[150%] text-gray-scale-gray-600 inline-block">
                          {item.phone}
                        </div>
                      </div>
                      {item.status === 1 ? (
                        <div className="container pt-2 box-border">
                          <button
                            className=" bg-transparent tracking-[0.03em] border border-solid border-black/30 rounded-sm text-[#666666] cursor-not-allowed"
                            disabled
                          >
                            ตั้งเป็นค่าเริ่มต้น
                          </button>
                        </div>
                      ) : (
                        <div className="container pt-2 box-border">
                          <button
                            onClick={() => Deflut(item.id, 1)}
                            className=" hover:text-black/90 active:bg-black/10 bg-transparentcursor-pointer tracking-[0.03em] leading-[100%] border border-solid border-black/50 rounded-sm text-black"
                          >
                            ตั้งเป็นค่าเริ่มต้น
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              <Link
                to={"/Account/Address/Add"}
                className="container p-4 box-border bg-[#06e102]/20 hover:bg-[#06e102]/30  border-[1px] border-solid border-[#06e102] rounded-md "
              >
                <div className=" h-full flex flex-col justify-center items-center text-[#06e102]">
                  <AddCircleOutlineIcon sx={{ fontSize: "80px" }} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Foorter />
    </>
  );
};
