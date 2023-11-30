import { FunctionComponent, useEffect, useState } from "react";
import { Link, Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import axios from "axios";
import Rating from "@mui/material/Rating";
import StarIcon from '@mui/icons-material/Star';
import { Snackbar, Alert, FormControl, FormControlLabel, Radio, RadioGroup, Pagination } from "@mui/material";
import { CartContextProviders } from "./unities/HandleCart";

interface datatypesProduct {
  id: number,
  name: string,
  price: number,
  categories: string,
  rating: number,
  imgURL: string,
  pid: number,
  uid: number,
  shoppingHanding: number,
  createdAt: string,
  updatedAt: string,
};

export const Categories: FunctionComponent = () => {
  const navigate = useNavigate();
  const { categoriesParam } = useParams();
  const state: { status: boolean } = useLocation().state;
  const [snackbar, setSnackbar] = useState<boolean>(false);
  const [amoutcategories, setAmoutcategories] = useState<string[]>([]);
  const allCategories = [...new Set(amoutcategories)];
  const countCategories = allCategories.map(item => [item, amoutcategories.filter(el => el === item).length])
  const { addTocart, removeCartItem, cartItems } = CartContextProviders();
  const [ProductsItem, setProduct] = useState<datatypesProduct[]>([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [lenProduct, setLenproduct] = useState<number>(0);
  const [page, setPage] = useState(1);
  // product
  useEffect(() => {
    const fetchs = async () => {
      await axios.get('/data/popularProduct.json').then((res) => {
        const product: datatypesProduct[] = res.data.PopularProduct.filter((item: datatypesProduct) => item.categories === categoriesParam);
        const endOffset = itemOffset + 20;
        setProduct(product.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(product.length / 20));
        setLenproduct(product.length)
        setAmoutcategories(res.data.PopularProduct.map((item: datatypesProduct) => item.categories))
      })
    }
    fetchs()
    if (state?.status) {
      window.scroll(0, 0)
    }
  }, [categoriesParam, itemOffset]);
  // handlePagination
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const newOffset = ((value - 1) * 20) % lenProduct;
    setItemOffset(newOffset)
    setPage(value)
    { event }
  };
  console.log(countCategories.map(item => item[1]))
  return (
    <>
      {
        <div className="relative bg-gray-scale-white w-full h-[2750px] overflow-hidden text-left text-base text-gray-scale-gray-600 font-body-medium-body-medium-600 bg-gree">
          <Header />
          <Breadcrumbs categoies={categoriesParam} tltle={undefined} />
          <div className=" relative top-[347px] left-[60px] w-[1520px] text-sm text-gray-scale-gray-700">
            <div className=" grid grid-cols-4 gap-y-2 relative ml-[370px] box-border">
              {ProductsItem.map((item: datatypesProduct) => (
                <div key={item.id} className=" relative top-[69px] left-[0px] border-gray-scale-gray-100 bg-gray-scale-white hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] box-border w-[262px] h-[307px] text-black  hover:text-branding-success-dark border-[1px] border-solid hover:border-branding-success-dark">
                  <Link key={item.id} to={`/product/${item.categories}/${item.name}`} state={{ product: item, status: 'toTop' }} className="hover:text-branding-success-dark text-black">
                    <div className=" relative w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-col items-start justify-start box-border">
                      <img
                        className="relative w-[252px] h-[202px] object-cover"
                        alt=""
                        src="/img/image5@2x.png"
                      />
                    </div>
                    <div className="absolute h-[0%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[150%] inline-block w-[280px]">
                          Chanise Cabbage
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
                          <div className="relative leading-[150%] font-medium">
                            $14.99
                          </div>
                          <div className="relative [text-decoration:line-through] leading-[150%] text-gray-scale-gray-400 hidden">
                            $20.99
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <Rating
                          name="read-only"
                          sx={{
                            fontSize: '13px'
                          }}
                          precision={0.1}
                          value={item.rating}
                          emptyIcon={<StarIcon fontSize="inherit" />}
                          readOnly />
                      </div>
                    </div>
                  </Link>
                  {cartItems.find(check => check.pid === item.id) ?
                    <div onClick={() => removeCartItem(item.id)}>
                      <img
                        className=" cursor-pointer absolute h-[15.83%] w-[15.82%] top-[80.42%] right-[6.41%] bottom-[6.76%] left-[75.77%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/img/add-to-cart2.svg"
                      />
                    </div>
                    :
                    <div onClick={() => {
                      addTocart(item);
                      setSnackbar(true);
                    }}>
                      <img
                        className="absolute cursor-pointer h-[15.83%] w-[15.82%] top-[80.42%] right-[6.41%] bottom-[6.76%] left-[75.77%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/img/add-to-cart.svg"
                      />
                      <Snackbar open={snackbar}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        autoHideDuration={1000}
                        sx={{ width: '100%' }}
                        onClose={() => setSnackbar(false)}
                      >
                        <Alert severity="success">Add to Cart successfully</Alert>
                      </Snackbar>
                    </div>
                  }
                </div>
              ))
              }
            </div>
            <div className=" relative top-[130px] left-[800px] flex flex-row items-start justify-start gap-[12px] text-center">
              {/* paginate */}
              <div className="flex flex-row items-start justify-start">
                <Pagination count={pageCount} variant="outlined" shape="rounded" page={page} boundaryCount={1} onChange={handleChange} sx={{ '& .Mui-selected': { bgcolor: 'rgba(22, 163, 5, 0.3)', border: 'solid 1px rgb(22,163,10)' } }} />
              </div>
            </div>
            <div className="absolute top-[69px] left-[0px] flex flex-col items-start justify-start text-xl text-gray-scale-gray-900">
              <div className="flex flex-col items-start justify-start text-sm pb-10">
                <div className="w-[312px] flex flex-row items-center justify-between pt-0 px-0 pb-5 box-border text-xl">
                  <div className="relative leading-[150%] font-medium">
                    All Categories
                  </div>
                  <img className="relative w-3.5 h-2" alt="" src="/img/vector.svg" />
                </div>
                <FormControl>
                  <RadioGroup
                    value={categoriesParam}
                    sx={{
                      '& .Mui-checked': {
                        color: 'green'
                      },
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      navigate(`/product/${event.target.value}`);
                      handleChange(event, 1)
                    }}
                  >
                    {countCategories.map((item, index) => (
                      <div>
                        <FormControlLabel key={index} value={item[0]} control={<Radio />} label={item[0]} />
                        {`(${item[1]})`}
                      </div>
                    ))
                    }
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="relative box-border w-[313px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
              <div className="flex flex-col items-start justify-center pt-0 px-0 pb-6 gap-[16px]">
                <div className="shadow-[0px_-1px_0px_#e5e5e5] w-[312px] flex flex-row items-center justify-between pt-5 px-0 pb-1 box-border">
                  <div className="relative leading-[150%] font-medium">Price</div>
                  <img className="relative w-3.5 h-2" alt="" src="/img/vector.svg" />
                </div>
                <img
                  className="relative w-[312px] h-[18px]"
                  alt=""
                  src="/img/slider.svg"
                />
                <div className="relative text-sm leading-[150%] text-gray-scale-gray-700">
                  <span>Price:</span>
                  <span className="font-medium text-gray-scale-gray-900">
                    {" "}
                    50 — 1,500
                  </span>
                </div>
              </div>
              <div className="relative box-border w-[313px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
              <div className="flex flex-col items-start justify-start text-sm">
                <div className="bg-gray-scale-white w-[312px] flex flex-row items-center justify-between py-5 px-0 box-border text-xl">
                  <div className="relative leading-[150%] font-medium">Rating</div>
                  <img className="relative w-3.5 h-2" alt="" src="/img/vector.svg" />
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200" />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-12.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-2.svg"
                    />
                    <div className="relative leading-[150%]"> 5.0</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-branding-success" />
                    <img
                      className="absolute h-4/5 w-4/5 top-[10%] right-[10%] bottom-[10%] left-[10%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/img/check-1.svg"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-12.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-52.svg"
                    />
                    <div className="relative leading-[150%]">{` 4.0 & up`}</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200" />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-12.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-52.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-52.svg"
                    />
                    <div className="relative leading-[150%]">{` 3.0 & up`}</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200" />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-12.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-52.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-52.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-52.svg"
                    />
                    <div className="relative leading-[150%]">{` 2.0 & up`}</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center pt-2.5 px-0 pb-6 gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200" />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-12.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-52.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-52.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-52.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-52.svg"
                    />
                    <div className="relative leading-[150%]">{`  1.0 & up`}</div>
                  </div>
                </div>
              </div>
              <div className="relative box-border w-[313px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
              <div className="flex flex-col items-start justify-center pt-0 px-0 pb-[26px]">
                <div className="shadow-[0px_-1px_0px_#e5e5e5] w-[312px] flex flex-row items-center justify-between py-5 px-0 box-border">
                  <div className="relative leading-[150%] font-medium">
                    Popular Tag
                  </div>
                  <img className="relative w-3.5 h-2" alt="" src="/img/vector.svg" />
                </div>
                <div className="relative w-[294px] h-[197px] text-sm">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl bg-gray-scale-gray-50 flex flex-row items-start justify-start py-1.5 px-4">
                    <div className="relative leading-[150%]">Healthy</div>
                  </div>
                  <div className="absolute top-[0px] left-[94px] rounded-11xl bg-branding-success flex flex-row items-start justify-start py-1.5 px-4 text-gray-scale-white">
                    <div className="relative leading-[150%]">Low fat</div>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] flex flex-col items-center justify-start pt-0 px-0 pb-[180px] gap-[12px] bg-[url('/img/bannar@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-13xl text-darkorange">
                <div className="flex flex-col items-center justify-center pt-5 px-0 pb-0 gap-[2px]">
                  <div className="relative inline-block w-[312px]">
                    <span>
                      <span className="leading-[120%] font-semibold">79%</span>
                    </span>
                    <span className="text-5xl leading-[150%] text-gray-scale-gray-900">
                      <span>{` `}</span>
                      <span>Discount</span>
                    </span>
                  </div>
                  <div className="relative text-base leading-[150%] text-gray-scale-gray-700 inline-block w-[312px]">
                    on your first order
                  </div>
                </div>
                <div className="rounded-24xl flex flex-row items-center justify-start gap-[12px] text-left text-base text-branding-success">
                  <div className="relative leading-[120%] font-semibold">
                    Shop Now
                  </div>
                  <img
                    className="relative w-[16.5px] h-[13.55px]"
                    alt=""
                    src="/img/arrow.svg"
                  />
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
            <div className="absolute top-[0px] left-[0px] w-[1617px] h-[45px] text-gray-scale-white">
              <div className="absolute top-[0px] left-[0px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 gap-[12px]">
                <div className="relative leading-[120%] font-semibold">Filter</div>
                <img
                  className="relative w-[21.5px] h-[18.5px]"
                  alt=""
                  src="/img/filter-24px.svg"
                />
              </div>
              <div className="absolute top-[2px] left-[376px] flex flex-row items-center justify-start gap-[8px] text-gray-scale-gray-500">
                <div className="relative leading-[150%]">Sort by:</div>
                <div className="rounded flex flex-row items-center justify-start py-2.5 px-4 text-gray-scale-gray-700 border-[1px] border-solid border-gray-scale-gray-100">
                  <div className="relative leading-[150%] inline-block w-[120px] shrink-0">
                    Latest
                  </div>
                  <img
                    className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                    alt=""
                    src="/img/chevron-down2.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[11px] left-[1320px] text-base text-gray-scale-gray-900">
                <span>
                  <span className="leading-[120%] font-semibold">{countCategories.find(item => item[0] === categoriesParam)?.map((item, index) => index === 1 && item)}</span>
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