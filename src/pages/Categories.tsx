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
  const [sortBy, setSortby] = useState<string | null>(null);
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
          if (parseInt(pageParam!) <= Math.ceil(product.length / 20)) {
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
      {
        <div className="relative bg-gray-scale-white w-full h-[2750px] overflow-hidden text-left text-base text-gray-scale-gray-600 font-body-medium-body-medium-600 bg-gree">
          <SignIn SignIn={{ openSignIn, setOpenSignIn }} />
          <Header />
          <Breadcrumbs
            categoies={categoriesParam}
            tltle={undefined}
            Detail={undefined}
            EditAndadd={undefined}
          />
          <div className=" relative top-[347px] box-border left-[0px] text-sm text-gray-scale-gray-700">
            <div className=" relative grid grid-cols-4 gap-5 mx-6">
              <div className=" relative box-border top-[70px] left-[0px] flex flex-col items-start justify-start text-xl text-gray-scale-gray-900">
                <div className="flex flex-col items-start justify-start text-sm pb-10">
                  <div className="w-[312px] flex flex-row items-center justify-between pt-0 px-0 pb-5 box-border text-xl">
                    <div className="relative leading-[150%] font-medium">
                      All Categories
                    </div>
                    <img
                      className="relative w-3.5 h-2"
                      alt=""
                      src="/img/vector.svg"
                    />
                  </div>
                  <FormControl>
                    <RadioGroup
                      value={categoriesParam}
                      sx={{
                        "& .Mui-checked": {
                          color: "green",
                        },
                      }}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
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
                <div className="relative box-border w-[313px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
                <div className="flex flex-col items-start justify-center pt-0 px-0 pb-6 gap-[16px]">
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
                    sx={{ width: 250 }}
                    max={300}
                    valueLabelDisplay="on"
                    marks={[
                      { value: 0, label: "0" },
                      { value: 50, label: "50" },
                      { value: 150, label: "150" },
                      { value: 250, label: "250" },
                    ]}
                  />
                  <div className="relative text-sm leading-[150%] text-gray-scale-gray-700">
                    <span>Price:</span>
                    <span className="font-medium text-gray-scale-gray-900">
                      {" "}
                      0 — 300
                    </span>
                  </div>
                </div>
                <div className="relative box-border w-[313px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
                <div className="flex flex-col items-start justify-start text-sm">
                  <div className="bg-gray-scale-white w-[312px] flex flex-row items-center justify-between py-5 px-0 box-border text-xl">
                    <div className="relative leading-[150%] font-medium">
                      Rating
                    </div>
                    <img
                      className="relative w-3.5 h-2"
                      alt=""
                      src="/img/vector.svg"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[8px]">
                    <div className="flex flex-row items-center justify-start gap-5">
                      <Rating
                        name="select"
                        sx={{
                          fontSize: "30px",
                        }}
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
                      <div className="relative leading-[150%]">{`5.0`}</div>
                    </div>
                  </div>
                  <span className="font-medium text-gray-scale-gray-900 flex gap-3">
                    <span>Rating: </span>
                    <Rating
                      size="small"
                      value={5}
                      emptyIcon={<StarIcon fontSize="inherit" />}
                      readOnly
                    />
                  </span>
                </div>
                <div className="relative box-border w-[313px] mt-10" />
                <div className="rounded-[10px] flex flex-col items-center justify-start pt-10 px-0 pb-[300px] gap-[12px] bg-[url('/img/bannar@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-13xl text-darkorange">
                  <div className="flex flex-col items-center justify-center pt-5 px-0 pb-0 gap-[2px]">
                    <div className="relative inline-block w-[312px]"></div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center pt-5 px-0 pb-0 gap-[12px]">
                  <div className="relative leading-[150%] font-medium">
                    Sale Products
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16px] text-sm text-gray-scale-gray-700">
                    <div className="rounded-md bg-gray-scale-white flex flex-row items-start justify-start border-[1px] border-solid border-gray-scale-gray-100">
                      <div className="flex flex-row items-start justify-start p-[5px]">
                        <img
                          className="relative w-[102px] h-[102px] object-cover"
                          alt=""
                          src="/img/image15@2x.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center pt-6 px-3 pb-[25px] gap-[6px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[150%] inline-block w-44">
                            Red Capsicum
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
                            <div className="relative leading-[150%] font-medium">
                              $32.00
                            </div>
                            <div className="relative [text-decoration:line-through] leading-[150%] text-gray-scale-gray-400">
                              $20.99
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-13.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-13.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-13.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-13.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-53.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md bg-gray-scale-white shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] flex flex-row items-start justify-start text-branding-success-dark border-[1px] border-solid border-branding-success">
                      <div className="flex flex-row items-start justify-start p-[5px]">
                        <img
                          className="relative w-[102px] h-[102px] object-cover"
                          alt=""
                          src="/img/image16@2x.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center pt-6 px-3 pb-[25px] gap-[6px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[150%] inline-block w-44">
                            Chanise Cabbage
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
                            <div className="relative leading-[150%] font-medium">
                              $24.00
                            </div>
                            <div className="relative [text-decoration:line-through] leading-[150%] text-gray-scale-gray-400">
                              $20.99
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-14.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-14.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-14.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-14.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-54.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md bg-gray-scale-white flex flex-row items-start justify-start border-[1px] border-solid border-gray-scale-gray-100">
                      <div className="flex flex-row items-start justify-start p-[5px]">
                        <img
                          className="relative w-[102px] h-[102px] object-cover"
                          alt=""
                          src="/img/image17@2x.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center pt-6 px-3 pb-[25px] gap-[6px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[150%] inline-block w-44">
                            Green Capsicum
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
                            <div className="relative leading-[150%] font-medium">
                              $32.00
                            </div>
                            <div className="relative [text-decoration:line-through] leading-[150%] text-gray-scale-gray-400">
                              $20.99
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-14.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-14.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-14.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-14.svg"
                          />
                          <img
                            className="relative w-3 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/img/star-54.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" relative grid-cols-4 gap-2 col-span-3 box-border justify-start items-start">
                <div className=" flex flex-wrap gap-4 justify-start">
                  {ProductsItem.length > 0 ? (
                    ProductsItem.map((item: datatypesProduct) => (
                      <div
                        key={item.id}
                        className=" relative top-[69px] left-[0px] border-gray-scale-gray-100 bg-gray-scale-white hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] box-border h-[307px] text-black  hover:text-branding-success-dark border-[1px] border-solid hover:border-branding-success-dark"
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
                              cookie.get("_ur") ? addTocart(item) : null;
                                cookie.get("_ur")
                                  ? setOpenSignIn(false)
                                  : setOpenSignIn(true);
                            }}
                          >
                            <img
                              className="absolute cursor-pointer h-[15.83%] w-[15.82%] top-[80.42%] right-[6.41%] bottom-[6.76%] left-[75.77%] max-w-full overflow-hidden max-h-full"
                              alt=""
                              src="/img/add-to-cart.svg"
                            />
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className=" relative top-[150px] left-[400px]">
                      <h2>ไม่มีสินค้า.........</h2>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className=" relative top-[130px] left-[800px] flex flex-row items-start justify-start gap-[12px] text-center">
              <div className="flex flex-row items-start justify-start">
                <Pagination
                  count={pageCount}
                  variant="outlined"
                  shape="rounded"
                  page={parseInt(pageParam!)}
                  boundaryCount={1}
                  onChange={(
                    event: React.ChangeEvent<unknown>,
                    value: number
                  ) => {
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
            <div className="absolute top-[0px] left-[20px] w-[1617px] h-[45px] text-gray-scale-white">
              <div className="absolute top-[0px] left-[0px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 gap-[12px]">
                <div className="relative leading-[120%] font-semibold">
                  Filter
                </div>
                <img
                  className="relative w-[21.5px] h-[18.5px]"
                  alt=""
                  src="/img/filter-24px.svg"
                />
              </div>
              <div className="relative top-[2px] left-[376px] flex flex-row items-center justify-start gap-[8px] text-gray-scale-gray-500">
                <div className="relative leading-[150%]">Sort by:</div>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Sort by</InputLabel>
                  <Select
                    value={sortBy ? sortBy : ""}
                    onChange={handleChangeSortBy}
                    label="Sort by"
                  >
                    <MenuItem value={"Latest"}>Latest</MenuItem>
                    <MenuItem value={"sortmin"}>Sort a-z</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="absolute top-[11px] left-[1320px] text-base text-gray-scale-gray-900">
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
                  <span>Results Found</span>
                </span>
              </div>
            </div>
          </div>
          <Foorter />
          <Outlet />
        </div>
      }
    </>
  );
};

export default Categories;
