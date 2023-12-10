import { FunctionComponent} from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Link } from "react-router-dom";

const Checkout_Bill: FunctionComponent = () => {
    return (
        <div className="bg-[url(/img/thumb-1920-1318790.png)] from-slate-600 to-slate-100 relative  w-full h-[1600px] overflow-hidden text-left text-sm text-gray-scale-gray-900 font-body-xxl-body-xxl-500">
            <Header />
            {/* <Breadcrumbs categoies={undefined} tltle={undefined} EditAndadd={undefined} Detail={undefined} /> */}
            <div className=" absolute top-[250px] w-[1200px] rounded-lg left-[200px] h-[750px] bg-gray-scale-white shadow drop-shadow" />
            <div className="absolute top-[300px] left-[850px] rounded-lg bg-gray-scale-white flex flex-col items-start justify-start p-6 gap-[24px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="flex flex-col items-start justify-start gap-[12px]">
                    <div className="relative text-xl leading-[150%] font-medium">
                        Order Summery
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="w-[376px] flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center justify-start gap-[6px]">
                                <img
                                    className="relative w-[60px] h-[60px] object-cover"
                                    alt=""
                                    src="/img/image2@2x.png"
                                />
                                <div className="relative leading-[150%]">Green Capsicum</div>
                                <div className="relative leading-[150%]">x5</div>
                            </div>
                            <div className="relative leading-[150%] font-medium">฿70.00</div>
                        </div>
                        <div className="w-[376px] flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center justify-start gap-[6px]">
                                <img
                                    className="relative w-[60px] h-[60px] object-cover"
                                    alt=""
                                    src="/img/image1@2x.png"
                                />
                                <div className="relative leading-[150%]">Red Capsicum</div>
                                <div className="relative leading-[150%]">x1</div>
                            </div>
                            <div className="relative leading-[150%] font-medium">฿14.00</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[1px] text-gray-scale-gray-700">
                        <div className="bg-gray-scale-white w-[376px] flex flex-row items-center justify-between py-3 px-0 box-border">
                            <div className="relative leading-[150%]">Subtotal:</div>
                            <div className="relative leading-[150%] font-medium text-gray-scale-gray-900">
                                ฿84.00
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
                                ฿134.00
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
                <Link to={'/'} reloadDocument className=" cursor-pointer no-underline rounded-24xl bg-branding-success w-[376px] flex flex-row items-center justify-center py-4 px-10 box-border text-base text-gray-scale-white">
                    <div className="relative leading-[120%] font-semibold">
                        ชำระเงิน
                    </div>
                </Link>
            </div>
            <div className="absolute top-[280px] left-[370px] w-[460px] flex flex-col items-start justify-start gap-[32px]">
                <div className="relative w-[402px] h-[600px] left-0">
                    <div className=" relative top-[80px] left-[0px]">
                        <img src="/img/promptpay-QR.jpg" alt="" width={400} height={400} className=" relative left-[-40px]" />
                        <div>
                            <strong className=" relative left-[140px] text-[18px]">
                                {'10:00'}
                            </strong>
                            <p><strong>Shop name:&nbsp;&nbsp;</strong> Shop-Organic-eCommerce</p>
                            <p><strong>ชื่อบัญชี:&nbsp;&nbsp;</strong>นายณัฐวุฒิ จำปาแสง</p>
                            <p>description: shop organic healpthy</p>
                        </div>
                    </div>
                    <div className="absolute top-[5px] left-[0px] text-5xl leading-[150%] font-medium">
                        สแกน QR Code เพื่อชำระเงิน
                    </div>
                </div>
            </div>
            <Foorter />
        </div>
    );
};

export default Checkout_Bill;
