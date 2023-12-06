import { FunctionComponent, useState, useEffect } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { NavAccount } from "./unities/NavAccount";
import axios from "axios";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const Settings: FunctionComponent = () => {
  // main
  const [editAccount, setEditAccount] = useState<boolean>(false);
  const [editAddress, setEditAddress] = useState<boolean>(false);
  const [editPassword, setEditPassword] = useState<boolean>(false);
  // password
  const [currentPass, setCurrentPass] = useState<boolean>(false);
  const [newPass, setNewPass] = useState<boolean>(false);
  const [confirmPass, setConfirmPass] = useState<boolean>(false);
  // select
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

  const passwordCurrent = () => {
    const elCurrent: Element | null = document.querySelector('#CurrentPassword');
    if (elCurrent) {
      if (elCurrent?.getAttribute('type') === "password") {
        elCurrent?.setAttribute('type', 'text');
        setCurrentPass(true);
      } else {
        elCurrent?.setAttribute('type', 'password');
        setCurrentPass(false);
      }
    }
  }
  const passwordNew = () => {
    const elNew: Element | null = document.querySelector('#NewPassword');
    if (elNew) {
      if (elNew?.getAttribute('type') === "password") {
        elNew?.setAttribute('type', 'text');
        setNewPass(true);
      } else {
        elNew?.setAttribute('type', 'password');
        setNewPass(false);
      }
    }
  }
  const passwordConfirm = () => {
    const elConfirm: Element | null = document.querySelector('#ConfirmPassword');
    if (elConfirm) {
      if (elConfirm?.getAttribute('type') === "password") {
        elConfirm?.setAttribute('type', 'text');
        setConfirmPass(true);
      } else {
        elConfirm?.setAttribute('type', 'password');
        setConfirmPass(false);
      }
    }
  }

  return (
    <div className="relative bg-gray-scale-white w-full h-[2420px] overflow-hidden text-left text-sm text-gray-scale-gray-900 font-body-small-body-small-400">
      <Header />
      <Breadcrumbs categoies={undefined} tltle={undefined} Detail={undefined} EditAndadd={undefined} />
      <NavAccount />
      <div className="absolute top-[347px] left-[400px] w-[984px] h-[533px]">
        <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[535px] border-[1px] border-solid border-gray-scale-gray-100" />
        {editAccount ?
          <div>
            <form id="account">
              <button type="submit" onClick={() => ''} className="absolute cursor-pointer top-[464px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white">
                <div className="relative leading-[120%] font-semibold">
                  Save Changes
                </div>
              </button>
            </form>
            <div onClick={() => location.reload()} className="absolute cursor-pointer top-[464px] left-[250px] rounded-24xl bg-branding-error flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white">
              <div className="relative leading-[120%] font-semibold">
                Cancle
              </div>
            </div>
          </div>
          :
          <div onClick={() => setEditAccount(true)} className="absolute underline cursor-pointer top-[464px] left-[24px] rounded-24xl text-[18px] text-branding-success flex flex-row items-center justify-center py-1 px-1">
            <div className="relative leading-[120%] font-semibold">
              Edit
            </div>
          </div>
        }
        <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[150%]">First name</div>
            <div className="relative rounded-md bg-gray-scale-white box-border w-[512px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
              {editAccount ?
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input form="account" type="text" placeholder="First name" className=" disabled:cursor-not-allowed text-[15px] focus:outline-none rounded-lg w-[500px] h-[45px] text-gray-scale-gray-600" required />
                </div>
                :
                <div className="absolute top-[0px] left-[0px] leading-[130%]">
                  <input type="text" placeholder="First name" className="disabled:cursor-not-allowed text-[15px] placeholder:pl-[5px] focus:outline-none rounded-lg w-[505px] h-[45px] text-gray-scale-gray-600" disabled />
                </div>
              }
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[150%]">Last Name</div>
            <div className="relative rounded-md bg-gray-scale-white box-border w-[512px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
              {editAccount ?
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input form="account" type="text" placeholder="Last Name" className=" disabled:cursor-not-allowed text-[15px] focus:outline-none rounded-lg w-[500px] h-[45px] text-gray-scale-gray-600" required />
                </div>
                :
                <div className="absolute top-[0px] left-[0px] leading-[130%]">
                  <input type="text" placeholder="Last Name" className="disabled:cursor-not-allowed text-[15px] placeholder:pl-[5px] focus:outline-none rounded-lg w-[505px] h-[45px] text-gray-scale-gray-600" disabled />
                </div>
              }
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[150%]">Email</div>
            <div className="relative rounded-md bg-gray-scale-white box-border w-[512px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
              {editAccount ?
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input form="account" type="email" placeholder="email" className=" disabled:cursor-not-allowed text-[15px] focus:outline-none rounded-lg w-[500px] h-[45px] text-gray-scale-gray-600" required />
                </div>
                :
                <div className="absolute top-[0px] left-[0px] leading-[130%]">
                  <input type="email" placeholder="email" className="disabled:cursor-not-allowed text-[15px] placeholder:pl-[5px] focus:outline-none rounded-lg w-[505px] h-[45px] text-gray-scale-gray-600" disabled />
                </div>
              }
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[150%]">Phone Number</div>
            <div className="relative rounded-md bg-gray-scale-white box-border w-[512px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
              {editAccount ?
                <div className="absolute top-[0px] left-[5px] leading-[130%]">
                  <input form="account" type="tel" pattern="[0-9{10}]" placeholder="Phone Number" className=" disabled:cursor-not-allowed text-[15px] focus:outline-none rounded-lg w-[500px] h-[45px] text-gray-scale-gray-600" required />
                </div>
                :
                <div className="absolute top-[0px] left-[0px] leading-[130%]">
                  <input type="tel" pattern="[0-9{10}]" placeholder="Phone Number" className="disabled:cursor-not-allowed text-[15px] placeholder:pl-[5px] focus:outline-none rounded-lg w-[505px] h-[45px] text-gray-scale-gray-600" disabled />
                </div>
              }
            </div>
          </div>
        </div>
        <div className="absolute top-[2px] left-[0px] rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] w-[984px] h-[62px] text-xl">
          <div className="absolute top-[16px] left-[24px] leading-[150%] font-medium">
            Account Settings
          </div>
        </div>
        <div className="absolute top-[120px] left-[648px] w-[224px] h-[289px]">
          <div className="absolute top-[243px] left-[57px] bg-gray-scale-white flex flex-row items-center justify-center ">
            <div className="relative leading-[120%] font-semibold">
              {editAccount ?
                <div>
                  <span className=" absolute text-branding-success left-[130px] top-[9px]">(optional)</span>
                  <label htmlFor="files" className="cursor-pointer flex justify-center items-center text-branding-success border-[2px] border-solid border-branding-success rounded-24xl px-3 py-1.5">
                    Chose Image
                    <input type="file" id="files" className="w-full top-[40px] file:hidden py-1.5 rounded-24xl file:cursor-pointer absolute cursor-pointer bg-transparent file:text-transparent file:bg-transparent file:border-none" accept="image/png, image/jpg, image/jpeg" />
                  </label>
                </div>
                :
                <label htmlFor="files" className="flex justify-center items-center cursor-not-allowed text-branding-success/70 border-[2px] border-solid border-branding-success/70 rounded-24xl px-2 py-1.5">Chose Image </label>
              }
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-[50%] w-56 h-56 object-cover"
            alt=""
            src="/img/profile.jpg"
          />
        </div>
      </div>
      <div className="absolute top-[904px] left-[400px] w-[984px] h-[533px]">
        <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[535px] border-[1px] border-solid border-gray-scale-gray-100" />
        {editAddress ?
          <div>
            <form id="addressCurrent">
              <button type="submit" onClick={() => ''} className="absolute text-[16px] cursor-pointer top-[464px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white">
                <div className="relative leading-[120%] font-semibold">
                  Save Changes
                </div>
              </button>
            </form>
            <div onClick={() => location.reload()} className="absolute cursor-pointer top-[464px] left-[250px] rounded-24xl bg-branding-error flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white">
              <div className="relative leading-[120%] font-semibold">
                Cancle
              </div>
            </div>
          </div>

          :
          <div onClick={() => setEditAddress(true)} className="absolute underline cursor-pointer top-[464px] left-[24px] rounded-24xl text-[18px] text-branding-success flex flex-row items-center justify-center py-1 px-1">
            <div className="relative leading-[120%] font-semibold">
              Edit
            </div>
          </div>
        }
        <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">First name</div>
          <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            {editAddress ?
              <div className="absolute top-[0px] left-[5px] leading-[130%]">
                <input form="addressCurrent" type="text" placeholder="First name" className="focus:outline-none w-[290px] text-[15px] h-[45px] rounded-lg text-gray-scale-gray-600" required />
              </div>
              :
              <div className="absolute top-[0px] left-[0px] leading-[130%]">
                <input type="text" placeholder="First name" className="focus:outline-none disabled:cursor-not-allowed w-[295px] placeholder:pl-[5px] text-[15px] h-[45px] rounded-lg text-gray-scale-gray-600" disabled />
              </div>
            }
          </div>
        </div>
        <div className="absolute top-[88px] left-[342px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Last name</div>
          <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            {editAddress ?
              <div className="absolute top-[0px] left-[5px] leading-[130%]">
                <input form="addressCurrent" type="text" placeholder="Last name" className="focus:outline-none w-[290px] text-[15px] h-[45px] rounded-lg text-gray-scale-gray-600" required />
              </div>
              :
              <div className="absolute top-[0px] left-[0px] leading-[130%]">
                <input type="text" placeholder="Last name" className="focus:outline-none disabled:cursor-not-allowed w-[295px] placeholder:pl-[5px] text-[15px] h-[45px] rounded-lg text-gray-scale-gray-600" disabled />
              </div>
            }
          </div>
        </div>
        <div className="absolute top-[364px] left-[500px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Phone</div>
          <div className="relative rounded-md bg-gray-scale-white box-border w-[460px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            {editAddress ?
              <div className="absolute top-[0px] left-[5px] leading-[130%]">
                <input form="addressCurrent" type="tel" pattern="[0-9]{10}" placeholder="Phone" className="focus:outline-none w-[448px] h-[45px] rounded-lg text-[15px] text-gray-scale-gray-600" required />
              </div>
              :
              <div className="absolute top-[0px] left-[0px] leading-[130%]">
                <input type="tel" pattern="[0-9]{10}" placeholder="Phone" className="focus:outline-none placeholder:pl-[5px] disabled:cursor-not-allowed w-[453px] h-[45px] rounded-lg text-[15px] text-gray-scale-gray-600" disabled />
              </div>
            }
          </div>
        </div>
        <div className="absolute top-[88px] left-[660px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">
            <span>{`Company Name `}</span>
            <span className="text-gray-scale-gray-500">(optional)</span>
          </div>
          <div className="relative rounded-md bg-gray-scale-white box-border w-[302px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            {editAddress ?
              <div className="absolute top-[0px] left-[5px] leading-[130%]">
                <input type="text" placeholder="Company (optional)" className="focus:outline-none w-[290px] text-[15px] h-[45px] rounded-lg text-gray-scale-gray-600" />
              </div>
              :
              <div className="absolute top-[0px] left-[0px] leading-[130%]">
                <input type="text" placeholder="Company (optional)" className="focus:outline-none disabled:cursor-not-allowed w-[295px] placeholder:pl-[5px] text-[15px] h-[45px] rounded-lg text-gray-scale-gray-600" disabled />
              </div>
            }
          </div>
        </div>
        <div className="absolute top-[364px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Email</div>
          <div className="relative rounded-md bg-gray-scale-white box-border w-[460px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            {editAddress ?
              <div className="absolute top-[0px] left-[5px] leading-[130%]">
                <input form="addressCurrent" type="email" pattern="[0-9]{10}" placeholder="Email" className="focus:outline-none w-[448px] h-[45px] rounded-lg text-[15px] text-gray-scale-gray-600" required />
              </div>
              :
              <div className="absolute top-[0px] left-[0px] leading-[130%]">
                <input type="email" pattern="[0-9]{10}" placeholder="Email" className="focus:outline-none placeholder:pl-[5px] disabled:cursor-not-allowed w-[453px] h-[45px] rounded-lg text-[15px] text-gray-scale-gray-600" disabled />
              </div>
            }
          </div>
        </div>
        <div className="absolute top-[272px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Country / Region</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            {editAddress ?
              <div className="relative left-[5px] leading-[130%] inline-block w-[244px] shrink-0">
                <select form="addressCurrent" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleProvince(e)} className="focus:outline-none cursor-pointer rounded-lg w-[230px] h-[45px]" required>
                  <option selected hidden disabled value={''}>จังหวัด</option>
                  {province.length > 0 && province.map((item: any, index) => (
                    <option key={index} value={`${item.name_th}-${item.name_en}`}>{`${item.name_th} - ${item.name_en}`}</option>
                  ))
                  }
                </select>
              </div>
              :
              <div className="relative left-[0px] leading-[130%] inline-block w-[244px] shrink-0">
                <input type="text" placeholder="จังหวัด" className="focus:outline-none cursor-pointer placeholder:pl-[5px] rounded-lg w-[240px] h-[45px] disabled:cursor-not-allowed text-gray-scale-gray-600" disabled />
              </div>
            }
          </div>

        </div>
        <div className="absolute top-[272px] left-[658px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Zip Code</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            {zipCodeData ?
              <div className="relative leading-[130%] inline-block w-[270px] shrink-0">
                <select form="addressCurrent" className="focus:outline-none cursor-pointer rounded-lg w-[260px] h-[45px]" required>
                  <option selected value={zipCodeData}>{zipCodeData}</option>
                </select>
              </div>
              :
              <div className="relative leading-[130%] inline-block w-[270px] shrink-0">
                <input type="text" placeholder="zip code" className="focus:outline-none cursor-pointer placeholder:pl-[5px] rounded-lg w-[270px] h-[45px] disabled:cursor-not-allowed text-gray-scale-gray-600" disabled />
              </div>
            }
          </div>
        </div>
        <div className="absolute top-[272px] left-[341px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">States</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start gap-[10px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            {ampher.length > 0 ?
              <div className="relative leading-[130%] inline-block w-[244px] shrink-0">
                <select form="addressCurrent" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleAmphure(e)} className="focus:outline-none cursor-pointer rounded-lg w-[230px] h-[45px]" required>
                  <option selected hidden disabled value={''}>อำเภอ</option>
                  {ampher.length > 0 && ampher.map((item: any, index: number) => (
                    <option key={index} value={`${item.name_th}-${item.name_en}`}>{`${item.name_th} - ${item.name_en}`}</option>
                  ))}
                </select>
              </div>
              :
              <div className="relative leading-[130%] inline-block w-[244px] shrink-0">
                <input type="text" placeholder="อำเภอ" className="focus:outline-none cursor-pointer placeholder:pl-[5px] rounded-lg w-[244px] h-[45px] disabled:cursor-not-allowed text-gray-scale-gray-600" disabled />
              </div>
            }
          </div>
        </div>
        <div className="absolute top-[180px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Street Address</div>
          <div className="relative rounded-md bg-gray-scale-white box-border w-[936px] h-[49px] text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
            {editAddress ?
              <div className="absolute top-[0px] left-[5px] leading-[130%]">
                <input form="addressCurrent" type="text" placeholder="Street Address" className="text-[15px] w-[925px] focus:outline-none h-[45px] rounded-lg text-gray-scale-gray-600" required />
              </div>
              :
              <div className="absolute top-[0px] left-[0px] leading-[130%]">
                <input type="text" placeholder="Street Address" className="text-[15px] disabled:cursor-not-allowed w-[930px] placeholder:pl-[5px] focus:outline-none h-[45px] rounded-lg text-gray-scale-gray-600" disabled />
              </div>
            }
          </div>
        </div>
        <div className="absolute top-[2px] left-[0px] rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] w-[984px] h-[62px] text-xl">
          <div className="absolute top-[16px] left-[24px] leading-[150%] font-medium">
            Current Address
          </div>
        </div>
      </div>
      <div className="absolute top-[1461px] left-[400px] w-[984px] h-[349px]">
        <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-gray-scale-white box-border w-[986px] h-[351px] border-[1px] border-solid border-gray-scale-gray-100" />
        {editPassword ?
          <div>
            <form id="password">
              <button type="submit" className="absolute top-[280px] text-[16px] left-[24px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white">
                <div className="relative leading-[120%] font-semibold">
                  Change Password
                </div>
              </button>
            </form>
            <div onClick={() => location.reload()} className="absolute cursor-pointer top-[280px] left-[250px] rounded-24xl bg-branding-error flex flex-row items-center justify-center py-3.5 px-8 text-gray-scale-white">
              <div className="relative leading-[120%] font-semibold">
                Cancle
              </div>
            </div>
          </div>
          :
          <div onClick={() => setEditPassword(true)} className="absolute cursor-pointer top-[280px] left-[24px] rounded-24xl text-[18px] underline text-branding-success flex flex-row items-center justify-center py-1 px-1">
            <div className="relative leading-[120%] font-semibold">
              Edit
            </div>
          </div>
        }
        <div className="absolute top-[88px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Current Password</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100">
            {editPassword ?
              <div className="relative left-[5px] leading-[130%] inline-block w-[884px] shrink-0">
                <input type="password" id="CurrentPassword" placeholder="Password" className="bg-transparent text-[15px] text-gray-scale-gray-400 focus:outline-none w-[820px] h-[45px] rounded-lg" />
              </div>
              :
              <div className="relative left-[0px] leading-[130%] inline-block w-[884px] shrink-0">
                <input type="password" id="CurrentPassword" placeholder="Password" className="disabled:cursor-not-allowed placeholder:pl-[5px] text-[15px] text-gray-scale-gray-400 focus:outline-none w-[880px] h-[45px] rounded-lg" disabled />
              </div>
            }
            {editPassword &&
              <div className=" absolute top-[40px]">
                {currentPass ?
                  <Visibility onClick={passwordCurrent} fontSize="small" sx={{ color: 'black' }} className="absolute left-[840px] p-[2px] cursor-pointer" />
                  :
                  <VisibilityOff onClick={passwordCurrent} fontSize="small" sx={{ color: 'black' }} className="absolute left-[840px] p-[2px] cursor-pointer" />
                }
              </div>
            }
          </div>
        </div>
        <div className="absolute top-[180px] left-[24px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">New Password Password</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100">
            {editPassword ?
              <div className="relative left-[5px] leading-[130%] inline-block w-[408px] shrink-0">
                <input type="password" id="NewPassword" placeholder="New Password" className="text-[15px] text-gray-scale-gray-400 focus:outline-none w-[350px] h-[45px] bg-transparent rounded-lg" />
              </div>
              :
              <div className="relative left-[0px] leading-[130%] inline-block w-[408px] shrink-0">
                <input type="password" id="NewPassword" placeholder="New Password" className="disabled:cursor-not-allowed text-[15px] placeholder:pl-[5px] text-gray-scale-gray-400 focus:outline-none w-[403px] h-[45px] rounded-lg" disabled />
              </div>
            }
            {editPassword &&
              <div className=" absolute top-[40px]">
                {newPass ?
                  <Visibility onClick={passwordNew} fontSize="small" sx={{ color: 'black' }} className="absolute left-[370px] p-[2px] cursor-pointer" />
                  :
                  <VisibilityOff onClick={passwordNew} fontSize="small" sx={{ color: 'black' }} className="absolute left-[370px] p-[2px] cursor-pointer" />
                }
              </div>
            }
          </div>
        </div>
        <div className="absolute top-[180px] left-[500px] flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[150%]">Confirm Password</div>
          <div className="rounded-md bg-gray-scale-white flex flex-row items-center justify-start text-base text-gray-scale-gray-400 border-[1px] border-solid border-gray-scale-gray-100">
            {editPassword ?
              <div className="relative left-[5px] leading-[130%] inline-block w-[408px] shrink-0">
                <input type="password" id="ConfirmPassword" placeholder="Confirm Password" className="text-[15px] text-gray-scale-gray-400 focus:outline-none w-[350px] h-[45px] bg-transparent rounded-lg" />
              </div>
              :
              <div className="relative left-[0px] leading-[130%] inline-block w-[408px] shrink-0">
                <input type="password" id="ConfirmPassword" placeholder="Confirm Password" className=" disabled:cursor-not-allowed text-[15px] placeholder:pl-[5px] text-gray-scale-gray-400 focus:outline-none w-[403px] h-[45px] rounded-lg" disabled />
              </div>
            }
            {editPassword &&
              <div className=" absolute top-[40px]">
                {newPass ?
                  <Visibility onClick={passwordNew} fontSize="small" sx={{ color: 'black' }} className="absolute left-[370px] p-[2px] cursor-pointer" />
                  :
                  <VisibilityOff onClick={passwordNew} fontSize="small" sx={{ color: 'black' }} className="absolute left-[370px] p-[2px] cursor-pointer" />
                }
              </div>
            }
          </div>
        </div>
        <div className="absolute top-[2px] left-[0px] rounded-t-lg rounded-b-none bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] w-[984px] h-[62px] text-xl">
          <div className="absolute top-[16px] left-[24px] leading-[150%] font-medium">
            Change Password
          </div>
        </div>
      </div>
      <Foorter />
    </div>
  );
};

