import { FunctionComponent } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { NavAccount } from "./unities/NavAccount";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import { Step, StepLabel, Stepper } from "@mui/material";

const OrderDetails: FunctionComponent = () => {
  const { Detail } = useParams();
  const stepLabel = ['Order received', 'Processing', 'On the way', 'Delivered']
  const test = ['Processing', 'On the way', 'Delivered', 'Delivered', 'Delivered', 'Delivered']
  return (
    <div className="relative bg-gray-scale-white w-full h-[1850px] overflow-hidden text-left text-base text-gray-scale-gray-400 font-caps-lock-medium-caps-lock">
      <Header />
      <Breadcrumbs categoies={undefined} tltle={undefined} Detail={Detail} EditAndadd={undefined} />
      <NavAccount />
      <div className="absolute top-[347px] left-[400px] w-[984px] h-[825px] text-sm">
        <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[877px] border-[1px] border-solid border-gray-scale-gray-100" />
        {/* product-Order */}
        <div className="scroll-order relative top-[515px] left-[0px] w-[984px] h-[350px] text-gray-scale-gray-900 overflow-auto">
          <div className=" relative top-[0px] left-[0px] w-[965px] h-9 text-xs text-gray-scale-gray-700">
            <div className="absolute top-[0px] left-[0px] bg-gray-scale-gray-50 w-[965px] h-9" />
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
          <div className=" grid grid-cols-1 justify-items-center items-center">
            {test.map((item) => (
              <div className=" relative top-[20px] pl-[20px] box-border w-full h-[60px] odd:bg-white even:bg-slate-50">
                <img
                  className="absolute object-cover"
                  alt=""
                  src="/img/image2@2x.png"
                  width={70}
                  height={50}
                />
                <div className="absolute w-[28.82%] top-[35.71%] left-[10.1%] leading-[150%] inline-block">
                  {item}
                </div>
                <div className="absolute top-[35.71%] left-[63.57%] leading-[150%]">
                  x5
                </div>
                <div className="absolute top-[calc(50%_-_10px)] left-[420px] leading-[150%]">
                  $14.00
                </div>
                <div className="absolute top-[calc(50%_-_10px)] left-[795.5px] leading-[150%] font-medium">
                  $70.00
                </div>
              </div>
            ))
            }
          </div>
        </div>
        <div className="absolute top-[406px] left-[60px] w-[844px] h-[69px] text-center text-branding-success-dark">
          <Stepper activeStep={1} alternativeLabel
            sx={{
              '& .MuiStepIcon-root.Mui-completed': { color: 'green' },
              '& .MuiStepIcon-root.Mui-active': { color: 'green' },
              '& .Mui-active': {
                '& .MuiStepConnector-line': { borderColor: 'green' }
              },
              '& .Mui-completed': {
                '& .MuiStepConnector-line': { borderColor: 'green' }
              },
            }}
          >
            {stepLabel.map((label) => (
              <Step key={label}>
                <div>
                  <StepLabel>{label}</StepLabel>
                </div>
              </Step>
            ))
            }
          </Stepper>
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
            <img className="relative w-px h-10" alt="" src="/img/line-20.svg" />
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
                ฿365.00
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
                ฿84.00
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[86px] left-[24px] w-[624px] h-[280px]">
          <div className="absolute top-[0px] left-[0px] rounded-md bg-gray-scale-white box-border w-[620px] h-[280px] border-[1px] border-solid border-gray-scale-gray-100 " />
          <div className=" absolute top-[18px] left-[0px] box-border pl-[20px] w-[640px] h-[245px] overflow-auto">
            <div className=" relative break-words top-[78px] left-[0px] leading-[150%] text-gray-scale-gray-600 inline-block w-[590px]">
              4140 Parker Rd. Allentown, 31134
            </div>
            <div className=" relative top-[100px] left-[0px] flex flex-col items-start justify-start gap-[4px] text-xs">
              <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                Email
              </div>
              <div className="relative break-words text-sm leading-[150%] text-gray-scale-gray-900 inline-block w-[590px]">
                dainne.ressell@gmail.com
              </div>
            </div>
            <div className=" relative top-[120px] left-[0px] flex flex-col items-start justify-start gap-[4px] text-xs">
              <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                Phone
              </div>
              <div className="relative text-sm break-words leading-[150%] text-gray-scale-gray-900 inline-block w-[590px]">
                (671) 555-0110
              </div>
            </div>
            <div className="absolute top-[46px] left-[20px] text-base leading-[150%] text-gray-scale-gray-900">
              Dainne Russell
            </div>
            <div className="absolute top-[0px] left-[20px] tracking-[0.03em] leading-[100%] uppercase font-medium">
              Shipping Address
            </div>
            <Link to={'/Account/Address/Edit'} className="absolute cursor-pointer p-[2px] text-[16px] hover:text-[#06e102]/70 text-[#06e102] top-[0px] left-[530px] tracking-[0.03em] leading-[100%] font-medium">
              Edit
            </Link>
            <div className="absolute top-[31.5px] left-[0px] box-border w-[620px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
          </div>

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
          <Link to={'/Account/Orders'} className=" no-underline hover:text-branding-success/80 relative text-base leading-[150%] font-medium text-branding-success">
            Back to List
          </Link>
        </div>
      </div>
      <Foorter />
    </div>
  );
};

export default OrderDetails;
