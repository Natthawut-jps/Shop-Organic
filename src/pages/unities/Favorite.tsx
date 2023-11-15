import { FunctionComponent, ReactElement, Ref, forwardRef } from 'react'
import { faMinus, faPlus, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { CartContextProviders } from './HandleCart';

// Favorite
export const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return (
        <>
            <Slide direction="down" ref={ref} {...props} />
        </>
    )
});
interface open {
    Favorite: {
        openFavorite: boolean,
        setOpenFavorite: (e: boolean) => void,
    }
}
export const Favorite: FunctionComponent<open> = (props) => {
    const { favoriteItem, increaseFavoriteQuantity, decreaseFavoriteQuantity, removeFavoriteItem, removeFavoriteItemAll } = CartContextProviders();
    const price = favoriteItem.map(item => item.price * item.quantity);
    const priceSum = price.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
    return (
        <>
            <Dialog
                fullWidth
                maxWidth={'md'}
                onClose={() => props.Favorite.setOpenFavorite(false)}
                open={props.Favorite.openFavorite}
                TransitionComponent={Transition}
            >
                <div>
                    <div className="box-border relative top-5 right-10">
                        <FontAwesomeIcon onClick={() => props.Favorite.setOpenFavorite(false)} icon={faXmark} size="lg" className="cursor-pointer p-[5px] opacity-50 active:bg-slate-300 active:bg-opacity-60 float-right " />
                    </div>
                    <div className="bg-white box-border w-full grid grid-flow-row justify-items-center">
                        <div className=' w-full'>
                            <div className=" relative top-[20px] ml-10 [font-family:'Montserrat',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal]">
                                สินค้าที่ชอบ
                            </div>
                            <div className=" border-solid border-[#666666] border-opacity-30 relative w-full top-[40px] box-border border-[1px] " />
                            {favoriteItem.length > 0 &&
                                <div onClick={() => favoriteItem.length > 0 && removeFavoriteItemAll(true)} className="text-red-600 hover:text-red-700 cursor-pointer relative flex w-[65px] h-[14px] box-border top-[5px] right-[150px] float-right">
                                    <div className="h-[12px] top-0 [font-family:'Montserrat',Helvetica] font-normal   hover:text-opacity-50  text-[13px] text-right whitespace-nowrap relative tracking-[0] leading-[normal]">
                                        ลบสินค้าทั้งหมด
                                    </div>
                                    <FontAwesomeIcon icon={faTrash} className="relative w-[12px] h-[12px] top-[1px] left-[5px]" />
                                </div>
                            }
                        </div>
                        {favoriteItem.length > 0 && favoriteItem.map((item) => (
                            <div key={item.id} className=" relative top-[40px] w-full h-[96px] grid grid-flow-col">
                                <div className=' flex justify-center items-center'>
                                    <img className=" relative  w-[100px] h-[100px] top-0 left-0" alt="Image" src="/product-image@2x.png" />
                                </div>
                                <div className=' flex justify-center items-center'>
                                    <div className=" relative top-0 [font-family:'Montserrat',Helvetica] font-normal text-[#333435] text-[12px] tracking-[0] leading-[normal]">
                                        (LN) ผมโดนกลุ่มผู้กล้า
                                        <br />
                                        ขับไสเลยต้องไปสโลว์ไลฟ์
                                        <br />
                                        ที่ชายแดนเล่ม 9
                                    </div>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <div className=" relative top-0 [font-family:'Noto_Serif_Thai',Helvetica] font-semibold text-[#06e102] text-[16px] tracking-[0] leading-[normal]">
                                        {item.price * item.quantity + '฿'}
                                    </div>
                                </div>
                                <div className='flex items-center justify-center '>
                                    <div className=" relative w-[87px] h-[31px]">
                                        <div className="relative w-[81px] h-[31px] bg-[#ffffff33] rounded-[4px] border border-solid border-[#33343566]">
                                            <div onClick={() => increaseFavoriteQuantity(item)} className=" hover:bg-[#666666]/20 rounded-s-sm cursor-pointer w-[28px] h-[32px] top-[0px] left-[0px] [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-[#333435] text-[12px] absolute tracking-[0] leading-[normal]">
                                                <FontAwesomeIcon icon={faPlus} className='relative top-[8px] left-[10px]' />
                                            </div>
                                            <div className="absolute w-[10px] h-[24px] top-[6px] left-[35px] [font-family:'Noto_Serif_Thai',Helvetica] font-semibold text-[#333435e6] text-[14px] tracking-[0] leading-[normal]">
                                                {item.quantity}
                                            </div>
                                            <div onClick={() => decreaseFavoriteQuantity(item.id)} className="hover:bg-[#666666]/20 cursor-pointer rounded-s-sm w-[29px] h-[32px] top-[0px] left-[52px] [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-[#333435] text-[12px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
                                                <FontAwesomeIcon icon={faMinus} className=' relative top-[7px] left-2' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <div onClick={() => removeFavoriteItem(item.id)} className="cursor-pointer relative w-[32px] h-[15px] hover:text-red-700 text-red-600">
                                        <div className="h-[12px] top-0 left-[15px] [font-family:'Montserrat',Helvetica] font-normal  text-[12px] text-right whitespace-nowrap absolute tracking-[0] leading-[normal]">
                                            ลบ
                                        </div>
                                        <FontAwesomeIcon icon={faTrash} className="absolute w-[11px] h-[11px] top-[2px] left-0" />
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                        {favoriteItem.length > 0 ?
                            <div className=" relative w-full h-[100px] top-[0px] ">
                                <div onClick={() => props.Favorite.setOpenFavorite(false)} className=" cursor-pointer top-[229px] left-[128px] [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-black text-[14px] absolute tracking-[0] leading-[normal]">
                                    ช้อปปิ้งต่อ
                                </div>
                            </div>
                            :
                            <div className=" relative w-full h-[300px] top-[120px] flex justify-center">
                                ไม่มีสินค้าในรายการที่ชอบ
                            </div>
                        }
                    </div>
                </div>
            </Dialog >
        </>
    )
}
