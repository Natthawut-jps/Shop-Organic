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
    const [tambonData, setTambonData] = useState<string>();
    const [zipCodeData, setZipCodeData] = useState<number>();
    const [province, setProvince] = useState<any[]>([]);
    const [ampher, setAmpher] = useState<any[]>([]);
    const [tambon, setTambon] = useState<any[]>([]);
    const [zipCode, setZipCode] = useState<any[]>([]);
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

    useEffect(() => {
        setAmpher(province.filter((item: any) => item.name_th === provincesData?.split('-')[0].trim())
            .flatMap((item: any) => item.amphure));
        setAmphureData(undefined);
    }, [provincesData]);
    useEffect(() => {
        setTambon(ampher.filter((item: any) => item.name_th === amphureData?.split('-')[0].trim())
            .flatMap((item: any) => item.tambon));
        setTambonData(undefined);
    }, [amphureData]);
    useEffect(() => {
        setZipCode(tambon.filter((item: any) => item.name_th === tambonData?.split('-')[0].trim()));
    }, [tambonData]);
    useEffect(() => {
        if (tambonData === undefined) {
            setZipCodeData(undefined);
        } else {
            zipCode.map((item: any) => {
                setZipCodeData(item.zip_code)
            });
        }
    }, [zipCode]);

    return (
        <>
            {EditAndadd === 'Edit' ?
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
                                <div className="relative left-[5px] leading-[130%] inline-block w-[200px] shrink-0">
                                    <select form="add" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                        setProvincesData(e.target.value);
                                        const elamphure: HTMLSelectElement = document.getElementById('amphure') as HTMLSelectElement;
                                        elamphure.selectedIndex = 0;
                                        const eltambon: HTMLSelectElement = document.getElementById('tambon') as HTMLSelectElement;
                                        eltambon.selectedIndex = 0;
                                    }} className="focus:outline-none cursor-pointer rounded-lg w-[180px] h-[45px]" required>
                                        <option hidden selected disabled value={''}>จังหวัด</option>
                                        {province.length > 0 && province.map((item: any, index) => (
                                            <option key={index} value={`${item.name_th}-${item.name_en}`}>{`${item.name_th} - ${item.name_en}`}</option>
                                        ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[758px] flex flex-col items-start justify-start gap-[6px] ">
                            <div className="relative leading-[150%]">Zip Code</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative left-[5px] leading-[130%] inline-block w-[170px] shrink-0">
                                    {zipCode.length > 0 ? zipCode.map((item: any, index: number) => (
                                        <select key={index} form="add" className="focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]" required>
                                            <option value={item.zip_code}>{item.zip_code}</option>
                                        </select>
                                    ))
                                        :
                                        <select disabled className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]">
                                            <option>{'zip codes'}</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[541px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Tambon</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative left-[5px] leading-[130%] inline-block w-[170px] shrink-0">
                                    {tambon.length > 0 ?
                                        <select form="add" id="tambon" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                            setTambonData(e.target.value);
                                        }} className="focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]" required>
                                            <option hidden selected disabled value={''}>ตำบล</option>
                                            {tambon.length > 0 && tambon.map((item: any, index: number) => (
                                                <option key={index} value={`${item.name_th}-${item.name_en}`}>{`${item.name_th} - ${item.name_en}`}</option>
                                            ))}
                                        </select>
                                        :
                                        <select disabled className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]">
                                            <option hidden selected disabled>ตำบล</option>
                                        </select>
                                    }
                                </div>

                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[280px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">States</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative left-[5px] leading-[130%] inline-block w-[200px] shrink-0">
                                    {ampher.length > 0 ?
                                        <select form="add" id="amphure" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                            setAmphureData(e.target.value);
                                            const el: HTMLSelectElement = document.getElementById('tambon') as HTMLSelectElement;
                                            el.selectedIndex = 0;
                                        }} className="focus:outline-none cursor-pointer rounded-lg w-[180px] h-[45px]" required>
                                            <option hidden selected disabled value={''}>อำเภอ</option>
                                            {ampher.length > 0 && ampher.map((item: any, index: number) => (
                                                <option key={index} value={`${item.name_th}-${item.name_en}`}>{`${item.name_th} - ${item.name_en}`}</option>
                                            ))}
                                        </select>
                                        :
                                        <select disabled className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[180px] h-[45px]">
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
                                <div className="relative left-[5px] leading-[130%] inline-block w-[200px] shrink-0">
                                    <select form="add" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                        setProvincesData(e.target.value);
                                        const elamphure: HTMLSelectElement = document.getElementById('amphure') as HTMLSelectElement;
                                        elamphure.selectedIndex = 0;
                                        const eltambon: HTMLSelectElement = document.getElementById('tambon') as HTMLSelectElement;
                                        eltambon.selectedIndex = 0;
                                    }} className="focus:outline-none cursor-pointer rounded-lg w-[180px] h-[45px]" required>
                                        <option hidden selected disabled value={''}>จังหวัด</option>
                                        {province.length > 0 && province.map((item: any, index) => (
                                            <option key={index} value={`${item.name_th}-${item.name_en}`}>{`${item.name_th} - ${item.name_en}`}</option>
                                        ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[758px] flex flex-col items-start justify-start gap-[6px] ">
                            <div className="relative leading-[150%]">Zip Code</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative left-[5px] leading-[130%] inline-block w-[170px] shrink-0">
                                    {zipCode.length > 0 ? zipCode.map((item: any, index: number) => (
                                        <select key={index} form="add" className="focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]" required>
                                            <option value={item.zip_code}>{item.zip_code}</option>
                                        </select>
                                    ))
                                        :
                                        <select disabled className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]">
                                            <option>{'zip codes'}</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[541px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">Tambon</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative left-[5px] leading-[130%] inline-block w-[170px] shrink-0">
                                    {tambon.length > 0 ?
                                        <select form="add" id="tambon" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                            setTambonData(e.target.value);
                                        }} className="focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]" required>
                                            <option hidden selected disabled value={''}>ตำบล</option>
                                            {tambon.length > 0 && tambon.map((item: any, index: number) => (
                                                <option key={index} value={`${item.name_th}-${item.name_en}`}>{`${item.name_th} - ${item.name_en}`}</option>
                                            ))}
                                        </select>
                                        :
                                        <select disabled className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]">
                                            <option hidden selected disabled>ตำบล</option>
                                        </select>
                                    }
                                </div>

                            </div>
                        </div>
                        <div className="absolute top-[272px] left-[280px] flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[150%]">States</div>
                            <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                                <div className="relative left-[5px] leading-[130%] inline-block w-[200px] shrink-0">
                                    {ampher.length > 0 ?
                                        <select form="add" id="amphure" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                            setAmphureData(e.target.value);
                                            const el: HTMLSelectElement = document.getElementById('tambon') as HTMLSelectElement;
                                            el.selectedIndex = 0;
                                        }} className="focus:outline-none cursor-pointer rounded-lg w-[180px] h-[45px]" required>
                                            <option hidden selected disabled value={''}>อำเภอ</option>
                                            {ampher.length > 0 && ampher.map((item: any, index: number) => (
                                                <option key={index} value={`${item.name_th}-${item.name_en}`}>{`${item.name_th} - ${item.name_en}`}</option>
                                            ))}
                                        </select>
                                        :
                                        <select disabled className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[180px] h-[45px]">
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