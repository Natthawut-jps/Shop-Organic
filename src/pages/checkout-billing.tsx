import { FunctionComponent, useEffect, useState } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface state_Type {
  order_list: [
    {
      id: number;
      name: string;
      price: number;
      categories: string;
      quantity: number;
      imgURL: string;
      p_id: number;
      user_id: number;
      order_id: number;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
  time_old: Date;
}
interface timeout_Type {
  minutes: number;
  second: number;
}
const Checkout_Bill: FunctionComponent = () => {
  const [time_out, setTime_out] = useState<timeout_Type>({
    minutes: 0,
    second: 0,
  });
  const navigate = useNavigate();
  const state: state_Type = useLocation().state;
  const price = state.order_list.map((item) => item.price);
  const priceSum = price.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  useEffect(() => {
    if (state) {
      const time_current = new Date().getTime();
      if (time_out.minutes >= 0) {
        setTimeout(() => {
          const different_time = state.time_old.getTime() - time_current;
          const minutes = Math.floor(
            (different_time % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((different_time % (1000 * 60)) / 1000);
          setTime_out({ minutes: minutes, second: seconds });
        }, 1000);
      } else {
        navigate("/404");
      }
    } else {
      navigate("/404");
    }
  });

  return (
    <div className="bg-[url(/img/thumb-1920-1318790.png)] from-slate-600 to-slate-100 relative  w-full h-[1650px] overflow-hidden text-left text-sm text-gray-scale-gray-900 font-body-xxl-body-xxl-500">
      <Header />
      {/* <Breadcrumbs categoies={undefined} tltle={undefined} EditAndadd={undefined} Detail={undefined} /> */}
      <div className=" absolute top-[250px] w-[1200px] rounded-lg left-[200px] h-[800px] bg-gray-scale-white shadow drop-shadow" />
      {time_out.minutes >= 0 ? (
        <div className="absolute top-[300px] left-[850px] rounded-lg bg-gray-scale-white flex flex-col items-start justify-start p-6 gap-[24px] border-[1px] border-solid border-gray-scale-gray-100">
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative text-xl leading-[150%] font-medium">
              สรุปคำสั่งซื้อ
            </div>
            <div className="scroll-checkBill overflow-auto h-[250px] w-[400px] space-y-2">
              {state.order_list.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start"
                >
                  <div className="w-[376px] flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <img
                        className="relative w-[60px] h-[60px] object-cover"
                        alt=""
                        src={`${import.meta.env.VITE_BASE_API}/img/${
                          item.imgURL
                        }`}
                      />
                      <div className="relative leading-[150%]">{item.name}</div>
                      <div className="relative leading-[150%]">
                        x{item.quantity}
                      </div>
                    </div>
                    <div className="relative leading-[150%] font-medium">
                      ฿{item.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start justify-start gap-[1px] text-gray-scale-gray-700">
              <div className="bg-gray-scale-white w-[376px] flex flex-row items-center justify-between py-3 px-0 box-border">
                <div className="relative leading-[150%]">รวม:</div>
                <div className="relative leading-[150%] font-medium text-gray-scale-gray-900">
                  ฿{priceSum}
                </div>
              </div>
              <div className="relative box-border w-[377px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
              <div className="bg-gray-scale-white w-[376px] flex flex-row items-center justify-between py-3 px-0 box-border">
                <div className="relative leading-[150%]">ค่าจัดส่ง:</div>
                <div className="relative leading-[150%] font-medium text-gray-scale-gray-900">
                  ฿50.00
                </div>
              </div>
              <div className="relative box-border w-[377px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
              <div className="bg-gray-scale-white w-[376px] flex flex-row items-center justify-between pt-3 px-0 pb-0 box-border text-base">
                <div className="relative leading-[150%]">ทั้งหมด:</div>
                <div className="relative text-[18px] leading-[120%] font-semibold text-gray-scale-gray-900">
                  ฿{(priceSum + 50).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[173px] h-[100px] text-xl">
            <div className="absolute top-[0px] left-[0px] leading-[150%] font-medium">
              วิธีชำระเงิน
            </div>
            <div className="absolute top-[46px] left-[0px] flex flex-col items-start justify-start gap-[10px] text-sm text-gray-scale-gray-700">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-13xl bg-gray-scale-white box-border border-[1.5px] border-solid border-branding-success" />
                  <div className="absolute h-3/5 w-3/5 top-[20%] right-[20%] bottom-[20%] left-[20%] rounded-13xl bg-branding-success" />
                </div>
                <div className="relative leading-[150%]">Propmpay QR Code</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="absolute top-[280px] left-[370px] w-[460px] flex flex-col items-start justify-start gap-[32px]">
        <div className="relative w-[402px] h-[600px] left-0">
          <div className=" relative top-[80px] left-[0px]">
            {time_out.minutes >= 0 ? (
              <img
                src="/img/promptpay-QR.jpg"
                alt=""
                width={400}
                height={400}
                className=" relative left-[-40px]"
              />
            ) : null}
            <div>
              <strong className=" relative left-[140px] text-[18px]">
                {time_out.minutes >= 0 ? (
                  <span>{`${time_out.minutes}:${time_out.second}`}</span>
                ) : null}
              </strong>
              <p>
                <strong>Shop name:&nbsp;&nbsp;</strong> Shop-Organic-eCommerce
              </p>
              <p>
                <strong>ชื่อบัญชี:&nbsp;&nbsp;</strong>นายณัฐวุฒิ จำปาแสง
              </p>
            </div>
          </div>
          <div className="absolute top-[5px] left-[0px] text-5xl leading-[150%] font-medium">
            สแกน QR Code เพื่อชำระเงิน
          </div>
        </div>
      </div>
      <Foorter />
    </div>
  );
};

export default Checkout_Bill;
