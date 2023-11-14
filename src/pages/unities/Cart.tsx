import { FunctionComponent, ReactElement, Ref, forwardRef } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { CartContextProviders } from './HandleCart';

// Cart
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

export const Cart: FunctionComponent = () => {
    const propContext = CartContextProviders();
    return (
        <>
            <Dialog
                fullWidth
                open={propContext.open}
                TransitionComponent={Transition}
            >
                <div className="bg-white flex flex-row justify-center w-full">
                    <div className="bg-white w-[360px] h-[800px] relative">
                        <div className="absolute w-[360px] h-[471px] top-[349px] left-px bg-[#f7f7f7]">
                            <div className="top-[98px] left-[284px] font-normal absolute [font-family:'Noto_Serif_Thai',Helvetica] text-[#666666] text-[12px] tracking-[0] leading-[normal]">
                                ฿50.00
                            </div>
                            <div className="top-[139px] left-[286px] font-bold absolute [font-family:'Noto_Serif_Thai',Helvetica] text-[#666666] text-[12px] tracking-[0] leading-[normal]">
                                ฿510.00
                            </div>
                            <div className="absolute top-[142px] left-[23px] [font-family:'Noto_Serif_Thai',Helvetica] font-bold text-[#666666] text-[12px] tracking-[0] leading-[normal]">
                                ราคาสุทธิ
                            </div>
                            <div className="top-[33px] left-[23px] [font-family:'Noto_Serif_Thai',Helvetica] font-semibold text-black text-[16px] absolute tracking-[0] leading-[normal]">
                                สรุปคำสั่งซื้อ
                            </div>
                            <p className="absolute top-[85px] left-[23px] [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-[#666666] text-[12px] tracking-[0] leading-[normal]">
                                Shipping &amp; Handling
                                <br />
                                (ค่าจัดส่งด่วน - DHL Express)
                            </p>
                            <div className="absolute w-[130px] h-[43px] top-[248px] left-[207px]">
                                <div className="relative w-[128px] h-[43px] bg-[#06e10133] rounded-[4px] border border-solid border-[#06e102]">
                                    <div className="w-[43px] h-[29px] top-[7px] left-[41px] [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-[#06e102] text-[16px] absolute tracking-[0] leading-[normal]">
                                        สั่งซื้อ
                                    </div>
                                </div>
                            </div>
                            <div className="top-[269px] left-[128px] [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-black text-[14px] absolute tracking-[0] leading-[normal]">
                                ช้อปปิ้งต่อ
                            </div>
                        </div>
                        <div className="absolute top-[52px] left-[27px] [font-family:'Montserrat',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal]">
                            ตะกร้าสินค้า
                        </div>
                        <img className="absolute w-[290px] h-px top-[86px] left-[31px]" alt="Line" src="/cart/line-4.svg" />
                        <div className="box-border relative top-3 right-3 ">
                            <FontAwesomeIcon onClick={() => propContext.setOpens(false)} icon={faXmark} size="lg" className="cursor-pointer p-[5px] opacity-50 active:bg-slate-300 active:bg-opacity-60 float-right " />
                        </div>
                        <div className="absolute w-[50px] h-[13px] top-[48px] left-[250px]">
                            <div className="h-[12px] top-0 left-[14px] [font-family:'Montserrat',Helvetica] font-normal text-[#666666] text-[10px] text-right whitespace-nowrap absolute tracking-[0] leading-[normal]">
                                ลบสินค้า
                            </div>
                            <img
                                className="absolute w-[12px] h-[12px] top-px left-0"
                                alt="Icon times circle"
                                src="/cart/icon-times-circle-2.png"
                            />
                        </div>
                        <div className="top-[105px] absolute w-[279px] h-[96px] left-[42px]">
                            <div className="absolute w-[87px] h-[31px] top-[65px] left-[93px]">
                                <div className="relative w-[81px] h-[31px] bg-[#ffffff33] rounded-[4px] border border-solid border-[#33343566]">
                                    <div className="w-[7px] h-[18px] top-[6px] left-[10px] [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-[#333435] text-[12px] absolute tracking-[0] leading-[normal]">
                                        +
                                    </div>
                                    <div className="absolute w-[10px] h-[24px] top-[5px] left-[35px] [font-family:'Noto_Serif_Thai',Helvetica] font-semibold text-[#333435e6] text-[14px] tracking-[0] leading-[normal]">
                                        1
                                    </div>
                                    <div className="w-[7px] h-[18px] top-[5px] left-[63px] [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-[#333435] text-[12px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
                                        -
                                    </div>
                                </div>
                            </div>
                            <img className="absolute w-[58px] h-[80px] top-0 left-0" alt="Image" src="/cart/image-1.png" />
                            <div className="absolute top-0 left-[215px] [font-family:'Noto_Serif_Thai',Helvetica] font-semibold text-[#06e102] text-[16px] tracking-[0] leading-[normal]">
                                ฿295.00
                            </div>
                            <div className="absolute top-0 left-[77px] [font-family:'Montserrat',Helvetica] font-normal text-[#333435] text-[12px] tracking-[0] leading-[normal]">
                                (LN) ผมโดนกลุ่มผู้กล้า
                                <br />
                                ขับไสเลยต้องไปสโลว์ไลฟ์
                                <br />
                                ที่ชายแดนเล่ม 9
                            </div>
                            <div className="absolute w-[29px] h-[12px] top-[71px] left-[228px]">
                                <div className="h-[12px] top-0 left-[15px] [font-family:'Montserrat',Helvetica] font-normal text-[#666666] text-[10px] text-right whitespace-nowrap absolute tracking-[0] leading-[normal]">
                                    ลบ
                                </div>
                                <img
                                    className="absolute w-[11px] h-[11px] top-0 left-0"
                                    alt="Icon times circle"
                                    src="/cart/icon-times-circle.png"
                                />
                            </div>
                        </div>
                        <div className="top-[227px] absolute w-[279px] h-[96px] left-[42px]">
                            <div className="absolute w-[87px] h-[31px] top-[65px] left-[93px]">
                                <div className="relative w-[81px] h-[31px] bg-[#ffffff33] rounded-[4px] border border-solid border-[#33343566]">
                                    <div className="w-[7px] h-[18px] top-[6px] left-[10px] [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-[#333435] text-[12px] absolute tracking-[0] leading-[normal]">
                                        +
                                    </div>
                                    <div className="absolute w-[10px] h-[24px] top-[5px] left-[35px] [font-family:'Noto_Serif_Thai',Helvetica] font-semibold text-[#333435e6] text-[14px] tracking-[0] leading-[normal]">
                                        1
                                    </div>
                                    <div className="w-[8px] h-[11px] top-[5px] left-[63px] [font-family:'Noto_Serif_Thai',Helvetica] font-normal text-[#333435] text-[12px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
                                        -
                                    </div>
                                </div>
                            </div>
                            <img className="absolute w-[58px] h-[80px] top-0 left-0" alt="Image" src="/cart/image.png" />
                            <div className="absolute top-0 left-[215px] [font-family:'Noto_Serif_Thai',Helvetica] font-semibold text-[#06e102] text-[16px] tracking-[0] leading-[normal]">
                                ฿165.00
                            </div>
                            <p className="absolute top-0 left-[77px] [font-family:'Montserrat',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]">
                                (MG) ขอต้อนรับสู่ห้อง
                                <br />
                                เรียนนิยม (เฉพาะ) ยอด
                                <br />
                                คนปี 2 เล่ม 2
                            </p>
                            <div className="absolute w-[29px] h-[12px] top-[71px] left-[228px]">
                                <div className="h-[12px] top-0 left-[15px] [font-family:'Montserrat',Helvetica] font-normal text-[#666666] text-[10px] text-right whitespace-nowrap absolute tracking-[0] leading-[normal]">
                                    ลบ
                                </div>
                                <img
                                    className="absolute w-[11px] h-[11px] top-0 left-0"
                                    alt="Icon times circle"
                                    src="/cart/icon-times-circle.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
