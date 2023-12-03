import { FunctionComponent } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { NavAccount } from "./unities/NavAccount";

export const Settings: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-scale-white w-full h-[2420px] overflow-hidden text-left text-sm text-gray-scale-gray-900 font-body-small-body-small-400">
      <Header />
      <Breadcrumbs categoies={undefined} tltle={undefined} Detail={undefined}/>
      <NavAccount />
      <div className="absolute top-[347px] left-[400px] w-[984px] h-[533px]">
        <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[535px] border-[1px] border-solid border-gray-scale-gray-100" />
        <div className="absolute top-[464px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white">
          <div className="relative leading-[120%] font-semibold">
            Save Changes
          </div>
        </div>
        <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[150%]">First name</div>
            <div className="relative rounded-md bg-gray-scale-white box-border w-[512px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
              <div className="absolute top-[14px] left-[16px] leading-[130%]">
                Dianne
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[150%]">Last Name</div>
            <div className="relative rounded-md bg-gray-scale-white box-border w-[512px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
              <div className="absolute top-[14px] left-[16px] leading-[130%]">
                Russell
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[150%]">Email</div>
            <div className="relative rounded-md bg-gray-scale-white box-border w-[512px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
              <div className="absolute top-[14px] left-[16px] leading-[130%]">
                dianne.russell@gmail.com
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[150%]">Phone Number</div>
            <div className="relative rounded-md bg-gray-scale-white box-border w-[512px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
              <div className="absolute top-[14px] left-[16px] leading-[130%]">
                (603) 555-0123
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2px] left-[0px] rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] w-[984px] h-[62px] text-xl">
          <div className="absolute top-[16px] left-[24px] leading-[150%] font-medium">
            Account Settings
          </div>
        </div>
        <div className="absolute top-[120px] left-[648px] w-56 h-[289px] text-branding-success">
          <div className="absolute top-[243px] left-[32px] rounded-24xl bg-gray-scale-white flex flex-row items-center justify-center py-3.5 px-8 border-[2px] border-solid border-branding-success">
            <div className="relative leading-[120%] font-semibold">
              Chose Image
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-[50%] w-56 h-56 object-cover"
            alt=""
            src="/img/image@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[904px] left-[400px] w-[984px] h-[533px]">
        <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[535px] border-[1px] border-solid border-gray-scale-gray-100" />
        <div className="absolute top-[464px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white">
          <div className="relative leading-[120%] font-semibold">
            Save Changes
          </div>
        </div>
        <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">First name</div>
          <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="absolute top-[14px] left-[16px] leading-[130%]">
              Dianne
            </div>
          </div>
        </div>
        <div className="absolute top-[88px] left-[342px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Last name</div>
          <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="absolute top-[14px] left-[16px] leading-[130%]">
              Dianne
            </div>
          </div>
        </div>
        <div className="absolute top-[364px] left-[500px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Phone</div>
          <div className="relative rounded-md bg-gray-scale-white box-border w-[460px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="absolute top-[14px] left-[16px] leading-[130%]">
              (603) 555-0123
            </div>
          </div>
        </div>
        <div className="absolute top-[88px] left-[660px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">
            <span>{`Company Name `}</span>
            <span className="text-gray-scale-gray-500">(optional)</span>
          </div>
          <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="absolute top-[14px] left-[16px] leading-[130%]">
              Zakirsoft
            </div>
          </div>
        </div>
        <div className="absolute top-[364px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Email</div>
          <div className="relative rounded-md bg-gray-scale-white box-border w-[460px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="absolute top-[14px] left-[16px] leading-[130%]">
              dianne.russell@gmail.com
            </div>
          </div>
        </div>
        <div className="absolute top-[272px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Country / Region</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start py-3.5 px-4 gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="relative leading-[130%] inline-block w-[244px] shrink-0">
              United States
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/img/chevron-down.svg"
            />
          </div>
        </div>
        <div className="absolute top-[272px] left-[658px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Zip Code</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start py-3.5 px-4 text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="relative leading-[130%] inline-block w-[270px] shrink-0">
              20033
            </div>
          </div>
        </div>
        <div className="absolute top-[272px] left-[341px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">States</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start py-3.5 px-4 gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="relative leading-[130%] inline-block w-[244px] shrink-0">
              Washington DC
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/img/chevron-down.svg"
            />
          </div>
        </div>
        <div className="absolute top-[180px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Street Address</div>
          <div className="relative rounded-md bg-gray-scale-white box-border w-[936px] h-[49px] text-base border-[1px] border-solid border-branding-success">
            <div className="absolute top-[14px] left-[16px] leading-[130%]">
              4140 Par|
            </div>
          </div>
        </div>
        <div className="absolute top-[2px] left-[0px] rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] w-[984px] h-[62px] text-xl">
          <div className="absolute top-[16px] left-[24px] leading-[150%] font-medium">
            Billing Address
          </div>
        </div>
      </div>
      <div className="absolute top-[1461px] left-[400px] w-[984px] h-[349px]">
        <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[351px] border-[1px] border-solid border-gray-scale-gray-100" />
        <div className="absolute top-[280px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white">
          <div className="relative leading-[120%] font-semibold">
            Change Password
          </div>
        </div>
        <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Current Password</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start py-3.5 px-4 text-base text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="relative leading-[130%] inline-block w-[884px] shrink-0">
              Password
            </div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/img/eyeopen-1.svg"
            />
          </div>
        </div>
        <div className="absolute top-[180px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">New Password Password</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start py-3.5 px-4 text-base text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="relative leading-[130%] inline-block w-[408px] shrink-0">
              Password
            </div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/img/eyeopen-1.svg"
            />
          </div>
        </div>
        <div className="absolute top-[180px] left-[500px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Confirm Password</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start py-3.5 px-4 text-base text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="relative leading-[130%] inline-block w-[408px] shrink-0">
              Password
            </div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/img/eyeopen-1.svg"
            />
          </div>
        </div>
        <div className="absolute top-[2px] left-[0px] rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] w-[984px] h-[62px] text-xl">
          <div className="absolute top-[16px] left-[24px] leading-[150%] font-medium">
            Change Password
          </div>
        </div>
      </div>
      <Foorter />
    </div>
  );
};

