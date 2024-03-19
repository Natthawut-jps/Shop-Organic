import { FunctionComponent, useEffect, useState } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import instance_auth from "./unities/instance_auth";
import { AxiosResponse } from "axios";
import { CartContextProviders } from "./unities/HandleCart";

interface datatypesCart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  categories: string;
  rating: number;
  imgURL: string;
  pid: number;
  uid: number;
  shoppingHanding: number;
  createdAt: string;
  updatedAt: string;
}

interface addressType {
  id: number;
  first_name: string;
  last_name: string;
  company: string;
  street: string;
  county: string;
  tambon: string;
  states: string;
  zipCode: number;
  email: string;
  phone: number;
  status: number;
  createdAt: string;
}
interface orderDetail_Type {
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
const Checkout: FunctionComponent = () => {
  const navigate = useNavigate();
  const { cartItems } = CartContextProviders();
  const [addressItem, setAddress] = useState<addressType[]>([]);
  const price = cartItems.map((item) => item.price);
  const priceSum = price.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const handlerPlacement = async () => {
    const quantity = cartItems.map((item) => item.quantity);
    const quantitySum = quantity.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    const address_id = addressItem.find((item) => item.id);
    const amount_total = (priceSum + 50).toFixed(2);
    try {
      await instance_auth({
        method: "post",
        url: "/order/add",
        data: {
          amount_total: amount_total,
          address_id: address_id?.id,
          quantity: quantitySum,
        },
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status === 200) {
          try {
            await instance_auth({
              method: "post",
              url: "/order/details",
              data: { order_id: parseInt(res.data) },
              responseType: "json",
              headers: {
                "Content-Type": "application/json",
              }
            }).then((res) => {
              if (res.status === 200) {
                console.log(res.data);
                const date = new Date();
                const time = new Date(date.setMinutes(date.getMinutes() + 5));
                navigate("/shop/checkout/bill", {
                  state: { order_list: res.data, time_old: time },
                });
              }
            });
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const address = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/address/all",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 200) {
          setAddress(() =>
            res.data.filter((item: addressType) => item.status === 1)
          );
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    address();
  }, []);

  return (
    <div className="bg-[url(/img/thumb-1920-1318790.png)] relative  w-full h-[1800px] overflow-hidden text-left text-sm text-gray-scale-gray-900 font-body-xxl-body-xxl-500">
      <Header />
      <Breadcrumbs
        categoies={undefined}
        tltle={undefined}
        EditAndadd={undefined}
        Detail={undefined}
      />
      <div className=" absolute top-[320px] w-[1200px] rounded-lg left-[200px] h-[900px] bg-gray-scale-white shadow drop-shadow" />
      <div className="absolute top-[390px] left-[850px] rounded-lg bg-gray-scale-white flex flex-col items-start justify-start p-6 gap-[24px] border-[1px] border-solid border-gray-scale-gray-100">
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <div className="relative text-xl leading-[150%] font-medium">
            Order Summery
          </div>
          <div className="scroll-checkout flex flex-col items-start justify-start w-[400px] h-[300px] overflow-auto hover:scroll-m-48">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="w-[376px] flex flex-row items-center justify-between"
              >
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img
                    className="relative w-[60px] h-[60px] object-cover"
                    alt=""
                    src={import.meta.env.VITE_BASE_API + `/img/${item.imgURL}`}
                  />
                  <div className="relative leading-[150%]">{item.name}</div>
                  <div className="relative leading-[150%]">
                    {"x" + item.quantity}
                  </div>
                </div>
                <div className="relative leading-[150%] font-medium">
                  ฿{item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start justify-start gap-[1px] text-gray-scale-gray-700">
            <div className="bg-gray-scale-white w-[376px] flex flex-row items-center justify-between py-3 px-0 box-border">
              <div className="relative leading-[150%]">Subtotal:</div>
              <div className="relative leading-[150%] font-medium text-gray-scale-gray-900">
                ฿{priceSum.toFixed(2)}
              </div>
            </div>
            <div className="relative box-border w-[377px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
            <div className="bg-gray-scale-white w-[376px] flex flex-row items-center justify-between py-3 px-0 box-border">
              <div className="relative leading-[150%]">Shipping:</div>
              <div className="relative leading-[150%] font-medium text-gray-scale-gray-900">
                ฿50.00
              </div>
            </div>
            <div className="relative box-border w-[377px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
            <div className="bg-gray-scale-white w-[376px] flex flex-row items-center justify-between pt-3 px-0 pb-0 box-border text-base">
              <div className="relative leading-[150%]">Total:</div>
              <div className="relative text-[18px] leading-[120%] font-semibold text-gray-scale-gray-900">
                ฿{(priceSum + 50).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[173px] h-[100px] text-xl">
          <div className="absolute top-[0px] left-[0px] leading-[150%] font-medium">
            Payment Method
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
        <div
          onClick={handlerPlacement}
          className="cursor-pointer no-underline rounded-24xl bg-branding-success w-[376px] flex flex-row items-center justify-center py-4 px-10 box-border text-base text-gray-scale-white"
        >
          <div className="relative leading-[120%] font-semibold">
            Place Order
          </div>
        </div>
      </div>
      <div className="absolute top-[440px] left-[370px] w-[460px] flex flex-col items-start justify-start gap-[32px]">
        <div className="relative w-[472px] h-[350px]">
          {addressItem.map((item, index) => (
            <div
              key={index}
              className=" relative top-[50px] left-[0px] w-[450px] h-[280px]"
            >
              <div className="absolute top-[0px] left-[0px] rounded-md bg-gray-scale-white box-border w-[450px] h-[280px] border-[1px] border-solid border-gray-scale-gray-100 " />
              <div className=" absolute top-[18px] left-[0px] box-border pl-[0px] h-[250px] w-[470px] overflow-auto">
                <div className=" relative break-words top-[78px] pl-[20px] box-border leading-[150%] text-gray-scale-gray-600 inline-block w-[420px]">
                  {`${item.street}, ${item.county}, ${item.states}, ${item.tambon}, ${item.zipCode}`}
                </div>
                <div className=" relative top-[100px] pl-[20px] box-border flex flex-col items-start justify-start gap-y-[4px] text-xs">
                  <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium  ">
                    Email
                  </div>
                  <div className="relative break-words text-sm leading-[150%] text-gray-scale-gray-900 inline-block w-[420px] ">
                    dainne.ressell@gmail.com
                  </div>
                </div>
                <div className=" relative top-[120px] pl-[20px] box-border flex flex-col items-start justify-start gap-[4px] text-xs">
                  <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                    Phone
                  </div>
                  <div className="relative text-sm break-words leading-[150%] text-gray-scale-gray-900 inline-block w-[420px]">
                    {item.phone}
                  </div>
                </div>
                <div className="absolute top-[46px] pl-[20px] box-border text-base leading-[150%] text-gray-scale-gray-900 w-[450px]">
                  {item.first_name}&nbsp;{item.last_name}
                </div>
                <Link
                  to={""}
                  className="absolute hover:text-[#0280e1]/70 top-[0px] cursor-pointer p-[2px] text-[#0280e1] left-[20px] tracking-[0.03em] leading-[100%] font-medium"
                >
                  เปลี่ยนที่จัดส่ง
                </Link>
                <div className="absolute top-[31.5px] left-[0px] box-border w-[450px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
              </div>
            </div>
          ))}
          <div className="absolute top-[0px] left-[0px] text-5xl leading-[150%] font-medium">
            Billing Information
          </div>
        </div>
        <div className="relative top-[0px] left-[0px] box-border w-[450px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
        <div className="flex flex-col items-start justify-start gap-[20px] text-5xl relative top-[0px] left-[0px]">
          <div className="relative leading-[150%] font-medium">
            Additional Info
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px] text-sm">
            <div className="relative leading-[150%]">
              Order Notes (Optional)
            </div>
            <div className="relative rounded-md bg-gray-scale-white box-border w-[450px] h-[180px] text-base text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100">
              <div className="absolute top-[0px] left-[5px] leading-[130%]">
                <textarea
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  className=" text-[#666666] box-border p-2 focus:outline-none resize-none w-[438px] rounded-lg h-[93px]"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foorter />
    </div>
  );
};

export default Checkout;
