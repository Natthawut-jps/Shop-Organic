import { FunctionComponent, useEffect, useState } from "react";
import { Header } from "./unities/Header";
import { Foorter } from "./unities/Foorter";
import { Link, useLocation, useParams } from "react-router-dom";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Alert, Rating, Snackbar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CartContextProviders } from "./unities/HandleCart";
import instance from "./unities/axios_instance";
import StarIcon from "@mui/icons-material/Star";

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
  const status_product = ["Out of Stock", "Low Stock", "InStock"];
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
                item.name.replace(/\s/g, "") === productList
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
  console.log(relatedProduct);
  return (
    <>
      {productList === productDetail?.name && (
        <div className="relative bg-gray-scale-white w-full h-[2495px] overflow-hidden text-left text-sm text-gray-scale-gray-900 font-body-medium-body-medium-600">
          {/* header template */}
          <Header />
          <Breadcrumbs
            categoies={categoriesP}
            tltle={productList}
            Detail={undefined}
            EditAndadd={undefined}
          />
          <div className="absolute top-[1509px] left-[88px] w-[1320px] h-[477px] text-gray-scale-gray-700">
            <div className="absolute top-[70px] left-[0px] flex flex-row items-start justify-start gap-[24px]">
              {relatedProduct
                .filter((item) => item.id !== (productDetail?.id as number))
                .slice(0, 4)
                .map((item, index) => (
                  <div
                    key={index}
                    className=" relative top-[0px] left-[0px] border-gray-scale-gray-100 bg-gray-scale-white hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] box-border h-[307px] text-black  hover:text-branding-success-dark border-[1px] border-solid hover:border-branding-success-dark"
                  >
                    <Link
                      key={item.id}
                      to={`/product/detail/${
                        item.categories
                      }/${item.name.replace(/\s/g, "")}`}
                      state={{ product: item, status: "toTop" }}
                      className="hover:text-branding-success-dark text-black"
                    >
                      <div className=" relative w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-col items-start justify-start box-border">
                        <img
                          className="relative w-[252px] h-[202px] object-cover"
                          alt=""
                          src={`${import.meta.env.VITE_BASE_API}/img/${
                            item.imgURL
                          }`}
                        />
                      </div>
                      <div className="absolute h-[0%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[150%] inline-block w-[280px]">
                            {item.name}
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
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
                    {cartItems.find((check) => check.pid === item.id) ? (
                      <div onClick={() => removeCartItem(item.id)}>
                        <img
                          className=" cursor-pointer absolute h-[15.83%] w-[15.82%] top-[80.42%] right-[6.41%] bottom-[6.76%] left-[75.77%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/img/add-to-cart2.svg"
                        />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          addTocart(item);
                          setSnackbar(true);
                        }}
                      >
                        <img
                          className="absolute cursor-pointer h-[15.83%] w-[15.82%] top-[80.42%] right-[6.41%] bottom-[6.76%] left-[75.77%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/img/add-to-cart.svg"
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
                          <Alert severity="success">
                            Add to Cart successfully
                          </Alert>
                        </Snackbar>
                      </div>
                    )}
                  </div>
                ))}
            </div>
            <div className="absolute top-[0px] left-[0px] w-[1320px] flex flex-row items-center justify-between text-13xl text-gray-scale-gray-900">
              <div className="relative leading-[120%] font-semibold">
                Related Products
              </div>
            </div>
          </div>
          <div className="absolute top-[349px] left-[-220px] flex flex-col items-center justify-start">
            <div className="relative w-[1320px] h-[558px] overflow-hidden shrink-0">
              <div className="absolute top-[2px] left-[0px] w-[648px] h-[556px]">
                <img
                  className="absolute top-[0px] left-[92px] w-[556px] h-[556px] object-cover"
                  alt=""
                  src={`${import.meta.env.VITE_BASE_API}/img/${
                    productDetail?.imgURL
                  }`}
                />
              </div>
              <div className="absolute top-[0px] left-[672px] flex flex-col items-start justify-start gap-[24px]">
                <div className="flex flex-col items-start justify-start gap-[20px] text-17xl">
                  <div className="flex flex-col items-start justify-start gap-[12px]">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative leading-[120%] font-semibold">
                        {productDetail?.name}
                      </div>
                      <div className="relative leading-[150%] text-sm">
                        {productDetail?.status === 1 ? (
                          <div className="self-stretch flex flex-row items-start justify-start text-left text-orange-500">
                            <div className="h-11 flex flex-row items-center justify-center">
                              <div className="rounded-lg bg-red-50 flex flex-col items-center justify-center py-1 px-2.5">
                                <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                                  {status_product[0]}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : productDetail?.status === 2 ? (
                          <div className="self-stretch flex flex-row items-start justify-start text-left text-yellow-500">
                            <div className="h-11 flex flex-row items-center justify-center">
                              <div className="rounded-lg bg-orange-50 flex flex-col items-center justify-center py-1 px-2.5">
                                <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
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
                                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
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
                      <div className="relative leading-[150%] font-medium text-gray-scale-gray-300">
                        •
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[4px] text-gray-scale-gray-800">
                        <div className="relative leading-[150%] font-medium">
                          เหลือ:
                        </div>
                        <div className="relative leading-[150%] text-gray-scale-gray-600">
                          {productDetail?.quantity}
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[4px] text-gray-scale-gray-800">
                        <div className="relative leading-[150%] font-medium">
                          ขายแล้ว:
                        </div>
                        <div className="relative leading-[150%] text-gray-scale-gray-600">
                          {productDetail?.sold}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px] text-[20px] text-gray-scale-gray-300">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative text-5xl leading-[150%] font-medium text-branding-success-dark">
                        {`฿${productDetail?.price}`}
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border w-[648px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="w-[648px] flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative leading-[150%]">Brand:</div>
                      <div className="relative w-[120px] h-14 text-smi text-dimgray font-dancing-script">
                        <img
                          className=" relative top-[12px] max-w-full"
                          alt=""
                          src="/img/Logo.png"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[10px]">
                      <div className="relative leading-[150%]">Share item:</div>
                      <div className="flex flex-row items-start justify-start gap-[5px]">
                        <a href="https://www.facebook.com/">
                          <img
                            className="relative w-10 h-10"
                            alt=""
                            src="/img/social-media.svg"
                          />
                        </a>
                        <img
                          className="relative rounded-481xl w-10 h-10"
                          alt=""
                          src="/img/social-media1.svg"
                        />
                        <img
                          className="relative rounded-481xl w-10 h-10"
                          alt=""
                          src="/img/social-media2.svg"
                        />
                        <img
                          className="relative rounded-481xl w-10 h-10"
                          alt=""
                          src="/img/social-media3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative leading-[150%] text-gray-scale-gray-500 inline-block w-[568px]">{`Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. `}</div>
                </div>
                <div className="bg-gray-scale-white shadow-[0px_-1px_0px_#e5e5e5,_0px_1px_0px_#e5e5e5] flex flex-row items-center justify-center py-[18px] px-0 gap-[12px] text-center text-base border-[1px] border-solid border-gray-scale-white">
                  {cartItems.some(
                    (check) => check.pid === productDetail?.id
                  ) ? (
                    <div
                      onClick={() =>
                        removeCartItem(productDetail?.id as number)
                      }
                      className=" cursor-pointer rounded-24xl bg-red-500 w-[447px] flex   flex-row items-center justify-center py-4 px-10 box-border gap-[16px] text-left text-gray-scale-white"
                    >
                      <div className="relative leading-[120%] font-semibold">
                        Remove
                      </div>
                      <img
                        className="relative w-[16.3px] h-[16.3px]"
                        alt=""
                        src="/img/rectangle.svg"
                      />
                      <Snackbar
                        open={snackbar}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        autoHideDuration={1000}
                        sx={{ width: "100%" }}
                        onClose={() => setSnackbar(false)}
                      >
                        <Alert severity="success">
                          Add to Cart successfully
                        </Alert>
                      </Snackbar>
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        addTocart(state.product);
                        setSnackbar(true);
                      }}
                      className=" cursor-pointer rounded-24xl bg-branding-success w-[447px] flex   flex-row items-center justify-center py-4 px-10 box-border gap-[16px] text-left text-gray-scale-white"
                    >
                      <div className="relative leading-[120%] font-semibold">
                        Add to Cart
                      </div>
                      <img
                        className="relative w-[16.3px] h-[16.3px]"
                        alt=""
                        src="/img/rectangle.svg"
                      />
                    </div>
                  )}
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
                </div>
                <div className="flex flex-col items-start justify-start gap-[12px]">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="relative leading-[150%] font-medium">
                      Category:
                    </div>
                    <div className="relative leading-[150%] text-gray-scale-gray-500">
                      {productDetail?.categories}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[1920px] h-[523px] text-gray-scale-gray-500">
              <div className="absolute top-[88px] left-[300px] flex flex-col items-start justify-start gap-[20px]">
                <div className="relative leading-[150%] inline-block w-[648px]">
                  <p className="m-0">{productDetail?.description}</p>
                  <p className="m-0">&nbsp;</p>
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] flex flex-row items-start justify-start py-0 px-[689px] text-base">
                <div className="bg-gray-scale-white shadow-[0px_-2px_0px_#20b526_inset] flex flex-row items-start justify-start p-4 text-gray-scale-gray-900">
                  <div className="relative leading-[150%] font-medium">
                    Descriptions
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[88px] left-[1084px] w-[536px] h-[300px] overflow-hidden"
                alt=""
                src="/img/video.svg"
              />
              <div className="absolute top-[408px] left-[1083px] rounded-md bg-gray-scale-white box-border w-[537px] flex flex-row items-center justify-between py-6 px-5 text-gray-scale-gray-900 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/img/pricetag-1.svg"
                  />
                  <div className="flex flex-col items-start justify-center gap-[6px]">
                    <div className="relative leading-[150%] font-medium">
                      64% Discount
                    </div>
                    <div className="relative text-smi leading-[150%] text-gray-scale-gray-500 inline-block w-[198px]">
                      Save your 64% money with us
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/img/leaf-1.svg"
                  />
                  <div className="flex flex-col items-start justify-center gap-[6px]">
                    <div className="relative leading-[150%] font-medium">
                      100% Organic
                    </div>
                    <div className="relative text-smi leading-[150%] text-gray-scale-gray-500 inline-block w-[189px]">
                      100% Organic Vegetables
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* foorter template */}
          <Foorter />
        </div>
      )}
    </>
  );
};

export default ProductsDetailsDescription;
