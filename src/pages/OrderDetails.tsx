import { FunctionComponent } from "react";

const OrderDetails: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-scale-white w-full h-[1782px] overflow-hidden text-left text-base text-gray-scale-gray-400 font-caps-lock-medium-caps-lock">
      <div className="absolute top-[347px] left-[636px] w-[984px] h-[825px] text-sm">
        <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[827px] border-[1px] border-solid border-gray-scale-gray-100" />
        <div className="absolute top-[515px] left-[0px] w-[984px] h-[290px] text-gray-scale-gray-900">
          <div className="absolute top-[0px] left-[0px] w-[984px] h-9 text-xs text-gray-scale-gray-700">
            <div className="absolute top-[0px] left-[0px] bg-gray-scale-gray-50 w-[984px] h-9" />
            <div className="absolute top-[12px] left-[20px] tracking-[0.03em] leading-[100%] uppercase font-medium">
              Product
            </div>
            <div className="absolute top-[12px] left-[424px] tracking-[0.03em] leading-[100%] uppercase font-medium">
              Price
            </div>
            <div className="absolute top-[12px] left-[593px] tracking-[0.03em] leading-[100%] uppercase font-medium">
              Quantity
            </div>
            <div className="absolute top-[12px] left-[784px] tracking-[0.03em] leading-[100%] uppercase font-medium">
              Subtotal
            </div>
          </div>
          <div className="absolute top-[48px] left-[20px] w-[812px] h-[70px]">
            <img
              className="absolute h-full w-[8.62%] top-[0%] right-[91.38%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image@2x.png"
            />
            <div className="absolute w-[28.82%] top-[35.71%] left-[10.1%] leading-[150%] inline-block">
              Red Capsicum
            </div>
            <div className="absolute top-[35.71%] left-[70.57%] leading-[150%]">
              x5
            </div>
            <div className="absolute top-[calc(50%_-_10px)] left-[404px] leading-[150%]">
              $14.00
            </div>
            <div className="absolute top-[calc(50%_-_10px)] left-[765.5px] leading-[150%] font-medium">
              $70.00
            </div>
          </div>
          <div className="absolute top-[125.5px] left-[19.5px] box-border w-[945px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
          <div className="absolute top-[134px] left-[20px] w-[812px] h-[70px]">
            <img
              className="absolute h-full w-[8.62%] top-[0%] right-[91.38%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image1@2x.png"
            />
            <div className="absolute w-[28.82%] top-[35.71%] left-[10.1%] leading-[150%] inline-block">
              Green Capsicum
            </div>
            <div className="absolute top-[35.71%] left-[70.57%] leading-[150%]">
              x2
            </div>
            <div className="absolute top-[calc(50%_-_10px)] left-[404px] leading-[150%]">
              $14.00
            </div>
            <div className="absolute top-[calc(50%_-_10px)] left-[765.5px] leading-[150%] font-medium">
              $28.00
            </div>
          </div>
          <div className="absolute top-[220px] left-[20px] w-[812px] h-[70px]">
            <img
              className="absolute h-full w-[8.62%] top-[0%] right-[91.38%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image2@2x.png"
            />
            <div className="absolute w-[28.82%] top-[35.71%] left-[10.1%] leading-[150%] inline-block">
              Green Chili
            </div>
            <div className="absolute top-[35.71%] left-[70.57%] leading-[150%]">
              x10
            </div>
            <div className="absolute top-[calc(50%_-_10px)] left-[404px] leading-[150%]">
              $26.70
            </div>
            <div className="absolute top-[calc(50%_-_10px)] left-[765.5px] leading-[150%] font-medium">
              $267.00
            </div>
          </div>
          <div className="absolute top-[211.5px] left-[19.5px] box-border w-[945px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
        </div>
        <div className="absolute top-[406px] left-[60px] w-[844px] h-[69px] text-center text-branding-success-dark">
          <img
            className="absolute top-[16px] left-[48px] w-[768px] h-2"
            alt=""
            src="/line.svg"
          />
          <div className="absolute top-[48px] left-[0px] leading-[150%]">
            Order received
          </div>
          <div className="absolute top-[48px] left-[268px] leading-[150%] font-medium">
            Processing
          </div>
          <div className="absolute top-[48px] left-[519px] leading-[150%] text-gray-scale-gray-800">
            On the way
          </div>
          <div className="absolute top-[48px] left-[778px] leading-[150%] text-gray-scale-gray-800">
            Delivered
          </div>
          <div className="absolute top-[0px] left-[32px] w-[800px] flex flex-row items-center justify-between text-branding-success">
            <img
              className="relative w-10 h-10"
              alt=""
              src="/progress-tracker-point.svg"
            />
            <div className="relative w-10 h-10 text-gray-scale-white">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-branding-success" />
              <div className="absolute w-full top-[0%] left-[0%] leading-[40px] font-medium inline-block">
                02
              </div>
            </div>
            <div className="relative w-10 h-10">
              <div className="absolute h-[102.5%] w-[102.5%] top-[-1.25%] right-[-1.25%] bottom-[-1.25%] left-[-1.25%] rounded-[50%] bg-gray-scale-white box-border border-[1px] border-dashed border-branding-success" />
              <div className="absolute w-full top-[0%] left-[0%] leading-[40px] inline-block">
                03
              </div>
            </div>
            <div className="relative w-10 h-10">
              <div className="absolute h-[102.5%] w-[102.5%] top-[-1.25%] right-[-1.25%] bottom-[-1.25%] left-[-1.25%] rounded-[50%] bg-gray-scale-white box-border border-[1px] border-dashed border-branding-success" />
              <div className="absolute w-full top-[0%] left-[0%] leading-[40px] inline-block">
                04
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[86px] left-[672px] rounded-md flex flex-col items-start justify-start text-xs border-[1px] border-solid border-gray-scale-gray-100">
          <div className="flex flex-row items-start justify-start py-[18px] px-5 gap-[20px]">
            <div className="flex flex-col items-start justify-start gap-[6px]">
              <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                Order ID:
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-900 inline-block w-20">
                #4152
              </div>
            </div>
            <img className="relative w-px h-10" alt="" src="/line-20.svg" />
            <div className="flex flex-col items-start justify-start gap-[6px]">
              <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                Payment Method:
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-900 inline-block w-32">
                Paypal
              </div>
            </div>
          </div>
          <div className="relative box-border w-[289px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
          <div className="flex flex-col items-start justify-start py-[18px] px-5 gap-[1px] text-sm text-gray-scale-gray-600">
            <div className="w-[248px] flex flex-row items-center justify-between pt-0 px-0 pb-3 box-border">
              <div className="relative leading-[150%]">Subtotal:</div>
              <div className="relative leading-[150%] font-medium text-gray-scale-gray-900">
                $365.00
              </div>
            </div>
            <div className="relative box-border w-[249px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
            <div className="w-[248px] flex flex-row items-center justify-between py-3 px-0 box-border">
              <div className="relative leading-[150%]">Discount</div>
              <div className="relative leading-[150%] font-medium text-gray-scale-gray-900">
                20%
              </div>
            </div>
            <div className="relative box-border w-[249px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
            <div className="w-[248px] flex flex-row items-center justify-between py-3 px-0 box-border">
              <div className="relative leading-[150%]">Shipping</div>
              <div className="relative leading-[150%] font-medium text-gray-scale-gray-900">
                Free
              </div>
            </div>
            <div className="relative box-border w-[249px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
            <div className="w-[248px] flex flex-row items-center justify-between pt-3 px-0 pb-0 box-border text-lg text-gray-scale-gray-900">
              <div className="relative leading-[150%]">Total</div>
              <div className="relative leading-[150%] font-semibold text-branding-success-dark">
                $84.00
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[86px] left-[24px] w-[624px] h-[280px]">
          <div className="absolute top-[0px] left-[0px] rounded-md bg-gray-scale-white box-border w-[624px] h-[280px] border-[1px] border-solid border-gray-scale-gray-100" />
          <div className="absolute top-[18px] left-[0px] w-[312px] h-[242px]">
            <div className="absolute top-[78px] left-[20px] leading-[150%] text-gray-scale-gray-600 inline-block w-[282px]">
              4140 Parker Rd. Allentown, New Mexico 31134
            </div>
            <div className="absolute top-[156px] left-[20px] flex flex-col items-start justify-start gap-[4px] text-xs">
              <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                Email
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-900 inline-block w-[282px]">
                dainne.ressell@gmail.com
              </div>
            </div>
            <div className="absolute top-[205px] left-[20px] flex flex-col items-start justify-start gap-[4px] text-xs">
              <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                Phone
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-900 inline-block w-[282px]">
                (671) 555-0110
              </div>
            </div>
            <div className="absolute top-[46px] left-[20px] text-base leading-[150%] text-gray-scale-gray-900">
              Dainne Russell
            </div>
            <div className="absolute top-[0px] left-[20px] tracking-[0.03em] leading-[100%] uppercase font-medium">
              Billing Address
            </div>
            <div className="absolute top-[31.5px] left-[-0.5px] box-border w-[313px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
          </div>
          <div className="absolute top-[18px] left-[312px] w-[312px] h-[242px]">
            <div className="absolute top-[78px] left-[20px] leading-[150%] text-gray-scale-gray-600 inline-block w-[282px]">
              4140 Parker Rd. Allentown, New Mexico 31134
            </div>
            <div className="absolute top-[156px] left-[20px] flex flex-col items-start justify-start gap-[4px] text-xs">
              <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                Email
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-900 inline-block w-[282px]">
                dainne.ressell@gmail.com
              </div>
            </div>
            <div className="absolute top-[205px] left-[20px] flex flex-col items-start justify-start gap-[4px] text-xs">
              <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                Phone
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-900 inline-block w-[282px]">
                (671) 555-0110
              </div>
            </div>
            <div className="absolute top-[46px] left-[20px] text-base leading-[150%] text-gray-scale-gray-900">
              Dainne Russell
            </div>
            <div className="absolute top-[0px] left-[20px] tracking-[0.03em] leading-[100%] uppercase font-medium">
              Shipping Address
            </div>
            <div className="absolute top-[31.5px] left-[-0.5px] box-border w-[313px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
          </div>
          <img
            className="absolute top-[0px] left-[311.5px] w-px h-[280px]"
            alt=""
            src="/line-31.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] flex flex-row items-center justify-start py-4 px-6 gap-[509px] text-gray-scale-gray-700">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="relative text-xl leading-[150%] font-medium text-gray-scale-gray-900">
              Order Details
            </div>
            <div className="relative leading-[150%]">•</div>
            <div className="relative leading-[150%]">April 24, 2021</div>
            <div className="relative leading-[150%]">•</div>
            <div className="relative leading-[150%]">3 Products</div>
          </div>
          <div className="relative text-base leading-[150%] font-medium text-branding-success">
            Back to List
          </div>
        </div>
      </div>
      <div className="absolute top-[347px] left-[300px] rounded-lg bg-gray-scale-white flex flex-col items-start justify-start pt-0 px-0 pb-3 text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
        <div className="flex flex-row items-start justify-start pt-6 pb-4 pr-0 pl-5 text-xl text-gray-scale-gray-900">
          <div className="relative leading-[150%] font-medium">Navigation</div>
        </div>
        <div className="flex flex-row items-center justify-center py-4 px-5 gap-[10px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/dashboard-2.svg"
          />
          <div className="relative leading-[150%] inline-block w-[238px] shrink-0">
            Dashboard
          </div>
        </div>
        <div className="bg-gren-gray-scale-50 shadow-[3px_0px_0px_#20b526_inset] flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-gray-scale-gray-900">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/refresh-02-1.svg"
          />
          <div className="relative leading-[150%] inline-block w-[238px] shrink-0">
            Order History
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-4 px-5 gap-[10px]">
          <img className="relative w-6 h-6" alt="" src="/dashboard-21.svg" />
          <div className="relative leading-[150%] inline-block w-[238px] shrink-0">
            Wishlist
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-4 px-5 gap-[10px]">
          <img className="relative w-6 h-6" alt="" src="/dashboard-22.svg" />
          <div className="relative leading-[150%] inline-block w-[238px] shrink-0">
            Shopping Cart
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-4 px-5 gap-[10px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/dashboard-23.svg"
          />
          <div className="relative leading-[150%] inline-block w-[238px] shrink-0">
            Settings
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-4 px-5 gap-[10px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/dashboard-24.svg"
          />
          <div className="relative leading-[150%] inline-block w-[238px] shrink-0">
            Log-out
          </div>
        </div>
      </div>
      <div className="absolute top-[195px] left-[0px] w-[1920px] h-[120px] bg-[url('/public/breadcrumbs@3x.png')] bg-cover bg-no-repeat bg-[top] text-gray-scale-gray-500">
        <div className="absolute top-[calc(50%_-_12px)] left-[300px] flex flex-row items-center justify-start gap-[12px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/home1-1.svg"
          />
          <img
            className="relative w-[5.08px] h-[9.17px]"
            alt=""
            src="/group.svg"
          />
          <div className="relative leading-[150%] hidden">Home</div>
          <img
            className="relative w-[8.17px] h-[4.08px] hidden"
            alt=""
            src="/vector.svg"
          />
          <div className="relative leading-[150%] hidden">Home</div>
          <img
            className="relative w-[8.17px] h-[4.08px] hidden"
            alt=""
            src="/vector.svg"
          />
          <div className="relative leading-[150%] text-gray-scale-gray-400">
            Account
          </div>
          <img
            className="relative w-[5.08px] h-[9.17px]"
            alt=""
            src="/vector1.svg"
          />
          <div className="relative leading-[150%] text-gray-scale-gray-400">
            Order History
          </div>
          <img
            className="relative w-[5.08px] h-[9.17px]"
            alt=""
            src="/vector2.svg"
          />
          <div className="relative leading-[150%] text-branding-success">
            Order Detail
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-gray-scale-white flex flex-col items-center justify-start text-xs text-gray-scale-gray-300">
        <div className="bg-gray-scale-gray-800 shadow-[0px_1px_0px_#e5e5e5] w-[1920px] flex flex-row items-center justify-between py-3 px-[300px] box-border">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img className="relative w-4 h-[19px]" alt="" src="/map-pin.svg" />
            <div className="relative leading-[130%]">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[20px] text-center">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="relative leading-[130%]">Eng</div>
              <img
                className="relative w-2 h-[4.5px]"
                alt=""
                src="/group1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="relative leading-[130%]">USD</div>
              <img
                className="relative w-2 h-[4.5px]"
                alt=""
                src="/group1.svg"
              />
            </div>
            <div className="relative box-border w-px h-4 opacity-[0.52] border-r-[1px] border-solid border-gray-scale-gray-300" />
            <div className="flex flex-row items-start justify-start gap-[4px] text-left">
              <div className="relative leading-[130%]">Sign In</div>
              <div className="relative leading-[130%]">/</div>
              <div className="relative leading-[130%]">Sign Up</div>
            </div>
          </div>
        </div>
        <div className="relative bg-gray-scale-white shadow-[0px_-1px_0px_#e5e5e5_inset] w-[1920px] h-[93px] text-13xl text-gren-gray-scale-900">
          <div className="absolute top-[27.5px] left-[300px] flex flex-row items-center justify-start gap-[8px]">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/plant-1.svg"
            />
            <div className="relative tracking-[-0.03em] leading-[38px] font-medium">
              Ecobazar
            </div>
          </div>
          <div className="absolute top-[24px] left-[711px] rounded-md flex flex-row items-center justify-start text-mini text-gray-scale-gray-500 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="w-[400px] flex flex-row items-center justify-start py-3 pr-[18px] pl-4 box-border gap-[8px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/search.svg"
              />
              <div className="relative leading-[21px] inline-block w-[400px] shrink-0">
                Search
              </div>
            </div>
            <div className="rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-branding-success flex flex-row items-center justify-center py-3.5 px-6 text-sm text-gray-scale-white">
              <div className="relative leading-[120%] font-semibold">
                Search
              </div>
            </div>
          </div>
          <div className="absolute top-[29.5px] left-[1429px] flex flex-row items-center justify-start gap-[16px] text-center text-3xs text-gray-scale-white">
            <img className="relative w-8 h-8" alt="" src="/heart.svg" />
            <div className="relative box-border w-px h-[25px] border-r-[1px] border-solid border-gray-scale-gray-200" />
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="relative w-[34px] h-[34px]">
                <img
                  className="absolute top-[0px] left-[0px] w-[34px] h-[34px]"
                  alt=""
                  src="/bag.svg"
                />
                <div className="absolute top-[-3px] left-[17px] rounded-2xl bg-branding-success-dark box-border w-5 h-5 overflow-hidden border-[1px] border-solid border-gray-scale-white">
                  <div className="absolute top-[calc(50%_-_6.5px)] left-[calc(50%_-_4px)] leading-[10px] font-medium">
                    2
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[7px] text-left text-2xs text-gray-scale-gray-700">
                <div className="relative leading-[120%]">Shopping cart:</div>
                <div className="relative text-sm leading-[100%] font-medium text-gray-scale-gray-900">
                  $57.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1920px] flex flex-row items-center justify-between py-4 px-[300px] box-border text-sm text-gray-scale-gray-600">
          <div className="flex flex-row items-center justify-start gap-[32px]">
            <div className="flex flex-row items-center justify-start gap-[4px] text-branding-success">
              <div className="relative leading-[150%] font-medium">Home</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevron-down.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium">Shop</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevron-down1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium">Pages</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevron-down1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium">Blog</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevron-down1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium">
                About Us
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium">
                Contact Us
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px] text-gray-scale-gray-900">
            <img
              className="relative w-7 h-7 overflow-hidden shrink-0"
              alt=""
              src="/phonecall-1.svg"
            />
            <div className="relative leading-[150%] font-medium">
              (219) 555-0114
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1252px] left-[0px] flex flex-col items-start justify-start text-5xl text-gray-scale-gray-900">
        <div className="relative w-[1920px] h-[162px]">
          <div className="absolute h-full w-full top-[100%] right-[0%] bottom-[-100%] left-[0%] bg-whitesmoke" />
          <div className="absolute h-[50.62%] w-[23.33%] top-[24.69%] right-[61.04%] bottom-[24.69%] left-[15.63%] flex flex-col items-start justify-start gap-[4px]">
            <div className="relative leading-[150%] font-semibold">
              Subcribe our Newsletter
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-[448px]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </div>
          </div>
          <div className="absolute h-[32.1%] w-[27.92%] top-[33.95%] right-[27.29%] bottom-[33.95%] left-[44.79%] text-base text-gray-scale-gray-500">
            <div className="absolute h-full w-[91.79%] top-[0%] right-[8.21%] bottom-[0%] left-[0%] rounded-27xl bg-gray-scale-white box-border flex flex-row items-start justify-start py-3.5 px-6 border-[1px] border-solid border-gray-scale-gray-100">
              <div className="relative leading-[150%] inline-block w-[400px] shrink-0">
                Your email address
              </div>
            </div>
            <div className="absolute h-full w-[30.22%] top-[0%] right-[0%] bottom-[0%] left-[69.78%] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-4 px-10 box-border text-gray-scale-white">
              <div className="relative leading-[20px] font-semibold">
                Subscribe
              </div>
            </div>
          </div>
          <div className="absolute h-[24.69%] w-[9.58%] top-[37.65%] right-[15.63%] bottom-[37.65%] left-[74.79%] flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative w-10 h-10"
              alt=""
              src="/social-media.svg"
            />
            <img
              className="relative rounded-481xl w-10 h-10"
              alt=""
              src="/social-media1.svg"
            />
            <img
              className="relative rounded-481xl w-10 h-10"
              alt=""
              src="/social-media2.svg"
            />
            <img
              className="relative rounded-481xl w-10 h-10"
              alt=""
              src="/social-media3.svg"
            />
          </div>
        </div>
        <div className="bg-gray-scale-gray-900 flex flex-col items-start justify-center pt-[60px] px-[300px] pb-0 gap-[60px] text-base text-gray-scale-white">
          <div className="relative w-[1248px] h-[168px]">
            <div className="absolute h-[98.81%] w-[26.92%] top-[1.19%] right-[73.08%] bottom-[0%] left-[0%] flex flex-col items-start justify-start gap-[16px] text-sm">
              <div className="flex flex-row items-center justify-start gap-[8px] text-13xl">
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/plant-11.svg"
                />
                <div className="relative tracking-[-0.03em] leading-[38px] font-medium">
                  Ecobazar
                </div>
              </div>
              <div className="relative leading-[150%] text-gray-scale-gray-500 inline-block w-[336px]">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </div>
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="bg-gray-scale-gray-900 shadow-[0px_1.5px_0px_#20b526] flex flex-row items-center justify-center py-1.5 px-0">
                  <div className="relative leading-[150%] font-medium">
                    (219) 555-0114
                  </div>
                </div>
                <div className="relative text-base leading-[150%] text-gray-scale-gray-500">
                  or
                </div>
                <div className="bg-gray-scale-gray-900 shadow-[0px_1.5px_0px_#20b526] flex flex-row items-center justify-center py-1.5 px-0">
                  <div className="relative leading-[150%] font-medium">
                    Proxy@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[97.62%] w-[7.61%] top-[0%] right-[56.49%] bottom-[2.38%] left-[35.9%] flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[150%] font-medium">
                My Account
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
                <div className="relative leading-[150%]">My Account</div>
                <div className="relative leading-[150%]">Order History</div>
                <div className="relative leading-[150%] text-gray-scale-white">
                  Shoping Cart
                </div>
                <div className="relative leading-[150%]">Wishlist</div>
              </div>
            </div>
            <div className="absolute h-[97.62%] w-[10.42%] top-[0%] right-[35.74%] bottom-[2.38%] left-[53.85%] flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[150%] font-medium">Helps</div>
              <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
                <div className="relative leading-[150%]">Contact</div>
                <div className="relative leading-[150%]">Faqs</div>
                <div className="relative leading-[150%]">{`Terms & Condition`}</div>
                <div className="relative leading-[150%]">Privacy Policy</div>
              </div>
            </div>
            <div className="absolute h-[97.62%] w-[6.57%] top-[0%] right-[21.55%] bottom-[2.38%] left-[71.88%] flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[150%] font-medium">Proxy</div>
              <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
                <div className="relative leading-[150%]">About</div>
                <div className="relative leading-[150%]">Shop</div>
                <div className="relative leading-[150%]">Product</div>
                <div className="relative leading-[150%]">Track Order</div>
              </div>
            </div>
            <div className="absolute h-[97.62%] w-[10.26%] top-[0%] right-[0%] bottom-[2.38%] left-[89.74%] flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[150%] font-medium">
                Categories
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
                <div className="relative leading-[150%]">{`Fruit & Vegetables`}</div>
                <div className="relative leading-[150%]">{`Meat & Fish`}</div>
                <div className="relative leading-[150%]">{`Bread & Bakery`}</div>
                <div className="relative leading-[150%]">{`Beauty & Health`}</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-scale-gray-900 shadow-[0px_-1px_0px_#333] w-[1320px] flex flex-row items-center justify-between py-6 px-0 box-border text-sm text-gray-scale-gray-500">
            <div className="relative leading-[150%]">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-2xs text-gray-scale-white">
              <img
                className="relative w-[45px] h-[31.77px]"
                alt=""
                src="/methodapplepay.svg"
              />
              <img
                className="relative w-[45px] h-[31.77px]"
                alt=""
                src="/methodvisa.svg"
              />
              <img
                className="relative w-[45px] h-[31.77px]"
                alt=""
                src="/methoddiscover.svg"
              />
              <img
                className="relative w-[45px] h-[31.77px]"
                alt=""
                src="/methodmastercard.svg"
              />
              <div className="relative w-[65px] h-8">
                <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_32.5px)] rounded-[5.29px] bg-gray-scale-gray-900 box-border w-[65px] h-8 border-[1px] border-solid border-gray-scale-gray-800" />
                <img
                  className="absolute top-[4px] left-[5px] w-[11px] h-[11px] overflow-hidden"
                  alt=""
                  src="/lock-1.svg"
                />
                <div className="absolute top-[4px] left-[18px] leading-[100%]">
                  Secure
                </div>
                <div className="absolute top-[16px] left-[0px] text-xs leading-[100%] font-semibold text-center inline-block w-[65px]">
                  Payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
