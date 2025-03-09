import { FunctionComponent } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";

const About: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Breadcrumbs
        categoies={undefined}
        tltle={undefined}
        Detail={undefined}
        EditAndadd={undefined}
      />
      <div className="  bg-gray-scale-white  text- text-lg text-gray-scale-gray-900 font-body-large-body-large-400">
        <div className="container mx-auto p-4 box-border flex flex-row flex-wrap md:flex-nowrap justify-end items-center gap-10">
          <img
            className="rounded-lg w-full max-w-[400px] object-cover"
            alt=""
            src="/img/image9@2x.png"
          />
          <div className="flex flex-col text-base leading-[150%] ">
            <div className="font-semibold inline-block text-lg">
              ร้านขายอาหารออร์แกนิกที่เชื่อถือได้ 100%
            </div>
            <div className="text-base">
              อาหารออร์แกนิก (Oranic Food) เรียกอีกอย่างหนึ่งว่า
              “อาหารเกษตรอินทรีย์” หรือ “อาหารอินทรีย์” คือ
              อาหารที่ผ่านการผลิตทางการเกษตรโดยไม่ใช้สารเคมี ปุ๋ยเคมี
              หรือวัตถุสังเคราะห์ใด ๆ ทั้งสิ้น
              (รวมไปถึงเมล็ดพันธุ์ที่ไม่ตัดต่อทางพันธุกรรม)
              กระบวนการผลิตไม่มีการใช้สารเคมีในการกำจัดศัตรูพืช
              ก่อนการปลูกจะต้องเตรียมหน้าดินก่อนด้วยวิธีธรรมชาติ
              ทุกขั้นตอนการผลิตจะไร้สารปนเปื้อนที่เกิดจากโรงงานอุตสาหกรรมหรือมนุษย์
              จะไม่ผ่านการฉายรังสี ไม่เพิ่มเติมสิ่งปรุงแต่งลงไปในอาหาร
              ถ้าเป็นอาหารที่มาจากการทำปสุสัตว์ก็จะต้องไม่มีการใช้สารปฏิชีวภาพ
              ไม่ใช้สารเร่งฮอร์โมน และต้องเลี้ยงสัตว์ด้วยอาหารที่มีสุขอนามัย
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 box-border flex flex-row flex-wrap-reverse justify-start items-center">
          <div className="space-y-1">
            <div className="flex flex-col items-start justify-start text-lg text-gren-gray-scale-900">
              <div className=" leading-[120%] font-semibold">
                <p className="m-0">เชื่อถือได้ 100% ร้านขายอาหารออร์แกนิก</p>
              </div>
              <div className=" text-base leading-[150%] text-gray-scale-gray-500">
                ส่วนประกอบทุกอย่างล้วนมากจากธรรมชาติ
                โดยอาหารอาหารออแกนิคจะไม่มีการใช้สารสังเคราะห์ใด ๆ
                ในการเพาะเลี้ยงหรือการเพาะปลูกเลย
                ไม่ว่าจะเป็นผักหรือเนื้อสัตว์ก็จะถูกเลี้ยงและเจริญเติบโตมาด้วยอาหารจากธรรมชาติล้วน
                ๆ{" "}
              </div>
            </div>
            <div className=" bg-gray-scale-white flex flex-row justify-start gap-[15px]">
              <div className="rounded-full bg-limegreen-200 flex flex-col items-start justify-start p-[15px]">
                <img
                  className="max-w-[40px] w-full object-cover"
                  alt=""
                  src="/img/leaf-2.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-[8px]">
                <div className=" leading-[150%] font-medium inline-block text-base">
                  อาหารออร์แกนิก 100%
                </div>
                <div className=" text-sm leading-[150%] text-gray-scale-gray-500">{`อาหารเพื่อสุขภาพและสดใหม่ 100%`}</div>
              </div>
            </div>
            <div className="  bg-gray-scale-white flex flex-row items-center justify-start gap-[15px]">
              <div className="rounded-full bg-limegreen-200 flex flex-col items-start justify-start p-4">
                <img
                  className=" max-w-[40px] w-full object-cover"
                  alt=""
                  src="/img/stars-1.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-[8px] ">
                <div className=" leading-[150%] font-medium inline-block text-base">
                  ความคิดเห็นของลูกค้า
                </div>
                <div className=" text-sm leading-[150%] text-gray-scale-gray-400 inline-block">
                  ลูกค้าที่มีความสุขของเรา
                </div>
              </div>
            </div>
            <div className=" bg-gray-scale-white flex flex-row items-center justify-start gap-[15px]">
              <div className="rounded-full bg-limegreen-200 flex flex-col items-start justify-start p-[15px]">
                <img
                  className=" w-9 h-9  shrink-0"
                  alt=""
                  src="/img/headphones-1.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-[8px]">
                <div className=" leading-[150%] font-medium text-base">
                  การสนับสนุนที่ยอดเยี่ยมตลอด 24 ชั่วโมงทุกวัน
                </div>
                <div className=" text-sm leading-[150%] text-gray-scale-gray-400">
                  เข้าถึงการติดต่อได้ทันที
                </div>
              </div>
            </div>
            <div className=" bg-gray-scale-white flex flex-row items-center justify-start gap-[15px]">
              <div className="rounded-full bg-limegreen-200 flex flex-col items-start justify-start p-[15px]">
                <img
                  className=" w-9 h-9  shrink-0"
                  alt=""
                  src="/img/shoppingbag.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-[8px]">
                <div className=" leading-[150%] font-medium inline-block w-56 text-base">
                  จ่ายเงินชัวร์ 100%
                </div>
                <div className=" text-sm leading-[150%] text-gray-scale-gray-400 inline-block">
                  เรามั่นใจว่าสามารถชำระเงินได้อย่างปลอดภัย
                </div>
              </div>
            </div>
          </div>
          <img
            className="max-w-[400px] w-full object-cover"
            alt=""
            src="/img/image8@2x.png"
          />
        </div>
        <div className="container mx-auto p-4 box-border flex flex-row flex-wrap-reverse text-base e justify-end items-center text-gray-scale-gray-600">
          <img
            className="w-full max-w-[400px] object-cover"
            alt=""
            src="/img/image2@2x.png"
          />
          <div>
            <div className=" font-semibold text-gray-scale-gray-900 text-lg">
              การเลือกบริโภคอาหารออร์แกนิก
            </div>
            <div className="text-base">
              1. ปลอดภัย (กว่า) จากสารเคมีการเกษตร
              อาหารออร์กานิคผลิตจากกระบวนการผลิตเกษตรอินทรีย์
              (ซึ่งอาจมีการรับรองมาตรฐานหรือไม่ก็ได้)
              ซึ่งปฏิเสธการใช้สารเคมีการเกษตรที่อาจเป็นอันตราย ทั้งยาฆ่าแมลง
              สารป้องกันเชื้อรา ยาฆ่าหญ้า หรือแม้แต่ปุ๋ยเคมี นอกจากนี้
              เกษตรกรยังต้องมีการป้องกันการปนเปื้อนของสารเคมีการเกษตรจากแปลงข้างเคียงด้วย
              (ซึ่งแม้ว่าอาจจะไม่สามารถป้องกันได้ 100%)
              ทำให้ผลผลิตเกษตรอินทรีย์มีสารเคมีการเกษตรตกค้างปนเปื้อนต่ำกว่า 2.
              ปลอดภัยจากยาปฏิชีวนะและฮอร์โมน
              สัตว์ที่เลี้ยงในระบบเกษตรอินทรีย์จะไม่มีการใช้ยาปฏิชีวนะหรือฮอร์โมนเร่งการเจริญเติบโต
              รวมทั้งอาหารที่ใช้ในการเลี้ยงก็ต้องเป็นอาหารสัตว์ออร์กานิค
              ที่ผลิตจากกระบวนการเกษตรอินทรีย์
              โดยไม่มีการใส่สารปรุงแต่งที่ต้องห้าม เช่น สารกันบูด
              สีผสมอาหารที่เป็นสังเคราะห์ ทำให้ผลผลิตต่างๆ
              ไม่ว่าจะเป็นเนื้อสัตว์ นม หรือไข่
              ไม่มีสารสังเคราะห์ที่อาจเป็นอันตรายต่อการบริโภค
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 box-border">
          <div className="flex flex-col items-start justify-start gap-[12px] text-center text-lg ">
            <div className=" leading-[120%] font-semibold">
              ทีมที่ยอดเยี่ยมของเรา
            </div>
            <div className=" text-base leading-[150%] text-gray-scale-gray-600 text-start">
              เรามีทีมงานที่ยอดเยี่ยมคัดสรรค์สินค้าที่มีคุณภาพ ปลอดภัย สะอาด
              สุขอนามัย เพิ่อสุขภาพของลูกค้า
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center  container mx-auto p-4 box-border gap-5 text-base">
            <div className="rounded-[10px]">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className=" leading-[150%] font-medium inline-block">
                  ผักกาดหอม
                </div>
                <div className=" text-sm leading-[150%] text-gray-scale-gray-500 inline-block">{`พืชผัก`}</div>
              </div>
              <img
                className="max-w-[100px] w-full object-cover"
                alt=""
                src="/img/image3@2x.png"
              />
            </div>
            <div >
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className=" leading-[150%] font-medium inline-block">
                  พริกชี้ฟ้าแดง
                </div>
                <div className=" text-sm leading-[150%] text-gray-scale-gray-500">
                  พืชผัก
                </div>
              </div>
              <img
                className="max-w-[100px] w-full object-cover"
                alt=""
                src="/img/image4@2x.png"
              />
            </div>
            <div className="">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className=" leading-[150%] font-medium inline-block">
                  ผักกว้างตุ้งไต้หวัน
                </div>
                <div className=" text-sm leading-[150%] text-gray-scale-gray-500 inline-block">
                  พืชผัก
                </div>
              </div>
              <img
                className="max-w-[100px] w-full object-cover"
                alt=""
                src="/img/image5@2x.png"
              />
            </div>
            <div className="">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className=" leading-[150%] font-medium inline-block">
                  ข้าวโพด
                </div>
                <div className=" text-sm leading-[150%] text-gray-scale-gray-500 inline-block">
                  พืชไร่
                </div>
              </div>
              <img
                className="max-w-[100px] w-full object-cover"
                alt=""
                src="/img/image6@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 box-border flex flex-row items-center justify-around py-20 px-0">
          <img className=" " alt="" src="/img/vector.svg" />
          <img className=" w-[66.94px] h-8" alt="" src="/img/mango1.svg" />
          <img
            className=" max-w-[82px] w-full object-cover"
            alt=""
            src="/img/food.svg"
          />
          <img
            className=" max-w-[82px] w-full object-cover"
            alt=""
            src="/img/bookoffcorporationlogo.svg"
          />
        </div>
      </div>
      <Foorter />
    </>
  );
};

export default About;
