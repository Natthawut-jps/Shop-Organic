import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Header } from "./unities/Header";
import { NavAccount } from "./unities/NavAccount";
import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import instance_auth from "./unities/instance_auth";
import { Foorter } from "./unities/Foorter";
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
    console.log(amphureData)
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

  return (
    <>
      <Header />
      <Breadcrumbs
        categoies={undefined}
        tltle={undefined}
        Detail={undefined}
        EditAndadd={EditAndadd}
      />
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-5 gap-3 justify-item-start">
        <NavAccount />
        {EditAndadd === "Edit" ? (
          <div className="container mx-auto p-4 box-border col-span-1 lg:col-span-4 bg-gray-scale-white text-left text-base text-gray-scale-gray-600 font-caps-lock-small-caps-lock">
            <div className="container mx-auto p-4 box-border flex flex-col border-[1px] border-solid border-gray-scale-gray-100 ">
              <div className=" rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] text-base">
                <div className="leading-[150%] font-medium">ที่อยู่จัดส่ง</div>
              </div>
              <div className="container mx-auto py-4 box-border grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">ชื่อ</div>
                  <div className=" rounded-md bg-gray-scale-white max-w-full w-full box-border h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div className="leading-[130%]">
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
                        placeholder="ชื่อ"
                        className=" text-[15px] w-full rounded-lg h-[45px] bg-transparent focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">นามสกุล</div>
                  <div className=" rounded-md bg-gray-scale-white box-border max-w-full w-full h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div className="leading-[130%]">
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
                        placeholder="นามสกุล"
                        className="text-[15px] w-full rounded-lg h-[45px] bg-transparent focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">
                    <span>{`เบอร์โทร`}</span>
                  </div>
                  <div className=" rounded-md bg-gray-scale-white box-border max-w-full w-full h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div>
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setUinfoUp({
                            ...uinfoUp,
                            phone: e.target.value
                              ? e.target.value
                              : active_address.phone,
                          })
                        }
                        value={
                          uinfoUp.phone ? uinfoUp.phone : active_address.phone
                        }
                        type="tel"
                        form="add"
                        placeholder="เบอร์โทร"
                        pattern="[0-9]{10}"
                        className="text-[15px] w-full rounded-lg h-[45px] bg-transparent focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">ที่อยู่</div>
                  <div className=" rounded-md bg-gray-scale-white box-border max-w-full w-full h-[49px] text-base border-[1px] border-solid border-gray-scale-gray-100">
                    <div className=" leading-[130%]">
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
                          uinfoUp.street
                            ? uinfoUp.street
                            : active_address.street
                        }
                        form="add"
                        type="text"
                        placeholder="ที่อยู่"
                        className="text-[15px] w-full rounded-lg h-[45px] bg-transparent focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">จังหวัด</div>
                  <div className="max-w-full w-full rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div className=" leading-[130%] w-full inline-block shrink-0">
                      <select
                        form="add"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setProvincesData(e.target.value);
                          const elamphure: HTMLSelectElement =
                            document.getElementById(
                              "amphure"
                            ) as HTMLSelectElement;
                          elamphure.selectedIndex = 0;
                          const eltambon: HTMLSelectElement =
                            document.getElementById(
                              "tambon"
                            ) as HTMLSelectElement;
                          eltambon.selectedIndex = 0;
                        }}
                        className="focus:outline-none cursor-pointer w-full rounded-lg h-[45px]"
                        required
                      >
                        <option
                          hidden
                          selected
                          disabled
                          defaultValue={active_address.county}
                          className="w-full"
                        >
                          {active_address.county}
                        </option>
                        {province.length > 0 &&
                          province.map((item: any, index) => (
                            <option
                              className="w-full"
                              key={index}
                              value={`${item.name_th}`}
                            >{`${item.name_th}`}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">อำเภอ</div>
                  <div className="max-w-full w-full rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div className=" leading-[130%] w-full inline-block shrink-0">
                      {provincesData ? (
                        <select
                          form="add"
                          id="amphure"
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            setAmphureData(e.target.value);
                            const el: HTMLSelectElement =
                              document.getElementById(
                                "tambon"
                              ) as HTMLSelectElement;
                            el.selectedIndex = 0;
                          }}
                          className="focus:outline-none cursor-pointer rounded-lg h-[45px] w-full"
                          required
                        >
                          {provincesData && (
                            <div>
                              <option
                                hidden
                                selected
                                disabled
                                value={""}
                                className="w-full"
                              >
                                อำเภอ
                              </option>
                              {ampher.map((item: any, index: number) => (
                                <option
                                  className="w-full"
                                  key={index}
                                  value={`${item.name_th}`}
                                >{`${item.name_th}`}</option>
                              ))}
                            </div>
                          )}
                        </select>
                      ) : (
                        <select
                          disabled
                          className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg h-[45px] w-full"
                        >
                          {active_address.states ? (
                            <option value="">{active_address.states}</option>
                          ) : (
                            <option hidden selected disabled className="w-full">
                              อำเภอ
                            </option>
                          )}
                        </select>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">ตำบล</div>
                  <div className="rounded-md max-w-full w-full bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div className=" left-[5px] leading-[130%] w-full inline-block shrink-0">
                      {amphureData ? (
                        <select
                          form="add"
                          id="tambon"
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            setTambonData(e.target.value);
                          }}
                          className="focus:outline-none cursor-pointer rounded-lg h-[45px] w-full"
                          required
                        >
                          {amphureData && (
                            <div>
                              <option
                                hidden
                                selected
                                disabled
                                value={""}
                                className="w-full"
                              >
                                ตำบล
                              </option>
                              {tambon.map((item: any, index: number) => (
                                <option
                                  className="w-full"
                                  key={index}
                                  value={`${item.name_th}`}
                                >{`${item.name_th}`}</option>
                              ))}
                            </div>
                          )}
                        </select>
                      ) : (
                        <select
                          disabled
                          className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg h-[45px] w-full"
                        >
                          {active_address.tambon ? (
                            <option value="">{active_address.tambon}</option>
                          ) : (
                            <option hidden selected disabled className="w-full">
                              ตำบล
                            </option>
                          )}
                        </select>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px] ">
                  <div className=" leading-[150%]">รหัสไปรษณี</div>
                  <div className="max-w-full w-full rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div className=" w-full leading-[130%] inline-block shrink-0">
                      {tambonData ? (
                        zipCode.map((item: any, index: number) => (
                          <select
                            key={index}
                            form="add"
                            className="focus:outline-none cursor-pointer rounded-lg h-[45px] w-full"
                            required
                          >
                            {tambonData && (
                              <div>
                                <option
                                  defaultValue={active_address.zipCode}
                                  selected
                                  value={""}
                                  hidden
                                >
                                  รหัสไปรษณี
                                </option>
                                <option
                                  value={item.zip_code}
                                  className="w-full"
                                >
                                  {item.zip_code}
                                </option>
                              </div>
                            )}
                          </select>
                        ))
                      ) : (
                        <select
                          disabled
                          className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg h-[45px] w-full"
                        >
                          {active_address.zipCode ? (
                            <option value="">{active_address.zipCode}</option>
                          ) : (
                            <option hidden selected disabled className="w-full">
                              รหัสไปรษณี
                            </option>
                          )}
                        </select>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <form
                id="add"
                className="flex flex-row justify-end"
                onSubmit={handlerSubmitUpdate}
              >
                <button
                  type="submit"
                  className=" tetx-base cursor-pointer rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3 px-7 text-gray-scale-white"
                >
                  <div className=" leading-[120%] font-semibold">บันทึก</div>
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="container mx-auto p-4 box-border col-span-1 lg:col-span-4 bg-gray-scale-white text-left text-base text-gray-scale-gray-600 font-caps-lock-small-caps-lock">
            <div className="container mx-auto p-4 box-border flex flex-col border-[1px] border-solid border-gray-scale-gray-100 ">
              <div className=" rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] text-base">
                <div className="leading-[150%] font-medium">ที่อยู่จัดส่ง</div>
              </div>
              <div className="container mx-auto py-4 box-border grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">ชื่อ</div>
                  <div className=" rounded-md bg-gray-scale-white max-w-full w-full box-border h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div className="leading-[130%]">
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setUinfo({ ...uinfo, first_name: e.target.value })
                        }
                        form="add"
                        type="text"
                        placeholder="ชื่อ"
                        className=" text-[15px] w-full rounded-lg h-[45px] bg-transparent focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">นามสกุล</div>
                  <div className=" rounded-md bg-gray-scale-white box-border max-w-full w-full h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div className="leading-[130%]">
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setUinfo({ ...uinfo, last_name: e.target.value })
                        }
                        form="add"
                        type="text"
                        placeholder="นามสกุล"
                        className="text-[15px] w-full rounded-lg h-[45px] bg-transparent focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">
                    <span>{`เบอร์โทร`}</span>
                  </div>
                  <div className=" rounded-md bg-gray-scale-white box-border max-w-full w-full h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div>
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setUinfo({ ...uinfo, phone: e.target.value })
                        }
                        type="tel"
                        form="add"
                        placeholder="เบอร์โทร"
                        pattern="[0-9]{10}"
                        className="text-[15px] w-full rounded-lg h-[45px] bg-transparent focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">ที่อยู่</div>
                  <div className=" rounded-md bg-gray-scale-white box-border max-w-full w-full h-[49px] text-base border-[1px] border-solid border-gray-scale-gray-100">
                    <div className=" leading-[130%]">
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setUinfo({ ...uinfo, street: e.target.value })
                        }
                        form="add"
                        type="text"
                        placeholder="ที่อยู่"
                        className="text-[15px] w-full rounded-lg h-[45px] bg-transparent focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">จังหวัด</div>
                  <div className="max-w-full w-full rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div className=" leading-[130%] w-full inline-block shrink-0">
                      <select
                        form="add"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setProvincesData(e.target.value);
                          const elamphure: HTMLSelectElement =
                            document.getElementById(
                              "amphure"
                            ) as HTMLSelectElement;
                          elamphure.selectedIndex = 0;
                          const eltambon: HTMLSelectElement =
                            document.getElementById(
                              "tambon"
                            ) as HTMLSelectElement;
                          eltambon.selectedIndex = 0;
                        }}
                        className="focus:outline-none cursor-pointer w-full rounded-lg h-[45px]"
                        required
                      >
                        <option
                          hidden
                          selected
                          disabled
                          value={""}
                          className="w-full"
                        >
                          จังหวัด
                        </option>
                        {province.length > 0 &&
                          province.map((item: any, index) => (
                            <option
                              className="w-full"
                              key={index}
                              value={`${item.name_th}`}
                            >{`${item.name_th}`}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">อำเภอ</div>
                  <div className="max-w-full w-full rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div className=" leading-[130%] w-full inline-block shrink-0">
                      {ampher.length > 0 ? (
                        <select
                          form="add"
                          id="amphure"
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            setAmphureData(e.target.value);
                            const el: HTMLSelectElement =
                              document.getElementById(
                                "tambon"
                              ) as HTMLSelectElement;
                            el.selectedIndex = 0;
                          }}
                          className="focus:outline-none cursor-pointer rounded-lg h-[45px] w-full"
                          required
                        >
                          <option
                            hidden
                            selected
                            disabled
                            value={""}
                            className="w-full"
                          >
                            อำเภอ
                          </option>
                          {ampher.length > 0 &&
                            ampher.map((item: any, index: number) => (
                              <option
                                className="w-full"
                                key={index}
                                value={`${item.name_th}`}
                              >{`${item.name_th}`}</option>
                            ))}
                        </select>
                      ) : (
                        <select
                          disabled
                          className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg h-[45px] w-full"
                        >
                          <option hidden selected disabled className="w-full">
                            อำเภอ
                          </option>
                        </select>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className=" leading-[150%]">ตำบล</div>
                  <div className="rounded-md max-w-full w-full bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div className=" left-[5px] leading-[130%] w-full inline-block shrink-0">
                      {tambon.length > 0 ? (
                        <select
                          form="add"
                          id="tambon"
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            setTambonData(e.target.value);
                          }}
                          className="focus:outline-none cursor-pointer rounded-lg h-[45px] w-full"
                          required
                        >
                          <option
                            hidden
                            selected
                            disabled
                            value={""}
                            className="w-full"
                          >
                            ตำบล
                          </option>
                          {tambon.length > 0 &&
                            tambon.map((item: any, index: number) => (
                              <option
                                className="w-full"
                                key={index}
                                value={`${item.name_th}`}
                              >{`${item.name_th}`}</option>
                            ))}
                        </select>
                      ) : (
                        <select
                          disabled
                          className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg h-[45px] w-full"
                        >
                          <option hidden selected disabled className="w-full">
                            ตำบล
                          </option>
                        </select>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[6px] ">
                  <div className=" leading-[150%]">รหัสไปรษณี</div>
                  <div className="max-w-full w-full rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                    <div className=" w-full leading-[130%] inline-block shrink-0">
                      {zipCode.length > 0 ? (
                        zipCode.map((item: any, index: number) => (
                          <select
                            key={index}
                            form="add"
                            className="focus:outline-none cursor-pointer rounded-lg h-[45px] w-full"
                            required
                          >
                            <option
                              hidden
                              selected
                              disabled
                              value={""}
                              className="w-full"
                            >
                              รหัสไปรษณี
                            </option>
                            <option value={item.zip_code} className="w-full">
                              {item.zip_code}
                            </option>
                          </select>
                        ))
                      ) : (
                        <select
                          disabled
                          className=" hover:cursor-not-allowed focus:outline-none cursor-pointer rounded-lg h-[45px] w-full"
                        >
                          <option className="w-full">{"รหัสไปรษณี"}</option>
                        </select>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <form
                id="add"
                className="flex flex-row justify-end"
                onSubmit={handlerSubmit}
              >
                <button
                  type="submit"
                  className=" tetx-base cursor-pointer rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3 px-7 text-gray-scale-white"
                >
                  <div className=" leading-[120%] font-semibold">บันทึก</div>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Foorter />
    </>
  );
};

export default Edit_Add_Address;
