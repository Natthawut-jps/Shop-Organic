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
  // const { addTocart, removeCartItem, cartItems } = CartContextProviders();
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
              className="object-cover max-w-full "
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
        <div className="container mx-auto py-2 box-border flex flex-wrap justify-stretch gap-2 md:gap-0">
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
        {/* <div className=" sm:h-[100px] sm:top-[1150px] sm:grid sm:grid-cols-2 sm:w-fit sm:gap-2 sm:left-0 sm:mx-[40px] relative top-[1028px] gap-[10px] flex flex-row justify-start items-start left-[130px] w-[1320px] h-[320px] text-center text-lg">
        {loading ? (
          <div className=" relative top-[130px] text-green-600 left-[50%]">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          categories.map((item, index) => (
            <Link
              key={index}
              to={`/product/categories/${item.category_name}/1`}
              state={{ status: true }}
              className=" sm:pb-0 sm:p-2 relative top-[69px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center border-[1px] border-solid pt-4 px-0 pb-6 gap-[16px] border-gray-scale-gray-100 hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black"
            >
              <img
                className=" sm:w-[150px] sm:h-[90px] sm:text-[14px] relative w-[190px] h-[130px] object-cover"
                alt=""
                src={`${import.meta.env.VITE_BASE_API}/img/${item.imgURL}`}
              />
              <div className="relative leading-[150%] font-medium inline-block w-[200px]">
                {item.category_name}
              </div>
            </Link>
          ))
        )}
        <div className="absolute top-[0px] left-[0px] w-[1320px] flex flex-row items-center justify-between text-left text-13xl">
          <div className="relative leading-[120%] font-semibold">หมวดหมู่</div>
        </div>
      </div> */}
        {/* Popular Product */}
        {/* <div className=" sm:w-[560px] sm:top-[1600px] sm:left-0 sm:mx-5 sm:box-border sm:justify-center absolute top-[1400px] left-[130px] w-[1320px] h-[1314px] text-gray-scale-gray-700">
        <div className="absolute top-[-10px] left-[0px] w-[1320px] flex flex-row items-center justify-between text-13xl text-gray-100">
          <div className="relative leading-[120%] font-semibold">
            สินค้ายอดนิยม
          </div>
        </div>
        {loading ? (
          <div className=" relative left-[50%] top-[50%] text-green-600">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <div className=" sm:gap-3 sm:grid-cols-2 sm:justify-center sm:w-fit sm:relative grid grid-cols-5 gap-x-3 gap-y-1 box-border">
            {popularProduct
              .sort((a, b) => a.rating - b.rating)
              .slice(0, 20)
              .map((item: datatypesProduct) => (
                <div
                  key={item.id}
                  className=" sm:w-[190px] sm:h-[220px] hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:border-branding-success-dark relative top-[59px] left-[0px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100"
                >
                  <Link
                    to={`/product/detail/${item.categories}/${item.name.replace(
                      /\s/g,
                      ""
                    )}`}
                    state={{ product: item, status: true }}
                    className="text-gray-100 hover:text-branding-success-dark"
                  >
                    <div className=" absolute top-[0%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                      <img
                        className=" sm:w-fit sm:h-[120px] relative w-[254px] h-[230px] object-cover"
                        alt=""
                        src={`${import.meta.env.VITE_BASE_API}/img/${
                          item.imgURL
                        }`}
                      />
                    </div>
                    <div className=" sm:top-[65%] absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[150%] inline-block w-60">
                          {item.name}
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[2px] text-base">
                          <div className="relative leading-[150%] font-medium">
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
                    </div>
                  </Link>
                  {cartItems.some((check) => check.pid === item.id) ? (
                    <div onClick={() => removeCartItem(item.id)}>
                      <img
                        className="absolute cursor-pointer h-[15.2%] w-[18.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[75.49%] max-w-full  max-h-full"
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
                      <img
                        className="absolute cursor-pointer h-[15.2%] w-[18.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[75.49%] max-w-full  max-h-full"
                        alt=""
                        src="/img/add-to-cart.svg"
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div> */}
        {/* latest New */}
        {/* <div className=" sm:[560px] sm:top-[3950px] sm:left-0 sm:mx-3 absolute top-[2900px] left-[130px] w-[1320px] h-[564px] text-center text-xl">
        <div className="absolute top-[0px] left-[563px] text-13xl leading-[120%] font-semibold">
          ใหม่ล่าสุด
        </div>
        {loading ? (
          <div className=" text-green-600 relative top-[50%] left-[-30px]">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <div className=" sm:grid-cols-1 sm:gap-5 grid grid-cols-3 gap-x-5">
            {popularProduct
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .slice(0, 3)
              .map((item: datatypesProduct) => (
                <div
                  key={item.id}
                  className="relative top-[70px] left-[0px] shadow-[0px_20px_50px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start"
                >
                  <div className=" sm:w-[406px] relative w-[424px] h-[324px]">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none max-w-full  max-h-full object-cover"
                      alt=""
                      src={`${import.meta.env.VITE_BASE_API}/img/${
                        item.imgURL
                      }`}
                    />
                    <div className="absolute bottom-[24px] left-[24px] rounded bg-gray-scale-white w-[58px] h-[58px]">
                      <div className="absolute top-[6px] left-[19px] leading-[150%] font-medium">
                        {new Date(item.createdAt).getDate()}
                      </div>
                      <div className="absolute top-[36px] left-[15px] text-xs tracking-[0.03em] leading-[100%] font-medium text-gray-scale-gray-500">
                        {months[new Date(item.createdAt).getMonth()]}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-t-none rounded-b-lg bg-gray-scale-white flex flex-col items-start justify-start p-6 gap-[20px] text-left text-sm text-gray-scale-gray-700">
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                      <div className="flex flex-row items-start justify-start gap-[16px]">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative leading-[150%] text-gray-scale-gray-500">
                            {item.description}
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[4px] text-gray-scale-gray-500">
                          <FontAwesomeIcon icon={faMoneyBills} />
                          <div className="relative leading-[150%]">
                            <span>฿</span>
                            <span className="text-gray-scale-gray-700">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className=" text-black/70 relative text-lg leading-[150%] font-medium inline-block w-[376px]">
                        {item.name}
                      </div>
                    </div>
                    <Link
                      to={`/product/detail/${
                        item.categories
                      }/${item.name.replace(/\s/g, "")}`}
                      state={{ product: item, status: "toTop" }}
                      className=" hover:translate-x-3 no-underline rounded-24xl flex flex-row items-center justify-start gap-[12px] text-base text-branding-success"
                    >
                      <div className="relative leading-[120%] font-semibold">
                        อ่านเพิ่มเติม
                      </div>
                      <img
                        className="relative w-[16.5px] h-[13.55px]"
                        alt=""
                        src="/img/arrow.svg"
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div> */}
        {/* Header image*/}
        {/* <div className="sm:top-[4200px] sm:text-[14px] absolute top-[3500px] left-[100px] w-[1320px] flex flex-row items-center justify-between py-[60px] px-0 box-border">
        <img
          className="relative w-[81.58px] h-8"
          alt=""
          src="/img/vector.svg"
        />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img
          className="relative w-[66.94px] h-8"
          alt=""
          src="/img/mango1.svg"
        />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img
          className="relative w-[82.64px] h-8  shrink-0"
          alt=""
          src="/img/food.svg"
        />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img
          className="relative w-[131.02px] h-8  shrink-0"
          alt=""
          src="/img/bookoffcorporationlogo.svg"
        />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img className="relative w-[95.5px] h-8" alt="" src="/img/group1.svg" />
      </div> */}
        {/* Follow Our */}
        {/* <div className=" sm:w-[560px] sm:h-fit sm:top-[5520px] sm:left-0 sm:mx-3 absolute top-[3651px] left-[130px] w-[1320px] h-[270px]  text-center text-13xl">
        <div className="absolute top-[0px] left-[560px] leading-[120%] font-semibold">
          ติดตามเรา
        </div>
        <div className=" sm:grid sm:grid-cols-2 sm:gap-2 sm:w-fit">
          <div>
            <img
              className="sm:relative sm:top-[0px] sm:left-0 absolute top-[70px] left-[0px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
              alt=""
              src="/img/-instagram-post@2x.png"
            />
          </div>
          <div>
            <img
              className=" sm:relative sm:top-[0px] sm:left-0 absolute top-[70px] left-[448px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
              alt=""
              src="/img/-instagram-post1@2x.png"
            />
          </div>
          <div>
            <img
              className="sm:relative sm:top-[0px] sm:left-0 absolute top-[70px] left-[672px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
              alt=""
              src="/img/-instagram-post2@2x.png"
            />
          </div>
          <div>
            <img
              className=" sm:relative sm:top-[0px] sm:left-0 absolute top-[70px] left-[896px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
              alt=""
              src="/img/-instagram-post3@2x.png"
            />
          </div>
          <div>
            <img
              className=" sm:relative sm:top-[0px] sm:left-0 absolute top-[70px] left-[1120px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
              alt=""
              src="/img/-instagram-post4@2x.png"
            />
          </div>
          <div className="sm:relative sm:top-[0px] sm:left-0 absolute top-[70px] left-[224px] w-[200px] h-[200px] hover:translate-y-[-5px] hover:transition-all">
            <img
              className="absolute top-[0px] left-[0px] rounded-3xs w-[200px] h-[200px] object-cover"
              alt=""
              src="/img/-instagram-post5@2x.png"
            />
            <img
              className="absolute top-[84px] left-[84px] w-8 h-8 "
              alt=""
              src="/img/icons.svg"
            />
          </div>
        </div>
      </div> */}
        {/* foorter template */}
        {/* <Foorter /> */}
      </div>
    </>
  );
};
