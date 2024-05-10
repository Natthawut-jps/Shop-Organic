import { FunctionComponent } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";

const About: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-scale-white w-full h-[3818px] overflow-hidden text-left text-lg text-gray-scale-gray-900 font-body-large-body-large-400">
      <Header />
      <Breadcrumbs
        categoies={undefined}
        tltle={undefined}
        Detail={undefined}
        EditAndadd={undefined}
      />
      <div className="absolute top-[3034px] left-[0px] flex flex-row items-center justify-around py-20 px-0 box-border container mx-auto p-4">
        <img
          className="relative w-[81.58px] h-8"
          alt=""
          src="/img/vector.svg"
        />
        <div className="relative box-border h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img
          className="relative w-[66.94px] h-8"
          alt=""
          src="/img/mango1.svg"
        />
        <div className="relative box-border w-px h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img
          className="relative w-[82.64px] h-8 overflow-hidden shrink-0"
          alt=""
          src="/img/food.svg"
        />
        <div className="relative box-border h-[33px] border-r-[1px] border-solid border-gray-scale-gray-100" />
        <img
          className="relative w-[131.02px] h-8 overflow-hidden shrink-0"
          alt=""
          src="/img/bookoffcorporationlogo.svg"
        />
      </div>
      <div className="absolute top-[2338px] left-[0px] w-full h-[696px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#f2f2f2,_#fff)] w-full h-[736px]" />
        <div className="absolute top-[80px] left-[540px] flex flex-col items-center justify-start gap-[12px] text-center text-29xl">
          <div className="relative leading-[120%] font-semibold">
            ทีมที่ยอดเยี่ยมของเรา
          </div>
          <div className="relative text-base leading-[150%] text-gray-scale-gray-600 inline-block w-[640px]">
            เรามีทีมงานที่ยอดเยี่ยมคัดสรรค์สินค้าที่มีคุณภาพ ปลอดภัย สะอาด
            สุขอนามัย เพิ่อสุขภาพของลูกค้า
          </div>
        </div>
        <div className="grid grid-cols-4 container mx-auto pl-10">
          <div className=" relative top-[248px] left-[0px] rounded-[10px] w-[312px] h-[368px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-gray-scale-white shadow-[0px_20px_48px_rgba(0,_38,_3,_0.08)]" />
            <div className="absolute h-[14.13%] w-[87.18%] top-[80.43%] right-[6.41%] bottom-[5.43%] left-[6.41%] flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium inline-block w-[272px]">
                ผักกาดหอม
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-500 inline-block w-[272px]">{`พืชผัก`}</div>
            </div>
            <img
              className="absolute h-[76.09%] w-full top-[0%] right-[0%] bottom-[23.91%] left-[0%] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/img/image3@2x.png"
            />
          </div>
          <div className=" relative top-[248px] left-[0px] w-[312px] h-[368px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-100" />
            <div className="absolute h-[14.13%] w-[87.18%] top-[80.43%] right-[6.41%] bottom-[5.43%] left-[6.41%] flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium inline-block w-[272px]">
                พริกชี้ฟ้าแดง
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-500 inline-block w-[272px]">
                พืชผัก
              </div>
            </div>
            <img
              className="absolute h-[76.09%] w-full top-[0%] right-[0%] bottom-[23.91%] left-[0%] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/img/image4@2x.png"
            />
          </div>
          <div className=" relative top-[248px] left-[0px] w-[312px] h-[368px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-100" />
            <div className="absolute h-[14.13%] w-[87.18%] top-[80.43%] right-[6.41%] bottom-[5.43%] left-[6.41%] flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium inline-block w-[272px]">
                ผักกว้างตุ้งไต้หวัน
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-500 inline-block w-[272px]">
                พืชผัก
              </div>
            </div>
            <img
              className="absolute h-[76.09%] w-full top-[0%] right-[0%] bottom-[23.91%] left-[0%] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/img/image5@2x.png"
            />
          </div>
          <div className=" relative top-[248px] left-[0px] w-[312px] h-[368px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-gray-scale-white box-border border-[1px] border-solid border-gray-scale-gray-100" />
            <div className="absolute h-[14.13%] w-[87.18%] top-[80.43%] right-[6.41%] bottom-[5.43%] left-[6.41%] flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium inline-block w-[272px]">
                ข้าวโพด
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-500 inline-block w-[272px]">
                พืชไร่
              </div>
            </div>
            <img
              className="absolute h-[76.09%] w-full top-[0%] right-[0%] bottom-[23.91%] left-[0%] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/img/image6@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[1732px] left-[100px] w-[1476px] h-[616px] overflow-hidden text-base text-gray-scale-gray-600">
        <div className="absolute top-[80px] left-[0px] w-[552px] h-[431px]">
          <div className="absolute top-[0px] left-[0px] text-29xl leading-[120%] font-semibold text-gray-scale-gray-900 inline-block w-[552px]">
            การเลือกบริโภคอาหารออร์แกนิก
          </div>
          <div className="absolute top-[140px] left-[0px] leading-[150%] inline-block w-[536px]">
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
            สีผสมอาหารที่เป็นสังเคราะห์ ทำให้ผลผลิตต่างๆ ไม่ว่าจะเป็นเนื้อสัตว์
            นม หรือไข่ ไม่มีสารสังเคราะห์ที่อาจเป็นอันตรายต่อการบริโภค
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[581px] w-[895px] h-[606px] object-cover"
          alt=""
          src="/img/image2@2x.png"
        />
      </div>
      <div className="absolute top-[967px] left-[0px] w-full h-[685px]">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#fafafa,_#fff)] shadow-[0px_1px_0px_#e5e5e5] w-full h-[685px]" />
        <div className="absolute top-[0px] left-[0px] w-[1129px] h-[685px]">
          <img
            className="absolute top-[0px] left-[0px] w-[1129px] h-[685px] object-cover"
            alt=""
            src="/img/bg@2x.png"
          />
          <img
            className="absolute top-[0px] left-[30px] w-[745px] h-[685px] object-cover"
            alt=""
            src="/img/image8@2x.png"
          />
        </div>
        <div className="absolute top-[80px] left-[852px] flex flex-col items-start justify-start gap-[20px] text-37xl text-gren-gray-scale-900">
          <div className="relative leading-[120%] font-semibold">
            <p className="m-0">เชื่อถือได้ 100% ร้านขายอาหารออร์แกนิก</p>
          </div>
          <div className="relative text-base leading-[150%] text-gray-scale-gray-500 inline-block w-[570px]">{`ส่วนประกอบทุกอย่างล้วนมากจากธรรมชาติ โดยอาหารอาหารออแกนิคจะไม่มีการใช้สารสังเคราะห์ใด ๆ ในการเพาะเลี้ยงหรือการเพาะปลูกเลย ไม่ว่าจะเป็นผักหรือเนื้อสัตว์ก็จะถูกเลี้ยงและเจริญเติบโตมาด้วยอาหารจากธรรมชาติล้วน ๆ `}</div>
        </div>
        <div className="absolute top-[330px] left-[852px] bg-gray-scale-white flex flex-row items-center justify-start gap-[16px]">
          <div className="rounded-4981xl bg-limegreen-200 flex flex-col items-start justify-start p-4">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/img/leaf-2.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[150%] font-medium inline-block w-56">
              อาหารออร์แกนิก 100%
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-500 inline-block w-56">{`อาหารเพื่อสุขภาพและสดใหม่ 100%`}</div>
          </div>
        </div>
        <div className="absolute top-[426px] left-[852px] bg-gray-scale-white flex flex-row items-center justify-start gap-[16px]">
          <div className="rounded-4981xl bg-limegreen-200 flex flex-col items-start justify-start p-4">
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/img/stars-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[150%] font-medium inline-block w-56">
              ความคิดเห็นของลูกค้า
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-56">
              ลูกค้าที่มีความสุขของเรา
            </div>
          </div>
        </div>
        <div className="absolute top-[331px] left-[1208px] bg-gray-scale-white flex flex-row items-center justify-start gap-[16px]">
          <div className="rounded-4981xl bg-limegreen-200 flex flex-col items-start justify-start p-[18px]">
            <img
              className="relative w-9 h-9 overflow-hidden shrink-0"
              alt=""
              src="/img/headphones-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[150%] font-medium inline-block w-56">
              การสนับสนุนที่ยอดเยี่ยมตลอด 24 ชั่วโมงทุกวัน
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-56">
              เข้าถึงการติดต่อได้ทันที
            </div>
          </div>
        </div>
        <div className="absolute top-[427px] left-[1208px] bg-gray-scale-white flex flex-row items-center justify-start gap-[16px]">
          <div className="rounded-4981xl bg-limegreen-200 flex flex-col items-start justify-start p-[18px]">
            <img
              className="relative w-9 h-9 overflow-hidden shrink-0"
              alt=""
              src="/img/shoppingbag.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[150%] font-medium inline-block w-56">
              จ่ายเงินชัวร์ 100%
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-56">
              เรามั่นใจว่าสามารถชำระเงินได้อย่างปลอดภัย
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[395px] left-[100px] w-[1364px] h-[492px] overflow-hidden text-37xl">
        <div className="absolute top-[96px] left-[0px] leading-[120%] font-semibold inline-block w-[607px]">
          ร้านขายอาหารออร์แกนิกที่เชื่อถือได้ 100%
        </div>
        <div className="absolute top-[262px] left-[0px] text-lg leading-[150%] text-gray-scale-gray-600 inline-block w-[590px]">
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
        <img
          className="absolute top-[0px] left-[648px] rounded-lg w-[716px] h-[492px] object-cover"
          alt=""
          src="/img/image9@2x.png"
        />
      </div>
      <Foorter />
    </div>
  );
};

export default About;
