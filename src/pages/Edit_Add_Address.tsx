import { useParams } from "react-router-dom"
import { Breadcrumbs } from "./unities/Breadcrumbs"
import { Header } from "./unities/Header"
import { NavAccount } from "./unities/NavAccount"
import { FunctionComponent } from "react"

export const Edit_Add_Address: FunctionComponent = () => {
    const { EditAndadd } = useParams();
    return (
        <>
            {EditAndadd === 'Edit' ?
                <div className="relative bg-gray-scale-white w-full h-[1000px] overflow-hidden text-left text-base text-gray-scale-gray-600 font-caps-lock-small-caps-lock">
                    <Header />
                    <Breadcrumbs categoies={undefined} tltle={undefined} Detail={undefined} EditAndadd={EditAndadd} />
                    <NavAccount />
                    <div className=" relative top-[347px] left-[400px] w-[984px] h-[533px]">
                        <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[535px] border-[1px] border-solid border-gray-scale-gray-100" />
                        <div className="absolute top-[464px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white">
                            <div className="relative leading-[120%] font-semibold">
                                Save Changes
                            </div>
                        </div>
                        <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">First name</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[14px] left-[16px] leading-[130%]">
                                    Dianne
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[88px] left-[342px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Last name</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[14px] left-[16px] leading-[130%]">
                                    Dianne
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[364px] left-[500px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Phone</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[460px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[14px] left-[16px] leading-[130%]">
                                    (603) 555-0123
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[88px] left-[660px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">
                                <span>{`Company Name `}</span>
                                <span className="text-gray-scale-gray-500">(optional)</span>
                            </div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[14px] left-[16px] leading-[130%]">
                                    Zakirsoft
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[364px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Email</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[460px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[14px] left-[16px] leading-[130%]">
                                    dianne.russell@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Country / Region</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start py-3.5 px-4 gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative leading-[130%] inline-block w-[244px] shrink-0">
                                    United States
                                </div>
                                <img
                                    className="relative w-4 h-4 overflow-hidden shrink-0"
                                    alt=""
                                    src="/img/chevron-down.svg"
                                />
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[658px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Zip Code</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start py-3.5 px-4 text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative leading-[130%] inline-block w-[270px] shrink-0">
                                    20033
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[341px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">States</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start py-3.5 px-4 gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative leading-[130%] inline-block w-[244px] shrink-0">
                                    Washington DC
                                </div>
                                <img
                                    className="relative w-4 h-4 overflow-hidden shrink-0"
                                    alt=""
                                    src="/img/chevron-down.svg"
                                />
                            </div>
                        </div>
                        <div className="absolute top-[180px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Street Address</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[936px] h-[49px] text-base border-[1px] border-solid border-branding-success">
                                <div className="absolute top-[14px] left-[16px] leading-[130%]">
                                    4140 Par|
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[2px] left-[0px] rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] w-[984px] h-[62px] text-xl">
                            <div className="absolute top-[16px] left-[24px] leading-[150%] font-medium">
                                Shipping Address
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="relative bg-gray-scale-white w-full h-[1000px] overflow-hidden text-left text-base text-gray-scale-gray-600 font-caps-lock-small-caps-lock">
                    <Header />
                    <Breadcrumbs categoies={undefined} tltle={undefined} Detail={undefined} EditAndadd={EditAndadd} />
                    <NavAccount />
                    <div className=" relative top-[347px] left-[400px] w-[984px] h-[533px]">
                        <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[535px] border-[1px] border-solid border-gray-scale-gray-100" />
                        <div className="absolute top-[464px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white">
                            <div className="relative leading-[120%] font-semibold">
                                Save Add
                            </div>
                        </div>
                        <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">First name</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[14px] left-[16px] leading-[130%]">
                                    Dianne
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[88px] left-[342px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Last name</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[14px] left-[16px] leading-[130%]">
                                    Dianne
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[364px] left-[500px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Phone</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[460px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[14px] left-[16px] leading-[130%]">
                                    (603) 555-0123
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[88px] left-[660px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">
                                <span>{`Company Name `}</span>
                                <span className="text-gray-scale-gray-500">(optional)</span>
                            </div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[14px] left-[16px] leading-[130%]">
                                    Zakirsoft
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[364px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Email</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[460px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[14px] left-[16px] leading-[130%]">
                                    dianne.russell@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Country / Region</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start py-3.5 px-4 gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative leading-[130%] inline-block w-[244px] shrink-0">
                                    United States
                                </div>
                                <img
                                    className="relative w-4 h-4 overflow-hidden shrink-0"
                                    alt=""
                                    src="/img/chevron-down.svg"
                                />
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[658px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Zip Code</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start py-3.5 px-4 text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative leading-[130%] inline-block w-[270px] shrink-0">
                                    20033
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[341px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">States</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start py-3.5 px-4 gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative leading-[130%] inline-block w-[244px] shrink-0">
                                    Washington DC
                                </div>
                                <img
                                    className="relative w-4 h-4 overflow-hidden shrink-0"
                                    alt=""
                                    src="/img/chevron-down.svg"
                                />
                            </div>
                        </div>
                        <div className="absolute top-[180px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Street Address</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[936px] h-[49px] text-base border-[1px] border-solid border-branding-success">
                                <div className="absolute top-[14px] left-[16px] leading-[130%]">
                                    4140 Par|
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[2px] left-[0px] rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] w-[984px] h-[62px] text-xl">
                            <div className="absolute top-[16px] left-[24px] leading-[150%] font-medium">
                                Shipping Address
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Edit_Add_Address;