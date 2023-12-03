import { FunctionComponent } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { NavAccount } from "./unities/NavAccount";
import { Breadcrumbs } from "./unities/Breadcrumbs";

const UserDashboard: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-scale-white w-full h-[1663px] overflow-hidden text-left text-base text-gray-scale-gray-900 font-caps-lock-small-caps-lock">
      <Header />
      <Breadcrumbs categoies={undefined} tltle={undefined} Detail={undefined}/>
      <NavAccount />
      <div className="absolute top-[347px] left-[400px] w-[536px] h-[278px] text-center text-xl">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-scale-white box-border w-[536px] h-[278px] border-[1px] border-solid border-gray-scale-gray-100" />
        <div className="absolute top-[160px] left-[195px] rounded-lg flex flex-col items-center justify-start gap-[2px]">
          <div className="relative leading-[150%] font-medium">
            Dianne Russell
          </div>
          <div className="relative text-sm leading-[150%] text-gray-scale-gray-500 mix-blend-normal">
            Customer
          </div>
        </div>
        <img
          className="absolute top-[32px] left-[208px] rounded-[50%] w-[120px] h-[120px] object-cover"
          alt=""
          src="/img/ellipse-5@2x.png"
        />
        <div className="absolute top-[222px] left-[226px] text-base leading-[150%] font-medium text-branding-success">
          Edit Profile
        </div>
      </div>
      <div className="absolute top-[347px] left-[950px] w-[424px] h-[278px] text-gray-scale-gray-400">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-scale-white box-border w-[424px] h-[278px] border-[1px] border-solid border-gray-scale-gray-100" />
        <div className="absolute top-[32px] left-[32px] text-sm tracking-[0.03em] leading-[100%] uppercase font-medium">
          Billing Address
        </div>
        <div className="absolute top-[64px] left-[32px] w-[264px] h-[139px] text-gray-scale-gray-900">
          <div className="absolute top-[0px] left-[0px] text-lg leading-[150%] font-medium">
            Dainne Russell
          </div>
          <div className="absolute top-[35px] left-[0px] text-sm leading-[150%] text-gray-scale-gray-600 inline-block w-[264px]">
            4140 Parker Rd. Allentown, New Mexico 31134
          </div>
          <div className="absolute top-[85px] left-[0px] leading-[150%]">
            dainne.ressell@gmail.com
          </div>
          <div className="absolute top-[115px] left-[0px] leading-[150%]">
            (671) 555-0110
          </div>
        </div>
        <div className="absolute top-[222px] left-[32px] leading-[150%] font-medium text-branding-success">
          Edit Address
        </div>
      </div>
      <div className="absolute top-[649px] left-[400px] w-[984px] h-[404px] text-xs text-gray-scale-gray-700">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-scale-white box-border w-[984px] h-[404px] border-[1px] border-solid border-gray-scale-gray-100" />
        <div className="absolute top-[62px] left-[0px] w-[984px] h-9">
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
          Recet Order History
        </div>
        <div className="absolute top-[19px] left-[897px] text-base leading-[150%] font-medium text-branding-success">
          View All
        </div>
        <div className="absolute top-[110px] left-[24px] flex flex-col items-start justify-start text-sm text-gray-scale-gray-800">
          <div className="relative w-[936px] h-[45px]">
            <div className="absolute top-[12px] left-[0px] flex flex-row items-start justify-start">
              <div className="relative leading-[150%]">#</div>
              <div className="relative leading-[150%]">738</div>
            </div>
            <div className="absolute top-[12px] left-[176px] leading-[150%]">
              8 Sep, 2020
            </div>
            <div className="absolute top-[12px] left-[400px] leading-[150%]">
              <span className="font-medium">$135.00</span>
              <span> (5 Products)</span>
            </div>
            <div className="absolute top-[12px] left-[668px] leading-[150%]">
              Processing
            </div>
            <div className="absolute top-[12px] left-[850px] leading-[150%] font-medium text-branding-success">
              View Details
            </div>
          </div>
          <div className="relative w-[936px] h-[45px]">
            <div className="absolute top-[12px] left-[0px] flex flex-row items-start justify-start">
              <div className="relative leading-[150%]">#</div>
              <div className="relative leading-[150%]">703</div>
            </div>
            <div className="absolute top-[12px] left-[176px] leading-[150%]">
              24 May, 2020
            </div>
            <div className="absolute top-[12px] left-[400px] leading-[150%]">
              <span className="font-medium">$25.00</span>
              <span> (1 Product)</span>
            </div>
            <div className="absolute top-[12px] left-[668px] leading-[150%]">
              on the way
            </div>
            <div className="absolute top-[12px] left-[850px] leading-[150%] font-medium text-branding-success">
              View Details
            </div>
          </div>
          <div className="relative w-[936px] h-[45px]">
            <div className="absolute top-[12px] left-[0px] flex flex-row items-start justify-start">
              <div className="relative leading-[150%]">#</div>
              <div className="relative leading-[150%]">130</div>
            </div>
            <div className="absolute top-[12px] left-[176px] leading-[150%]">
              22 Oct, 2020
            </div>
            <div className="absolute top-[12px] left-[400px] leading-[150%]">
              <span className="font-medium">$250.00</span>
              <span> (4 Products)</span>
            </div>
            <div className="absolute top-[12px] left-[668px] leading-[150%]">
              Completed
            </div>
            <div className="absolute top-[12px] left-[850px] leading-[150%] font-medium text-branding-success">
              View Details
            </div>
          </div>
          <div className="relative w-[936px] h-[45px]">
            <div className="absolute top-[12px] left-[0px] flex flex-row items-start justify-start">
              <div className="relative leading-[150%]">#</div>
              <div className="relative leading-[150%]">561</div>
            </div>
            <div className="absolute top-[12px] left-[176px] leading-[150%]">
              1 Feb, 2020
            </div>
            <div className="absolute top-[12px] left-[400px] leading-[150%]">
              <span className="font-medium">$35.00</span>
              <span> (1 Products)</span>
            </div>
            <div className="absolute top-[12px] left-[668px] leading-[150%]">
              Completed
            </div>
            <div className="absolute top-[12px] left-[850px] leading-[150%] font-medium text-branding-success">
              View Details
            </div>
          </div>
          <div className="relative w-[936px] h-[45px]">
            <div className="absolute top-[12px] left-[0px] flex flex-row items-start justify-start">
              <div className="relative leading-[150%]">#</div>
              <div className="relative leading-[150%]">536</div>
            </div>
            <div className="absolute top-[12px] left-[176px] leading-[150%]">
              21 Sep, 2020
            </div>
            <div className="absolute top-[12px] left-[400px] leading-[150%]">
              <span className="font-medium">$578.00</span>
              <span> (13 Products)</span>
            </div>
            <div className="absolute top-[12px] left-[668px] leading-[150%]">
              Completed
            </div>
            <div className="absolute top-[12px] left-[850px] leading-[150%] font-medium text-branding-success">
              View Details
            </div>
          </div>
          <div className="relative w-[936px] h-[45px]">
            <div className="absolute top-[12px] left-[0px] flex flex-row items-start justify-start">
              <div className="relative leading-[150%]">#</div>
              <div className="relative leading-[150%]">492</div>
            </div>
            <div className="absolute top-[12px] left-[176px] leading-[150%]">
              22 Oct, 2020
            </div>
            <div className="absolute top-[12px] left-[400px] leading-[150%]">
              <span className="font-medium">$345.00</span>
              <span> (7 Products)</span>
            </div>
            <div className="absolute top-[12px] left-[668px] leading-[150%]">
              Completed
            </div>
            <div className="absolute top-[12px] left-[850px] leading-[150%] font-medium text-branding-success">
              View Details
            </div>
          </div>
        </div>
      </div>
      <Foorter />
    </div>
  );
};

export default UserDashboard;
