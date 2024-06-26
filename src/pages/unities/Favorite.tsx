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
        // TransitionComponent={Transition}
      >
        <div className=" pb-[150px] box-border">
          <div className="box-border relative top-5 right-10">
            <FontAwesomeIcon
              onClick={() => props.Favorite.setOpenFavorite(false)}
              icon={faXmark}
              size="lg"
              className="cursor-pointer p-[5px] opacity-50 active:bg-slate-300 active:bg-opacity-60 float-right "
            />
          </div>
          <div className="bg-white box-border w-full grid grid-flow-row justify-items-center">
            <div className=" w-full">
              <div className=" relative top-[20px] ml-10 [font-family:'Montserrat',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal]">
                สินค้าที่ชอบ
              </div>
              <div className=" border-solid border-[#666666] border-opacity-30 relative w-full top-[40px] box-border border-[1px] " />
              {favoriteItem.length > 0 && (
                <div
                  onClick={() => setAngreeOpen(true)}
                  className="text-red-600 hover:text-red-700 cursor-pointer relative flex w-[65px] h-[14px] box-border top-[5px] right-[150px] float-right"
                >
                  <div className="h-[12px] top-0 [font-family:'Montserrat',Helvetica] font-normal   hover:text-opacity-50  text-[13px] text-right whitespace-nowrap relative tracking-[0] leading-[normal]">
                    ลบรายการที่ชอบทั้งหมด
                  </div>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="relative w-[12px] h-[12px] top-[1px] left-[5px]"
                  />
                </div>
              )}
            </div>
            {favoriteItem.length > 0 &&
              favoriteItem.map((item) => (
                <div
                  key={item.id}
                  className=" flex relative top-[40px] w-full gap-5"
                >
                  <div className=" flex justify-center items-center w-[120px] ml-7">
                    <img
                      className=" relative  w-[100px] h-[100px] top-0 left-0"
                      alt="Image"
                      src={`${import.meta.env.VITE_BASE_API}/img/${
                        item.imgURL
                      }`}
                    />
                  </div>
                  <div className=" flex justify-center items-center w-[170px]">
                    <div className=" relative top-0 [font-family:'Montserrat',Helvetica] font-normal text-[#333435] text-[12px] tracking-[0] leading-[normal]">
                      {item.name}
                    </div>
                  </div>
                  <div className=" flex items-center justify-center w-[150px]">
                    <div className=" relative top-0 [font-family:'Noto_Serif_Thai',Helvetica] font-semibold text-[#06e102] text-[16px] tracking-[0] leading-[normal]">
                      {item.price.toFixed(2) + "฿"}
                    </div>
                  </div>
                  {cartItems.some((check) => check.pid === item.pid) ? (
                    <div className=" flex justify-center items-center w-[220px]">
                      <div className=" cursor-pointer rounded-xl bg-yellow-400 w-[220px] flex text-[15px] flex-row items-center justify-center py-4 px-5 box-border gap-[16px] text-left text-gray-scale-white">
                        <div className="relative leading-[100%] font-semibold">
                          สินค้าอยู่ในตะกล้าแล้ว
                        </div>
                        <img
                          className="relative w-[16.3px] h-[16.3px]"
                          alt=""
                          src="/img/rectangle.svg"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className=" flex justify-center items-center w-[220px]">
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
                        className=" cursor-pointer rounded-xl bg-branding-success w-[250px] flex   flex-row items-center justify-center py-4 px-10 box-border gap-[16px] text-left text-gray-scale-white"
                      >
                        <div className="relative leading-[120%] font-semibold">
                          เพิ่มลงตะกร้า
                        </div>
                        <img
                          className="relative w-[16.3px] h-[16.3px]"
                          alt=""
                          src="/img/rectangle.svg"
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex justify-center items-center w-[110px]">
                    <div
                      onClick={() => {
                        setConfirmOpen({ open: true, id: item.pid });
                      }}
                      className="cursor-pointer relative w-[35px] h-[20px] hover:text-red-700 text-red-600"
                    >
                      <div className="h-[12px] absolute top-[2px] left-[15px] [font-family:'Montserrat',Helvetica] font-normal text-[12px] text-right whitespace-nowrap tracking-[0] leading-[normal]">
                        ลบ
                      </div>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="absolute w-[11px] h-[11px] top-[2px] left-0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            {favoriteItem.length === 0 && (
              <div className=" relative w-full h-[300px] top-[120px] flex justify-center">
                ไม่มีสินค้าในรายการที่ชอบ
              </div>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};
