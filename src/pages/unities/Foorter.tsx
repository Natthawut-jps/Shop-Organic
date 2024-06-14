import { useEffect, useState } from "react";
import { SignIn } from "../SignIn";
import { Cookies } from "react-cookie";
import instance from "./axios_instance";
import { Link } from "react-router-dom";

export const Foorter = () => {
  const [openSignIn, setOpenSignIn] = useState<boolean>(false);
  const cookie = new Cookies();
  interface category_Type {
    id: number;
    category_name: string;
    description: string;
    quantity: number;
    imgURL: string;
    createdAt: Date;
    updatedAt: Date;
  }
  const [categories, setCategories] = useState<category_Type[]>([]);
  const get_categories = async () => {
    await instance({
      method: "get",
      url: "/public/categories/get_category",
      responseType: "json",
    }).then((res) => {
      if (res.status === 200) {
        setCategories(res.data);
      }
    });
  };

  useEffect(() => {
    get_categories();
  }, []);

  return (
    <>
      <div className=" sm:w-full sm:left-0 sm:text-sm absolute bottom-0 left-[-150px] flex flex-col items-start justify-start text-5xl">
        {/* SigIn User */}
        <SignIn SignIn={{ openSignIn, setOpenSignIn }} />
        <div className=" sm:h-[150px] sm:w-full sm:justify-items-start sm:items-start sm:grid sm:grid-cols-1 sm:box-border sm:pb-5   sm:px-5 relative w-[1920px] h-[162px]">
          <div className=" absolute h-full w-full top-[100%] right-[0%] bottom-[-100%] left-[0%] bg-gray-100" />
          <div className=" sm:relative sm:left-0 sm:w-fit sm:right-0 absolute h-[50.62%] w-[23.33%] top-[24.69%] right-[61.04%] bottom-[24.69%] left-[15.63%] flex flex-col items-start justify-start gap-[4px]">
            <div className="relative leading-[150%] font-semibold">
              ติดตามเราเพื่อรับข่าวสารใหม่ ๆ
            </div>
            <div className=" sm:w-fit relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-[448px]">
              เราอัปเดตสินค้าใหม่เรื่อย ๆ เพื่อไม่ให้พลาดกิจกรรมหรือข่าวสารใหม่
              ๆ จากเราติดตามเราเลยตอนนี้
            </div>
          </div>
          <div className=" sm:relative sm:left-0 sm:w-fit absolute h-[24.69%] w-[9.58%] top-[37.65%] right-[15.63%] bottom-[37.65%] left-[74.79%] flex flex-row items-start justify-start gap-[8px]">
            <a href="#">
              <img
                className="relative w-10 h-10"
                alt=""
                src="/img/social-media.svg"
              />
            </a>
            <a href="#">
              <img
                className="relative w-10 h-10 rounded-full"
                alt=""
                src="/img/social-media1.svg"
              />
            </a>
            <a href="#">
              <img
                className="relative w-10 h-10 rounded-full"
                alt=""
                src="/img/social-media2.svg"
              />
            </a>
            <a href="#">
              <img
                className="relative w-10 h-10 rounded-full"
                alt=""
                src="/img/social-media3.svg"
              />
            </a>
          </div>
        </div>
        <div className=" sm:w-full sm:gap-0 sm:left-0 sm:px-5 sm:pt-0 bg-gray-100 flex flex-col items-start justify-center pt-[60px] px-[300px] pb-0 gap-[60px] text-base text-gray-scale-white">
          <div className=" sm:w-full sm:h-fit relative w-[1248px] h-[168px]">
            <div className=" sm:w-full absolute h-[98.81%] w-[30.92%] top-[1.19%] right-[73.08%] bottom-[0%] left-[0%] flex flex-col items-start justify-start gap-[16px] text-sm">
              <a
                href="#"
                className=" text-white no-underline flex flex-row items-center justify-start gap-[8px] text-13xl"
              >
                <img
                  className="relative w-[200px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/Logo.png"
                />
              </a>
              <div className=" sm:text-[14px] relative leading-[150%] text-gray-scale-gray-500 inline-block w-[336px]">
                สินค้าการเกษตรจังหวัดเลย
                ส่งเสริมการขายสินค้าการเกษตรเป็นช่องทางการขายให้กับเกษตกร
              </div>
              <div className=" sm:w-full flex flex-row items-center justify-start gap-[16px]">
                <div className="shadow-[0px_1.5px_0px_#20b526] flex flex-row items-center justify-center py-1.5 px-0">
                  <div className="relative leading-[150%] font-medium">
                    (+66) 061-505-9483
                  </div>
                </div>
                <div className="relative text-base leading-[150%] text-gray-scale-gray-500">
                  or
                </div>
                <div className=" shadow-[0px_1.5px_0px_#20b526] flex flex-row items-center justify-center py-1.5 px-0">
                  <div className="relative leading-[150%] font-medium">
                    Natthawut.jps@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-full sm:gap-5 sm:grid sm:grid-cols-2 sm:mt-[240px]">
              <div className="sm:h-fit sm:w-full sm:relative sm:top-0 sm:left-0 absolute h-[97.62%] w-[7.61%] top-[0%] right-[56.49%] bottom-[2.38%] left-[35.9%] flex flex-col items-start justify-start gap-[20px]">
                <div className=" text-white no-underline relative leading-[150%] font-medium">
                  บัญชีของฉัน
                </div>
                <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
                  <div
                    className="relative leading-[150%] cursor-pointer"
                    onClick={() => {
                      cookie.get("_ur")
                        ? (location.href = "/Account/Dashboard")
                        : setOpenSignIn(true);
                    }}
                  >
                    หน้าหลัก
                  </div>
                  <div
                    className="relative leading-[150%] cursor-pointer"
                    onClick={() => {
                      cookie.get("_ur")
                        ? (location.href = "/Account/Orders")
                        : setOpenSignIn(true);
                    }}
                  >
                    ประวัติการสั่งซื้อ
                  </div>
                  <div
                    className="relative leading-[150%] cursor-pointer"
                    onClick={() => {
                      cookie.get("_ur")
                        ? (location.href = "/Account/Address")
                        : setOpenSignIn(true);
                    }}
                  >
                    ที่อยู่
                  </div>
                  <div
                    className="relative leading-[150%] cursor-pointer"
                    onClick={() => {
                      cookie.get("_ur")
                        ? (location.href = "/Account/Settings")
                        : setOpenSignIn(true);
                    }}
                  >
                    ตั้งค่า
                  </div>
                </div>
              </div>
              <div className="sm:w-full sm:h-fit sm:relative sm:top-0 sm:left-0  absolute h-[97.62%] w-[10.42%] top-[0%] right-[35.74%] bottom-[2.38%] left-[53.85%] flex flex-col items-start justify-start gap-[20px]">
                <div className=" text-white no-underline relative leading-[150%] font-medium">
                  ช่วยเหลือ
                </div>
                <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
                  <a
                    href="/contact"
                    className="relative leading-[150%] text-gray-scale-gray-400 no-underline"
                  >
                    ติดต่อเรา
                  </a>
                  <a
                    href="/about"
                    className="relative leading-[150%] text-gray-scale-gray-400 no-underline"
                  >
                    เกี่ยวกับเรา
                  </a>
                </div>
              </div>
              <div className="sm:h-fit sm:w-full sm:relative sm:top-0 sm:left-0  absolute h-[97.62%] w-[10.57%] top-[0%] right-[21.55%] bottom-[2.38%] left-[71.88%] flex flex-col items-start justify-start gap-[20px]">
                <div className="text-white no-underline relative leading-[150%] font-medium">
                  สินค้าของเรา
                </div>
                <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
                  <div
                    className="relative leading-[150%] cursor-pointer"
                    onClick={() => window.scroll(0, 1350)}
                  >
                    สินค้ายอดนิยม
                  </div>
                  <div
                    className="relative leading-[150%] cursor-pointer"
                    onClick={() => window.scroll(0, 2850)}
                  >
                    สินค้าใหม่ล่าสุด
                  </div>
                </div>
              </div>
              <div className="sm:h-fit sm:relative sm:w-full sm:top-0 sm:left-0  absolute h-[97.62%] w-[10.26%] top-[0%] right-[0%] bottom-[2.38%] left-[89.74%] flex flex-col items-start justify-start gap-[20px]">
                <div className=" text-white no-underline relative leading-[150%] font-medium">
                  หมวดหมู่
                </div>
                <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
                  {categories.slice(-4).map((item, index) => (
                    <Link
                      reloadDocument
                      key={index}
                      to={`/product/categories/${item.category_name}/1`}
                      state={{ status: true }}
                      className=" leading-[150%] text-gray-scale-gray-400 no-underline"
                    >
                      {item.category_name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" shadow-[0px_-1px_0px_#333] w-[1320px] flex flex-row items-center justify-between py-6 px-0 box-border text-sm text-gray-scale-gray-500">
            <div className="relative leading-[150%]">
              Shop-Organic eCommerce © 2021. All Rights Reserved
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-2xs text-gray-scale-white">
              <img
                className="relative w-[45px] h-[31.76px]"
                alt=""
                src="/img/methodapplepay.svg"
              />
              <img
                className="relative w-[45px] h-[31.76px]"
                alt=""
                src="/img/methodvisa.svg"
              />
              <img
                className="relative w-[45px] h-[31.76px]"
                alt=""
                src="/img/methoddiscover.svg"
              />
              <img
                className="relative w-[45px] h-[31.76px]"
                alt=""
                src="/img/methodmastercard.svg"
              />
              <div className="relative w-[65px] h-8">
                <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_32.5px)] rounded-[5.29px] bg-gray-100 box-border w-[65px] h-8 border-[1px] border-solid border-gray-scale-gray-800" />
                <img
                  className="absolute top-[4px] left-[5px] w-[11px] h-[11px] overflow-hidden"
                  alt=""
                  src="/img/lock-1.svg"
                />
                <div className="absolute top-[4px] left-[18px] leading-[100%]">
                  Secure
                </div>
                <div className="absolute top-[16px] left-[0px] text-xs leading-[100%] font-semibold text-center inline-block w-[65px]">
                  Payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
