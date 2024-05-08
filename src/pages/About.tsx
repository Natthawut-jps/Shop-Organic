import { FunctionComponent } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";

const About: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-scale-white w-full h-[4318px] overflow-hidden text-left text-lg text-gray-scale-gray-900 font-body-large-body-large-400">
      <Header />
      <Breadcrumbs
        categoies={undefined}
        tltle={undefined}
        Detail={undefined}
        EditAndadd={undefined}
      />
      <div className="absolute top-[3596px] left-[0px] flex flex-row items-center justify-around py-20 px-0 box-border container mx-auto p-4">
        <img
          className="relative w-[81.58px] h-8"
          alt=""
          src="/img/vector.svg"
        />
        <div className="relative box-border h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img
          className="relative w-[66.94px] h-8"
          alt=""
          src="/img/mango1.svg"
        />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img
          className="relative w-[82.64px] h-8 overflow-hidden shrink-0"
          alt=""
          src="/img/food.svg"
        />
        <div className="relative box-border h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img
          className="relative w-[131.02px] h-8 overflow-hidden shrink-0"
          alt=""
          src="/img/bookoffcorporationlogo.svg"
        />
      </div>
      <div className="absolute w-full top-[3034px] left-[0px] bg-gray-scale-gray-50 flex flex-col items-center justify-center py-[100px] px-0 gap-[50px] text-center text-29xl">
        <div className="w-full flex flex-row items-center justify-between py-0 px-[300px] box-border">
          <div className="relative leading-[120%] font-semibold">
            Client Testimonail
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[24px] text-left text-sm text-gray-scale-gray-700">
          <div className="rounded-lg bg-gray-scale-white shadow-[0px_10px_20px_rgba(0,_0,_0,_0.01)] flex flex-col items-start justify-start p-6 gap-[16px]">
            <img
              className="relative w-8 h-[26px] opacity-[0.3]"
              alt=""
              src="/img/vector1.svg"
            />
            <div className="relative leading-[150%] inline-block w-[376px]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
            </div>
            <div className="w-[376px] flex flex-row items-center justify-between pt-2 px-0 pb-0 box-border text-center text-base text-gray-scale-gray-900">
              <div className="w-[168px] flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative rounded-[50%] w-14 h-14 object-cover"
                  alt=""
                  src="/img/image3@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[150%] font-medium">
                    ผักกาดหอม
                  </div>
                  <div className="relative text-sm leading-[150%] text-gray-scale-gray-400">
                    พืชผัก
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gray-scale-white shadow-[0px_10px_20px_rgba(0,_0,_0,_0.01)] flex flex-col items-start justify-start p-6 gap-[16px]">
            <img
              className="relative w-8 h-[26px] opacity-[0.3]"
              alt=""
              src="/img/vector1.svg"
            />
            <div className="relative leading-[150%] inline-block w-[376px]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
            </div>
            <div className="w-[376px] flex flex-row items-center justify-between pt-2 px-0 pb-0 box-border text-center text-base text-gray-scale-gray-900">
              <div className="w-[168px] flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative rounded-[50%] w-14 h-14 object-cover"
                  alt=""
                  src="/img/image1@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[150%] font-medium">
                    มะเขือม่วง
                  </div>
                  <div className="relative text-sm leading-[150%] text-gray-scale-gray-400">
                    พืชผัก
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gray-scale-white shadow-[0px_10px_20px_rgba(0,_0,_0,_0.01)] flex flex-col items-start justify-start p-6 gap-[16px]">
            <img
              className="relative w-8 h-[26px] opacity-[0.3]"
              alt=""
              src="/img/vector1.svg"
            />
            <div className="relative leading-[150%] inline-block w-[376px]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
            </div>
            <div className="w-[376px] flex flex-row items-center justify-between pt-2 px-0 pb-0 box-border text-center text-base text-gray-scale-gray-900">
              <div className="w-[168px] flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative rounded-[50%] w-14 h-14 object-cover"
                  alt=""
                  src="/img/image2@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[150%] font-medium">
                    พริกหยวก
                  </div>
                  <div className="relative text-sm leading-[150%] text-gray-scale-gray-400">
                    พืชผัก
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/img/star-6.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2338px] left-[0px] w-full h-[696px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#f2f2f2,_#fff)] w-full h-[736px]" />
        <div className="absolute top-[80px] left-[540px] flex flex-col items-center justify-start gap-[12px] text-center text-29xl">
          <div className="relative leading-[120%] font-semibold">
            Our Awesome Team
          </div>
          <div className="relative text-base leading-[150%] text-gray-scale-gray-600 inline-block w-[640px]">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </div>
        </div>
        <div className="grid grid-cols-4 container mx-auto pl-10">
          <div className=" relative top-[248px] left-[0px] rounded-[10px] w-[312px] h-[368px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-gray-scale-white shadow-[0px_20px_48px_rgba(0,_38,_3,_0.08)]" />
            <div className="absolute h-[14.13%] w-[87.18%] top-[80.43%] right-[6.41%] bottom-[5.43%] left-[6.41%] flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium inline-block w-[272px]">
                Jenny Wilson
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-500 inline-block w-[272px]">{`Ceo & Founder`}</div>
            </div>
            <img
              className="absolute h-[76.09%] w-full top-[0%] right-[0%] bottom-[23.91%] left-[0%] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/img/image3@2x.png"
            />
          </div>
          <div className=" relative top-[248px] left-[0px] w-[312px] h-[368px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-100" />
            <div className="absolute h-[14.13%] w-[87.18%] top-[80.43%] right-[6.41%] bottom-[5.43%] left-[6.41%] flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium inline-block w-[272px]">
                Jane Cooper
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-500 inline-block w-[272px]">
                Worker
              </div>
            </div>
            <img
              className="absolute h-[76.09%] w-full top-[0%] right-[0%] bottom-[23.91%] left-[0%] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/img/image4@2x.png"
            />
          </div>
          <div className=" relative top-[248px] left-[0px] w-[312px] h-[368px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-100" />
            <div className="absolute h-[14.13%] w-[87.18%] top-[80.43%] right-[6.41%] bottom-[5.43%] left-[6.41%] flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium inline-block w-[272px]">
                Cody Fisher
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-500 inline-block w-[272px]">
                Security Guard
              </div>
            </div>
            <img
              className="absolute h-[76.09%] w-full top-[0%] right-[0%] bottom-[23.91%] left-[0%] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/img/image5@2x.png"
            />
          </div>
          <div className=" relative top-[248px] left-[0px] w-[312px] h-[368px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-100" />
            <div className="absolute h-[14.13%] w-[87.18%] top-[80.43%] right-[6.41%] bottom-[5.43%] left-[6.41%] flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium inline-block w-[272px]">
                Robert Fox
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-500 inline-block w-[272px]">
                Senior Farmer Manager
              </div>
            </div>
            <img
              className="absolute h-[76.09%] w-full top-[0%] right-[0%] bottom-[23.91%] left-[0%] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/img/image6@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[1732px] left-[100px] w-[1476px] h-[616px] overflow-hidden text-base text-gray-scale-gray-600">
        <div className="absolute top-[80px] left-[0px] w-[552px] h-[431px]">
          <div className="absolute top-[0px] left-[0px] text-29xl leading-[120%] font-semibold text-gray-scale-gray-900 inline-block w-[552px]">
            We Delivered, You Enjoy Your Order.
          </div>
          <div className="absolute top-[140px] left-[0px] leading-[150%] inline-block w-[536px]">
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
          </div>
          <div className="absolute w-full top-[256px] left-[0px] flex flex-col items-start justify-start gap-[16px] text-sm">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="relative w-5 h-5 overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-limegreen-100 opacity-[0.1]" />
                <img
                  className="absolute h-[62.5%] w-[62.5%] top-[20%]"
                  alt=""
                  src="/img/check-1.svg"
                />
              </div>
              <div className="relative leading-[140%] inline-block w-[508px] shrink-0">
                Sed in metus pellentesque.
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="relative w-5 h-5 overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-limegreen-100 opacity-[0.1]" />
                <img
                  className="absolute h-[62.5%] w-[62.5%] top-[20%] right-[17.5%] bottom-[17.5%] left-[20%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/img/check-1.svg"
                />
              </div>
              <div className="relative leading-[140%] inline-block w-[508px] shrink-0">
                Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="relative w-5 h-5 overflow-hidden shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-limegreen-100 opacity-[0.1]" />
                <img
                  className="absolute h-[62.5%] w-[62.5%] top-[20%] right-[17.5%] bottom-[17.5%] left-[20%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/img/check-1.svg"
                />
              </div>
              <div className="relative leading-[140%] inline-block w-[508px] shrink-0">
                Maecenas ut nunc fringilla erat varius.
              </div>
            </div>
          </div>
          <div className="absolute top-[380px] left-[0px] rounded-24xl bg-limegreen-100 flex flex-row items-center justify-center py-4 px-10 gap-[16px] text-gray-scale-white">
            <div className="relative leading-[120%] font-semibold">
              Shop Now
            </div>
            <img
              className="relative w-[16.5px] h-[13.55px]"
              alt=""
              src="/img/group2.svg"
            />
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[581px] w-[895px] h-[606px] object-cover"
          alt=""
          src="/img/image2@2x.png"
        />
      </div>
      <div className="absolute top-[967px] left-[0px] w-full h-[685px]">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#fafafa,_#fff)] shadow-[0px_1px_0px_#e5e5e5] w-full h-[685px]" />
        <div className="absolute top-[0px] left-[0px] w-[1129px] h-[685px]">
          <img
            className="absolute top-[0px] left-[0px] w-[1129px] h-[685px] object-cover"
            alt=""
            src="/img/bg@2x.png"
          />
          <img
            className="absolute top-[0px] left-[30px] w-[745px] h-[685px] object-cover"
            alt=""
            src="/img/image8@2x.png"
          />
        </div>
        <div className="absolute top-[80px] left-[852px] flex flex-col items-start justify-start gap-[20px] text-37xl text-gren-gray-scale-900">
          <div className="relative leading-[120%] font-semibold">
            <p className="m-0">100% Trusted</p>
            <p className="m-0">Organic Food Store</p>
          </div>
          <div className="relative text-base leading-[150%] text-gray-scale-gray-500 inline-block w-[570px]">{`Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. `}</div>
        </div>
        <div className="absolute top-[330px] left-[852px] bg-gray-scale-white flex flex-row items-center justify-start gap-[16px]">
          <div className="rounded-4981xl bg-limegreen-200 flex flex-col items-start justify-start p-4">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/img/leaf-2.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[150%] font-medium inline-block w-56">
              100% Organic food
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-500 inline-block w-56">{`100% healthy & Fresh food.`}</div>
          </div>
        </div>
        <div className="absolute top-[426px] left-[852px] bg-gray-scale-white flex flex-row items-center justify-start gap-[16px]">
          <div className="rounded-4981xl bg-limegreen-200 flex flex-col items-start justify-start p-4">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/img/stars-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[150%] font-medium inline-block w-56">
              Customer Feedback
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-56">
              Our happy customer
            </div>
          </div>
        </div>
        <div className="absolute top-[522px] left-[852px] bg-gray-scale-white flex flex-row items-center justify-start gap-[16px]">
          <div className="rounded-4981xl bg-limegreen-200 flex flex-col items-start justify-start p-4">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/img/deliverytruck-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[150%] font-medium inline-block w-56">
              Free Shipping
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-56">
              Free shipping with discount
            </div>
          </div>
        </div>
        <div className="absolute top-[331px] left-[1208px] bg-gray-scale-white flex flex-row items-center justify-start gap-[16px]">
          <div className="rounded-4981xl bg-limegreen-200 flex flex-col items-start justify-start p-[18px]">
            <img
              className="relative w-9 h-9 overflow-hidden shrink-0"
              alt=""
              src="/img/headphones-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[150%] font-medium inline-block w-56">
              Great Support 24/7
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-56">
              Instant access to Contact
            </div>
          </div>
        </div>
        <div className="absolute top-[427px] left-[1208px] bg-gray-scale-white flex flex-row items-center justify-start gap-[16px]">
          <div className="rounded-4981xl bg-limegreen-200 flex flex-col items-start justify-start p-[18px]">
            <img
              className="relative w-9 h-9 overflow-hidden shrink-0"
              alt=""
              src="/img/shoppingbag.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[150%] font-medium inline-block w-56">
              100% Sucure Payment
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-56">
              We ensure your money is save
            </div>
          </div>
        </div>
        <div className="absolute top-[523px] left-[1208px] bg-gray-scale-white flex flex-row items-center justify-start gap-[16px]">
          <div className="rounded-4981xl bg-limegreen-200 flex flex-col items-start justify-start p-[18px]">
            <img
              className="relative w-9 h-9 overflow-hidden shrink-0"
              alt=""
              src="/img/package.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[150%] font-medium inline-block w-56">
              100% Organic Food
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-56">{`100% healthy & Fresh food.`}</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[395px] left-[100px] w-[1364px] h-[492px] overflow-hidden text-37xl">
        <div className="absolute top-[96px] left-[0px] leading-[120%] font-semibold inline-block w-[607px]">
          100% Trusted Organic Food Store
        </div>
        <div className="absolute top-[262px] left-[0px] text-lg leading-[150%] text-gray-scale-gray-600 inline-block w-[590px]">
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
          laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
          Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a
          eros non massa vulputate ornare. Vivamus ornare commodo ante, at
          commodo felis congue vitae.
        </div>
        <img
          className="absolute top-[0px] left-[648px] rounded-lg w-[716px] h-[492px] object-cover"
          alt=""
          src="/img/image9@2x.png"
        />
      </div>
      <Foorter />
    </div>
  );
};

export default About;
