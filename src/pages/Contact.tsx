import { FunctionComponent } from "react";
import { Header } from "./unities/Header";
import { Foorter } from "./unities/Foorter";
import { Breadcrumbs } from "./unities/Breadcrumbs";

const Contact: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-scale-white w-full h-[1912px] overflow-hidden text-left text-base text-gray-scale-gray-900 font-body-small-body-small-400">
      <Header />
      <Breadcrumbs categoies={undefined} tltle={undefined} />
      <div className="absolute top-[395px] left-[486px] w-[984px] h-[507px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-scale-white shadow-[0px_0px_56px_rgba(0,_38,_3,_0.08)] w-[984px] h-[507px]" />
        <div className="absolute cursor-pointer top-[406px] left-[50px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-4 px-10 text-gray-scale-white">
          <div className="relative leading-[120%] font-semibold">
            Send Message
          </div>
        </div>
        <div className="absolute top-[284px] left-[50px] rounded-md bg-gray-scale-white box-border w-[884px] h-[98px] text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100 hover:border-branding-success">
          <div className="absolute top-[0px] left-[15px] leading-[130%]">
            <textarea placeholder="Subjects" className="w-[862px] text-[14px]  focus:outline-none h-[90px] resize-none bg-transparent p-2 box-border text-[#666666]"/>
          </div>
        </div>
        <div className="absolute top-[219px] left-[50px] rounded-md bg-gray-scale-white box-border w-[884px] h-[49px] border-[1px] border-solid hover:border-branding-success border-gray-scale-gray-100">
          <div className="absolute top-[0px] left-[15px] leading-[130%]">
            <input type="text" placeholder="Hello" className=" bg-transparent w-[862px] h-[45px] text-[16px] focus:outline-none text-[#666666]" />
          </div>
        </div>
        <div className="absolute top-[154px] left-[500px] rounded-md bg-gray-scale-white box-border w-[434px] h-[49px] text-gray-scale-gray-600 border-[1px] border-solid hover:border-branding-success  border-gray-scale-gray-100">
          <div className="absolute top-[0px] left-[15px] leading-[130%]">
            <input type="text" placeholder="zakirsoft@gmail.com" className=" bg-transparent w-[415px] h-[45px] text-[16px] focus:outline-none text-[#666666]" />
          </div>
        </div>
        <div className="absolute top-[154px] left-[50px] rounded-md bg-gray-scale-white box-border w-[434px] h-[49px] text-gray-scale-gray-600 border-[1px] border-solid hover:border-branding-success border-gray-scale-gray-100">
          <div className="absolute top-[0px] left-[15px] leading-[130%]">
            <input type="text" placeholder="Template Cookie" className=" bg-transparent w-[415px] h-[45px] text-[16px] focus:outline-none text-[#666666]" />
          </div>
        </div>
        <div className="absolute top-[88px] left-[50px] text-sm leading-[150%] text-gray-scale-gray-500 inline-block w-[486px]">
          Do you fancy saying hi to me or you want to get started with your
          project and you need my help? Feel free to contact me.
        </div>
        <div className="absolute top-[44px] left-[50px] text-5xl leading-[150%] font-semibold">
          Just Say Hello!
        </div>
      </div>
      <div className="absolute top-[395px] left-[140px] rounded-lg bg-gray-scale-white shadow-[0px_0px_56px_rgba(0,_38,_3,_0.08)] flex flex-col items-start justify-start py-0 px-5 text-center text-gray-scale-gray-800">
        <div className="rounded-3xs flex flex-col items-center justify-start py-6 px-0 gap-[16px]">
          <img
            className="relative w-[51px] h-[51px] overflow-hidden shrink-0"
            alt=""
            src="/img/map-pin.svg"
          />
          <div className="relative leading-[170%] inline-block w-[272px]">
            2715 Ash Dr. San Jose, South Dakota 83475
          </div>
        </div>
        <div className="relative box-border w-[273px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
        <div className="rounded-3xs flex flex-col items-center justify-start py-6 px-0 gap-[16px]">
          <img
            className="relative w-[51px] h-[51px] overflow-hidden shrink-0"
            alt=""
            src="/img/email.svg"
          />
          <div className="relative leading-[170%] inline-block w-[272px]">
            <p className="m-0">Proxy@gmail.com</p>
            <p className="m-0">Help.proxy@gmail.com</p>
          </div>
        </div>
        <div className="relative box-border w-[273px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
        <div className="rounded-3xs flex flex-col items-center justify-start py-6 px-0 gap-[16px]">
          <img
            className="relative w-[51px] h-[51px] overflow-hidden shrink-0"
            alt=""
            src="/img/phonecall.svg"
          />
          <div className="relative leading-[170%] inline-block w-[272px]">
            <p className="m-0">(219) 555-0114</p>
            <p className="m-0">(164) 333-0487</p>
          </div>
        </div>
      </div>
        <iframe className="absolute top-[952px] left-[0px] object-cover w-full h-[430px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15216.931167405446!2d101.7182277!3d17.54409995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31214835d001557f%3A0xd91f2a61d038e03c!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lij4Liy4LiK4Lig4Lix4LiP4LmA4Lil4LiiIExvZWkgUmFqYWJoYXQgVW5pdmVyc2l0eQ!5e0!3m2!1sth!2sth!4v1701495063244!5m2!1sth!2sth" loading="lazy"></iframe>

      <Foorter />
    </div>
  );
};

export default Contact;
