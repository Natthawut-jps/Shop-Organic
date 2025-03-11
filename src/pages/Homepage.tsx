import { FunctionComponent, useEffect, useState } from "react";
import { Header } from "./unities/Header";
import { Foorter } from "./unities/Foorter";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating/Rating";
import StarIcon from "@mui/icons-material/Star";
import { CartContextProviders } from "./unities/HandleCart";
import instance from "./unities/axios_instance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import { Cookies } from "react-cookie";
import { SignIn } from "./SignIn";
import { CircularProgress } from "@mui/material";

interface datatypesProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  categories: string;
  rating: number;
  imgURL: string;
  uid: number;
  shoppingHanding: number;
  createdAt: string;
  updatedAt: string;
}

export const Homepage: FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const cookie = new Cookies();
  const [openSignIn, setOpenSignIn] = useState<boolean>(false);
  const { addTocart, removeCartItem, cartItems } = CartContextProviders();
  const [popularProduct, setPopularProduct] = useState<datatypesProduct[]>([]);

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
  // productItem
  const Product = async () => {
    try {
      setLoading(true);
      await instance({
        method: "get",
        url: "/public/products/get_product",
        responseType: "json",
      })
        .then((res) => {
          if (res.status === 200) {
            setPopularProduct(res.data);
          }
        })
        .then(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

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
    try {
      setLoading(true);
      await instance({
        method: "get",
        url: "/public/categories/get_category",
        responseType: "json",
      })
        .then((res) => {
          if (res.status === 200) {
            setCategories(res.data);
          }
        })
        .then(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Product();
    get_categories();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 box-border grid grid-flow-row bg-gray-scale-white text-gray-100 font-body-tiny-body-tiny-400">
        {/* SigIn User */}
        <SignIn SignIn={{ openSignIn, setOpenSignIn }} />
        {/* header template */}
        {/* Sale up to */}
        <div className="container mb-auto pb-4 box-border grid grid-cols-1 md:grid-rows-1 md:grid-cols-5 gap-0 md:gap-3">
          <div className="md:col-span-3 col-span-5">
            <img
              alt=""
              src="/img/bannar-big@3x.png"
              className="object-cover max-w-full"
            />
          </div>
          <div className="text-gray-100 grid grid-cols-2 col-span-5 gap-2 md:grid-cols-1 md:col-span-2 md:grid-rows-2 md:gap-2 justify-items-center">
            <div className="">
              <img
                src="/img/banner_2.png"
                alt=""
                className=" object-cover max-w-full md:max-h-full"
              />
            </div>
            <div>
              <img
                src="/img/banner_3.png"
                alt=""
                className="object-cover max-w-full md:max-h-full"
              />
            </div>
          </div>
        </div>
        {/* Free Shipping */}
        <div className="container mx-auto py-2 box-border flex flex-wrap justify-between gap-2 md:gap-0">
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <img
              className="relative w-10 h-10"
              alt=""
              src="/img/headphones-1.svg"
            />
            <div className="flex flex-col items-start justify-center gap-[8px]">
              <div className=" relative leading-[120%] font-semibold inline-block">
                การสนับสนุนที่ยอดเยี่ยมตลอด 24 ชั่วโมงทุกวัน
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block">
                เข้าถึงการติดต่อได้ทันที
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <img
              className="relative w-12 h-12  shrink-0 hidden"
              alt=""
              src="/img/shipping.svg"
            />
            <img
              className="relative w-11 h-11  shrink-0 hidden"
              alt=""
              src="/img/shipping.svg"
            />
            <img
              className="relative w-10 h-10  shrink-0 hidden"
              alt=""
              src="/img/shipping.svg"
            />
            <img
              className="relative w-10 h-10  shrink-0"
              alt=""
              src="/img/shoppingbag.svg"
            />
            <div className="flex flex-col items-start justify-center gap-[8px]">
              <div className="relative leading-[120%] font-semibold inline-block">
                จ่ายเงินชัวร์ 100%
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block">
                เรามั่นใจว่าสามารถชำระเงินได้อย่างปลอดภัย
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <img
              className="relative w-12 h-12  shrink-0 hidden"
              alt=""
              src="/img/shipping.svg"
            />
            <img
              className="relative w-11 h-11  shrink-0 hidden"
              alt=""
              src="/img/shipping.svg"
            />
            <img
              className="relative w-10 h-10  shrink-0 hidden"
              alt=""
              src="/img/shipping.svg"
            />
            <img
              className="relative w-10 h-10  shrink-0"
              alt=""
              src="/img/package.svg"
            />
            <div className="flex flex-col items-start justify-center gap-[8px]">
              <div className="relative leading-[120%] font-semibold inline-block">
                รับประกันคืนเงิน
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block">
                รับประกันคืนเงินภายใน 30 วัน
              </div>
            </div>
          </div>
        </div>
        {/* Categories */}
        <div className="container mx-auto py-4 box-border flex flex-col gap-3">
          <div className="flex flex-row items-center justify-between text-left text-lg">
            <div className="font-semibold">หมวดหมู่</div>
          </div>
          {loading ? (
            <div className="  text-green-600 ">
              <CircularProgress color="inherit" />
            </div>
          ) : (
            <div className="grid grid-flow-row grid-cols-2 sm:grid-flow-col gap-3 max-w-fit">
              {categories.map((item, index) => (
                <Link
                  key={index}
                  to={`/product/categories/${item.category_name}/1`}
                  state={{ status: true }}
                  className="rounded-8xs bg-gray-scale-white flex flex-col items-center justify-end border-[1px] border-solid  gap-[16px] border-gray-scale-gray-100 hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black"
                >
                  <img
                    className="sm:max-w-[180px] w-full object-cover"
                    alt=""
                    src={`${import.meta.env.VITE_BASE_API}/img/${item.imgURL}`}
                  />
                  <div className="font-medium inline-block pb-1 box-border text-base">
                    {item.category_name}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* Popular Product */}
        <div className="container mx-auto py-4 box-border flex flex-col gap-3 text-lg text-gray-scale-gray-700 ">
          <div className="flex flex-row items-center justify-between text-gray-100">
            <div className="leading-[120%] font-semibold">สินค้ายอดนิยม</div>
          </div>
          {loading ? (
            <div className=" text-green-600">
              <CircularProgress color="inherit" />
            </div>
          ) : (
            <div className="grid grid-flow-row xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 sm:gap-4">
              {popularProduct
                .sort((a, b) => a.rating - b.rating)
                .slice(0, 20)
                .map((item: datatypesProduct) => (
                  <div
                    key={item.id}
                    className=" border-gray-scale-gray-100 bg-gray-scale-white hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] box-border text-black  hover:text-branding-success-dark border-[1px] border-solid hover:border-branding-success-dark"
                  >
                    <div className="grid grid-flow-row h-full">
                      <Link
                        to={`/product/detail/${
                          item.categories
                        }/${item.name.replace(/\s/g, "")}`}
                        state={{ product: item, status: "toTop" }}
                        className="flex flex-col items-start justify-start box-border sm:max-h-[150px] sm:h-[150px] max-h-[100px] h-[100px]"
                      >
                        <img
                          className="sm:max-h-[150px] max-h-[100px] w-full object-cover"
                          alt=""
                          src={`${import.meta.env.VITE_BASE_API}/img/${
                            item.imgURL
                          }`}
                        />
                      </Link>
                      <Link
                        to={`/product/detail/${
                          item.categories
                        }/${item.name.replace(/\s/g, "")}`}
                        state={{ product: item, status: "toTop" }}
                        className="  flex flex-col items-start justify-end p-4 box-border gap-[6px] no-underline  text-black  hover:text-branding-success-dark"
                      >
                        <div className="flex flex-col items-start justify-start">
                          <div className=" leading-[150%] inline-block">
                            {item.name}
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[2px] text-base">
                            <div className=" leading-[150%] font-medium">
                              {`฿${item.price}`}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start">
                          <Rating
                            name="read-only"
                            sx={{
                              fontSize: "13px",
                            }}
                            precision={0.1}
                            value={item.rating}
                            emptyIcon={<StarIcon fontSize="inherit" />}
                            readOnly
                          />
                        </div>
                      </Link>
                      {cartItems.find((check) => check.pid === item.id) ? (
                        <div onClick={() => removeCartItem(item.id)}>
                          <img
                            className=" cursor-pointer z-50 w-fit"
                            alt=""
                            src="/img/add-to-cart2.svg"
                          />
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            cookie.get("_ur") ? addTocart(item) : null;
                            cookie.get("_ur")
                              ? setOpenSignIn(false)
                              : setOpenSignIn(true);
                          }}
                        >
                          <div className="flex flex-row items-center justify-center bg-slate-800/10 max-w-full w-full  h-full cursor-pointer">
                            เพิ่มสินค้า
                            <img
                              className=" cursor-pointer z-50"
                              alt=""
                              src="/img/add-to-cart.svg"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        {/* latest New */}
        <div className="container mx-auto py-4 box-border flex flex-col gap-3">
          <div className="font-semibold text-lg">ใหม่ล่าสุด</div>
          {loading ? (
            <div className=" text-green-600">
              <CircularProgress color="inherit" />
            </div>
          ) : (
            <div className=" grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {popularProduct
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )
                .slice(0, 4)
                .map((item: datatypesProduct) => (
                  <div
                    key={item.id}
                    className="shadow-[0px_20px_50px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start gap-2"
                  >
                    <div className="sm:max-h-[200px] sm:h-[200px] max-h-[100px] h-[100px] max-w-full w-full">
                      <img
                        className="rounded-t-lg rounded-b-none sm:max-h-[200px] max-h-[100px] max-w-full w-full object-cover"
                        alt=""
                        src={`${import.meta.env.VITE_BASE_API}/img/${
                          item.imgURL
                        }`}
                      />
                    </div>
                    <div className="container mx-auto p-2 box-border rounded-t-none rounded-b-lg bg-gray-scale-white flex flex-col items-start justify-end h-full gap-2 text-sm text-gray-scale-gray-700">
                      <div className="flex flex-row gap-2 rounded bg-gray-scale-white">
                        <div className="font-medium">
                          {new Date(item.createdAt).getDate()}
                        </div>
                        <div className="font-medium text-gray-scale-gray-500">
                          {months[new Date(item.createdAt).getMonth()]}
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-1">
                        <div className="flex sm:flex-row flex-col items-start justify-start sm:gap-3">
                          <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative leading-[150%] text-gray-scale-gray-500">
                              {item.description}
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start text-gray-scale-gray-500">
                            <FontAwesomeIcon icon={faMoneyBills} />
                            <div className="leading-[150%]">
                              <span>฿</span>
                              <span className="text-gray-scale-gray-700 text-sm">
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className=" text-black/70 font-medium text-sm">
                          {item.name}
                        </div>
                      </div>
                      <Link
                        to={`/product/detail/${
                          item.categories
                        }/${item.name.replace(/\s/g, "")}`}
                        state={{ product: item, status: "toTop" }}
                        className=" hover:translate-x-3 no-underline rounded-24xl flex flex-row gap-1 items-center justify-start text-base text-branding-success"
                      >
                        <div className="leading-[120%] font-semibold text-sm">
                          อ่านเพิ่มเติม
                        </div>
                        <img
                          className="max-w-[16px] w-full"
                          alt=""
                          src="/img/arrow.svg"
                        />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        {/* Header image*/}
        <div className="container mx-auto p-4 box-border flex flex-row items-center justify-around sm:py-20 py-10 px-0">
          <img className=" " alt="" src="/img/vector.svg" />
          <img className=" w-[66.94px] h-8" alt="" src="/img/mango1.svg" />
          <img
            className=" max-w-[82px] w-full object-cover"
            alt=""
            src="/img/food.svg"
          />
          <img
            className=" max-w-[82px] w-full object-cover"
            alt=""
            src="/img/bookoffcorporationlogo.svg"
          />
        </div>
        {/* foorter template */}
      </div>
      <Foorter />
    </>
  );
};
