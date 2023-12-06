import { useParams } from "react-router-dom"
import { Breadcrumbs } from "./unities/Breadcrumbs"
import { Header } from "./unities/Header"
import { NavAccount } from "./unities/NavAccount"
import { FunctionComponent, useEffect, useState } from "react"
import axios from "axios"

export const Edit_Add_Address: FunctionComponent = () => {
    const { EditAndadd } = useParams();
    const [provincesData, setProvincesData] = useState<string>();
    const [amphureData, setAmphureData] = useState<string>();
    const [zipCodeData, setZipCodeData] = useState<number>();
    const [province, setProvince] = useState([]);
    const [ampher, setAmpher] = useState([]);
    const [zipCode, setZipCode] = useState([]);
    useEffect(() => {
        const providce = async () => {
            await axios({
                method: 'get',
                url: 'https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                setProvince(res.data);
            });
        }
        providce()
    }, []);
    const handleProvince = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const provinces: string = e.target.value;
        setAmpher(province.filter((item: any) => item.name_th === provinces.split('-')[0].trim())
            .map((item: any) => item.amphure)[0]);
        setProvincesData(provinces);
    }
    const handleAmphure = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const Amphures: string = e.target.value;
        setZipCode(ampher.filter((item: any) => item.name_th === Amphures.split('-')[0].trim())
            .map((item: any) => item.tambon)[0])
        setAmphureData(Amphures);
    }
    useEffect(() => {
        zipCode.slice(0, 1).map((item: any) => {
            setZipCodeData(item.zip_code)
        });
    }, [zipCode])
    return (
        <>
            {EditAndadd === 'Edit' ?
                <div className="relative bg-gray-scale-white w-full h-[1000px] overflow-hidden text-left text-base text-gray-scale-gray-600 font-caps-lock-small-caps-lock">
                    <Header />
                    <Breadcrumbs categoies={undefined} tltle={undefined} Detail={undefined} EditAndadd={EditAndadd} />
                    <NavAccount />
                    <div className=" relative top-[347px] left-[400px] w-[984px] h-[533px]">
                        <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[535px] border-[1px] border-solid border-gray-scale-gray-100" />
                        <form id="edit">
                            <button type="submit" className="absolute cursor-pointer top-[464px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-[16px] text-gray-scale-white">
                                <div className="relative leading-[120%] font-semibold">
                                    Save Change
                                </div>
                            </button>
                        </form>
                        <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <label htmlFor="First name" className="relative leading-[150%]">First name</label>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                                    <input form="edit" type="text" id="First name" placeholder="First name" className=" text-[15px] w-[290px] rounded-lg h-[45px] bg-transparent focus:outline-none" required />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[88px] left-[342px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Last name</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                                    <input form="edit" type="text" placeholder="Last name" className="text-[15px] w-[290px] rounded-lg h-[45px] bg-transparent focus:outline-none" required />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[364px] left-[500px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Phone</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[460px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                                    <input form="edit" type="tel" pattern="[0-9]{10}" placeholder="Phone" className="text-[15px] w-[447px] rounded-lg h-[45px] bg-transparent focus:outline-none" required />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[88px] left-[660px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">
                                <span>{`Company Name `}</span>
                                <span className="text-gray-scale-gray-500">(optional)</span>
                            </div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                                    <input type="text" placeholder="Company (optional)" className="text-[15px] w-[290px] rounded-lg h-[45px] bg-transparent focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[364px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Email</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[460px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                                    <input form="edit" type="email" placeholder="Email" className="text-[15px] w-[447px] rounded-lg h-[45px] bg-transparent focus:outline-none" required />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Country / Region</div>
                            <div className=" rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative left-[5px] leading-[130%] inline-block w-[244px] shrink-0">
                                    <select form="edit" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleProvince(e)} className="focus:outline-none cursor-pointer rounded-lg w-[230px] h-[45px]" required>
                                        <option selected hidden disabled value={''}>จังหวัด</option>
                                        {province.length > 0 && province.map((item: any, index) => (
                                            <option key={index} value={`${item.name_th}-${item.name_en}`}>{`${item.name_th} - ${item.name_en}`}</option>
                                        ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[658px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Zip Code</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative left-[5px] leading-[130%] inline-block w-[270px] shrink-0">
                                    {zipCodeData ?
                                        <select form="edit" className="focus:outline-none cursor-pointer rounded-lg w-[260px] h-[45px]" required>
                                            <option selected value={zipCodeData}>{zipCodeData}</option>
                                        </select>
                                        :
                                        <select disabled className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[260px] h-[45px]">
                                            <option selected hidden disabled>{'zip code'}</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[341px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">States</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative left-[5px] leading-[130%] inline-block w-[244px] shrink-0">
                                    {ampher.length > 0 ?
                                        <select form="edit" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleAmphure(e)} className="focus:outline-none cursor-pointer rounded-lg w-[230px] h-[45px]" required>
                                            <option selected hidden disabled value={''}>อำเภอ</option>
                                            {ampher.length > 0 && ampher.map((item: any, index: number) => (
                                                <option key={index} value={`${item.name_th}-${item.name_en}`}>{`${item.name_th} - ${item.name_en}`}</option>
                                            ))}
                                        </select>
                                        :
                                        <select disabled onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleAmphure(e)} className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[230px] h-[45px]">
                                            <option selected hidden disabled>อำเภอ</option>
                                        </select>
                                    }
                                </div>
                                
                            </div>
                        </div>
                        <div className="absolute top-[180px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Street Address</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[936px] h-[49px] text-base border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                                    <input form="edit" type="text" placeholder="Street Address" className="text-[15px] w-[923px] rounded-lg h-[45px] bg-transparent focus:outline-none" required />
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
                        <form id="add">
                            <button type="submit" className="absolute text-[16px] cursor-pointer top-[464px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white">
                                <div className="relative leading-[120%] font-semibold">
                                    Save Add
                                </div>
                            </button>
                        </form>
                        <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">First name</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                                    <input form="add" type="text" placeholder="First name" className=" text-[15px] w-[290px] rounded-lg h-[45px] bg-transparent focus:outline-none" required />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[88px] left-[342px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Last name</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                                    <input form="add" type="text" placeholder="Last name" className="text-[15px] w-[290px] rounded-lg h-[45px] bg-transparent focus:outline-none" required />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[364px] left-[500px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Phone</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[460px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                                    <input form="add" type="tel" pattern="[0-9]{10}" placeholder="Phone" className="text-[15px] w-[447px] rounded-lg h-[45px] bg-transparent focus:outline-none" required />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[88px] left-[660px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">
                                <span>{`Company Name `}</span>
                                <span className="text-gray-scale-gray-500">(optional)</span>
                            </div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                                    <input type="text" placeholder="Company (optional)" className="text-[15px] w-[290px] rounded-lg h-[45px] bg-transparent focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[364px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Email</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[460px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                                    <input form="add" type="email" placeholder="Email" className="text-[15px] w-[447px] rounded-lg h-[45px] bg-transparent focus:outline-none" required />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Country / Region</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative left-[5px] leading-[130%] inline-block w-[244px] shrink-0">
                                    <select form="add" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleProvince(e)} className="focus:outline-none cursor-pointer rounded-lg w-[230px] h-[45px]" required>
                                        <option hidden selected disabled value={''}>จังหวัด</option>
                                        {province.length > 0 && province.map((item: any, index) => (
                                            <option key={index} value={`${item.name_th}-${item.name_en}`}>{`${item.name_th} - ${item.name_en}`}</option>
                                        ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[658px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Zip Code</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative left-[5px] leading-[130%] inline-block w-[270px] shrink-0">
                                    {zipCodeData ?
                                        <select form="add" className="focus:outline-none cursor-pointer rounded-lg w-[260px] h-[45px]" required>
                                            <option value={zipCodeData}>{zipCodeData}</option>
                                        </select>
                                        :
                                        <select disabled className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[260px] h-[45px]">
                                            <option>{'zip code'}</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[341px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">States</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative left-[5px] leading-[130%] inline-block w-[244px] shrink-0">
                                    {ampher.length > 0 ?
                                        <select form="add" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleAmphure(e)} className="focus:outline-none cursor-pointer rounded-lg w-[230px] h-[45px]" required>
                                            <option hidden selected disabled value={''}>อำเภอ</option>
                                            {ampher.length > 0 && ampher.map((item: any, index: number) => (
                                                <option key={index} value={`${item.name_th}-${item.name_en}`}>{`${item.name_th} - ${item.name_en}`}</option>
                                            ))}
                                        </select>
                                        :
                                        <select disabled onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleAmphure(e)} className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[230px] h-[45px]">
                                            <option hidden selected disabled>อำเภอ</option>
                                        </select>
                                    }
                                </div>

                            </div>
                        </div>
                        <div className="absolute top-[180px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Street Address</div>
                            <div className="relative rounded-md bg-gray-scale-white box-border w-[936px] h-[49px] text-base border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                                    <input form="add" type="text" placeholder="Street Address" className="text-[15px] w-[923px] rounded-lg h-[45px] bg-transparent focus:outline-none" required />
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