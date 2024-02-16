import { Link } from "react-router-dom";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Header } from "./unities/Header";
import { NavAccount } from "./unities/NavAccount";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useEffect, useState } from "react";
import instance_auth from "./unities/instance_auth";

interface addressType {
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
  phone: number;
  status: number;
  createdAt: string;
};
export const Address = () => {
  const [address, setAddress] = useState<addressType[]>([]);
  const [dafults, setDefult] = useState<boolean>(false);
  useEffect(() => {
    const address = async () => {
      try {
        await instance_auth({
          method: "get",
          url: "/address/all",
          responseType: "json",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status === 200) {
            setAddress(res.data);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    address();
  }, []);

  const setDeflut = async (id: number, status: number) => {
    await instance_auth({
      method: "post",
      url: "/setdefultaddress",
      data: { id: id, status: status },
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        setDefult(true);
      } else {
        setDefult(false);
      }
    });
  };
  return (
    <>
      <div className="relative bg-gray-scale-white w-full h-full pb-[400px] overflow-hidden text-left text-base text-gray-scale-gray-600 font-caps-lock-small-caps-lock">
        <Header />
        <Breadcrumbs
          categoies={undefined}
          tltle={undefined}
          Detail={undefined}
          EditAndadd={undefined}
        />
        <NavAccount />
        <div className=" relative top-[347px] left-[400px] w-[980px] h-fit">
          <div className=" relative top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] pb-[150px] h-fit border-[1px] border-solid border-gray-scale-gray-100">
            {/* Address */}
            <div className=" relative grid grid-cols-2 grid-flow-row gap-y-5 w-[950px]">
              {address.map((item, index) => (
                <div
                  key={index}
                  className=" relative top-[86px] left-[24px] w-[450px] h-[280px]"
                >
                  <div className="absolute top-[0px] left-[0px] rounded-md bg-gray-scale-white box-border w-[450px] h-[280px] border-[1px] border-solid border-gray-scale-gray-100 " />
                  <div className=" absolute top-[18px] left-[0px] box-border pl-[0px] h-[250px] w-[470px] overflow-auto">
                    <div className=" relative break-words top-[78px] pl-[20px] box-border leading-[150%] text-gray-scale-gray-600 inline-block w-[420px]">
                      {`${item.street}, ${item.county}, ${item.states},
                       ${item.tambon}, ${item.zipCode}`}
                    </div>
                    <div className=" relative top-[100px] pl-[20px] box-border flex flex-col items-start justify-start gap-y-[4px] text-xs">
                      <div className="relative tracking-[0.03em] leading-[100%] uppercase font-medium  ">
                        Phnoe
                      </div>
                      <div className="relative break-words text-sm leading-[150%] text-gray-scale-gray-900 inline-block w-[420px] ">
                        {item.phone}
                      </div>
                    </div>
                    <div className="absolute top-[46px] pl-[20px] box-border text-base leading-[150%] text-gray-scale-gray-900 w-[450px]">
                      {`${item.first_name} ${item.last_name}`}
                    </div>
                    <Link
                      to={"/Account/Address/Edit"}
                      className="absolute hover:text-[#06e102]/70 top-[0px] cursor-pointer p-[2px] text-[#06e102] left-[20px] tracking-[0.03em] leading-[100%] font-medium"
                    >
                      Edit
                    </Link>
                    {item.status === 1 ? (
                      <button
                        className="absolute bg-transparent top-[0px] p-[4px] left-[85px] tracking-[0.03em] leading-[100%] text-[11px] border border-solid border-black/30 rounded-sm text-[#666666] cursor-not-allowed"
                        disabled
                      >
                        ตั้งเป็นค่าเริ่มต้น
                      </button>
                    ) : (
                      <div>
                        <button
                          onClick={() => setDeflut(item.id, 1)}
                          className="absolute hover:text-black/90 active:bg-black/10 bg-transparent top-[0px] cursor-pointer p-[4px] left-[85px] tracking-[0.03em] leading-[100%] text-[11px] border border-solid border-black/50 rounded-sm text-black"
                        >
                          ตั้งเป็นค่าเริ่มต้น
                        </button>
                        <div className="absolute cursor-pointer p-[2px] hover:text-red-400 text-red-600 top-[0px] left-[370px] tracking-[0.03em] leading-[100%] font-medium">
                          Delete
                        </div>
                      </div>
                    )}
                    <div className="absolute top-[31.5px] left-[0px] box-border w-[450px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
                  </div>
                </div>
              ))}
              <Link
                to={"/Account/Address/Add"}
                className=" relative top-[86px] left-[24px] w-[450px] h-[200px] bg-[#06e102]/20 hover:bg-[#06e102]/30"
              >
                <div className="absolute rounded-md box-border w-full h-[200px] border-[1px] border-solid border-[#06e102] " />
                <div className="  relative  box-border w-[450px] h-[200px] ">
                  <div className=" flex justify-center items-center break-words leading-[150%] text-[#06e102] w-[450px] h-[200px] hover:translate-y-[2px]">
                    <AddCircleOutlineIcon sx={{ fontSize: "100px" }} />
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
  );
};
