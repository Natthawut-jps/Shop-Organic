import { FunctionComponent, useEffect, useState } from "react";
import { Header } from "./unities/Header";
import { Foorter } from "./unities/Foorter";
import { Link, useLocation, useParams } from "react-router-dom";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Divider,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CartContextProviders } from "./unities/HandleCart";
import instance from "./unities/axios_instance";
import StarIcon from "@mui/icons-material/Star";
import { SignIn } from "./SignIn";
import { Cookies } from "react-cookie";

interface datatypes {
  product: {
    id: number;
    name: string;
    price: number;
    categories: string;
    rating: number;
    imgURL: string;
    uid: number;
    shoppingHanding: number;
    createdAt: string;
    updatedAt: string;
  };
  status: string;
}
interface datatypesProduct {
  id: number;
  name: string;
  price: number;
  categories: string;
  quantity: number;
  description: string;
  status: number;
  sold: number;
  rating: number;
  imgURL: string;
  createdAt: string;
  updatedAt: boolean;
}

const ProductsDetailsDescription: FunctionComponent = () => {
  const cookie = new Cookies();
  const [openSignIn, setOpenSignIn] = useState<boolean>(false);
  const status_product = ["สินค้าหมด", "เหลือน้อย", "มีสินค้า"];
  const { categoriesP, productList } = useParams();
  const [productDetail, setProductDetail] = useState<datatypesProduct>();
  const [relatedProduct, setRelatedProduct] = useState<datatypesProduct[]>([]);
  const {
    cartItems,
    favoriteItem,
    addFavorite,
    removeCartItem,
    addTocart,
    removeFavoriteItem,
  } = CartContextProviders();
  const [snackbar, setSnackbar] = useState<boolean>(false);
  const state: datatypes = useLocation().state;

  const Product = async () => {
    try {
      await instance({
        method: "get",
        url: "/public/products/get_product",
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          setProductDetail(
            res.data.filter(
              (item: datatypesProduct) =>
                item.name.replace(/\s/g, "") === productList?.replace(/\s/g, "")
            )[0]
          );
          setRelatedProduct(
            res.data.filter(
              (item: datatypesProduct) => item.categories === categoriesP
            )
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Product();
    if (state?.status) {
      window.scroll(0, 0);
    }
  }, [productList]);

  return (
    <>
      <Header />
      <Breadcrumbs
        categoies={categoriesP}
        tltle={productList}
        Detail={undefined}
        EditAndadd={undefined}
      />
      {productList?.replace(/\s/g, "") ===
        productDetail?.name.replace(/\s/g, "") && (
        <div className="container mx-auto p-4 box-border bg-gray-scale-white text-left text-sm text-gray-scale-gray-900 font-body-medium-body-medium-600">
          <div className="flex flex-col items-center justify-start">
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-10">
              <div className="col-span-1">
                <img
                  className="max-w-[400px] w-full object-cover"
                  alt=""
                  src={`${import.meta.env.VITE_BASE_API}/img/${
                    productDetail?.imgURL
                  }`}
                />
              </div>
              <div className="md:col-span-2 flex flex-wrap flex-col items-start justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-start gap-[0px] text-base">
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <div className=" leading-[120%] font-semibold">
                        {productDetail?.name}
                      </div>
                      <div className=" leading-[150%] text-sm">
                        {productDetail?.status === 1 ? (
                          <div className="self-stretch flex flex-row items-start justify-start text-left text-orange-500">
                            <div className="h-11 flex flex-row items-center justify-center">
                              <div className="rounded-lg bg-red-50 flex flex-col items-center justify-center px-2.5">
                                <div className=" tracking-[0.01em] leading-[20px] font-semibold">
                                  {status_product[0]}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : productDetail?.status === 2 ? (
                          <div className="self-stretch flex flex-row items-start justify-start text-left text-yellow-500">
                            <div className="h-11 flex flex-row items-center justify-center">
                              <div className="rounded-lg bg-orange-50 flex flex-col items-center justify-center py-1 px-2.5">
                                <div className=" tracking-[0.01em] leading-[20px] font-semibold">
                                  {status_product[1]}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          productDetail?.status === 3 && (
                            <div className="self-stretch flex flex-row items-start justify-start text-left text-green-500">
                              <div className="h-11 flex flex-row items-center justify-center">
                                <div className="rounded-lg bg-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                                  <div className=" tracking-[0.01em] leading-[20px] font-semibold">
                                    {status_product[2]}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[12px] text-sm text-gray-scale-gray-600">
                      <div className="flex flex-row items-center justify-start">
                        <Rating
                          name="read-only"
                          sx={{
                            fontSize: "16px",
                          }}
                          precision={0.1}
                          value={productDetail?.rating}
                          emptyIcon={<StarIcon fontSize="inherit" />}
                          readOnly
                        />
                      </div>
                      <div className=" leading-[150%] font-medium text-gray-scale-gray-300">
                        •
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[4px] text-gray-scale-gray-800">
                        <div className=" leading-[150%] font-medium">เหลือ</div>
                        <div className=" leading-[150%] text-gray-scale-gray-600">
                          {productDetail?.quantity}
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[4px] text-gray-scale-gray-800">
                        <div className=" leading-[150%] font-medium">
                          ขายแล้ว
                        </div>
                        <div className=" leading-[150%] text-gray-scale-gray-600">
                          {productDetail?.sold}
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[12px]">
                        <div className="flex flex-row items-start justify-start gap-[6px]">
                          <div className=" leading-[150%] font-medium">
                            หมวดหมู่ :
                          </div>
                          <div className=" leading-[150%] text-gray-scale-gray-500">
                            {productDetail?.categories}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px] text-base text-gray-scale-gray-300">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <div className=" text-5xl leading-[150%] font-medium text-branding-success-dark">
                        {`฿${productDetail?.price}`}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0px]">
                  <div className="flex flex-row flex-wrap items-center justify-between">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className=" leading-[150%]">แบรนด์</div>
                      <div className="text-smi text-dimgray font-dancing-script">
                        <img
                          className="max-w-[120px] w-full"
                          alt=""
                          src="/img/Logo.png"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[10px]">
                      <div className=" leading-[150%]">แชร์</div>
                      <div className="flex flex-row items-start justify-start gap-[5px]">
                        <a href="https://www.facebook.com/">
                          <img
                            className=" w-10 h-10"
                            alt=""
                            src="/img/social-media.svg"
                          />
                        </a>
                        <img
                          className=" rounded-481xl w-10 h-10"
                          alt=""
                          src="/img/social-media1.svg"
                        />
                        <img
                          className=" rounded-481xl w-10 h-10"
                          alt=""
                          src="/img/social-media2.svg"
                        />
                        <img
                          className=" rounded-481xl w-10 h-10"
                          alt=""
                          src="/img/social-media3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" leading-[150%] text-gray-scale-gray-500 inline-block">{`สินค้าคุณภาพ คัดสรรอย่างดี ถึงมืออย่างปลอดภัย`}</div>
                </div>
                <div className="bg-gray-scale-white flex flex-row items-center justify-center py-[18px] px-0 gap-[12px] text-center text-base">
                  {cartItems.some(
                    (check) => check.pid === productDetail?.id
                  ) ? (
                    <div
                      onClick={() =>
                        removeCartItem(productDetail?.id as number)
                      }
                      className=" cursor-pointer rounded-24xl bg-red-500 flex flex-row items-center justify-center py-4 px-10 box-border gap-[16px] text-left text-gray-scale-white"
                    >
                      <div className=" leading-[120%] font-semibold">
                        ลบออกจากตะกร้า
                      </div>
                      <img
                        className=" w-[16.3px] h-[16.3px]"
                        alt=""
                        src="/img/rectangle.svg"
                      />
                      <Snackbar
                        open={snackbar}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                        autoHideDuration={1000}
                        sx={{ width: "100%" }}
                        onClose={() => setSnackbar(false)}
                      >
                        <Alert severity="success">เพิ่มสินค้าแล้ว</Alert>
                      </Snackbar>
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setSnackbar(true);
                        cookie.get("_ur") ? addTocart(state.product) : null;
                        cookie.get("_ur")
                          ? setSnackbar(true)
                          : setSnackbar(false),
                          cookie.get("_ur")
                            ? setOpenSignIn(false)
                            : setOpenSignIn(true);
                      }}
                      className="cursor-pointer rounded-24xl bg-branding-success flex flex-row items-center justify-center py-4 px-10 box-border gap-[16px] text-left text-gray-scale-white"
                    >
                      <div className=" leading-[120%] font-semibold">
                        เพิ่มลงตะกร้า
                      </div>
                      <img
                        className=" w-[16.3px] h-[16.3px]"
                        alt=""
                        src="/img/rectangle.svg"
                      />
                    </div>
                  )}
                  {cookie.get("_ur") ? (
                    <div className="rounded-24xl bg-limegreen-200 flex flex-row items-start justify-start p-4">
                      <Rating
                        name="hover-feedback"
                        precision={1}
                        value={
                          favoriteItem.some(
                            (item) => item.pid === state.product.id
                          )
                            ? 1
                            : 0
                        }
                        onChange={() => {
                          addFavorite(state.product);
                          favoriteItem.some(
                            (item) => item.pid === state.product.id
                          ) && removeFavoriteItem(state.product.id);
                        }}
                        max={1}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        sx={{
                          "& .MuiRating-iconFilled": {
                            color: "#ff6d75",
                          },
                          "& .MuiRating-iconHover": {
                            color: "#ff3d47",
                          },
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => setOpenSignIn(true)}
                      className="rounded-24xl bg-limegreen-200 flex flex-row items-start justify-start p-3 cursor-pointer"
                    >
                      <FavoriteBorderIcon
                        fontSize="medium"
                        className=" text-black/30"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="container mx-auto p-4 box-border w-full text-gray-scale-gray-500">
              <Accordion
                sx={{
                  "&.MuiAccordion-root": {
                    boxShadow: "none",
                    marginTop: "10px",
                  },
                }}
              >
                <AccordionSummary
                  sx={{ padding: 0, margin: 0 }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography className=" flex justify-center items-center w-full  ">
                    รายละเอียด
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, margin: 0 }}>
                  <Typography
                    sx={{ fontSize: "14px" }}
                    className="text-gray-scale-gray-600 font-serif z-50 scroll-description flex justify-center items-start w-full break-words p-1"
                  >
                    {productDetail?.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Divider />
            </div>
          </div>
          <div className="container mx-auto p-4 box-border flex flex-col gap-4">
            <div className="text-base text-gray-scale-gray-900">
              <div className=" leading-[120%] font-semibold">
                สินค้าที่เกี่ยวข้อง
              </div>
            </div>
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 sm:gap-5 gap-2">
              {relatedProduct
                .filter((item) => item.id !== (productDetail?.id as number))
                .slice(0, 5)
                .map((item, index) => (
                  <div key={index} className="grid grid-flow-row h-full">
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
                ))}
            </div>
          </div>
        </div>
      )}
      <Foorter />
      <SignIn SignIn={{ openSignIn, setOpenSignIn }} />
    </>
  );
};

export default ProductsDetailsDescription;
