import { FunctionComponent, useEffect, useState } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { NavAccount } from "./unities/NavAccount";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import instance_auth from "./unities/instance_auth";

interface userInfoType {
  id: number;
  first_name: string;
  last_name: string;
  imgURL: string;
  accept: number;
  createdAt: string;
  email: string;
}

interface order_Type {
  id: number;
  referent: string;
  payment_menthod: string;
  amount_total: number;
  status: number;
  quantity: number;
  user_id: string;
  address_id: number;
  createdAt: Date;
  updatedAt: Date;
}
const UserDashboard: FunctionComponent = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>();
  const [data, setData] = useState<order_Type[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);

  const status = [
    "กำลังดำเนินการ",
    "รับออเดอร์เรียบร้อย",
    "กำลังเตรียมพัสดุ",
    "บริษัทขนส่งเข้ารับพัสดุ",
    "พัสดุตีกลับ",
  ];
  const months = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];
  const userData = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/user/user_info",
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          setUserInfo(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const [order, setOrder] = useState<order_Type[]>([]);
  const order_get = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/order/get_order",
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          setData(
            res.data
              .sort((a: order_Type, b: order_Type) => b.id - a.id)
              .slice(0, 10)
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userData();
    order_get();
  }, []);

  useEffect(() => {
    const itemOffset = ((page - 1) * 1) % data.length;
    const endOffset = itemOffset + 1;
    setOrder(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / 1));
  }, [page, pageCount, data]);

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
        <div className="container mx-auto p-4 box-border col-span-1 lg:col-span-4 grid grid-flow-row grid-cols-4 gap-12 bg-gray-scale-white text-base text-gray-scale-gray-900 font-caps-lock-small-caps-lock">
          <div className="col-span-4 xl:col-span-1">
            <div className="flex flex-col justify-center items-center">
              <img
                className="max-w-[200px] w-full object-cover"
                alt=""
                src={`${import.meta.env.VITE_BASE_API}/img/${userInfo?.imgURL}`}
              />
              <Link
                to={"/Account/Settings"}
                className=" z-50 no-underline hover:cursor-pointer text-base leading-[150%] font-medium text-branding-success"
              >
                แก้ไขโปรไฟล์
              </Link>
            </div>
            <div className="rounded-lg flex flex-col items-center justify-center gap-[2px]">
              <div className=" leading-[150%] font-medium">
                {`${userInfo?.first_name} ${userInfo?.last_name}`}
              </div>
              <div className=" text-sm leading-[150%] text-gray-scale-gray-500 mix-blend-normal">
                ปกติ
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 col-span-4 flex flex-col gap-2 text-base text-gray-scale-gray-700">
            <div className="grid grid-cols-2 gap-2 md:gap-6 md:grid-cols-5">
              <div className="col-span-1 md:col-span-4 text-lg leading-[150%] font-medium text-gray-scale-gray-900">
                คำสั่งซื้อล่าสุด 10 รายการ
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 md:grid-flow-row gap-5 md:gap-2.5">
              <div className="grid gap-3 md:grid-cols-5 text-base md:gap-5 md:bg-gray-scale-gray-50 md:p-1">
                <div className="tracking-[0.03em] leading-[100%] uppercase font-medium">
                  หมายเลขคำสั่งซื้อ
                </div>
                <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium">
                  วันที่สั่งซื้อ
                </div>
                <div className="tracking-[0.03em] leading-[100%] uppercase font-medium">
                  ทั้งหมด
                </div>
                <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium">
                  สถานะ
                </div>
                <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium">
                  เพิ่มเติม
                </div>
              </div>
              {/* order lasted */}
              <div className="hidden md:flex flex-col gap-2">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-rows-5 md:grid-rows-1 gap-2 md:gap-4 md:grid-cols-5 md:odd:bg-white md:even:bg-slate-50"
                  >
                    <div className="flex flex-row items-start justify-start">
                      <div className=" leading-[150%]">#</div>
                      <div className=" leading-[150%]">{item.id}</div>
                    </div>
                    <div className="leading-[150%]">
                      {`${new Date(item.createdAt).getDate()} ${
                        months[new Date(item.createdAt).getMonth()]
                      }, ${new Date(item.createdAt).getFullYear() + 543}`}
                    </div>
                    <div className="leading-[150%]">
                      <span className="font-medium">฿{item.amount_total}</span>
                      <span className="text-[12px]">
                        {" "}
                        ({item.quantity} pcs)
                      </span>
                    </div>
                    <div className="leading-[150%] w-fit">
                      {item.status === 1 ? (
                        <div className="rounded-lg bg-orange-100 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className=" tracking-[0.01em] leading-[20px] text-orange-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : item.status === 2 ? (
                        <div className="rounded-lg bg-green-100 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className=" tracking-[0.01em] leading-[20px] text-green-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : item.status === 3 ? (
                        <div className="rounded-lg bg-yellow-100 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className=" tracking-[0.01em] leading-[20px] font-semibold text-yellow-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : item.status === 4 ? (
                        <div className="rounded-lg bg-cyan-100 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className=" tracking-[0.01em] leading-[20px] font-semibold text-cyan-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : item.status === 5 ? (
                        <div className="rounded-lg bg-blue-100 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className=" tracking-[0.01em] leading-[20px] font-semibold text-blue-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-lg bg-red-100 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className=" tracking-[0.01em] leading-[20px] font-semibold text-red-500">
                            ยกเลิกสินค้า
                          </div>
                        </div>
                      )}
                    </div>
                    <Link
                      state={item}
                      to={`/Account/Orders/Detail/${item.id}`}
                      className=" no-underline leading-[150%] font-medium text-branding-success"
                    >
                      รายละเอียด
                    </Link>
                  </div>
                ))}
              </div>
              {/* Pagination mobile */}
              <div className="md:hidden">
                {order.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-rows-5 md:grid-rows-1 gap-2 md:gap-4 md:grid-cols-5 md:odd:bg-white md:even:bg-slate-50"
                  >
                    <div className="flex flex-row items-start justify-start">
                      <div className=" leading-[150%]">#</div>
                      <div className=" leading-[150%]">{item.id}</div>
                    </div>
                    <div className="leading-[150%]">
                      {`${new Date(item.createdAt).getDate()} ${
                        months[new Date(item.createdAt).getMonth()]
                      }, ${new Date(item.createdAt).getFullYear() + 543}`}
                    </div>
                    <div className="leading-[150%]">
                      <span className="font-medium">฿{item.amount_total}</span>
                      <span className="text-[12px]">
                        {" "}
                        ({item.quantity} pcs)
                      </span>
                    </div>
                    <div className="leading-[150%] w-fit">
                      {item.status === 1 ? (
                        <div className="rounded-lg bg-orange-100 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className=" tracking-[0.01em] leading-[20px] text-orange-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : item.status === 2 ? (
                        <div className="rounded-lg bg-green-100 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className=" tracking-[0.01em] leading-[20px] text-green-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : item.status === 3 ? (
                        <div className="rounded-lg bg-yellow-100 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className=" tracking-[0.01em] leading-[20px] font-semibold text-yellow-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : item.status === 4 ? (
                        <div className="rounded-lg bg-cyan-100 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className=" tracking-[0.01em] leading-[20px] font-semibold text-cyan-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : item.status === 5 ? (
                        <div className="rounded-lg bg-blue-100 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className=" tracking-[0.01em] leading-[20px] font-semibold text-blue-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-lg bg-red-100 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className=" tracking-[0.01em] leading-[20px] font-semibold text-red-500">
                            ยกเลิกสินค้า
                          </div>
                        </div>
                      )}
                    </div>
                    <Link
                      state={item}
                      to={`/Account/Orders/Detail/${item.id}`}
                      className=" no-underline leading-[150%] font-medium text-branding-success"
                    >
                      รายละเอียด
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <Pagination
              className="container mx-auto p-4 box-border flex flex-row justify-center md:hidden"
              variant="outlined"
              onChange={(event: React.ChangeEvent<unknown>, page: number) => {
                setPage(page);
                {
                  event;
                }
              }}
              count={pageCount}
              page={page}
              sx={{
                "& .MuiPaginationItem-root.Mui-selected": {
                  bgcolor: "rgb(0 178 7/1)",
                },
              }}
            />
          </div>
        </div>
      </div>
      <Foorter />
    </>
  );
};

export default UserDashboard;
