import { FunctionComponent, useEffect, useState } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";

interface productType {
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

interface reviewType {
  id: number;
  review: number;
}
export const Review = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [review, setReview] = useState<reviewType[]>([]);
  const product: state_Type = useLocation().state;
  const labels: { [index: string]: string } = {
    1: "แย่",
    2: "พอใช้",
    3: "ปานกลาง",
    4: "ดี",
    5: "ยอดเยี่อม",
  };

  return (
    <>
      <Snackbar
        open={open}
        onClose={() => (location.href = "/")}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          รีวิวสินค้าเรียบร้อยแล้ว
        </Alert>
      </Snackbar>
      <Dialog open={true} fullWidth>
        <IconButton
          onClick={() => (location.href = "/")}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle>รีวิวสินค้า</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: 3,
              width: "80%",
            }}
          >
            {product.order_list.map((item: productType, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <img
                    width={50}
                    src={`${import.meta.env.VITE_BASE_API}/img/${item.imgURL}`}
                    alt=""
                  />
                  <Typography>{item.name}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    gap: 1,
                  }}
                >
                  <Rating
                    name="hover-feedback"
                    value={review.find((value) => value.id === item.id)?.review}
                    precision={1}
                    onChange={(event, newReview) => {
                      setReview([
                        ...review.filter((previous) => previous.id !== item.id),
                        { id: item.id, review: newReview as number },
                      ]);
                      {
                        event;
                      }
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  {review.find((h) => h.id === item.id) && (
                    <Box sx={{ ml: 2 }}>
                      {
                        labels[
                          review.find(
                            (hoverReview) => hoverReview.id === item.id
                          )?.review as number
                        ]
                      }
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            position: "absolute",
            right: 8,
            bottom: 8,
            zIndex: 50,
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setTimeout(() => setOpen(true), 100);
            }}
          >
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
const Checkout_Bill: FunctionComponent = () => {
  // check status billing
  const [bill, setBill] = useState<boolean>(true);
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
      {bill ? (
        <div>
          <div className="absolute top-[250px] w-[1200px] rounded-lg left-[200px] h-[800px] bg-gray-scale-white shadow drop-shadow" />
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
                          <div className="relative leading-[150%]">
                            {item.name}
                          </div>
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
                    <div className="relative leading-[150%]">
                      Propmpay QR Code
                    </div>
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
                    <strong>Shop name:&nbsp;&nbsp;</strong>{" "}
                    Shop-Organic-eCommerce
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
        </div>
      ) : (
        <Review />
      )}
      <Foorter />
    </div>
  );
};

export default Checkout_Bill;
