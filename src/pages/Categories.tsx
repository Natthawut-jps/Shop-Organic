import { FunctionComponent, useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import { Pagination, SelectChangeEvent } from "@mui/material";
import { CartContextProviders } from "./unities/HandleCart";
import instance from "./unities/axios_instance";
import { Cookies } from "react-cookie";
import { SignIn } from "./SignIn";

interface datatypesProduct {
  id: number;
  name: string;
  price: number;
  categories: string;
  rating: number;
  imgURL: string;
  pid: number;
  shoppingHanding: number;
  createdAt: string;
  updatedAt: string;
}

const Categories: FunctionComponent = () => {
  const cookie = new Cookies();
  const [openSignIn, setOpenSignIn] = useState<boolean>(false);
  const navigate = useNavigate();
  const [sortBy, setSortby] = useState<string | null>("sortmin");
  const [sortRating, setSortRating] = useState<number | null>(null);
  const [sortPrice, setSortPrice] = useState<number>(0);
  const [valueSlider, setValueSlider] = useState<number>(0);
  const { categoriesParam, pageParam } = useParams<{
    categoriesParam: string;
    pageParam: string;
  }>();
  const state: { status: boolean } = useLocation().state;
  const { addTocart, removeCartItem, cartItems } = CartContextProviders();
  const [ProductsItem, setProduct] = useState<datatypesProduct[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  // product
  interface category_Type {
    id: number;
    category_name: string;
    description: string;
    quantity: number;
    imgURL: string;
    createdAt: Date;
    updatedAt: Date;
  }
  const [category_item, setCategory] = useState<category_Type[]>([]);
  const category = async () => {
    await instance({
      method: "get",
      url: "/public/categories/get_category",
      responseType: "json",
    }).then((res) => {
      if (res.status === 200) {
        setCategory(res.data);
      }
    });
  };
  useEffect(() => {
    const fetchs = async () => {
      category();
      await instance({
        method: "get",
        url: "/public/products/get_product",
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          const product: datatypesProduct[] = res.data.filter(
            (item: datatypesProduct) => item.categories === categoriesParam
          );
          if (product) {
            if (sortBy === "sortmin") {
              const sortByMin = product.sort((a, b) =>
                a.name.localeCompare(b.name)
              );
              const itemOffset =
                ((parseInt(pageParam!) - 1) * 20) % sortByMin.length;
              const endOffset = itemOffset + 20;
              setProduct(sortByMin.slice(itemOffset, endOffset));
              setPageCount(Math.ceil(sortByMin.length / 20));
            } else if (sortBy === "Latest") {
              const sortByLstest = product.sort((a, b) => b.id - a.id);
              const itemOffset =
                ((parseInt(pageParam!) - 1) * 20) % sortByLstest.length;
              const endOffset = itemOffset + 20;
              setProduct(sortByLstest.slice(itemOffset, endOffset));
              setPageCount(Math.ceil(sortByLstest.length / 20));
            }
            if (sortRating === 1) {
              const sortByRaing1 = product.filter((item) => item.rating === 1);
              const itemOffset =
                ((parseInt(pageParam!) - 1) * 20) % sortByRaing1.length;
              const endOffset = itemOffset + 20;
              setProduct(sortByRaing1.slice(itemOffset, endOffset));
              setPageCount(Math.ceil(sortByRaing1.length / 20));
            } else if (sortRating === 2) {
              const sortByRaing2 = product.filter((item) => item.rating === 2);
              const itemOffset =
                ((parseInt(pageParam!) - 1) * 20) % sortByRaing2.length;
              const endOffset = itemOffset + 20;
              setProduct(sortByRaing2.slice(itemOffset, endOffset));
              setPageCount(Math.ceil(sortByRaing2.length / 20));
            } else if (sortRating === 3) {
              const sortByRaing3 = product.filter((item) => item.rating === 3);
              const itemOffset =
                ((parseInt(pageParam!) - 1) * 20) % sortByRaing3.length;
              const endOffset = itemOffset + 20;
              setProduct(sortByRaing3.slice(itemOffset, endOffset));
              setPageCount(Math.ceil(sortByRaing3.length / 20));
            } else if (sortRating === 4) {
              const sortByRaing4 = product.filter((item) => item.rating === 4);
              const itemOffset =
                ((parseInt(pageParam!) - 1) * 20) % sortByRaing4.length;
              const endOffset = itemOffset + 20;
              setProduct(sortByRaing4.slice(itemOffset, endOffset));
              setPageCount(Math.ceil(sortByRaing4.length / 20));
            } else if (sortRating === 5) {
              const sortByRaing5 = product.filter((item) => item.rating === 5);
              const itemOffset =
                ((parseInt(pageParam!) - 1) * 20) % sortByRaing5.length;
              const endOffset = itemOffset + 20;
              setProduct(sortByRaing5.slice(itemOffset, endOffset));
              setPageCount(Math.ceil(sortByRaing5.length / 20));
            }
            if (sortPrice > 0) {
              const sort_Price = product.filter(
                (item) => item.price <= sortPrice
              );
              const itemOffset =
                ((parseInt(pageParam!) - 1) * 20) % sort_Price.length;
              const endOffset = itemOffset + 20;
              setProduct(sort_Price.slice(itemOffset, endOffset));
              setPageCount(Math.ceil(sort_Price.length / 20));
            }
            if (!sortBy && !sortRating && !sortPrice) {
              const itemOffset =
                ((parseInt(pageParam!) - 1) * 20) % product.length;
              const endOffset = itemOffset + 20;
              setProduct(product.slice(itemOffset, endOffset));
              setPageCount(Math.ceil(product.length / 20));
            }
          }
        } else {
          navigate("/error");
        }
      });
    };
    fetchs();
    if (state?.status) {
      window.scroll(0, 0);
    }
  }, [categoriesParam, pageParam, sortBy, sortRating, sortPrice]);

  // sortBy
  const handleChangeSortBy = (event: SelectChangeEvent) => {
    setSortby(event.target.value);
    setSortRating(0);
    setSortPrice(0);
    setValueSlider(0);
  };

  return (
    <>
      <Header />
      <Breadcrumbs
        categoies={categoriesParam}
        tltle={undefined}
        Detail={undefined}
        EditAndadd={undefined}
      />
      <div className="container mx-auto p-4 box-border grid grid-flow-row grid-cols-5 gap-3 justify-items-start items-start bg-gray-scale-white text-gray-scale-gray-600 font-body-medium-body-medium-600 bg-gree">
        <div className="col-span-5 sm:col-span-1 grid grid-flow-row  text-gray-scale-white ">
          <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-1 text-sm gap-6   text-gray-scale-gray-900">
            <div className="flex flex-row items-start justify-start gap-[8px] text-gray-scale-gray-500">
              <div className=" leading-[150%] text-base hidden md:block">
                เรียงตาม
              </div>
              <FormControl>
                <InputLabel id="demo-select-small-label">เรียงตาม</InputLabel>
                <Select
                  className="text-sm"
                  size="small"
                  value={sortBy ? sortBy : "sortmin"}
                  onChange={handleChangeSortBy}
                  label="Sort by"
                >
                  <MenuItem value={"Latest"}>ล่าสุด</MenuItem>
                  <MenuItem value={"sortmin"} selected>
                    A-Z
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex flex-col items-start justify-center max-w-full w-full">
              <div>ราคา</div>
              <Slider
                onChangeCommitted={(event, value) => {
                  setSortPrice(value as number);
                  setSortby("");
                  setSortRating(0);
                  {
                    event;
                  }
                }}
                onChange={(event, value) => {
                  setValueSlider(value as number);
                  {
                    event;
                  }
                }}
                value={valueSlider}
                step={1}
                max={300}
                valueLabelDisplay="auto"
                marks={[
                  { value: 0, label: "0" },
                  { value: 50, label: "50" },
                  { value: 150, label: "150" },
                  { value: 250, label: "250" },
                ]}
              />
              <div className=" text-baes leading-[150%] text-gray-scale-gray-700"></div>
            </div>
            <div className="flex flex-col items-start justify-start text-sm ">
              <div className="flex flex-row items-center justify-between text-base">
                <div className="  font-medium">หมวดหมู่</div>
                <img className=" w-3.5 h-2" alt="" src="/img/vector.svg" />
              </div>
              <FormControl>
                <RadioGroup
                  value={categoriesParam}
                  sx={{
                    "& .Mui-checked": {
                      color: "green",
                    },
                  }}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSortby("");
                    setSortRating(0);
                    setSortPrice(0);
                    setValueSlider(0);
                    navigate(`/product/categories/${event.target.value}/1`);
                  }}
                >
                  {category_item.map((item, index) => (
                    <div key={index}>
                      <FormControlLabel
                        key={index}
                        value={item.category_name}
                        control={<Radio />}
                        label={item.category_name}
                      />
                      {`(${item.quantity})`}
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <div className="flex flex-col items-start justify-start text-sm">
              <div className="bg-gray-scale-white flex flex-row items-center justify-between box-border text-base">
                <div className=" leading-[150%] font-medium">รีวิว</div>
                <img className=" w-3.5 h-2" alt="" src="/img/vector.svg" />
              </div>
              <div className="flex flex-row items-center justify-center py-2.5 gap-[8px]">
                <div className="flex flex-row flex-wrap gap-2 items-center justify-start sm:text-[30px] text-base">
                  <div className=" leading-[150%] text-base">{`5.0`}</div>
                  <Rating
                    name="select"
                    size="small"
                    precision={1}
                    value={sortRating}
                    emptyIcon={<StarIcon fontSize="inherit" />}
                    onChange={(event, newValue) => {
                      setSortRating(newValue);
                      setSortby("");
                      setSortPrice(0);
                      setValueSlider(0);
                      {
                        event;
                      }
                    }}
                  />
                </div>
              </div>
              <span className="font-medium text-gray-scale-gray-900 flex flex-wrap items-center gap-2">
                <span>คะแนน </span>
                <Rating
                  size="small"
                  value={5}
                  emptyIcon={<StarIcon fontSize="inherit" />}
                  readOnly
                />
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-5 sm:col-span-4 box-border justify-items-end">
          <div className="  text-base text-gray-scale-gray-900">
            <span>
              <span className="leading-[120%] font-semibold">
                {
                  ProductsItem.filter(
                    (item) => item.categories === categoriesParam
                  ).length
                }
              </span>
            </span>
            <span className="leading-[150%] text-gray-scale-gray-600">
              <span>{` `}</span>
              <span>รายการ</span>
            </span>
          </div>
          <div className="grid grid-flow-row xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 sm:gap-4">
            {ProductsItem.length > 0 ? (
              ProductsItem.map((item: datatypesProduct) => (
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
                      <div className="text-white flex flex-row items-center gap-1 justify-center bg-limegreen-100/80   max-w-full w-full  h-full cursor-pointer">
                        <div>ยกเลิก</div>
                        <img
                          className=" cursor-pointer z-50 opacity-70"
                          alt=""
                          src="/img/add-to-cart2.svg"
                        />
                      </div>
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
              ))
            ) : (
              <div className="  top-[150px] left-[400px]">
                <h2>ไม่มีสินค้า.........</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" container mx-auto p-4 box-border flex flex-row items-center justify-center gap-[12px] text-center">
        <div className="flex flex-row items-start justify-start">
          <Pagination
            count={pageCount}
            variant="outlined"
            shape="rounded"
            page={parseInt(pageParam!)}
            boundaryCount={1}
            onChange={(event: React.ChangeEvent<unknown>, value: number) => {
              navigate(`/product/categories/${categoriesParam}/${value}`);
              {
                event;
              }
            }}
            sx={{
              "& .Mui-selected": {
                bgcolor: "rgba(22, 163, 5, 0.3)",
                border: "solid 1px rgb(22,163,10)",
              },
            }}
          />
        </div>
      </div>
      <Outlet />
      {/* <Foorter /> */}
      <SignIn SignIn={{ openSignIn, setOpenSignIn }} />
    </>
  );
};

export default Categories;
