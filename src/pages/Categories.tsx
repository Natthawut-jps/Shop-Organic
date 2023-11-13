import { FunctionComponent } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { product } from "./unities/data-develop/product";

const Categories: FunctionComponent = () => {
  const { categories } = useParams();
  const items = product.filter((item) => {
    return (
      item.title === categories
    )
  });
  window.scroll(0, 0);
  return (
    <>
      { categories &&
        <div className="relative bg-gray-scale-white w-full h-[3233px] overflow-hidden text-left text-base text-gray-scale-gray-600 font-body-medium-body-medium-600">
          <Header />
          <Breadcrumbs categoies={categories} tltle={undefined} />
          <div className="absolute top-[2587px] left-[954px] flex flex-row items-start justify-start gap-[12px] text-center">
            <div className="rounded-481xl bg-gray-scale-gray-50 flex flex-row items-start justify-start p-2">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/chevron-down.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="rounded-111xl bg-branding-success flex flex-col items-start justify-start p-2 text-gray-scale-white">
                <div className="relative leading-[150%] font-medium flex items-center justify-center w-5 h-5 shrink-0">
                  1
                </div>
              </div>
              <div className="rounded-111xl bg-gray-scale-white flex flex-col items-start justify-start p-2">
                <div className="relative leading-[150%] flex items-center justify-center w-5 h-5 shrink-0">
                  2
                </div>
              </div>
              <div className="rounded-111xl bg-gray-scale-white flex flex-col items-start justify-start p-2">
                <div className="relative leading-[150%] flex items-center justify-center w-5 h-5 shrink-0">
                  3
                </div>
              </div>
              <div className="rounded-111xl bg-gray-scale-white flex flex-col items-start justify-start p-2">
                <div className="relative leading-[150%] flex items-center justify-center w-5 h-5 shrink-0">
                  4
                </div>
              </div>
              <div className="rounded-111xl bg-gray-scale-white flex flex-col items-start justify-start p-2">
                <div className="relative leading-[150%] flex items-center justify-center w-5 h-5 shrink-0">
                  5
                </div>
              </div>
              <div className="rounded-111xl bg-gray-scale-white flex flex-col items-start justify-start p-2">
                <div className="relative leading-[150%] flex items-center justify-center w-5 h-5 shrink-0">
                  ...
                </div>
              </div>
              <div className="rounded-111xl bg-gray-scale-white flex flex-col items-start justify-start p-2">
                <div className="relative leading-[150%] flex items-center justify-center w-5 h-5 shrink-0">
                  21
                </div>
              </div>
            </div>
            <div className="rounded-481xl bg-gray-scale-white flex flex-row items-start justify-start p-2 [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-scale-gray-100">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/chevron-down1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[347px] left-[60px] w-[1320px] h-[2200px] text-sm text-gray-scale-gray-700">
            <div className="absolute top-[69px] left-[336px] w-[984px] h-[2131px]">
              <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Big Potatos
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
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart.svg"
                />
              </div>
              <div className="absolute top-[431px] left-[0px] rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image1@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Eggplant
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
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart.svg"
                />
              </div>
              <div className="absolute top-[862px] left-[0px] rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image2@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Green Capsicum
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
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart.svg"
                />
              </div>
              <div className="absolute top-[1293px] left-[0px] rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image3@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Green Littuce
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
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart.svg"
                />
              </div>
              <div className="absolute top-[1724px] left-[0px] rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image4@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Red Chili
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
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[336px] rounded-lg bg-gray-scale-white shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] box-border w-[312px] h-[407px] text-branding-success-dark border-[1px] border-solid border-branding-success-dark">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image5@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
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
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart1.svg"
                />
                <img
                  className="absolute h-[21.13%] w-[12.82%] top-[4.91%] right-[6.41%] bottom-[73.96%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[672px] rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image6@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Ladies Finger
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
                      <div className="relative leading-[150%] font-medium">
                        $14.99
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
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart.svg"
                />
                <div className="absolute top-[calc(50%_-_187.5px)] left-[16px] rounded bg-gray-scale-gray-900 flex flex-row items-center justify-center py-[3px] px-2 text-gray-scale-white">
                  <div className="relative leading-[150%]">Out of Stock</div>
                </div>
              </div>
              <div className="absolute top-[431px] left-[672px] rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image7@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Green Apple
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
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart.svg"
                />
              </div>
              <div className="absolute top-[862px] left-[672px] rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image8@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Green Cucumber
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
                      <div className="relative leading-[150%] font-medium">
                        $14.99
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
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart.svg"
                />
                <div className="absolute top-[calc(50%_-_187.5px)] left-[16px] rounded bg-branding-error flex flex-row items-center justify-center py-[3px] px-2 gap-[4px] text-gray-scale-white">
                  <div className="relative leading-[150%]">Sale</div>
                  <div className="relative leading-[150%] font-medium">50%</div>
                </div>
              </div>
              <div className="absolute top-[1293px] left-[672px] rounded-lg bg-gray-scale-white shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] box-border w-[312px] h-[407px] text-branding-success-dark border-[1px] border-solid border-branding-success-dark">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image9@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Green Capsicum
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
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart1.svg"
                />
                <img
                  className="absolute h-[21.13%] w-[12.82%] top-[4.91%] right-[6.41%] bottom-[73.96%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-11.svg"
                />
              </div>
              <div className="absolute top-[1724px] left-[672px] rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image10@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Fresh Mango
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
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart.svg"
                />
              </div>
              <div className="absolute top-[431px] left-[336px] rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image11@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Fresh Cauliflower
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
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart.svg"
                />
              </div>
              <div className="absolute top-[862px] left-[336px] rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image12@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Green Chili
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
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart.svg"
                />
              </div>
              <div className="absolute top-[1293px] left-[336px] rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image13@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Ladies Finger
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
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart.svg"
                />
              </div>
              <div className="absolute top-[1724px] left-[336px] rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/image14@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Red Tomato
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
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/add-to-cart.svg"
                />
              </div>
            </div>
            <div className="absolute top-[69px] left-[0px] flex flex-col items-start justify-start text-xl text-gray-scale-gray-900">
              <div className="flex flex-col items-start justify-start text-sm">
                <div className="w-[312px] flex flex-row items-center justify-between pt-0 px-0 pb-5 box-border text-xl">
                  <div className="relative leading-[150%] font-medium">
                    All Categories
                  </div>
                  <img className="relative w-3.5 h-2" alt="" src="/vector.svg" />
                </div>
                <div className="flex flex-row items-center justify-center pt-0 px-0 pb-2.5 gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-13xl bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200" />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative leading-[150%]">Fresh Fruit (25)</div>
                    <div className="relative leading-[150%] text-gray-scale-gray-500">
                      {" "}
                      (134)
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-13xl bg-gray-scale-white box-border border-[1.5px] border-solid border-branding-success" />
                    <div className="absolute h-3/5 w-3/5 top-[20%] right-[20%] bottom-[20%] left-[20%] rounded-13xl bg-branding-success" />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative leading-[150%]">Vegetables</div>
                    <div className="relative leading-[150%] text-gray-scale-gray-500">
                      {" "}
                      (150)
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-13xl bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200" />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative leading-[150%]">Cooking</div>
                    <div className="relative leading-[150%] text-gray-scale-gray-500">
                      {" "}
                      (54)
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-13xl bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200" />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative leading-[150%]">Snacks</div>
                    <div className="relative leading-[150%] text-gray-scale-gray-500">
                      {" "}
                      (47)
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-13xl bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200" />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative leading-[150%]">Beverages</div>
                    <div className="relative leading-[150%] text-gray-scale-gray-500">
                      {" "}
                      (43)
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-13xl bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200" />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative leading-[150%]">{`Beauty & Health`}</div>
                    <div className="relative leading-[150%] text-gray-scale-gray-500">
                      {" "}
                      (38)
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center pt-2.5 px-0 pb-[26px] gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-13xl bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200" />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative leading-[150%]">{`Bread & Bakery`}</div>
                    <div className="relative leading-[150%] text-gray-scale-gray-500">
                      {" "}
                      (15)
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative box-border w-[313px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
              <div className="flex flex-col items-start justify-center pt-0 px-0 pb-6 gap-[16px]">
                <div className="shadow-[0px_-1px_0px_#e5e5e5] w-[312px] flex flex-row items-center justify-between pt-5 px-0 pb-1 box-border">
                  <div className="relative leading-[150%] font-medium">Price</div>
                  <img className="relative w-3.5 h-2" alt="" src="/vector.svg" />
                </div>
                <img
                  className="relative w-[312px] h-[18px]"
                  alt=""
                  src="/slider.svg"
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
                  <img className="relative w-3.5 h-2" alt="" src="/vector.svg" />
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-200" />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-12.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-2.svg"
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
                      src="/check-1.svg"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-12.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-52.svg"
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
                      src="/star-12.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-52.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-52.svg"
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
                      src="/star-12.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-52.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-52.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-52.svg"
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
                      src="/star-12.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-52.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-52.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-52.svg"
                    />
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-52.svg"
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
                  <img className="relative w-3.5 h-2" alt="" src="/vector.svg" />
                </div>
                <div className="relative w-[294px] h-[197px] text-sm">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl bg-gray-scale-gray-50 flex flex-row items-start justify-start py-1.5 px-4">
                    <div className="relative leading-[150%]">Healthy</div>
                  </div>
                  <div className="absolute top-[0px] left-[94px] rounded-11xl bg-branding-success flex flex-row items-start justify-start py-1.5 px-4 text-gray-scale-white">
                    <div className="relative leading-[150%]">Low fat</div>
                  </div>
                  <div className="absolute top-[0px] left-[184px] rounded-11xl bg-gray-scale-gray-50 flex flex-row items-start justify-start py-1.5 px-4">
                    <div className="relative leading-[150%]">Vegetarian</div>
                  </div>
                  <div className="absolute top-[82px] left-[0px] rounded-11xl bg-gray-scale-gray-50 flex flex-row items-start justify-start py-1.5 px-4">
                    <div className="relative leading-[150%]">Meat</div>
                  </div>
                  <div className="absolute top-[41px] left-[0px] rounded-11xl bg-gray-scale-gray-50 flex flex-row items-start justify-start py-1.5 px-4">
                    <div className="relative leading-[150%]">Kid foods</div>
                  </div>
                  <div className="absolute top-[41px] left-[105px] rounded-11xl bg-gray-scale-gray-50 flex flex-row items-start justify-start py-1.5 px-4">
                    <div className="relative leading-[150%]">Vitamins</div>
                  </div>
                  <div className="absolute top-[82px] left-[76px] rounded-11xl bg-gray-scale-gray-50 flex flex-row items-start justify-start py-1.5 px-4">
                    <div className="relative leading-[150%]">Snacks</div>
                  </div>
                  <div className="absolute top-[123px] left-[177px] rounded-11xl bg-gray-scale-gray-50 flex flex-row items-start justify-start py-1.5 px-4">
                    <div className="relative leading-[150%]">Breackfast</div>
                  </div>
                  <div className="absolute top-[82px] left-[166px] rounded-11xl bg-gray-scale-gray-50 flex flex-row items-start justify-start py-1.5 px-4">
                    <div className="relative leading-[150%]">Tiffin</div>
                  </div>
                  <div className="absolute top-[123px] left-[0px] rounded-11xl bg-gray-scale-gray-50 flex flex-row items-start justify-start py-1.5 px-4">
                    <div className="relative leading-[150%]">Launch</div>
                  </div>
                  <div className="absolute top-[123px] left-[91px] rounded-11xl bg-gray-scale-gray-50 flex flex-row items-start justify-start py-1.5 px-4">
                    <div className="relative leading-[150%]">Dinner</div>
                  </div>
                  <div className="absolute top-[41px] left-[207px] rounded-11xl bg-gray-scale-gray-50 flex flex-row items-start justify-start py-1.5 px-4">
                    <div className="relative leading-[150%]">Bread</div>
                  </div>
                  <div className="absolute top-[164px] left-[0px] rounded-11xl bg-gray-scale-gray-50 flex flex-row items-start justify-start py-1.5 px-4">
                    <div className="relative leading-[150%]">Fruit</div>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] flex flex-col items-center justify-start pt-0 px-0 pb-[180px] gap-[12px] bg-[url('/bannar@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-13xl text-darkorange">
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
                    src="/arrow.svg"
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
                        src="/image15@2x.png"
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
                          src="/star-13.svg"
                        />
                        <img
                          className="relative w-3 h-3 overflow-hidden shrink-0"
                          alt=""
                          src="/star-13.svg"
                        />
                        <img
                          className="relative w-3 h-3 overflow-hidden shrink-0"
                          alt=""
                          src="/star-13.svg"
                        />
                        <img
                          className="relative w-3 h-3 overflow-hidden shrink-0"
                          alt=""
                          src="/star-13.svg"
                        />
                        <img
                          className="relative w-3 h-3 overflow-hidden shrink-0"
                          alt=""
                          src="/star-53.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md bg-gray-scale-white shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] flex flex-row items-start justify-start text-branding-success-dark border-[1px] border-solid border-branding-success">
                    <div className="flex flex-row items-start justify-start p-[5px]">
                      <img
                        className="relative w-[102px] h-[102px] object-cover"
                        alt=""
                        src="/image16@2x.png"
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
                          src="/star-14.svg"
                        />
                        <img
                          className="relative w-3 h-3 overflow-hidden shrink-0"
                          alt=""
                          src="/star-14.svg"
                        />
                        <img
                          className="relative w-3 h-3 overflow-hidden shrink-0"
                          alt=""
                          src="/star-14.svg"
                        />
                        <img
                          className="relative w-3 h-3 overflow-hidden shrink-0"
                          alt=""
                          src="/star-14.svg"
                        />
                        <img
                          className="relative w-3 h-3 overflow-hidden shrink-0"
                          alt=""
                          src="/star-54.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md bg-gray-scale-white flex flex-row items-start justify-start border-[1px] border-solid border-gray-scale-gray-100">
                    <div className="flex flex-row items-start justify-start p-[5px]">
                      <img
                        className="relative w-[102px] h-[102px] object-cover"
                        alt=""
                        src="/image17@2x.png"
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
                          src="/star-14.svg"
                        />
                        <img
                          className="relative w-3 h-3 overflow-hidden shrink-0"
                          alt=""
                          src="/star-14.svg"
                        />
                        <img
                          className="relative w-3 h-3 overflow-hidden shrink-0"
                          alt=""
                          src="/star-14.svg"
                        />
                        <img
                          className="relative w-3 h-3 overflow-hidden shrink-0"
                          alt=""
                          src="/star-14.svg"
                        />
                        <img
                          className="relative w-3 h-3 overflow-hidden shrink-0"
                          alt=""
                          src="/star-54.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[1317px] h-[45px] text-gray-scale-white">
              <div className="absolute top-[0px] left-[0px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 gap-[12px]">
                <div className="relative leading-[120%] font-semibold">Filter</div>
                <img
                  className="relative w-[21.5px] h-[18.5px]"
                  alt=""
                  src="/filter-24px.svg"
                />
              </div>
              <div className="absolute top-[2px] left-[336px] flex flex-row items-center justify-start gap-[8px] text-gray-scale-gray-500">
                <div className="relative leading-[150%]">Sort by:</div>
                <div className="rounded flex flex-row items-center justify-start py-2.5 px-4 text-gray-scale-gray-700 border-[1px] border-solid border-gray-scale-gray-100">
                  <div className="relative leading-[150%] inline-block w-[120px] shrink-0">
                    Latest
                  </div>
                  <img
                    className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                    alt=""
                    src="/chevron-down2.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[11px] left-[1183px] text-base text-gray-scale-gray-900">
                <span>
                  <span className="leading-[120%] font-semibold">52</span>
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
