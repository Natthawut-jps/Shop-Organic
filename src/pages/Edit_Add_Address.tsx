import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Header } from "./unities/Header";
import { NavAccount } from "./unities/NavAccount";
import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import instance_auth from "./unities/instance_auth";
interface addressType {
  first_name: string;
  last_name: string;
  street: string;
  phone: string;
}
interface Active_addressType {
  id: number;
  first_name: string;
  last_name: string;
  company: string;
  street: string;
  county: string;
  tambon: string;
  states: string;
  zipCode: number;
  email: string;
  phone: string;
  status: number;
  createdAt: string;
}
export const Edit_Add_Address: FunctionComponent = () => {
  const active_address: Active_addressType = useLocation().state;
  const [uinfo, setUinfo] = useState<addressType>({} as addressType);
  const [uinfoUp, setUinfoUp] = useState<addressType>({} as addressType);
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
        method: "get",
        url: "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setProvince(res.data);
        if (active_address) {
          const amphures = res.data
            .filter((item: any) => item.name_th === active_address.county)
            .flatMap((item: any) => item.amphure);
          const tambons = amphures
            .filter((item: any) => item.name_th === active_address.states)
            .flatMap((item: any) => item.tambon);
          const zipCodes = tambons.filter(
            (item: any) => item.name_th === active_address.tambon
          );

          if (amphures && tambons && zipCodes) {
            setAmpher(amphures);
            setTambon(tambons);
            setZipCode(zipCodes);
          }
        }
      });
    };
    providce();
  }, []);

  useEffect(() => {
    setAmpher(
      province
        .filter((item: any) => item.name_th === provincesData)
        .flatMap((item: any) => item.amphure)
    );
    setAmphureData(undefined);
  }, [provincesData]);
  useEffect(() => {
    setTambon(
      ampher
        .filter((item: any) => item.name_th === amphureData)
        .flatMap((item: any) => item.tambon)
    );
    setTambonData(undefined);
  }, [amphureData]);
  useEffect(() => {
    setZipCode(tambon.filter((item: any) => item.name_th === tambonData));
  }, [tambonData]);
  useEffect(() => {
    if (tambonData === undefined) {
      setZipCodeData(undefined);
    } else {
      zipCode.map((item: any) => {
        setZipCodeData(item.zip_code);
      });
    }
  }, [zipCode]);

  const navigate = useNavigate();
  const handlerSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await instance_auth({
      method: "post",
      url: "/address/add",
      data: {
        first_name: uinfo.first_name,
        last_name: uinfo.last_name,
        street: uinfo.street,
        phone: uinfo.phone,
        county: provincesData,
        amphure: amphureData,
        tambon: tambonData,
        zipCode: zipCodeData,
      },
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        location.href = "/Account/Address";
      }
    });
  };
  const handlerSubmitUpdate = async (event: React.FormEvent) => {
    event.preventDefault();
    await instance_auth({
      method: "post",
      url: "/address/update",
      data: {
        id: active_address.id,
        first_name: uinfoUp.first_name
          ? uinfoUp.first_name
          : active_address.first_name,
        last_name: uinfoUp.last_name
          ? uinfoUp.last_name
          : active_address.last_name,
        street: uinfoUp.street ? uinfoUp.street : active_address.street,
        phone: uinfoUp.phone ? uinfoUp.phone : active_address.phone,
        county: provincesData ? provincesData : active_address.county,
        amphure: amphureData ? amphureData : active_address.states,
        tambon: tambonData ? tambonData : active_address.tambon,
        zipCode: zipCodeData ? zipCodeData : active_address.zipCode,
      },
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        navigate("/Account/Address");
      }
    });
  };
  console.log(provincesData);
  console.log(amphureData);
  console.log(tambonData);
  console.log(zipCodeData);

  return (
    <>
      {EditAndadd === "Edit" ? (
        <div className="relative bg-gray-scale-white w-full h-[1000px] overflow-hidden text-left text-base text-gray-scale-gray-600 font-caps-lock-small-caps-lock">
          <Header />
          <Breadcrumbs
            categoies={undefined}
            tltle={undefined}
            Detail={undefined}
            EditAndadd={EditAndadd}
          />
          <NavAccount />
          <div className=" relative top-[347px] left-[400px] w-[984px] h-[500px]">
            <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[500px] border-[1px] border-solid border-gray-scale-gray-100" />
            <form id="add" onSubmit={handlerSubmitUpdate}>
              <button
                type="submit"
                className="absolute text-[16px] cursor-pointer top-[400px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white"
              >
                <div className="relative leading-[120%] font-semibold">
                  Save Add
                </div>
              </button>
            </form>
            <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">First name</div>
              <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUinfoUp({
                        ...uinfoUp,
                        first_name: e.target.value
                          ? e.target.value
                          : active_address.first_name,
                      })
                    }
                    value={
                      uinfoUp.first_name
                        ? uinfoUp.first_name
                        : active_address.first_name
                    }
                    form="add"
                    type="text"
                    placeholder="First name"
                    className=" text-[15px] w-[290px] rounded-lg h-[45px] bg-transparent focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[88px] left-[342px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">Last name</div>
              <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUinfoUp({
                        ...uinfoUp,
                        last_name: e.target.value
                          ? e.target.value
                          : active_address.last_name,
                      })
                    }
                    value={
                      uinfoUp.last_name
                        ? uinfoUp.last_name
                        : active_address.last_name
                    }
                    form="add"
                    type="text"
                    placeholder="Last name"
                    className="text-[15px] w-[290px] rounded-lg h-[45px] bg-transparent focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[88px] left-[660px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">
                <span>{`Phone`}</span>
              </div>
              <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUinfoUp({
                        ...uinfoUp,
                        phone: e.target.value
                          ? e.target.value
                          : active_address.phone,
                      })
                    }
                    value={uinfoUp.phone ? uinfoUp.phone : active_address.phone}
                    type="tel"
                    form="add"
                    pattern="[0-9]{10}"
                    placeholder="000-000-0000"
                    className="text-[15px] w-[290px] rounded-lg h-[45px] bg-transparent focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[272px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">Country / Region</div>
              <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="relative left-[5px] leading-[130%] inline-block w-[200px] shrink-0">
                  <select
                    form="add"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      setProvincesData(e.target.value);
                      const elamphure: HTMLSelectElement =
                        document.getElementById("amphure") as HTMLSelectElement;
                      elamphure.selectedIndex = 0;
                      const eltambon: HTMLSelectElement =
                        document.getElementById("tambon") as HTMLSelectElement;
                      eltambon.selectedIndex = 0;
                    }}
                    className="focus:outline-none cursor-pointer rounded-lg w-[180px] h-[45px]"
                  >
                    <option
                      hidden
                      disabled
                      selected
                      defaultValue={active_address.county}
                    >
                      {active_address.county}
                    </option>
                    {province.length > 0 &&
                      province.map((item: any, index) => (
                        <option
                          key={index}
                          value={`${item.name_th}`}
                        >{`${item.name_th}`}</option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="absolute top-[272px] left-[758px] flex flex-col items-start justify-start gap-[6px] ">
              <div className="relative leading-[150%]">Zip Code</div>
              <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="relative left-[5px] leading-[130%] inline-block w-[170px] shrink-0">
                  {active_address.zipCode ? (
                    <select
                      form="add"
                      className="focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]"
                    >
                      <option
                        defaultValue={active_address.zipCode}
                        selected
                        hidden
                      >
                        {active_address.zipCode}
                      </option>
                      {zipCode.map((item: any, index: number) => (
                        <option key={index} value={item.zip_code}>
                          {item.zip_code}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select
                      disabled
                      className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]"
                    >
                      <option>{"zip codes"}</option>
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute top-[272px] left-[541px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">Tambon</div>
              <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="relative left-[5px] leading-[130%] inline-block w-[170px] shrink-0">
                  {active_address.tambon ? (
                    <select
                      form="add"
                      id="tambon"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setTambonData(e.target.value);
                      }}
                      className="focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]"
                    >
                      <option
                        hidden
                        disabled
                        selected
                        defaultValue={active_address.tambon}
                      >
                        {active_address.tambon}
                      </option>
                      {active_address.tambon &&
                        tambon.map((item: any, index: number) => (
                          <option
                            key={index}
                            value={`${item.name_th}`}
                          >{`${item.name_th}`}</option>
                        ))}
                    </select>
                  ) : (
                    <select
                      disabled
                      className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]"
                    >
                      <option hidden selected disabled>
                        ตำบล
                      </option>
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute top-[272px] left-[280px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">States</div>
              <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="relative left-[5px] leading-[130%] inline-block w-[200px] shrink-0">
                  {active_address.states ? (
                    <select
                      form="add"
                      id="amphure"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setAmphureData(e.target.value);
                        const el: HTMLSelectElement = document.getElementById(
                          "tambon"
                        ) as HTMLSelectElement;
                        el.selectedIndex = 0;
                      }}
                      className="focus:outline-none cursor-pointer rounded-lg w-[180px] h-[45px]"
                    >
                      <option
                        hidden
                        disabled
                        selected
                        defaultValue={active_address.states}
                      >
                        {active_address.states}
                      </option>
                      {active_address.states &&
                        ampher.map((item: any, index: number) => (
                          <option
                            key={index}
                            value={`${item.name_th}`}
                          >{`${item.name_th}`}</option>
                        ))}
                    </select>
                  ) : (
                    <select
                      disabled
                      className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[180px] h-[45px]"
                    >
                      <option hidden selected disabled>
                        อำเภอ
                      </option>
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute top-[180px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">Street Address</div>
              <div className="relative rounded-md bg-gray-scale-white box-border w-[936px] h-[49px] text-base border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUinfoUp({
                        ...uinfoUp,
                        street: e.target.value
                          ? e.target.value
                          : active_address.street,
                      })
                    }
                    value={
                      uinfoUp.street ? uinfoUp.street : active_address.street
                    }
                    form="add"
                    type="text"
                    placeholder="Street Address"
                    className="text-[15px] w-[923px] rounded-lg h-[45px] bg-transparent focus:outline-none"
                    required
                  />
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
      ) : (
        <div className="relative bg-gray-scale-white w-full h-[1000px] overflow-hidden text-left text-base text-gray-scale-gray-600 font-caps-lock-small-caps-lock">
          <Header />
          <Breadcrumbs
            categoies={undefined}
            tltle={undefined}
            Detail={undefined}
            EditAndadd={EditAndadd}
          />
          <NavAccount />
          <div className=" relative top-[347px] left-[400px] w-[984px] h-[500px]">
            <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[500px] border-[1px] border-solid border-gray-scale-gray-100" />
            <form id="add" onSubmit={handlerSubmit}>
              <button
                type="submit"
                className="absolute text-[16px] cursor-pointer top-[400px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white"
              >
                <div className="relative leading-[120%] font-semibold">
                  Save Add
                </div>
              </button>
            </form>
            <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">First name</div>
              <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUinfo({ ...uinfo, first_name: e.target.value })
                    }
                    form="add"
                    type="text"
                    placeholder="First name"
                    className=" text-[15px] w-[290px] rounded-lg h-[45px] bg-transparent focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[88px] left-[342px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">Last name</div>
              <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUinfo({ ...uinfo, last_name: e.target.value })
                    }
                    form="add"
                    type="text"
                    placeholder="Last name"
                    className="text-[15px] w-[290px] rounded-lg h-[45px] bg-transparent focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[88px] left-[660px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">
                <span>{`Phone`}</span>
              </div>
              <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUinfo({ ...uinfo, phone: e.target.value })
                    }
                    type="tel"
                    form="add"
                    placeholder="0000000000"
                    pattern="[0-9]{10}"
                    className="text-[15px] w-[290px] rounded-lg h-[45px] bg-transparent focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[272px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">Country / Region</div>
              <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="relative left-[5px] leading-[130%] inline-block w-[200px] shrink-0">
                  <select
                    form="add"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      setProvincesData(e.target.value);
                      const elamphure: HTMLSelectElement =
                        document.getElementById("amphure") as HTMLSelectElement;
                      elamphure.selectedIndex = 0;
                      const eltambon: HTMLSelectElement =
                        document.getElementById("tambon") as HTMLSelectElement;
                      eltambon.selectedIndex = 0;
                    }}
                    className="focus:outline-none cursor-pointer rounded-lg w-[180px] h-[45px]"
                    required
                  >
                    <option hidden selected disabled value={""}>
                      จังหวัด
                    </option>
                    {province.length > 0 &&
                      province.map((item: any, index) => (
                        <option
                          key={index}
                          value={`${item.name_th}`}
                        >{`${item.name_th}`}</option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="absolute top-[272px] left-[758px] flex flex-col items-start justify-start gap-[6px] ">
              <div className="relative leading-[150%]">Zip Code</div>
              <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="relative left-[5px] leading-[130%] inline-block w-[170px] shrink-0">
                  {zipCode.length > 0 ? (
                    zipCode.map((item: any, index: number) => (
                      <select
                        key={index}
                        form="add"
                        className="focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]"
                        required
                      >
                        <option value={item.zip_code}>{item.zip_code}</option>
                      </select>
                    ))
                  ) : (
                    <select
                      disabled
                      className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]"
                    >
                      <option>{"zip codes"}</option>
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute top-[272px] left-[541px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">Tambon</div>
              <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="relative left-[5px] leading-[130%] inline-block w-[170px] shrink-0">
                  {tambon.length > 0 ? (
                    <select
                      form="add"
                      id="tambon"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setTambonData(e.target.value);
                      }}
                      className="focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]"
                      required
                    >
                      <option hidden selected disabled value={""}>
                        ตำบล
                      </option>
                      {tambon.length > 0 &&
                        tambon.map((item: any, index: number) => (
                          <option
                            key={index}
                            value={`${item.name_th}`}
                          >{`${item.name_th}`}</option>
                        ))}
                    </select>
                  ) : (
                    <select
                      disabled
                      className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[160px] h-[45px]"
                    >
                      <option hidden selected disabled>
                        ตำบล
                      </option>
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute top-[272px] left-[280px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">States</div>
              <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="relative left-[5px] leading-[130%] inline-block w-[200px] shrink-0">
                  {ampher.length > 0 ? (
                    <select
                      form="add"
                      id="amphure"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setAmphureData(e.target.value);
                        const el: HTMLSelectElement = document.getElementById(
                          "tambon"
                        ) as HTMLSelectElement;
                        el.selectedIndex = 0;
                      }}
                      className="focus:outline-none cursor-pointer rounded-lg w-[180px] h-[45px]"
                      required
                    >
                      <option hidden selected disabled value={""}>
                        อำเภอ
                      </option>
                      {ampher.length > 0 &&
                        ampher.map((item: any, index: number) => (
                          <option
                            key={index}
                            value={`${item.name_th}`}
                          >{`${item.name_th}`}</option>
                        ))}
                    </select>
                  ) : (
                    <select
                      disabled
                      className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg w-[180px] h-[45px]"
                    >
                      <option hidden selected disabled>
                        อำเภอ
                      </option>
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute top-[180px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[150%]">Street Address</div>
              <div className="relative rounded-md bg-gray-scale-white box-border w-[936px] h-[49px] text-base border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUinfo({ ...uinfo, street: e.target.value })
                    }
                    form="add"
                    type="text"
                    placeholder="Street Address"
                    className="text-[15px] w-[923px] rounded-lg h-[45px] bg-transparent focus:outline-none"
                    required
                  />
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
      )}
    </>
  );
};

export default Edit_Add_Address;
