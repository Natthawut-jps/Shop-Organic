import { FormEvent, FunctionComponent, useState } from "react";
import { Header } from "./unities/Header";
import { Foorter } from "./unities/Foorter";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import instance from "./unities/axios_instance";

interface contact_Type {
  name: string;
  email: string;
  subject: string;
  description: string;
}
const Contact: FunctionComponent = () => {
  const [data, setData] = useState<contact_Type>({} as contact_Type);
  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    instance({
      method: "post",
      url: "/public/contact/add",
      data: data,
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        location.reload();
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
        EditAndadd={undefined}
      />
      <div className=" bg-gray-scale-white text-base text-gray-scale-gray-900 font-body-small-body-small-400">
        <div className="container mx-auto p-4 box-border grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-5">
          <div className="md:col-span-1 gap-2 box-border rounded-lg bg-gray-scale-white shadow-[0px_0px_56px_rgba(0,_38,_3,_0.08)] flex flex-col items-start justify-start p-4 text-gray-scale-gray-800 ">
            <div className="rounded-3xs flex flex-col items-start justify-start gap-2">
              <img
                className="object-cover w-full max-w-[30px]"
                alt=""
                src="/img/map-pin.svg"
              />
              <div className=" leading-[170%] inline-block text-sm">
                234 ถนนเลย – เชียงคาน ตำบลเมือง อำเภอเมือง จังหวัดเลย 42000
              </div>
            </div>
            <div className=" box-border border-t-[1px] border-solid border-gray-scale-gray-100" />
            <div className="rounded-3xs flex flex-col items-start justify-start gap-2">
              <img
                className="object-cover w-full max-w-[30px]"
                alt=""
                src="/img/email.svg"
              />
              <div className=" leading-[170%] inline-block text-sm">
                <p className="m-0">Natthawut.jps@gmail.com</p>
              </div>
            </div>
            <div className=" box-border border-t-[1px] border-solid border-gray-scale-gray-100" />
            <div className="rounded-3xs flex flex-col items-start justify-start gap-2">
              <img
                className="object-cover w-full max-w-[30px]"
                alt=""
                src="/img/phonecall.svg"
              />
              <div className=" leading-[170%] inline-block text-sm">
                <p className="m-0">(+66) 061-505-9483</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <div className="rounded-lg bg-gray-scale-white shadow-[0px_0px_56px_rgba(0,_38,_3,_0.08)]" />
            <div>
              <label
                htmlFor="subject"
                className="text-sm box-border ml-1 text-gray-scale-gray-700 "
              >
                ชื่อเรื่อง
              </label>
              <div className=" rounded-md bg-gray-scale-white box-border border-[1px] border-solid hover:border-branding-success border-gray-scale-gray-100">
                <div>
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setData({ ...data, subject: e.target.value })
                    }
                    required
                    id="subject"
                    type="text"
                    name="subject"
                    form="contact_form"
                    placeholder="เรื่อง"
                    className=" bg-transparent focus:outline-none text-[#666666] p-2 w-full box-border"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="text-sm box-border ml-1 text-gray-scale-gray-700 "
              >
                ชื่อผู้ส่ง
              </label>
              <div className="rounded-md bg-gray-scale-white box-border text-gray-scale-gray-600 border-[1px] border-solid hover:border-branding-success border-gray-scale-gray-100">
                <div className="">
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setData({ ...data, name: e.target.value })
                    }
                    id="name"
                    type="text"
                    form="contact_form"
                    name="name"
                    placeholder="ชื่อ"
                    className=" bg-transparent focus:outline-none text-[#666666] p-2 w-full box-border"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm box-border ml-1 text-gray-scale-gray-700 "
              >
                อีเมลล์
              </label>
              <div className=" rounded-md bg-gray-scale-white box-border text-gray-scale-gray-600 border-[1px] border-solid hover:border-branding-success  border-gray-scale-gray-100">
                <div className="">
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setData({ ...data, email: e.target.value })
                    }
                    required
                    id="email"
                    type="email"
                    form="contact_form"
                    pattern=".+@gmail\.com"
                    name="email"
                    placeholder="อีเมลล์"
                    className=" bg-transparent focus:outline-none text-[#666666] p-2 w-full box-border"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="text-sm box-border ml-1 text-gray-scale-gray-700 "
              >
                รายละเอียด
              </label>
              <div className=" rounded-md bg-gray-scale-white box-border text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100 hover:border-branding-success">
                <div>
                  <textarea
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setData({ ...data, description: e.target.value })
                    }
                    required
                    id="description"
                    name="description"
                    form="contact_form"
                    placeholder="รายละเอียด"
                    className="text-[14px] w-full focus:outline-none h-[90px] resize-none bg-transparent p-2 box-border text-[#666666]"
                  />
                </div>
              </div>
            </div>
            <div className="text-sm leading-[150%] text-gray-scale-gray-500">
              สามารถสอบถามข้อมูล แจ้งปัญหาเข้าได้ตลอด 24 ชั่วโมง
              ทางทีมงานจะรีบติดต่อกับไปโดยเร็วที่สุด
            </div>
            <form onSubmit={submitHandler} id="contact_form">
              <button
                type="submit"
                className=" cursor-pointer rounded-24xl bg-branding-success flex flex-row items-center justify-end py-2 px-5 text-gray-scale-white"
              >
                <div className=" leading-[120%] font-semibold">ส่ง</div>
              </button>
            </form>
          </div>
        </div>
        <div className="pt-10 box-border max-h-[500px] h-[500px] w-full">
          <iframe
            className=" object-cover w-full h-full "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15216.931167405446!2d101.7182277!3d17.54409995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31214835d001557f%3A0xd91f2a61d038e03c!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lij4Liy4LiK4Lig4Lix4LiP4LmA4Lil4LiiIExvZWkgUmFqYWJoYXQgVW5pdmVyc2l0eQ!5e0!3m2!1sth!2sth!4v1701495063244!5m2!1sth!2sth"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Foorter />
    </>
  );
};

export default Contact;
