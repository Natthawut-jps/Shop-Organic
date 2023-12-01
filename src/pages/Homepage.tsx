import { FunctionComponent, useEffect, useState } from "react";
import { Header } from "./unities/Header";
import { Foorter } from "./unities/Foorter";
import { Link } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating/Rating";
import StarIcon from '@mui/icons-material/Star';
import { Alert, Snackbar } from "@mui/material";
import { CartContextProviders } from "./unities/HandleCart";

interface datatypesProduct {
  id: number,
  name: string,
  price: number,
  categories: string,
  rating: number,
  imgURL: string,
  uid: number,
  shoppingHanding: number,
  createdAt: string,
  updatedAt: string,
};

export const Homepage: FunctionComponent = () => {
  const { addTocart, removeCartItem, cartItems } = CartContextProviders();
  const [popularProduct, setPopularProduct] = useState<datatypesProduct[]>([]);
  const [snackbar, setSnackbar] = useState<boolean>(false);

  // productItem
  async function Product() {
    const { data } = await axios.get('/data/popularProduct.json')
    setPopularProduct(data.PopularProduct)
  };

  useEffect(() => {
    Product()
  }, []);

  return (

    <div className="relative bg-gray-scale-white w-full h-[4524px] overflow-hidden text-left text-sm text-gray-100 font-body-tiny-body-tiny-400">
      {/* header template */}
      <Header />
      {/* Sale up to */}
      <div className="absolute top-[218px] left-[50px] w-[1980px] h-[600px] overflow-hidden text-gray-scale-white">
        <a href="#" className=" text-white absolute top-[0px] left-[0px] rounded-3xs w-[872px] h-[600px] bg-[url('/img/bannar-big@3x.png')] bg-cover bg-no-repeat bg-[top] text-29xl">
          <div className="absolute top-[155px] left-[60px] flex flex-col items-start justify-start gap-[28px]">
            <div className="relative leading-[120%] font-semibold inline-block w-[596px]">
              <p className="m-0">{`Fresh & Healthy`}</p>
              <p className="m-0">Organic Food</p>
            </div>
            <div className="flex flex-row items-start justify-start gap-[12px] text-xl">
              <div className="relative bg-branding-success-bright w-0.5 h-[65px]" />
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative leading-[150%] font-medium">
                    Sale up to
                  </div>
                  <div className="rounded-8xs bg-branding-warning flex flex-row items-start justify-start py-1 px-3">
                    <div className="relative leading-[150%] font-semibold">
                      30% OFF
                    </div>
                  </div>
                </div>
                <div className="relative text-sm leading-[150%] opacity-[0.8]">
                  Free shipping on all your order.
                </div>
              </div>
            </div>
            <div className="relative rounded-34xl bg-gray-scale-white w-[191px] h-[51px] text-base text-branding-success">
              <div className="absolute top-[16px] left-[40px] leading-[120%] font-semibold">
                Shop now
              </div>
              <img
                className="absolute h-[26.57%] w-[8.64%] top-[36.72%] right-[20.55%] bottom-[36.72%] left-[70.81%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/img/group5.svg"
              />
            </div>
          </div>
        </a>
        <a href="#" className="absolute top-[0px] left-[900px] w-[600px] h-72 text-gray-100">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/img/bg@2x.png"
          />
          <div className="absolute top-[32px] left-[32px] flex flex-col items-start justify-start gap-[24px]">
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                  Summer Sale
                </div>
                <div className="relative text-13xl leading-[120%] font-semibold">
                  75% OFF
                </div>
              </div>
              <div className="relative leading-[150%] text-gray-scale-gray-600">{`Only Fruit & Vegetable`}</div>
            </div>
            <div className="rounded-24xl flex flex-row items-center justify-center gap-[12px] text-base text-branding-success">
              <div className="relative leading-[120%] font-semibold">
                Shop Now
              </div>
              <img
                className="relative w-[16.5px] h-[13.55px]"
                alt=""
                src="/img/group6.svg"
              />
            </div>
          </div>
        </a>
        <a href="#" className=" text-white absolute top-[312px] left-[900px] w-[600px] h-72 text-center">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/img/bg1@2x.png"
          />
          <div className="absolute top-[67px] left-[40px] flex flex-col items-center justify-start gap-[32px]">
            <div className="flex flex-col items-center justify-center gap-[12px]">
              <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                Best Deal
              </div>
              <div className="relative text-13xl leading-[120%] font-semibold inline-block w-[343px]">
                Special Products Deal of the Month
              </div>
            </div>
            <div className="rounded-24xl flex flex-row items-center justify-center gap-[12px] text-base text-branding-success">
              <div className="relative leading-[120%] font-semibold">
                Shop Now
              </div>
              <img
                className="relative w-[16.5px] h-[13.55px]"
                alt=""
                src="/img/group7.svg"
              />
            </div>
          </div>
        </a>
      </div>
      {/* Free Shipping */}
      <div className="absolute top-[840px] left-[50px] rounded-lg bg-gray-scale-white shadow-[0px_8px_40px_rgba(0,_38,_3,_0.08)] w-[1500px] flex flex-row items-center justify-between p-10 box-border text-base">
        <div className="flex flex-row items-center justify-center gap-[16px]">
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0"
            alt=""
            src="/img/deliverytruck-1.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[120%] font-semibold inline-block w-[250px]">
              Free Shipping
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-[250px]">
              Free shipping on all your order
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[16px]">
          <img
            className="relative w-12 h-12 overflow-hidden shrink-0 hidden"
            alt=""
            src="/img/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0 hidden"
            alt=""
            src="/img/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0 hidden"
            alt=""
            src="/img/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0"
            alt=""
            src="/img/headphones-1.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[120%] font-semibold inline-block w-[250px]">
              Customer Support 24/7
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-[250px]">
              Instant access to Support
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[16px]">
          <img
            className="relative w-12 h-12 overflow-hidden shrink-0 hidden"
            alt=""
            src="/img/shipping.svg"
          />
          <img
            className="relative w-11 h-11 overflow-hidden shrink-0 hidden"
            alt=""
            src="/img/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0 hidden"
            alt=""
            src="/img/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0"
            alt=""
            src="/img/shoppingbag.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[120%] font-semibold inline-block w-[250px]">
              100% Secure Payment
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-[250px]">
              We ensure your money is save
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[16px]">
          <img
            className="relative w-12 h-12 overflow-hidden shrink-0 hidden"
            alt=""
            src="/img/shipping.svg"
          />
          <img
            className="relative w-11 h-11 overflow-hidden shrink-0 hidden"
            alt=""
            src="/img/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0 hidden"
            alt=""
            src="/img/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0"
            alt=""
            src="/img/package.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[120%] font-semibold inline-block w-[250px]">
              Money-Back Guarantee
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-[250px]">
              30 Days Money-Back Guarantee
            </div>
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className="absolute top-[1028px] left-[130px] w-[1320px] h-[320px] text-center text-lg">
        <Link to={'/product/categories/FreshFruit/1'} state={{ status: true }} className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black absolute top-[69px] left-[-1px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center pt-4 px-0 pb-6 gap-[16px] border-[1px] border-solid border-gray-scale-gray-100">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/img/image-11@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">
            Fresh Fruit
          </div>
        </Link>
        <Link to={'/product/categories/vegetables/1'} state={{ status: true }} className="absolute top-[69px] left-[223px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center border-[1px] border-solid pt-4 px-0 pb-6 gap-[16px] border-gray-scale-gray-100 hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/img/image-13@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">
            Fresh Vegetables
          </div>
        </Link>
        <Link to={'/product/categories/Meat&Fish/1'} state={{ status: true }} className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black absolute top-[69px] left-[447px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center pt-4 px-0 pb-6 gap-[16px] border-[1px] border-solid border-gray-scale-gray-100">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/img/image-15@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">{`Meat & Fish`}</div>
        </Link>
        <div className="absolute top-[0px] left-[0px] w-[1320px] flex flex-row items-center justify-between text-left text-13xl">
          <div className="relative leading-[120%] font-semibold">
            Categories
          </div>
        </div>
      </div>
      {/* Popular Product */}
      <div className="absolute top-[1400px] left-[130px] w-[1320px] h-[714px] text-gray-scale-gray-700">
        <div className="absolute top-[-10px] left-[0px] w-[1320px] flex flex-row items-center justify-between text-13xl text-gray-100">
          <div className="relative leading-[120%] font-semibold">
            Popular Product
          </div>
        </div>
        <div className=" grid grid-cols-5 gap-x-3 gap-y-1 box-border">
          {popularProduct && popularProduct.sort((a, b) => a.rating - b.rating).slice(0, 20).map((item: datatypesProduct) => (
            <div key={item.id} className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:border-branding-success-dark relative top-[59px] left-[0px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100">
              <Link to={`/product/detail/${item.categories}/${item.name}`} state={{ product: item, status: 'toTop' }} className="text-gray-100 hover:text-branding-success-dark">
                <div className="absolute top-[0%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[254px] h-[230px] object-cover"
                    alt=""
                    src={item.imgURL}
                  />
                </div>
                <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-60">
                      {item.name}
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[2px] text-base">
                      <div className="relative leading-[150%] font-medium">
                        {`฿${item.price}`}
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[150%] text-gray-scale-gray-400">
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
              {cartItems.some(check => check.pid === item.id) ?
                <div onClick={() => removeCartItem(item.id)}>
                  <img
                    className="absolute cursor-pointer h-[15.2%] w-[18.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[75.49%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src='/img/add-to-cart2.svg'
                  />
                </div>
                :
                <div onClick={() => {
                  addTocart(item);
                  setSnackbar(true);
                }}>
                  <img
                    className="absolute cursor-pointer h-[15.2%] w-[18.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[75.49%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src='/img/add-to-cart.svg'
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
              <div className="absolute top-[16px] left-[16px] rounded bg-branding-error flex flex-row items-center justify-center py-[3px] px-2 gap-[4px] text-gray-scale-white">
                <div className="relative leading-[150%]">Sale</div>
                <div className="relative leading-[150%] font-medium">50%</div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      {/* latest New */}
      <div className="absolute top-[2900px] left-[130px] w-[1320px] h-[564px] text-center text-xl">
        <div className="absolute top-[0px] left-[563px] text-13xl leading-[120%] font-semibold">
          Latest News
        </div>
        <div className=" grid grid-cols-3 gap-x-5">
          {popularProduct.slice(-3).map((item: datatypesProduct) => (
            <div key={item.id} className="relative top-[70px] left-[0px] shadow-[0px_20px_50px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start">
              <div className="relative w-[424px] h-[324px]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src={item.imgURL}
                />
                <div className="absolute bottom-[24px] left-[24px] rounded bg-gray-scale-white w-[58px] h-[58px]">
                  <div className="absolute top-[6px] left-[19px] leading-[150%] font-medium">
                    18
                  </div>
                  <div className="absolute top-[36px] left-[15px] text-xs tracking-[0.03em] leading-[100%] uppercase font-medium text-gray-scale-gray-500">
                    Nov
                  </div>
                </div>
              </div>
              <div className="rounded-t-none rounded-b-lg bg-gray-scale-white flex flex-col items-start justify-start p-6 gap-[20px] text-left text-sm text-gray-scale-gray-700">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start gap-[16px]">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/img/tag-1.svg"
                      />
                      <div className="relative leading-[150%]">Food</div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px] text-gray-scale-gray-500">
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/img/user-3-1.svg"
                      />
                      <div className="relative leading-[150%]">
                        <span>By</span>
                        <span className="text-gray-scale-gray-700"> Admin</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px] text-gray-scale-gray-600">
                      <img
                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                        alt=""
                        src="/img/chatcentered-1.svg"
                      />
                      <div className="relative leading-[150%]">65 Comments</div>
                    </div>
                  </div>
                  <div className=" text-black/70 relative text-lg leading-[150%] font-medium inline-block w-[376px]">
                    {item.name}
                  </div>
                </div>
                <Link to={`/product/${item.categories}/${item.name}`} state={{ product: item, status: 'toTop' }} className=" hover:translate-x-3 no-underline rounded-24xl flex flex-row items-center justify-start gap-[12px] text-base text-branding-success">
                  <div className="relative leading-[120%] font-semibold">
                    Read More
                  </div>
                  <img
                    className="relative w-[16.5px] h-[13.55px]"
                    alt=""
                    src="/img/arrow.svg"
                  />
                </Link>
              </div>
            </div>

          ))
          }
        </div>
      </div>
      {/* Header Follow us on Instagram */}
      <div className="absolute top-[3500px] left-[100px] w-[1320px] flex flex-row items-center justify-between py-[60px] px-0 box-border">
        <img className="relative w-[81.58px] h-8" alt="" src="/img/vector.svg" />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img className="relative w-[66.94px] h-8" alt="" src="/img/mango1.svg" />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img
          className="relative w-[82.64px] h-8 overflow-hidden shrink-0"
          alt=""
          src="/img/food.svg"
        />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img
          className="relative w-[131.02px] h-8 overflow-hidden shrink-0"
          alt=""
          src="/img/bookoffcorporationlogo.svg"
        />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img className="relative w-[95.5px] h-8" alt="" src="/img/group1.svg" />
      </div>
      {/* Follow us on Instagram */}
      <div className="absolute top-[3651px] left-[130px] w-[1320px] h-[270px] overflow-hidden text-center text-13xl">
        <div className="absolute top-[0px] left-[471px] leading-[120%] font-semibold">
          Follow us on Instagram
        </div>
        <a href="#">
          <img
            className="absolute top-[70px] left-[0px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
            alt=""
            src="/img/-instagram-post@2x.png"
          />
        </a>
        <a href="#">
          <img
            className="absolute top-[70px] left-[448px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
            alt=""
            src="/img/-instagram-post1@2x.png"
          />
        </a>
        <a href="#">
          <img
            className="absolute top-[70px] left-[672px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
            alt=""
            src="/img/-instagram-post2@2x.png"
          />
        </a>
        <a href="#">
          <img
            className="absolute top-[70px] left-[896px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
            alt=""
            src="/img/-instagram-post3@2x.png"
          />
        </a>
        <a href="#">
          <img
            className="absolute top-[70px] left-[1120px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
            alt=""
            src="/img/-instagram-post4@2x.png"
          />
        </a>
        <a href="#" className="absolute top-[70px] left-[224px] w-[200px] h-[200px] hover:translate-y-[-5px] hover:transition-all">
          <img
            className="absolute top-[0px] left-[0px] rounded-3xs w-[200px] h-[200px] object-cover"
            alt=""
            src="/img/-instagram-post5@2x.png"
          />
          <img
            className="absolute top-[84px] left-[84px] w-8 h-8 overflow-hidden"
            alt=""
            src="/img/icons.svg"
          />
        </a>
      </div>
      {/* foorter template */}
      <Foorter />
    </div >
  );
};



