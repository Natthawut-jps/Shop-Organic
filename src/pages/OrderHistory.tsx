import { FunctionComponent } from "react";
import { NavAccount } from "./unities/NavAccount";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Link } from "react-router-dom";

const OrderHistory: FunctionComponent = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="relative bg-gray-scale-white w-full h-[1699px] overflow-hidden text-left text-base text-gray-scale-gray-600 font-caps-lock-small-caps-lock">
      <Header />
      <Breadcrumbs categoies={undefined} tltle={undefined} Detail={undefined} EditAndadd={undefined} />
      <NavAccount />
      <div className="absolute top-[347px] left-[400px] w-[984px] h-[742px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-scale-white box-border w-[984px] h-[742px] border-[1px] border-solid border-gray-scale-gray-100" />
        <div className="absolute top-[674px] left-[408px] flex flex-row items-start justify-start gap-[12px] text-center">
          <div className="rounded-481xl bg-gray-scale-gray-50 flex flex-row items-start justify-start p-2">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/img/chevron-down.svg"
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
          </div>
          <div className="rounded-481xl bg-gray-scale-white flex flex-row items-start justify-start p-2 [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-scale-gray-100">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/img/chevron-down1.svg"
            />
          </div>
        </div>
        <div className=" relative top-[110px] pl-[24px] flex flex-col items-start justify-start text-sm text-gray-scale-gray-800">
          {arr.map((item) => (
            <div className="relative w-[956px] h-[45px] odd:bg-white even:bg-slate-50">
              <div className="absolute top-[12px] left-[0px] flex flex-row items-start justify-start">
                <div className="relative leading-[150%]">#</div>
                <div className="relative leading-[150%]">3933</div>
              </div>
              <div className="absolute top-[12px] left-[176px] leading-[150%]">
                4 April, 2021
              </div>
              <div className="absolute top-[12px] left-[400px] leading-[150%]">
                <span className="font-medium">$135.00</span>
                <span> (5 Products)</span>
              </div>
              <div className="absolute top-[12px] left-[668px] leading-[150%]">
                Processing
              </div>
              <Link to={'/Account/Orders/Detail'} className=" no-underline absolute top-[12px] left-[850px] leading-[150%] font-medium text-branding-success">
                View Details
              </Link>
            </div>
          ))

          }
        </div>
        <div className="absolute top-[62px] left-[0px] w-[984px] h-9 text-xs text-gray-scale-gray-700">
          <div className="absolute top-[0px] left-[0px] bg-gray-scale-gray-50 w-[984px] h-9" />
          <div className="absolute top-[12px] left-[24px] tracking-[0.03em] leading-[100%] uppercase font-medium">
            Order ID
          </div>
          <div className="absolute top-[12px] left-[200px] tracking-[0.03em] leading-[100%] uppercase font-medium">
            Date
          </div>
          <div className="absolute top-[12px] left-[424px] tracking-[0.03em] leading-[100%] uppercase font-medium">
            Total
          </div>
          <div className="absolute top-[12px] left-[692px] tracking-[0.03em] leading-[100%] uppercase font-medium">
            Status
          </div>
        </div>
        <div className="absolute top-[16px] left-[24px] text-xl leading-[150%] font-medium text-gray-scale-gray-900">
          Order History
        </div>
      </div>
      <Foorter />
    </div>
  );
};

export default OrderHistory;
