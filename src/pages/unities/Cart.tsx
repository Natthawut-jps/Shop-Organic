import {
  FunctionComponent,
  ReactElement,
  Ref,
  forwardRef,
  useEffect,
  useState,
} from "react";
import {
  faMinus,
  faPlus,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { CartContextProviders } from "./HandleCart";
import instance_auth from "./instance_auth";
import { Link } from "react-router-dom";
import instance from "./axios_instance";

// Cart
export const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return (
    <>
      <Slide direction="down" ref={ref} {...props} />
    </>
  );
});
interface open {
  Carts: {
    openCart: boolean;
    setOpenCart: (e: boolean) => void;
  };
}
interface confirmremoveall {
  Angree: {
    angreeOpen: boolean;
    setAngreeOpen: (e: boolean) => void;
  };
}
interface subconfirmremoveProps {
  open: boolean;
  id?: number;
}
interface confirmremove {
  confirm: {
    confirmOpen: {
      open: boolean;
      id?: number;
    };
    setConfirmOpen: (props: subconfirmremoveProps) => void;
  };
}
export const ConfirmRemoveAll: FunctionComponent<confirmremoveall> = (
  props
) => {
  const { removeCartItemAll } = CartContextProviders();
  return (
    <>
      <Dialog
        open={props.Angree.angreeOpen}
        onClose={() => props.Angree.setAngreeOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className=" text-red-600">
          {"คุณต้องการลบสินค้าทั้งหมดหรือไม่"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"สินค้าจะไม่สามารถกู้คืนได้"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.Angree.setAngreeOpen(false)}>
            ยกเลิก
          </Button>
          <Button
            onClick={() => {
              props.Angree.setAngreeOpen(false);
              removeCartItemAll(true);
            }}
          >
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export const ConfirmRemove: FunctionComponent<confirmremove> = (props) => {
  const { removeCartItem } = CartContextProviders();

  return (
    <>
      <Dialog
        open={props.confirm.confirmOpen.open}
        onClose={() =>
          props.confirm.setConfirmOpen({
            open: false,
            id: props.confirm.confirmOpen.id,
          })
        }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className=" text-red-600">
          {"คุณต้องการลบสินค้านี้หรือไม่"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"สินค้าจะไม่สามารถกู้คืนได้"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              props.confirm.setConfirmOpen({
                open: false,
                id: props.confirm.confirmOpen.id,
              })
            }
          >
            ยกเลิก
          </Button>
          <Button
            onClick={() => {
              props.confirm.setConfirmOpen({
                open: false,
                id: props.confirm.confirmOpen.id,
              });
              removeCartItem(props.confirm.confirmOpen.id!);
            }}
          >
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

interface datatypesProduct {
  id: number;
  name: string;
  price: number;
  categories: string;
  rating: number;
  imgURL: string;
  uid: number;
  shoppingHanding: number;
  createdAt: string;
  updatedAt: string;
}
export const Cart: FunctionComponent<open> = (props) => {
  const [Product, setrProduct] = useState<datatypesProduct[]>([]);
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    setCartitems,
    cartItems,
  } = CartContextProviders();
  const [angreeOpen, setAngreeOpen] = useState<boolean>(false);
  const [confirmOpen, setConfirmOpen] = useState<{
    open: boolean;
    id?: number;
  }>({ open: false });
  const price = cartItems.map((item) => item.price);
  const priceSum = price.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  // productItem
  const get_Product = async () => {
    try {
      await instance({
        method: "get",
        url: "/public/products/get_product",
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          setrProduct(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // get CartItem
  async function CartItem() {
    const { data } = await instance_auth({
      method: "get",
      url: "/cart-favorite/cart",
    });
    setCartitems(data);
  }

  useEffect(() => {
    CartItem();
    get_Product();
  }, []);
  return (
    <>
      <ConfirmRemove confirm={{ confirmOpen, setConfirmOpen }} />
      <ConfirmRemoveAll Angree={{ angreeOpen, setAngreeOpen }} />
      <Dialog
        fullWidth
        maxWidth={"md"}
        onClose={() => props.Carts.setOpenCart(false)}
        open={props.Carts.openCart}
        // TransitionComponent={Transition}
      >
        <div>
          <div className="p-2 box-border">
            <FontAwesomeIcon
              onClick={() => props.Carts.setOpenCart(false)}
              icon={faXmark}
              size="lg"
              className="cursor-pointer p-[5px] opacity-50 active:bg-slate-300 active:bg-opacity-60 float-right "
            />
          </div>
          <div className="bg-white box-border w-full grid grid-flow-row gap-2">
            <div className="flex flex-col gap-2 w-full">
              <div className="container mx-auto px-4 pt-4 box-border  flex flex-row justify-between gap-2 w-full ">
                <div className="text-base [font-family:'Montserrat',Helvetica] font-bold text-black  tracking-[0] leading-[normal]">
                  ตะกร้าสินค้า
                </div>
                {cartItems.length > 0 && (
                  <div
                    onClick={() => setAngreeOpen(true)}
                    className="text-red-600 hover:text-red-700 cursor-pointer flex box-border"
                  >
                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-[13px]  hover:text-opacity-50 whitespace-nowrap  tracking-[0] leading-[normal]">
                      ลบทั้งหมด
                    </div>
                    <FontAwesomeIcon icon={faTrash} className="" />
                  </div>
                )}
              </div>
              <div className=" border-solid border-[#666666] border-opacity-30  box-border border-[1px] " />
            </div>
            {cartItems.length > 0 && (
              <div className="container mx-auto p-4 box-border flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-row gap-x-20 sm:gap-10 flex-wrap items-center justify-start"
                  >
                    <div className="flex flex-row gap-5 items-center basis-1/4">
                      <div className="flex flex-row justify-center items-center">
                        <img
                          className="max-w-[100px] w-[100px] object-cover"
                          alt="Image"
                          src={`${import.meta.env.VITE_BASE_API}/img/${
                            item.imgURL
                          }`}
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <div className=" flex justify-center items-center">
                          <div className="[font-family:'Montserrat',Helvetica] text-base font-normal text-[#333435] tracking-[0] leading-[normal]">
                            {item.name}
                          </div>
                        </div>
                        <div className=" flex items-center justify-center">
                          <div className="[font-family:'Noto_Serif_Thai',Helvetica] text-base font-semibold text-[#06e102] tracking-[0] leading-[normal]">
                            {item.price.toFixed(2) + "฿"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start  gap-12">
                      <div className="flex flex-row justify-center items-center gap-2.5 py-0.5 px-1.5 bg-[#ffffff33] rounded-[4px] border border-solid border-[#33343566]">
                        <div
                          onClick={() =>
                            increaseCartQuantity(
                              item.pid,
                              Product.find((price) => price.id === item.pid)
                                ?.price!
                            )
                          }
                          className=" hover:bg-[#666666]/20 rounded-s-sm cursor-pointer [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-[#333435] tracking-[0] leading-[normal]"
                        >
                          <FontAwesomeIcon icon={faPlus} className="" />
                        </div>
                        <div className="[font-family:'Noto_Serif_Thai',Helvetica] font-semibold text-[#333435e6] tracking-[0] leading-[normal]">
                          {item.quantity}
                        </div>
                        <div
                          onClick={() =>
                            decreaseCartQuantity(
                              item.pid,
                              Product.find((price) => price.id === item.pid)
                                ?.price!
                            )
                          }
                          className="hover:bg-[#666666]/20 cursor-pointer rounded-s-sm [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-[#333435] whitespace-nowrap  tracking-[0] leading-[normal]"
                        >
                          <FontAwesomeIcon icon={faMinus} className="" />
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div
                          onClick={() =>
                            setConfirmOpen({ open: true, id: item.pid })
                          }
                          className="cursor-pointer hover:text-red-700 text-red-600"
                        >
                          <div className="   [font-family:'Montserrat',Helvetica] font-normal  text-[12px]  whitespace-nowrap  tracking-[0] leading-[normal]">
                            ลบ
                          </div>
                          <FontAwesomeIcon
                            icon={faTrash}
                            className=" w-[11px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {cartItems.length > 0 ? (
              <div className="container mx-auto p-4 box-border  bg-[#f7f7f7]">
                <div className="flex flex-col gap-3">
                  <div className="text-base [font-family:'Noto_Serif_Thai',Helvetica] font-semibold text-black   tracking-[0] leading-[normal]">
                    สรุปคำสั่งซื้อ
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className=" text-base   [font-family:'Noto_Serif_Thai',Helvetica] font-bold text-[#666666]  tracking-[0] leading-[normal]">
                      ค่าจัดส่ง
                    </div>
                    <div className="text-base   font-normal  [font-family:'Noto_Serif_Thai',Helvetica] text-[#666666]  tracking-[0] leading-[normal]">
                      {"50฿"}
                    </div>
                    <div className="text-base    [font-family:'Noto_Serif_Thai',Helvetica] font-bold text-[#666666]  tracking-[0] leading-[normal]">
                      ราคาสุทธิ
                    </div>
                    <div className=" text-base  font-bold  [font-family:'Noto_Serif_Thai',Helvetica] text-[#666666]  tracking-[0] leading-[normal]">
                      {(priceSum + 50).toFixed(2) + "฿"}
                    </div>
                    <p className="text-base    [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-[#666666]  tracking-[0] leading-[normal]">
                      Shipping &amp; Handling
                      <br />
                      (บริษัทขนส่ง - DHL Express)
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Link
                    to={"/shop/checkout"}
                    className="cursor-pointer no-underline bg-[#06e10133] rounded-[4px] border border-solid border-[#06e102] py-1.5 px-2.5 w-fit m-1 box-border"
                  >
                    <div className=" [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-[#06e102]   tracking-[0] leading-[normal]">
                      สั่งซื้อ
                    </div>
                  </Link>
                  <div
                    onClick={() => props.Carts.setOpenCart(false)}
                    className=" cursor-pointer   [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-[#666666]   tracking-[0] leading-[normal]"
                  >
                    ช้อปปิ้งต่อ
                  </div>
                </div>
              </div>
            ) : (
              <div className=" w-full h-[300px] flex flex-row items-center justify-center">
                ไม่มีสินค้าในตะกล้า
              </div>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};
