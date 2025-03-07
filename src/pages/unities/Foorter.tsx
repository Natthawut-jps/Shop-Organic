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
      <div className="grid grid-flow-row">
        {/* SigIn User */}
        <div className="container mx-auto p-4 box-border flex flex-row flex-wrap justify-end items-center sm:gap-8 gap-2">
          <div className="  bg-gray-100" />
          <div className=" ">
            <div className=" leading-[150%] font-semibold text-[14px] sm:text-[16px]">
              ติดตามเราเพื่อรับข่าวสารใหม่ ๆ
            </div>
          </div>
          <div className=" flex flex-row items-start justify-start gap-[8px]">
            <a href="#">
              <img className="" alt="" src="/img/social-media.svg" />
            </a>
            <a href="#">
              <img
                className=" rounded-full"
                alt=""
                src="/img/social-media1.svg"
              />
            </a>
            <a href="#">
              <img
                className=" rounded-full"
                alt=""
                src="/img/social-media2.svg"
              />
            </a>
            <a href="#">
              <img
                className="rounded-full"
                alt=""
                src="/img/social-media3.svg"
              />
            </a>
          </div>
        </div>
        <div className="grid grid-flow-row bg-gray-100 text-base text-gray-scale-white">
          <div className="container mx-auto p-4 box-border grid grid-flow-row md:grid-cols-2 justify-between gap-4">
            <div>
              <div>
                <a
                  href="/"
                  className=" text-white no-underline flex flex-row items-center justify-start"
                >
                  <img
                    className=" max-w-[180px] w-full"
                    alt=""
                    src="/img/Logo.png"
                  />
                </a>
                <div className=" text-gray-scale-gray-500 text-[14px] sm:text-[16px] pb-2">
                  สินค้าการเกษตรจังหวัดเลย
                  ส่งเสริมการขายสินค้าการเกษตรเป็นช่องทางการขายให้กับเกษตกร
                </div>
                <div className="flex flex-row flex-wrap items-center justify-start gap-[5px]">
                  <div className="shadow-[0px_1.5px_0px_#20b526] flex flex-row items-center justify-center">
                    <div className=" font-medium text-[14px] sm:text-[16px]">(+66) 061-505-9483</div>
                  </div>
                  <div className=" text-base text-gray-scale-gray-500">or</div>
                  <div className=" shadow-[0px_1.5px_0px_#20b526] flex flex-row items-center justify-center">
                    <div className=" font-medium text-[14px] sm:text-[16px]">Natthawut.jps@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 justify-items-stretch gap-6">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className=" text-white no-underline font-medium">
                  บัญชีของฉัน
                </div>
                <div className="flex flex-col items-start justify-start gap-[5px] text-sm text-gray-scale-gray-400">
                  <div
                    className=" leading-[150%] cursor-pointer"
                    onClick={() => {
                      cookie.get("_ur")
                        ? (location.href = "/Account/Dashboard")
                        : setOpenSignIn(true);
                    }}
                  >
                    หน้าหลัก
                  </div>
                  <div
                    className=" leading-[150%] cursor-pointer"
                    onClick={() => {
                      cookie.get("_ur")
                        ? (location.href = "/Account/Orders")
                        : setOpenSignIn(true);
                    }}
                  >
                    ประวัติการสั่งซื้อ
                  </div>
                  <div
                    className=" leading-[150%] cursor-pointer"
                    onClick={() => {
                      cookie.get("_ur")
                        ? (location.href = "/Account/Address")
                        : setOpenSignIn(true);
                    }}
                  >
                    ที่อยู่
                  </div>
                  <div
                    className=" leading-[150%] cursor-pointer"
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
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className=" text-white no-underline font-medium">
                  หมวดหมู่
                </div>
                <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
                  {categories.slice(-4).map((item, index) => (
                    <Link
                      reloadDocument
                      key={index}
                      to={`/product/categories/${item.category_name}/1`}
                      state={{ status: true }}
                      className=" text-gray-scale-gray-400 no-underline"
                    >
                      {item.category_name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className=" flex flex-col items-start justify-start gap-[5px]">
                <div className="text-white no-underline  font-medium">
                  สินค้าของเรา
                </div>
                <div className="flex flex-col items-start justify-start gap-[5px] text-sm text-gray-scale-gray-400">
                  <div
                    className=" leading-[150%] cursor-pointer"
                    onClick={() => window.scroll(0, 1350)}
                  >
                    สินค้ายอดนิยม
                  </div>
                  <div
                    className=" leading-[150%] cursor-pointer"
                    onClick={() => window.scroll(0, 2850)}
                  >
                    สินค้าใหม่ล่าสุด
                  </div>
                </div>
              </div>        
                <div className=" flex flex-col items-start justify-start gap-[5px]">
                <div className=" text-white no-underline  font-medium">
                  ช่วยเหลือ
                </div>
                <div className="flex flex-col items-start justify-start gap-[5px] text-sm text-gray-scale-gray-400">
                  <a
                    href="/contact"
                    className=" leading-[150%] text-gray-scale-gray-400 no-underline"
                  >
                    ติดต่อเรา
                  </a>
                  <a
                    href="/about"
                    className=" leading-[150%] text-gray-scale-gray-400 no-underline"
                  >
                    เกี่ยวกับเรา
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto p-4 box-border border-t-[1px] border-solid  border-gray-scale-gray-600 flex flex-row flex-wrap justify-between items-end">
            <div className=" leading-[150%] text-[13px]">
              Shop-Organic eCommerce © 2021. All Rights Reserved
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]  text-gray-scale-white">
              <img className="" alt="" src="/img/methodapplepay.svg" />
              <img className="" alt="" src="/img/methodvisa.svg" />
              <img className="" alt="" src="/img/methoddiscover.svg" />
              <img className="" alt="" src="/img/methodmastercard.svg" />
            </div>
          </div>
        </div>
      </div>
      <SignIn SignIn={{ openSignIn, setOpenSignIn }} />
    </>
  );
};
