import { FunctionComponent } from "react";
import { HeaderContext } from "./unities/Header";
import { Foorter } from "./unities/Foorter";
import { Link } from "react-router-dom";

const Homepage: FunctionComponent = () => {
  return (

    <div className="relative bg-gray-scale-white w-full h-[5574px] overflow-hidden text-left text-sm text-gray-100 font-body-tiny-body-tiny-400">
      {/* header template */}
      <HeaderContext />
      {/* 11 */}
      <div className="absolute top-[4711px] left-[130px] w-[1320px] h-[270px] overflow-hidden text-center text-13xl">
        <div className="absolute top-[0px] left-[471px] leading-[120%] font-semibold">
          Follow us on Instagram
        </div>
        <a href="#">
          <img
            className="absolute top-[70px] left-[0px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
            alt=""
            src="/-instagram-post@2x.png"
          />
        </a>
        <a href="#">
          <img
            className="absolute top-[70px] left-[448px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
            alt=""
            src="/-instagram-post1@2x.png"
          />
        </a>
        <a href="#">
          <img
            className="absolute top-[70px] left-[672px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
            alt=""
            src="/-instagram-post2@2x.png"
          />
        </a>
        <a href="#">
          <img
            className="absolute top-[70px] left-[896px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
            alt=""
            src="/-instagram-post3@2x.png"
          />
        </a>
        <a href="#">
          <img
            className="absolute top-[70px] left-[1120px] rounded-3xs w-[200px] h-[200px] object-cover hover:transition-all hover:translate-y-[-5px]"
            alt=""
            src="/-instagram-post4@2x.png"
          />
        </a>
        <a href="#" className="absolute top-[70px] left-[224px] w-[200px] h-[200px] hover:translate-y-[-5px] hover:transition-all">
          <img
            className="absolute top-[0px] left-[0px] rounded-3xs w-[200px] h-[200px] object-cover"
            alt=""
            src="/-instagram-post5@2x.png"
          />
          <img
            className="absolute top-[84px] left-[84px] w-8 h-8 overflow-hidden"
            alt=""
            src="/icons.svg"
          />
        </a>
      </div>
      {/* 10 */}
      <div className="absolute top-[4559px] left-[100px] w-[1320px] flex flex-row items-center justify-between py-[60px] px-0 box-border">
        <img className="relative w-[81.58px] h-8" alt="" src="/vector.svg" />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img className="relative w-[66.94px] h-8" alt="" src="/mango1.svg" />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img className="relative w-[59.94px] h-8" alt="" src="/group.svg" />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img
          className="relative w-[82.64px] h-8 overflow-hidden shrink-0"
          alt=""
          src="/food.svg"
        />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img
          className="relative w-[131.02px] h-8 overflow-hidden shrink-0"
          alt=""
          src="/bookoffcorporationlogo.svg"
        />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img className="relative w-[95.5px] h-8" alt="" src="/group1.svg" />
      </div>
      {/* 9 */}
      <div className="absolute top-[4108px] left-[-158px] bg-gray-scale-gray-50 flex flex-col items-center justify-center py-[60px] px-0 gap-[32px] text-center text-13xl">
        <div className="w-[1920px] flex flex-row items-center justify-between py-0 px-[300px] box-border">
          <div className="relative leading-[120%] font-semibold">
            Client Testimonials
          </div>
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <img
              className="relative w-[45px] h-[45px]"
              alt=""
              src="/aoorw.svg"
            />
            <img
              className="relative w-[45px] h-[45px]"
              alt=""
              src="/aoorw1.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[24px] text-left text-sm text-gray-scale-gray-700">
          <div className="rounded-lg bg-gray-scale-white shadow-[0px_10px_20px_rgba(0,_0,_0,_0.01)] flex flex-col items-start justify-start p-6 gap-[16px]">
            <img
              className="relative w-8 h-[26px] opacity-[0.3]"
              alt=""
              src="/vector1.svg"
            />
            <div className="relative leading-[150%] inline-block w-[376px]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
            </div>
            <div className="w-[376px] flex flex-row items-center justify-between pt-2 px-0 pb-0 box-border text-center text-base text-gray-100">
              <a href="#" className=" no-underline text-black hover:text-green-600 w-[168px] flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative rounded-[50%] w-14 h-14 object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[150%] font-medium">
                    Robert Fox
                  </div>
                  <div className="relative text-sm leading-[150%] text-gray-scale-gray-400">
                    Customer
                  </div>
                </div>
              </a>
              <div className="flex flex-row items-start justify-start gap-[1px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gray-scale-white shadow-[0px_10px_20px_rgba(0,_0,_0,_0.01)] flex flex-col items-start justify-start p-6 gap-[16px]">
            <img
              className="relative w-8 h-[26px] opacity-[0.3]"
              alt=""
              src="/vector1.svg"
            />
            <div className="relative leading-[150%] inline-block w-[376px]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
            </div>
            <div className="w-[376px] flex flex-row items-center justify-between pt-2 px-0 pb-0 box-border text-center text-base text-gray-100">
              <div className="w-[168px] flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative rounded-[50%] w-14 h-14 object-cover"
                  alt=""
                  src="/image1@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[150%] font-medium">
                    Dianne Russell
                  </div>
                  <div className="relative text-sm leading-[150%] text-gray-scale-gray-400">
                    Customer
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gray-scale-white shadow-[0px_10px_20px_rgba(0,_0,_0,_0.01)] flex flex-col items-start justify-start p-6 gap-[16px]">
            <img
              className="relative w-8 h-[26px] opacity-[0.3]"
              alt=""
              src="/vector1.svg"
            />
            <div className="relative leading-[150%] inline-block w-[376px]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
            </div>
            <div className="w-[376px] flex flex-row items-center justify-between pt-2 px-0 pb-0 box-border text-center text-base text-gray-100">
              <div className="w-[168px] flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative rounded-[50%] w-14 h-14 object-cover"
                  alt=""
                  src="/image2@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[150%] font-medium">
                    Eleanor Pena
                  </div>
                  <div className="relative text-sm leading-[150%] text-gray-scale-gray-400">
                    Customer
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/star-6.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 8 */}
      <div className="absolute top-[3484px] left-[130px] w-[1320px] h-[564px] text-center text-xl">
        <div className="absolute top-[0px] left-[563px] text-13xl leading-[120%] font-semibold">
          Latest News
        </div>
        <div className="absolute top-[70px] left-[0px] shadow-[0px_20px_50px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start">
          <div className="relative w-[424px] h-[324px]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image3@2x.png"
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
                    src="/tag-1.svg"
                  />
                  <div className="relative leading-[150%]">Food</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4px] text-gray-scale-gray-500">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/user-3-1.svg"
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
                    src="/chatcentered-1.svg"
                  />
                  <div className="relative leading-[150%]">65 Comments</div>
                </div>
              </div>
              <div className="relative text-lg leading-[150%] font-medium text-branding-success-dark inline-block w-[376px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </div>
            </div>
            <a href="#" className=" no-underline rounded-24xl flex flex-row items-center justify-start gap-[12px] text-base text-branding-success">
              <div className="relative leading-[120%] font-semibold">
                Read More
              </div>
              <img
                className="relative w-[16.5px] h-[13.55px]"
                alt=""
                src="/arrow.svg"
              />
            </a>
          </div>
        </div>
        <div className="absolute top-[70px] left-[448px] flex flex-col items-start justify-start">
          <div className="relative w-[424px] h-[324px]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image4@2x.png"
            />
            <div className="absolute bottom-[24px] left-[24px] rounded bg-gray-200 w-[58px] h-[58px]">
              <div className="absolute top-[6px] left-[17px] leading-[150%] font-medium">
                29
              </div>
              <div className="absolute top-[36px] left-[17px] text-xs tracking-[0.03em] leading-[100%] uppercase font-medium text-gray-scale-gray-500">
                Jan
              </div>
            </div>
          </div>
          <div className="rounded-t-none rounded-b-lg bg-gray-scale-white flex flex-col items-start justify-start p-6 gap-[20px] text-left text-sm text-gray-scale-gray-700 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/tag-11.svg"
                  />
                  <div className="relative leading-[150%]">Food</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4px] text-gray-scale-gray-500">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/user-3-11.svg"
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
                    src="/chatcentered-1.svg"
                  />
                  <div className="relative leading-[150%]">65 Comments</div>
                </div>
              </div>
              <div className="relative text-lg leading-[150%] font-medium text-gray-100 inline-block w-[376px]">
                Eget lobortis lorem lacinia. Vivamus pharetra semper,
              </div>
            </div>
            <div className="rounded-24xl flex flex-row items-center justify-start gap-[12px] text-base text-branding-success">
              <div className="relative leading-[120%] font-semibold">
                Read More
              </div>
              <img
                className="relative w-[16.5px] h-[13.55px]"
                alt=""
                src="/arrow.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[70px] left-[896px] flex flex-col items-start justify-start">
          <div className="relative w-[424px] h-[324px]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image5@2x.png"
            />
            <div className="absolute bottom-[24px] left-[24px] rounded bg-gray-200 w-[58px] h-[58px]">
              <div className="absolute top-[6px] left-[20px] leading-[150%] font-medium">
                21
              </div>
              <div className="absolute top-[36px] left-[19px] text-xs tracking-[0.03em] leading-[100%] uppercase font-medium text-gray-scale-gray-500">
                Feb
              </div>
            </div>
          </div>
          <div className="rounded-t-none rounded-b-lg bg-gray-scale-white flex flex-col items-start justify-start p-6 gap-[20px] text-left text-sm text-gray-scale-gray-700 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/tag-11.svg"
                  />
                  <div className="relative leading-[150%]">Food</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4px] text-gray-scale-gray-500">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/user-3-11.svg"
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
                    src="/chatcentered-1.svg"
                  />
                  <div className="relative leading-[150%]">65 Comments</div>
                </div>
              </div>
              <div className="relative text-lg leading-[150%] font-medium text-gray-100 inline-block w-[376px]">
                Maecenas blandit risus elementum mauris malesuada.
              </div>
            </div>
            <div className="rounded-24xl flex flex-row items-center justify-start gap-[12px] text-base text-branding-success">
              <div className="relative leading-[120%] font-semibold">
                Read More
              </div>
              <img
                className="relative w-[16.5px] h-[13.55px]"
                alt=""
                src="/arrow.svg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 7 */}
      <div className="absolute top-[2997px] left-[130px] w-[1320px] h-[397px] text-gray-scale-gray-700">
        <div className="absolute top-[0px] left-[0px] w-[1320px] flex flex-row items-center justify-between text-13xl text-gray-100">
          <div className="relative leading-[120%] font-semibold">
            Featured Products
          </div>
          <a href="#" className=" hover:translate-x-1 no-underline rounded-24xl flex flex-row items-center justify-center gap-[12px] text-base text-branding-success">
            <div className="relative leading-[150%] font-medium">View All</div>
            <img
              className="relative w-[16.5px] h-[13.55px]"
              alt=""
              src="/group2.svg"
            />
          </a>
        </div>
        <div className="absolute top-[69.5px] left-[-0.5px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image6@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Green Apple
              </div>
              <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-100">
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
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart.svg"
          />
          <div className="absolute top-[16px] left-[16px] rounded bg-branding-error flex flex-row items-center justify-center py-[3px] px-2 gap-[4px] text-gray-scale-white">
            <div className="relative leading-[150%]">Sale</div>
            <div className="relative leading-[150%] font-medium">50%</div>
          </div>
        </div>
        <div className="absolute top-[69.5px] left-[263.5px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image7@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Fresh Indian Malta
              </div>
              <div className="flex flex-row items-start justify-start text-base text-gray-100">
                <div className="relative leading-[150%] font-medium">
                  $20.00
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
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart1.svg"
          />
        </div>
        <div className="absolute top-[69.5px] left-[791.5px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image8@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Green Lettuce
              </div>
              <div className="flex flex-row items-start justify-start text-base text-gray-100">
                <div className="relative leading-[150%] font-medium">$9.00</div>
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
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart1.svg"
          />
        </div>
        <div className="absolute top-[69.5px] left-[1055.5px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image9@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Eggplant
              </div>
              <div className="flex flex-row items-start justify-start text-base text-gray-100">
                <div className="relative leading-[150%] font-medium">
                  $34.00
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
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart1.svg"
          />
        </div>
        <a href="#" className="absolute top-[69.5px] left-[527.5px] bg-gray-scale-white hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] box-border w-[265px] h-[328px] border-gray-scale-gray-100 hover:text-branding-success-dark border-[1px] border-solid hover:border-branding-success-dark">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image10@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Chinese cabbage
              </div>
              <div className="flex flex-row items-start justify-start text-base text-gray-100">
                <div className="relative leading-[150%] font-medium">
                  $12.00
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
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart1.svg"
          />
        </a>
      </div>
      {/* 5 */}
      <div className="absolute top-[1608px] left-[130px] w-[1320px] h-[714px] text-gray-scale-gray-700">
        <div className="absolute top-[-10px] left-[0px] w-[1320px] flex flex-row items-center justify-between text-13xl text-gray-100">
          <div className="relative leading-[120%] font-semibold">
            Popular Products
          </div>
          <a href="#" className="rounded-24xl flex flex-row items-center justify-center gap-[12px] text-base text-branding-success no-underline hover:translate-x-1">
            <div className="relative leading-[150%] font-medium">View All</div>
            <img
              className="relative w-[16.5px] h-[13.55px]"
              alt=""
              src="/group4.svg"
            />
          </a>
        </div>
        <Link to={'/product/vegetables/Apple'} state={{ categories: 'vegetables', product: 'Apple', status: 'toTop' }} className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)]  hover:text-branding-success-dark text-gray-100 hover:border-branding-success-dark absolute top-[59px] left-[0px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image6@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Green Apple
              </div>
              <div className="flex flex-row items-start justify-start gap-[2px] text-base">
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
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-52.svg"
              />
            </div>
          </div>
          <img
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart.svg"
          />
          <div className="absolute top-[16px] left-[16px] rounded bg-branding-error flex flex-row items-center justify-center py-[3px] px-2 gap-[4px] text-gray-scale-white">
            <div className="relative leading-[150%]">Sale</div>
            <div className="relative leading-[150%] font-medium">50%</div>
          </div>
        </Link>
        <div className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)]  hover:text-branding-success-dark text-gray-100 hover:border-branding-success-dark absolute top-[59px] left-[265px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image7@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Fresh Indian Malta
              </div>
              <div className="flex flex-row items-start justify-start text-base text-gray-100">
                <div className="relative leading-[150%] font-medium">
                  $20.00
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-52.svg"
              />
            </div>
          </div>
          <img
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart1.svg"
          />
        </div>
        <div className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)]  hover:text-branding-success-dark text-gray-100 hover:border-branding-success-dark absolute top-[386.5px] left-[265px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image13@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Corn
              </div>
              <div className="flex flex-row items-start justify-start text-base text-gray-100">
                <div className="relative leading-[150%] font-medium">
                  $20.00
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
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart1.svg"
          />
        </div>
        <div className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)]  hover:text-branding-success-dark text-gray-100 hover:border-branding-success-dark absolute top-[386.5px] left-[0px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image19@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Big Potatoes
              </div>
              <div className="flex flex-row items-start justify-start text-base text-gray-100">
                <div className="relative leading-[150%] font-medium">
                  $20.00
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
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart1.svg"
          />
        </div>
        <div className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)]  hover:text-branding-success-dark text-gray-100 hover:border-branding-success-dark absolute top-[386.5px] left-[529px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image11@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Fresh Cauliflower
              </div>
              <div className="flex flex-row items-start justify-start text-base text-gray-100">
                <div className="relative leading-[150%] font-medium">
                  $12.00
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
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart1.svg"
          />
        </div>
        <div className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)]  hover:text-branding-success-dark text-gray-100 hover:border-branding-success-dark absolute top-[59px] left-[793px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image8@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Green Lettuce
              </div>
              <div className="flex flex-row items-start justify-start text-base text-gray-100">
                <div className="relative leading-[150%] font-medium">$9.00</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-52.svg"
              />
            </div>
          </div>
          <img
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart1.svg"
          />
        </div>
        <a href="#" className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)]  hover:text-branding-success-dark text-gray-100 hover:border-branding-success-dark absolute top-[386.5px] left-[793px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image15@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Green Capsicum
              </div>
              <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-100">
                <div className="relative leading-[150%] font-medium">$9.00</div>
                <div className="relative [text-decoration:line-through] leading-[150%] text-gray-scale-gray-400">
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
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart.svg"
          />
          <div className="absolute top-[16px] left-[16px] rounded bg-branding-error flex flex-row items-center justify-center py-[3px] px-2 gap-[4px] text-gray-scale-white">
            <div className="relative leading-[150%]">Sale</div>
            <div className="relative leading-[150%] font-medium">50%</div>
          </div>
        </a>
        <a href="#" className="absolute top-[59px] left-[1058px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100 hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)]  hover:text-branding-success-dark text-gray-100 hover:border-branding-success-dark">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image9@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Eggplant
              </div>
              <div className="flex flex-row items-start justify-start text-base text-gray-100">
                <div className="relative leading-[150%] font-medium">
                  $34.00
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-52.svg"
              />
            </div>
          </div>
          <img
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart1.svg"
          />
        </a>
        <a href="#" className="absolute top-[386.5px] left-[1058px] bg-gray-scale-white box-border w-[265px] h-[328px] border-[1px] border-solid border-gray-scale-gray-100 hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)]  hover:text-branding-success-dark text-gray-100 hover:border-branding-success-dark">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image17@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Green Chili
              </div>
              <div className="flex flex-row items-start justify-start text-base text-gray-100">
                <div className="relative leading-[150%] font-medium">
                  $34.00
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
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart1.svg"
          />
        </a>
        <a href="#" className="absolute top-[59px] left-[529px] border-gray-scale-gray-100 bg-gray-scale-white border-[1px] box-border w-[265px] h-[328px] border-solid hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)]  hover:text-branding-success-dark text-gray-100 hover:border-branding-success-dark">
          <div className="absolute h-[73.17%] w-[99.62%] top-[0%] right-[0.38%] bottom-[26.83%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
            <img
              className="relative w-[254px] h-[230px] object-cover"
              alt=""
              src="/image10@2x.png"
            />
          </div>
          <div className="absolute h-[26.52%] w-[99.62%] top-[73.32%] right-[0.38%] bottom-[0.15%] left-[0%] flex flex-col items-start justify-center p-3 box-border gap-[6px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[150%] inline-block w-60">
                Chinese cabbage
              </div>
              <div className="flex flex-row items-start justify-start text-base text-gray-100">
                <div className="relative leading-[150%] font-medium">
                  $12.00
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-12.svg"
              />
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/star-52.svg"
              />
            </div>
          </div>
          <img
            className="absolute h-[12.2%] w-[15.09%] top-[80.34%] right-[6.42%] bottom-[7.47%] left-[78.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/add-to-cart1.svg"
          />
        </a>
      </div>
      {/* 4 */}
      <div className="absolute top-[1028px] left-[130px] w-[1320px] h-[520px] text-center text-lg">
        <a href="#" className=" hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black absolute top-[306px] left-[671px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center pt-4 px-0 pb-6 gap-[16px] border-[1px] border-solid border-gray-scale-gray-100">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/image-1@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">
            Diabetic Food
          </div>
        </a>
        <a href="#" className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black absolute top-[69px] left-[-1px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center pt-4 px-0 pb-6 gap-[16px] border-[1px] border-solid border-gray-scale-gray-100">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/image-11@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">
            Fresh Fruit
          </div>
        </a>
        <a href="#" className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black absolute top-[306px] left-[-1px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center pt-4 px-0 pb-6 gap-[16px] border-[1px] border-solid border-gray-scale-gray-100">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/image-12@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">{`Bread & Bakery`}</div>
        </a>
        <a href="#" className="absolute top-[69px] left-[223px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center border-[1px] border-solid pt-4 px-0 pb-6 gap-[16px] border-gray-scale-gray-100 hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">
            Fresh Vegetables
          </div>
        </a>
        <a href="#" className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black absolute top-[306px] left-[223px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center pt-4 px-0 pb-6 gap-[16px] border-[1px] border-solid border-gray-scale-gray-100">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/image-14@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">
            Baking Needs
          </div>
        </a>
        <a href="#" className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black absolute top-[69px] left-[447px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center pt-4 px-0 pb-6 gap-[16px] border-[1px] border-solid border-gray-scale-gray-100">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/image-15@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">{`Meat & Fish`}</div>
        </a>
        <a href="#" className=" hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black absolute top-[306px] left-[447px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center pt-4 px-0 pb-6 gap-[16px] border-[1px] border-solid border-gray-scale-gray-100">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/image-16@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">
            Cooking
          </div>
        </a>
        <a href="#" className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black absolute top-[69px] left-[671px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center pt-4 px-0 pb-6 gap-[16px] border-[1px] border-solid border-gray-scale-gray-100">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/image-17@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">
            Snacks
          </div>
        </a>
        <a href="#" className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black absolute top-[69px] left-[895px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center pt-4 px-0 pb-6 gap-[16px] border-[1px] border-solid border-gray-scale-gray-100">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/image-18@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">
            Beverages
          </div>
        </a>
        <a href="#" className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black absolute top-[306px] left-[895px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center pt-4 px-0 pb-6 gap-[16px] border-[1px] border-solid border-gray-scale-gray-100">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/image-19@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">
            Dish Detergents
          </div>
        </a>
        <a href="#" className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black absolute top-[306px] left-[1119px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center pt-4 px-0 pb-6 gap-[16px] border-[1px] border-solid border-gray-scale-gray-100">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/image-110@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">
            Oil
          </div>
        </a>
        <a href="#" className="hover:shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] hover:text-branding-success-dark hover:translate-x-1 hover:border-branding-success-dark no-underline text-black absolute top-[69px] left-[1119px] rounded-8xs bg-gray-scale-white flex flex-col items-center justify-center pt-4 px-0 pb-6 gap-[16px] border-[1px] border-solid border-gray-scale-gray-100">
          <img
            className="relative w-[190px] h-[130px] object-cover"
            alt=""
            src="/image-111@2x.png"
          />
          <div className="relative leading-[150%] font-medium inline-block w-[200px]">{`Beauty & Health`}</div>
        </a>
        <div className="absolute top-[0px] left-[0px] w-[1320px] flex flex-row items-center justify-between text-left text-13xl">
          <div className="relative leading-[120%] font-semibold">
            Popular Categories
          </div>
          <a href="#" className="rounded-24xl flex flex-row items-center justify-center gap-[12px] text-base text-branding-success no-underline hover:translate-x-1">
            <div className="relative leading-[150%] font-medium">View All</div>
            <img
              className="relative w-[16.5px] h-[13.55px]"
              alt=""
              src="/group4.svg"
            />
          </a>
        </div>
      </div>
      {/* 2 */}
      <div className="absolute top-[218px] left-[50px] w-[1980px] h-[600px] overflow-hidden text-gray-scale-white">
        <a href="#" className=" text-white absolute top-[0px] left-[0px] rounded-3xs w-[872px] h-[600px] bg-[url('/bannar-big@3x.png')] bg-cover bg-no-repeat bg-[top] text-29xl">
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
                src="/group5.svg"
              />
            </div>
          </div>
        </a>
        <a href="#" className="absolute top-[0px] left-[900px] w-[600px] h-72 text-gray-100">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/bg@2x.png"
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
                src="/group6.svg"
              />
            </div>
          </div>
        </a>
        <a href="#" className=" text-white absolute top-[312px] left-[900px] w-[600px] h-72 text-center">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/bg1@2x.png"
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
                src="/group7.svg"
              />
            </div>
          </div>
        </a>
      </div>
      {/* 3 */}
      <div className="absolute top-[840px] left-[50px] rounded-lg bg-gray-scale-white shadow-[0px_8px_40px_rgba(0,_38,_3,_0.08)] w-[1500px] flex flex-row items-center justify-between p-10 box-border text-base">
        <div className="flex flex-row items-center justify-center gap-[16px]">
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0"
            alt=""
            src="/deliverytruck-1.svg"
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
            src="/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0 hidden"
            alt=""
            src="/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0 hidden"
            alt=""
            src="/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0"
            alt=""
            src="/headphones-1.svg"
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
            src="/shipping.svg"
          />
          <img
            className="relative w-11 h-11 overflow-hidden shrink-0 hidden"
            alt=""
            src="/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0 hidden"
            alt=""
            src="/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0"
            alt=""
            src="/shoppingbag.svg"
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
            src="/shipping.svg"
          />
          <img
            className="relative w-11 h-11 overflow-hidden shrink-0 hidden"
            alt=""
            src="/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0 hidden"
            alt=""
            src="/shipping.svg"
          />
          <img
            className="relative w-10 h-10 overflow-hidden shrink-0"
            alt=""
            src="/package.svg"
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
      {/* 6 */}
      <div className="absolute top-[2382px] left-[130px] flex flex-row items-start justify-start gap-[24px] text-center text-gray-scale-white">
        <a href="#" className="relative w-[424px] h-[536px] text-white">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-54@2x.png"
          />
          <div className="absolute w-full top-[12.13%] left-[0%] text-21xl leading-[120%] font-semibold inline-block">
            Sale of the Month
          </div>
          <div className="absolute w-full top-[6.53%] left-[0%] tracking-[0.03em] leading-[100%] uppercase font-medium inline-block">
            Best Deals
          </div>
          <div className="absolute h-[9.7%] w-[68.4%] top-[22.57%] right-[15.8%] bottom-[67.72%] left-[15.8%] flex flex-row items-start justify-start gap-[8px] text-5xl">
            <div className="rounded-md flex flex-col items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] inline-block w-14">
                00
              </div>
              <div className="relative text-xs tracking-[0.03em] leading-[100%] uppercase text-gray-400">
                Days
              </div>
            </div>
            <div className="relative leading-[150%] text-gray-300">:</div>
            <div className="rounded-md flex flex-col items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] inline-block w-14">
                02
              </div>
              <div className="relative text-xs tracking-[0.03em] leading-[100%] uppercase text-gray-400">
                Hours
              </div>
            </div>
            <div className="relative leading-[150%] text-gray-300">:</div>
            <div className="rounded-md flex flex-col items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] inline-block w-14">
                18
              </div>
              <div className="relative text-xs tracking-[0.03em] leading-[100%] uppercase text-gray-400">
                Mins
              </div>
            </div>
            <div className="relative leading-[150%] text-gray-300">:</div>
            <div className="rounded-md flex flex-col items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] inline-block w-14">
                46
              </div>
              <div className="relative text-xs tracking-[0.03em] leading-[100%] uppercase text-gray-400">
                Secs
              </div>
            </div>
          </div>
          <div className="absolute h-[8.4%] w-[38.21%] top-[36.75%] right-[30.9%] bottom-[54.85%] left-[30.9%] rounded-24xl bg-gray-scale-white flex flex-row items-center justify-center py-3.5 px-8 box-border gap-[12px] text-justify text-branding-success">
            <div className="relative leading-[120%] font-semibold">
              Shop Now
            </div>
            <img
              className="relative w-[16.5px] h-[13.55px]"
              alt=""
              src="/arrow.svg"
            />
          </div>
        </a>
        <a href="#" className="relative w-[424px] h-[536px] text-white">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-541@2x.png"
          />
          <div className="absolute h-[5.6%] w-[38.92%] top-[23.41%] right-[30.42%] bottom-[70.99%] left-[30.66%] flex flex-row items-center justify-start gap-[8px] text-lg">
            <div className="relative leading-[150%]">Started at</div>
            <div className="relative text-xl leading-[150%] font-semibold text-branding-warning">
              $79.99
            </div>
          </div>
          <div className="absolute w-full top-[12.13%] left-[0%] text-21xl leading-[120%] font-semibold inline-block">
            Low-Fat Meat
          </div>
          <div className="absolute w-full top-[6.53%] left-[0%] tracking-[0.03em] leading-[100%] uppercase font-medium inline-block">
            85% Fat Free
          </div>
          <div className="absolute h-[8.4%] w-[38.21%] top-[34.33%] right-[30.9%] bottom-[57.28%] left-[30.9%] rounded-24xl bg-gray-scale-white flex flex-row items-center justify-center py-3.5 px-8 box-border gap-[12px] text-justify text-branding-success">
            <div className="relative leading-[120%] font-semibold">
              Shop Now
            </div>
            <img
              className="relative w-[16.5px] h-[13.55px]"
              alt=""
              src="/arrow.svg"
            />
          </div>
        </a>
        <a href="#" className="relative w-[424px] h-[536px] text-gray-100">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-542@2x.png"
          />
          <div className="absolute h-[7.28%] w-[37.74%] top-[22.57%] right-[31.13%] bottom-[70.15%] left-[31.13%] flex flex-row items-center justify-start gap-[12px] text-lg">
            <div className="relative leading-[150%]">Up to</div>
            <div className="rounded-8xs bg-gray-100 flex flex-row items-start justify-start py-1.5 px-3 text-gold">
              <div className="relative leading-[150%] font-semibold">
                64% OFF
              </div>
            </div>
          </div>
          <div className="absolute w-full top-[12.13%] left-[0%] text-21xl leading-[120%] font-semibold inline-block">
            100% Fresh Fruit
          </div>
          <div className="absolute w-full top-[6.53%] left-[0%] tracking-[0.03em] leading-[100%] uppercase font-medium inline-block">
            Summer Sale
          </div>
          <div className="absolute h-[8.4%] w-[38.21%] top-[34.33%] right-[30.9%] bottom-[57.28%] left-[30.9%] rounded-24xl bg-gray-scale-white flex flex-row items-center justify-center py-3.5 px-8 box-border gap-[12px] text-justify text-branding-success">
            <div className="relative leading-[120%] font-semibold">
              Shop Now
            </div>
            <img
              className="relative w-[16.5px] h-[13.55px]"
              alt=""
              src="/arrow.svg"
            />
          </div>
        </a>
      </div>
      {/* foorter template */}
      <Foorter />
    </div >
  );
};

export default Homepage;
function useParams(): { categoriesP: any; productList: any; } {
  throw new Error("Function not implemented.");
}

