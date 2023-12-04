import { Link } from "react-router-dom"
import { Breadcrumbs } from "./unities/Breadcrumbs"
import { Header } from "./unities/Header"
import { NavAccount } from "./unities/NavAccount"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const Address = () => {
    const arr = [1, 2]
    return (
        <>
            <div className="relative bg-gray-scale-white w-full h-full pb-[400px] overflow-hidden text-left text-base text-gray-scale-gray-600 font-caps-lock-small-caps-lock">
                <Header />
                <Breadcrumbs categoies={undefined} tltle={undefined} Detail={undefined} EditAndadd={undefined} />
                <NavAccount />
                <div className=" relative top-[347px] left-[400px] w-[980px] h-fit">
                    <div className=" relative top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] pb-[150px] h-fit border-[1px] border-solid border-gray-scale-gray-100" >
                        {/* Address */}
                        <div className=" relative grid grid-cols-2 grid-flow-row gap-y-5">
                            {arr.map((item, index) => (
                                <div key={index} className=" relative top-[86px] left-[24px] w-[450px] h-[280px]">
                                    <div className="absolute top-[0px] left-[0px] rounded-md bg-gray-scale-white box-border w-full h-[280px] border-[1px] border-solid border-gray-scale-gray-100 " />
                                    <div className=" absolute top-[18px] left-[0px] box-border pl-[20px] w-[640px] h-[245px] overflow-auto">
                                        <div className=" relative break-words top-[78px] left-[0px] leading-[150%] text-gray-scale-gray-600 inline-block w-[590px]">
                                            4140 Parker Rd. Allentown, 31134
                                        </div>
                                        <div className=" relative top-[100px] left-[0px] flex flex-col items-start justify-start gap-[4px] text-xs">
                                            <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                                                Email
                                            </div>
                                            <div className="relative break-words text-sm leading-[150%] text-gray-scale-gray-900 inline-block w-[590px]">
                                                dainne.ressell@gmail.com
                                            </div>
                                        </div>
                                        <div className=" relative top-[120px] left-[0px] flex flex-col items-start justify-start gap-[4px] text-xs">
                                            <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                                                Phone
                                            </div>
                                            <div className="relative text-sm break-words leading-[150%] text-gray-scale-gray-900 inline-block w-[590px]">
                                                (671) 555-0110
                                            </div>
                                        </div>
                                        <div className="absolute top-[46px] left-[20px] text-base leading-[150%] text-gray-scale-gray-900">
                                            Dainne Russell
                                        </div>
                                        <Link to={'/Account/Address/Edit'} className="absolute hover:text-[#06e102]/70 top-[0px] cursor-pointer p-[2px] text-[#06e102] left-[20px] tracking-[0.03em] leading-[100%] font-medium">
                                            Edit
                                        </Link>
                                        <div className="absolute cursor-pointer p-[2px] hover:text-red-400 text-red-600 top-[0px] left-[370px] tracking-[0.03em] leading-[100%] font-medium">
                                            Delete
                                        </div>
                                        <div className="absolute top-[31.5px] left-[0px] box-border w-[450px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
                                    </div>
                                </div>
                            ))
                            }
                            <Link to={'/Account/Address/Add'} className=" relative top-[86px] left-[24px] w-[450px] h-[200px] bg-[#06e102]/20 hover:bg-[#06e102]/30">
                                <div className="absolute rounded-md box-border w-full h-[200px] border-[1px] border-solid border-[#06e102] " />
                                <div className="  relative  box-border w-[450px] h-[200px] ">
                                    <div className=" flex justify-center items-center break-words leading-[150%] text-[#06e102] w-[450px] h-[200px] hover:translate-y-[2px]">
                                        <AddCircleOutlineIcon sx={{ fontSize: '100px' }} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute top-[2px] left-[0px] rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] w-[984px] h-[62px] text-xl">
                        <div className="absolute top-[16px] left-[24px] leading-[150%] font-medium">
                            Shipping Address
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}