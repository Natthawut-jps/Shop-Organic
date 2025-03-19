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
  Divider,
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
        <div className="container mx-auto p-4 box-border flex flex-col gap-5 col-span-1 lg:col-span-4 bg-gray-scale-white text-base text-gray-scale-gray-700 font-caps-lock-medium-caps-lock">
          <div className=" rounded-t-lg rounded-b-none flex flex-row items-center justify-between">
            <div className="flex flex-row flex-wrap items-center justify-start gap-1 text-base">
              <div className="flex flex-row text-baes font-medium text-gray-scale-gray-900">
                รายละเอียดคำสั่งซื้อ.
              </div>
              <div className=" leading-[150%] flex flex-row text-sm gap-2">
                {`${new Date(orderView ? orderView.createdAt : "").getDate()} ${
                  months[
                    new Date(orderView ? orderView.createdAt : "").getMonth()
                  ]
                } ${
                  new Date(orderView ? orderView.createdAt : "").getFullYear() +
                  543
                }`}
                .
                <div className=" leading-[150%]">
                  {orderView?.quantity} รายการ
                </div>
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
                className=" cursor-pointer no-underline hover:text-branding-error/80 text-sm sm:text-base px-[5px] py-[3px] rounded-md bg-branding-error/10 text-branding-error font-sans font-bold"
              >
                ยกเลิกคำสั่งซื้อ
              </div>
            )}
          </div>
          <Divider />
          <div className="text-center text-branding-success-dark flex flex-col gap-4">
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
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="container p-4 box-border max-w-fit w-fit lg:max-w-full lg:w-full rounded-md flex flex-col gap-3 items-start justify-start text-sm border-[1px] border-solid border-gray-scale-gray-100">
              <div className="flex flex-row items-start justify-start gap-[20px]">
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
              <div className="flex flex-row gap-6 text-sm text-gray-scale-gray-600">
                <div className="flex flex-row gap-1 items-center justify-between">
                  <div className=" leading-[150%]">รวม</div>
                  <div className=" leading-[150%] font-medium text-gray-scale-gray-900">
                    ฿{orderView ? orderView.amount_total - 50 : 0}
                  </div>
                </div>
                <div className=" flex flex-row items-center justify-between gap-1 px-0 box-border">
                  <div className=" leading-[150%]">ค่าจัดส่ง</div>
                  <div className=" leading-[150%] font-medium text-gray-scale-gray-900">
                    ฿50.00
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between gap-1 box-border text-base">
                <div className=" leading-[150%]">ทั้งหมด</div>
                <div className=" leading-[150%] font-semibold text-gray-scale-gray-900">
                  ฿{orderView?.amount_total}
                </div>
              </div>
            </div>
            <div className="container p-4 box-border rounded-md max-w-fit w-fit lg:max-w-full lg:w-full  bg-gray-scale-white border-[1px] border-solid border-gray-scale-gray-100 ">
              <div className="  box-border">
                <div className="text-gray-scale-gray-600 underline">
                  ชื่อผู้รับ
                </div>
                <div className=" text-base leading-[150%] text-gray-scale-gray-600">
                  {`${addressActive?.first_name} ${addressActive?.last_name}`}
                </div>
                <div className="tracking-[0.03em] leading-[100%] uppercase font-medium text-gray-scale-gray-600 underline">
                  ที่อยู่จัดส่ง
                </div>
                <div className="  break-words leading-[150%] text-gray-scale-gray-600 inline-block">
                  {`${addressActive?.street}, ${addressActive?.county}, ${addressActive?.states},
                  ${addressActive?.tambon}, ${addressActive?.zipCode}`}
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px] ">
                  <div className=" tracking-[0.03em] leading-[100%] uppercase font-medium text-gray-scale-gray-600 underline">
                    เบอร์โทร
                  </div>
                  <div className="break-words leading-[150%] text-gray-scale-gray-600 inline-block">
                    {addressActive?.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-gray-scale-gray-900 flex flex-col gap-3">
            <div className=" text-base grid grid-cols-4 gap-x-8 p-1 box-border text-gray-scale-gray-700 bg-gray-scale-gray-50">
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
            <div className=" flex flex-col gap-2">
              {orderActive.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-x-8 items-center odd:bg-white even:bg-slate-50"
                >
                  <div>
                    <img
                      className=" max-w-[100px] w-full object-cover"
                      alt=""
                      src={`${import.meta.env.VITE_BASE_API}/img/${
                        item.imgURL
                      }`}
                    />
                    <div className=" leading-[150%] break-words">
                      {item.name}
                    </div>
                  </div>
                  <div className="leading-[150%] break-words">
                    ฿{item.price / item.quantity}
                  </div>
                  <div className="leading-[150%] break-words">
                    x{item.quantity}
                  </div>
                  <div className="leading-[150%] font-medium break-words">
                    ฿{item.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Foorter />
    </>
  );
};

export default OrderDetails;
