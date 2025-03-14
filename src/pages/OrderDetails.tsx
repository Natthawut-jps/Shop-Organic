import { FunctionComponent, useEffect, useState } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { NavAccount } from "./unities/NavAccount";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { useParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import instance_auth from "./unities/instance_auth";

interface order_Type {
  id: number;
  referent: string;
  payment_menthod: string;
  amount_total: number;
  status: number;
  quantity: number;
  user_id: string;
  address_id: number;
  createdAt: Date;
  updatedAt: Date;
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
  phone: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}
interface orderDetail_Type {
  id: number;
  name: string;
  price: number;
  categories: string;
  quantity: number;
  imgURL: string;
  pid: number;
  user_id: number;
  order_id: number;
  createdAt: Date;
  updatedAt: Date;
}
const OrderDetails: FunctionComponent = () => {
  const months = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];
  const { Detail, order_id } = useParams();
  const stepLabel = [
    "กำลังดำเนินการ",
    "รับออเดอร์เรียบร้อย",
    "กำลังเตรียมพัสดุ",
    "บริษัทขนส่งเข้ารับพัสดุ",
  ];

  const [orderActive, setOrder_Active] = useState<orderDetail_Type[]>([]);
  const [addressActive, setAddress_Active] = useState<addressType>();
  const [orderView, setOrderView] = useState<order_Type>();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const orders_Active = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/order/active_order",
        responseType: "json",
        params: { order_id: order_id },
      }).then((res) => {
        if (res.status === 200) {
          if (res.status === 200) {
            setOrder_Active(res.data);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const address_Active = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/address/active",
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          if (res.status === 200) {
            setAddress_Active(res.data);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const order_view = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/order/order_view_active",
        responseType: "json",
        params: { order_id: order_id },
      }).then((res) => {
        if (res.status === 200) {
          if (res.status === 200) {
            setOrderView(res.data);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const cancled_order = async () => {
    try {
      await instance_auth({
        method: "post",
        url: "/order/cancled",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          id_order: orderView?.id,
        },
      }).then((res) => {
        if (res.status === 200) {
          location.href = "/Account/Orders";
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    orders_Active();
    address_Active();
    order_view();
  }, []);

  return (
    <>
      <Header />
      <Breadcrumbs
        categoies={undefined}
        tltle={undefined}
        Detail={Detail}
        EditAndadd={undefined}
      />
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-5 gap-3 justify-item-start">
        <NavAccount />
        <div className="col-span-1 lg:col-span-4 bg-gray-scale-white text-left text-base text-gray-scale-gray-400 font-caps-lock-medium-caps-lock">
          {/* product-Order */}
          <div className="scroll-order text-gray-scale-gray-900">
            <div className=" text-xs text-gray-scale-gray-700">
              <div className=" bg-gray-scale-gray-50 w-[965px] h-9" />
              <div className="tracking-[0.03em] leading-[100%] uppercase font-medium">
                สินค้า
              </div>
              <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium">
                ราคา
              </div>
              <div className="tracking-[0.03em] leading-[100%] uppercase font-medium">
                จำนวน
              </div>
              <div className="tracking-[0.03em] leading-[100%] uppercase font-medium">
                รวม
              </div>
            </div>
            <div className=" grid grid-cols-1 justify-items-center items-center">
              {orderActive.map((item, index) => (
                <div
                  key={index}
                  className=" top-[20px] pl-[20px] box-border w-full h-[60px] odd:bg-white even:bg-slate-50"
                >
                  <img
                    className="absolute object-cover"
                    alt=""
                    src={`${import.meta.env.VITE_BASE_API}/img/${item.imgURL}`}
                    width={70}
                    height={50}
                  />
                  <div className=" leading-[150%] inline-block">
                    {item.name}
                  </div>
                  <div className="leading-[150%]">x{item.quantity}</div>
                  <div className="leading-[150%]">
                    ฿{item.price / item.quantity}
                  </div>
                  <div className="leading-[150%] font-medium">
                    ฿{item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="text-center text-branding-success-dark">
            {orderView?.status === 9 ? (
              <div className=" text-branding-error">
                <h2>"ยกเลิกสินค้าแล้ว"</h2>
              </div>
            ) : orderView?.status === 5 ? (
              <div className=" text-blue-500">
                <h2>"พัสดุตีกลับแล้ว"</h2>
              </div>
            ) : (
              <Stepper
                activeStep={orderView ? orderView.status : 0}
                alternativeLabel
                sx={{
                  "& .MuiStepIcon-root.Mui-completed": { color: "green" },
                  "& .MuiStepIcon-root.Mui-active": { color: "green" },
                  "& .Mui-active": {
                    "& .MuiStepConnector-line": { borderColor: "green" },
                  },
                  "& .Mui-completed": {
                    "& .MuiStepConnector-line": { borderColor: "green" },
                  },
                }}
              >
                {stepLabel.map((label, index) => (
                  <Step key={index}>
                    <div>
                      <StepLabel>{label}</StepLabel>
                    </div>
                  </Step>
                ))}
              </Stepper>
            )}
          </div>
          <div className="rounded-md flex flex-col items-start justify-start text-xs border-[1px] border-solid border-gray-scale-gray-100">
            <div className="flex flex-row items-start justify-start py-[18px] px-5 gap-[20px]">
              <div className="flex flex-col items-start justify-start gap-[6px]">
                <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium">
                  หมายเลขคำสั่งซื้อ
                </div>
                <div className=" text-sm leading-[150%] text-gray-scale-gray-900 inline-block w-20">
                  #{orderView?.id}
                </div>
              </div>
              <img className="" alt="" src="/img/line-20.svg" />
              <div className="flex flex-col items-start justify-start gap-[6px]">
                <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium">
                  วิธีชำระเงิน
                </div>
                <div className=" text-[12px] leading-[150%] text-gray-scale-gray-900 inline-block w-32">
                  {orderView?.payment_menthod}
                </div>
              </div>
            </div>
            <div className=" box-border border-t-[1px] border-solid border-gray-scale-gray-100" />
            <div className="flex flex-col items-start justify-start py-[18px] px-5 gap-[1px] text-sm text-gray-scale-gray-600">
              <div className="flex flex-row items-center justify-between pt-0 px-0 pb-3 box-border">
                <div className=" leading-[150%]">รวม</div>
                <div className=" leading-[150%] font-medium text-gray-scale-gray-900">
                  ฿{orderView ? orderView.amount_total - 50 : 0}
                </div>
              </div>
              <div className=" box-border border-t-[1px] border-solid border-gray-scale-gray-100" />
              <div className=" flex flex-row items-center justify-between py-3 px-0 box-border">
                <div className=" leading-[150%]">ค่าจัดส่ง</div>
                <div className=" leading-[150%] font-medium text-gray-scale-gray-900">
                  ฿50.00
                </div>
              </div>
              <div className=" box-border border-t-[1px] border-solid border-gray-scale-gray-100" />
              <div className="flex flex-row items-center justify-between pt-3 px-0 pb-0 box-border text-lg text-gray-scale-gray-900">
                <div className=" leading-[150%]">ทั้งหมด</div>
                <div className=" leading-[150%] font-semibold text-branding-success-dark">
                  ฿{orderView?.amount_total}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" rounded-md bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-100 " />
            <div className="  box-border">
              <div className="  break-words leading-[150%] text-gray-scale-gray-600 inline-block">
                {`${addressActive?.street}, ${addressActive?.county}, ${addressActive?.states},
            ${addressActive?.tambon}, ${addressActive?.zipCode}`}
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px] text-xs">
                <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium">
                  เบอร์โทร
                </div>
                <div className=" text-sm break-words leading-[150%] text-gray-scale-gray-900 inline-block">
                  {addressActive?.phone}
                </div>
              </div>
              <div className=" text-base leading-[150%] text-gray-scale-gray-900">
                {`${addressActive?.first_name} ${addressActive?.last_name}`}
              </div>
              <div className="tracking-[0.03em] leading-[100%] uppercase font-medium">
                ที่อยู่จัดส่ง
              </div>
              <div className="box-border border-t-[1px] border-solid border-gray-scale-gray-100" />
            </div>
          </div>
          <div className=" rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] flex flex-row items-center justify-start py-4 px-6 gap-[420px] text-gray-scale-gray-700">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className=" text-xl leading-[150%] font-medium text-gray-scale-gray-900">
                รายละเอียดคำสั่งซื้อ
              </div>
              <div className=" leading-[150%]">•</div>
              <div className=" leading-[150%]">
                {`${new Date(
                  orderView ? orderView.createdAt : ""
                ).getDate()}, ${
                  months[
                    new Date(orderView ? orderView.createdAt : "").getMonth()
                  ]
                }, ${
                  new Date(orderView ? orderView.createdAt : "").getFullYear() +
                  543
                }`}
              </div>
              <div className=" leading-[150%]">•</div>
              <div className=" leading-[150%]">
                {orderView?.quantity} รายการ
              </div>
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title" className=" text-red-500">
                {"คุณต้องการยกเลิกรายการสินค้านี้หรือไม่"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  ยกเลิกแล้วจะไม่สามารถกู้คืนได้
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>ยกเลิก</Button>
                <Button onClick={cancled_order}>ตกลง</Button>
              </DialogActions>
            </Dialog>
            {orderView && orderView.status === 9 ? null : (
              <div
                onClick={handleClickOpen}
                className=" cursor-pointer no-underline hover:text-branding-error/80 text-base leading-[150%] px-[15px] py-[5px] rounded-md bg-branding-error/10 text-branding-error font-sans font-bold"
              >
                ยกเลิกคำสั่งซื้อ
              </div>
            )}
          </div> */}
        </div>
      </div>
      <Foorter />
    </>
  );
};

export default OrderDetails;
