import {
  FunctionComponent,
  ReactElement,
  Ref,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
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

// Favorite
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
  Favorite: {
    openFavorite: boolean;
    setOpenFavorite: (e: boolean) => void;
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
  const { removeFavoriteItemAll } = CartContextProviders();
  return (
    <>
      <Dialog
        open={props.Angree.angreeOpen}
        onClose={() => props.Angree.setAngreeOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className=" text-red-600">
          {"คุณต้องการลบรายการที่ชอบทั้งหมดหรือไม่"}
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
              removeFavoriteItemAll(true);
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
  const { removeFavoriteItem } = CartContextProviders();
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
          {"คุณต้องการลบรายการที่ชอบนี้หรือไม่"}
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
              removeFavoriteItem(props.confirm.confirmOpen.id!);
            }}
          >
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const Favorite: FunctionComponent<open> = (props) => {
  const { favoriteItem, cartItems, setFavoritetItem, addTocart } =
    CartContextProviders();
  const [angreeOpen, setAngreeOpen] = useState<boolean>(false);
  const [confirmOpen, setConfirmOpen] = useState<{
    open: boolean;
    id?: number;
  }>({ open: false });
  // get FavoriteItem
  async function FavoriteItem() {
    const { data } = await instance_auth({
      method: "get",
      url: "/cart-favorite/favorite",
    });
    setFavoritetItem(data);
  }

  useEffect(() => {
    FavoriteItem();
  }, []);
  return (
    <>
      <ConfirmRemove confirm={{ confirmOpen, setConfirmOpen }} />
      <ConfirmRemoveAll Angree={{ angreeOpen, setAngreeOpen }} />
      <Dialog
        fullWidth
        maxWidth={"md"}
        onClose={() => props.Favorite.setOpenFavorite(false)}
        open={props.Favorite.openFavorite}
      >
        <div className="">
          <div className="p-2 box-border">
            <FontAwesomeIcon
              onClick={() => props.Favorite.setOpenFavorite(false)}
              icon={faXmark}
              size="lg"
              className="cursor-pointer p-[5px] opacity-50 active:bg-slate-300 active:bg-opacity-60 float-right "
            />
          </div>
          <div className=" bg-white box-border w-full grid grid-flow-row gap-2">
            <div className="flex flex-col gap-2 w-full">
              <div className="container mx-auto px-4 pt-4 box-border  flex flex-row justify-between">
                <div className="   [font-family:'Montserrat',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal]">
                  สินค้าที่ชอบ
                </div>
                {favoriteItem.length > 0 && (
                  <div
                    onClick={() => setAngreeOpen(true)}
                    className="text-red-600 hover:text-red-700 cursor-pointer flex flex-row justify-center items-center box-border"
                  >
                    <div className="[font-family:'Montserrat',Helvetica] font-normal  hover:text-opacity-50  text-[13px] text-right whitespace-nowrap  tracking-[0] leading-[normal]">
                      ลบทั้งหมด
                    </div>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className=" w-[12px] h-[12px]"
                    />
                  </div>
                )}
              </div>
              <div className=" border-solid border-[#666666] border-opacity-30  box-border border-[1px] " />
            </div>
            <div className="container mx-auto p-4 box-border flex flex-col gap-4">
              {favoriteItem.length > 0 &&
                favoriteItem.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-row gap-6 sm:gap-10 flex-wrap justify-start"
                  >
                    <div className=" flex flex-row justify-center items-center">
                      <img
                        className=" max-w-[100px] w-[100px]"
                        alt="Image"
                        src={`${import.meta.env.VITE_BASE_API}/img/${
                          item.imgURL
                        }`}
                      />
                    </div>
                    <div className=" flex flex-col justify-center items-start gap-2">
                      <div className=" flex justify-center items-center ">
                        <div className="text-base  [font-family:'Montserrat',Helvetica] font-normal text-[#333435] tracking-[0] leading-[normal]">
                          {item.name}
                        </div>
                      </div>
                      <div className=" flex items-center justify-center ">
                        <div className="  [font-family:'Noto_Serif_Thai',Helvetica] font-semibold text-[#06e102] text-[16px] tracking-[0] leading-[normal]">
                          {item.price.toFixed(2) + "฿"}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start gap-10 sm:w-fit items-center">
                      {cartItems.some((check) => check.pid === item.pid) ? (
                        <div className=" flex justify-center items-center w-[150px]">
                          <div className=" cursor-pointer rounded-xl bg-yellow-400 px-3 py-1 flex text-[15px] flex-row items-center justify-center  box-border gap-[16px] text-gray-scale-white">
                            <div className=" leading-[100%] font-semibold">
                              เพิ่มสินค้าแล้ว
                            </div>
                            <img
                              className=" w-[16.3px] h-[16.3px]"
                              alt=""
                              src="/img/rectangle.svg"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className=" flex  w-[150px]">
                          <div
                            onClick={() => {
                              addTocart({
                                id: item.pid,
                                name: item.name,
                                price: item.price,
                                categories: item.categories,
                                rating: item.rating,
                                imgURL: item.imgURL,
                              });
                            }}
                            className=" cursor-pointer rounded-md bg-branding-success flex px-3 py-1  flex-row items-center justify-start box-border  text-gray-scale-white"
                          >
                            <div className=" leading-[120%] font-semibold text-sm">
                              เพิ่มลงตะกร้า
                            </div>
                            <img
                              className=" w-[16.3px] h-[16.3px]"
                              alt=""
                              src="/img/rectangle.svg"
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex justify-center items-center mr-5 ">
                        <div
                          onClick={() => {
                            setConfirmOpen({ open: true, id: item.pid });
                          }}
                          className="cursor-pointer hover:text-red-700 text-red-600"
                        >
                          <div className="[font-family:'Montserrat',Helvetica] font-normal text-[12px] whitespace-nowrap tracking-[0] leading-[normal]">
                            ลบ
                          </div>
                          <FontAwesomeIcon
                            icon={faTrash}
                            className=" w-[11px] "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {favoriteItem.length === 0 && (
              <div className="w-full h-[300px] flex flex-row items-center justify-center">
                ไม่มีสินค้าในรายการที่ชอบ
              </div>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};
