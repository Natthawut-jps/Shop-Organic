import { FunctionComponent, useEffect, useState } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import instance_auth from "./unities/instance_auth";
import { CartContextProviders } from "./unities/HandleCart";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

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
  phone: string;
  status: number;
  createdAt: string;
}

const Checkout: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const { cartItems } = CartContextProviders();
  const [addressItem, setAddress] = useState<addressType[]>([]);
  const price = cartItems.map((item) => item.price);
  const priceSum = price.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const handlerPlacement = async () => {
    if (addressItem.length > 0) {
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
            const date = new Date();
            const time = new Date(date.setMinutes(date.getMinutes() + 5));
            navigate("/shop/checkout/bill", {
              state: { order_list: res.data, time_old: time },
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      return handleClickOpen();
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
    <div className="bg-[url(/img/thumb-1920-1318790.png)] relative  w-full h-[2000px] overflow-hidden text-left text-sm text-gray-scale-gray-900 font-body-xxl-body-xxl-500">
      <Header />
      <Breadcrumbs
        categoies={undefined}
        tltle={undefined}
        EditAndadd={undefined}
        Detail={undefined}
      />
      <div className=" absolute top-[320px] w-[1200px] rounded-lg left-[200px] h-[1000px] bg-gray-scale-white shadow drop-shadow" />
      <div className="absolute top-[420px] left-[850px] rounded-lg bg-gray-scale-white flex flex-col items-start justify-start p-6 gap-[24px] border-[1px] border-solid border-gray-scale-gray-100">
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <div className="relative text-xl leading-[150%] font-medium">
            สรุปคำสั่งซื้อ
          </div>
          <div className="flex flex-col items-start justify-start gap-[1px] text-gray-scale-gray-700">
            <div className="bg-gray-scale-white w-[376px] flex flex-row items-center justify-between py-3 px-0 box-border">
              <div className="relative leading-[150%]">รวม:</div>
              <div className="relative leading-[150%] font-medium text-gray-scale-gray-900">
                ฿{priceSum.toFixed(2)}
              </div>
            </div>
            <div className="relative box-border w-[377px] border-t-[1px] border-solid border-gray-scale-gray-100" />
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
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"ไม่มีที่อยู่ในการจัดส่ง"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              เพิ่มที่อยู่แล้วลองใหม่อีกครั้ง
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>ตกลง</Button>
          </DialogActions>
        </Dialog>
        <div
          onClick={handlerPlacement}
          className="cursor-pointer no-underline rounded-24xl bg-branding-success w-[376px] flex flex-row items-center justify-center py-4 px-10 box-border text-base text-gray-scale-white"
        >
          <div className="relative leading-[120%] font-semibold">สั่งซื้อ</div>
        </div>
      </div>
      <div className="absolute top-[365px] left-[370px] w-[460px] flex flex-col items-start justify-start gap-[32px]">
        <div className="relative w-[472px] h-[350px]">
          {addressItem.map((item, index) => (
            <div
              key={index}
              className=" relative top-[60px] left-[0px] w-[450px] h-[420px]"
            >
              <div className="absolute top-[0px] left-[0px] rounded-md bg-gray-scale-white box-border w-[450px] h-[420px] border-[1px] border-solid border-gray-scale-gray-100 " />
              <div className=" absolute top-[18px] left-[0px] box-border pl-[0px] h-[420px] w-[470px] overflow-auto">
                <div className=" text-[16px] relative break-words top-[98px] pl-[20px] box-border leading-[150%] inline-block w-[420px]">
                  {`${item.street}, ${item.county}, ${item.states}, ${item.tambon}, ${item.zipCode}`}
                </div>
                <div className=" relative top-[120px] pl-[20px] box-border flex flex-col items-start justify-start gap-y-[4px] text-[16px]">
                  <div className="relative tracking-[0.03em] leading-[100%] uppercase font-bold">
                    อีเมลล์
                  </div>
                  <div className="relative break-words leading-[150%] text-gray-scale-gray-900 inline-block w-[420px] ">
                    dainne.ressell@gmail.com
                  </div>
                </div>
                <div className=" relative top-[140px] pl-[20px] box-border flex flex-col items-start justify-start gap-[4px] text-[16px]">
                  <div className="relative tracking-[0.03em] leading-[100%] uppercase font-bold">
                    เบอร์โทร
                  </div>
                  <div className="relative break-words leading-[150%] text-gray-scale-gray-900 inline-block w-[420px]">
                    {item.phone}
                  </div>
                </div>
                <div className="absolute font-bold top-[66px] pl-[20px] box-border leading-[150%] text-gray-scale-gray-900 w-[450px] text-[18px]">
                  {item.first_name}&nbsp;{item.last_name}
                </div>
                <Link
                  to={"/Account/Address"}
                  className="absolute hover:text-[#0280e1]/70 top-[0px] text-[16px] cursor-pointer p-[2px] text-[#0280e1] left-[20px] tracking-[0.03em] leading-[100%] font-medium"
                >
                  เปลี่ยนที่จัดส่ง
                </Link>
                <div className="absolute top-[31.5px] left-[0px] box-border w-[450px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
              </div>
            </div>
          ))}
          <div className="absolute top-[0px] left-[0px] text-5xl leading-[150%] font-medium">
            ข้อมูลคำสั่งซื้อ
          </div>
        </div>
      </div>
      <div className=" absolute top-[880px] gap-3 left-[370px] scroll-checkout flex flex-col items-start justify-start w-[900px] h-[350px] overflow-auto hover:scroll-m-48 border border-black/10 rounded-md p-2 z-0 border-solid drop-shadow-2xl">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="w-[500px] flex flex-row items-center justify-between gap-10 z-0"
          >
            <div className=" w-full flex flex-row items-center justify-start gap-[15px]">
              <img
                className="relative w-[60px] h-[60px] object-cover"
                alt=""
                src={import.meta.env.VITE_BASE_API + `/img/${item.imgURL}`}
              />
              <div className=" w-full flex justify-start items-center gap-[50px]">
                <div className="relative leading-[150%]">{item.name}</div>
                <div className="relative leading-[150%]">
                  {"x" + item.quantity}
                </div>
              </div>
            </div>
            <div className="relative leading-[150%] font-medium">
              ฿{item.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <Foorter />
    </div>
  );
};

export default Checkout;
