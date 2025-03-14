import {
  faArrowRightToBracket,
  faCube,
  faGear,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import { Cookies } from "react-cookie";

export const NavAccount: FunctionComponent = () => {
  const cookie = new Cookies();
  const handleLogout = () => {
    cookie.remove("_ut", { path: "/" });
    cookie.remove("_ur", { path: "/" });
    location.href = "/";
  };
  return (
    <>
      <div className="hidden rounded-lg bg-gray-scale-white lg:flex flex-col items-start justify-start text-base text-gray-scale-gray-600 ">
        <div className="container mx-auto p-4 box-border flex flex-row items-start justify-start text-lg text-gray-scale-gray-900">
          <div className=" leading-[150%] font-medium">บัญชีของฉัน</div>
        </div>
        <NavLink
          to={"/Account/Dashboard"}
          className={({ isActive }) =>
            isActive
              ? " no-underline w-[110px] bg-gren-gray-scale-50 shadow-[3px_0px_0px_#20b526_inset] flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-black"
              : " no-underline flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-gray-scale-gray-900"
          }
        >
          <ViewQuiltIcon />
          <div className=" leading-[150%] inline-block shrink-0">หน้าหลัก</div>
        </NavLink>
        <NavLink
          to={"/Account/Orders"}
          className={({ isActive }) =>
            isActive
              ? " no-underline w-[110px] bg-gren-gray-scale-50 shadow-[3px_0px_0px_#20b526_inset] flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-black"
              : " no-underline flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-gray-scale-gray-900"
          }
        >
          <FontAwesomeIcon icon={faCube} />
          <div className=" leading-[150%] inline-block shrink-0">
            คำสั่งซื้อ
          </div>
        </NavLink>
        <NavLink
          to={"/Account/Address"}
          className={({ isActive }) =>
            isActive
              ? " no-underline w-[110px] bg-gren-gray-scale-50 shadow-[3px_0px_0px_#20b526_inset] flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-black"
              : " no-underline flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-gray-scale-gray-900"
          }
        >
          <FontAwesomeIcon icon={faMapLocationDot} />
          <div className="relative leading-[150%] inline-block shrink-0">
            ที่อยู่
          </div>
        </NavLink>
        <NavLink
          to={"/Account/Settings"}
          className={({ isActive }) =>
            isActive
              ? "no-underline w-[110px] bg-gren-gray-scale-50 shadow-[3px_0px_0px_#20b526_inset] flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-black"
              : "no-underline flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-gray-scale-gray-900"
          }
        >
          <FontAwesomeIcon icon={faGear} />
          <div className="relative leading-[150%] inline-block shrink-0">
            ตั้งค่า
          </div>
        </NavLink>
        <div
          onClick={handleLogout}
          className=" text-red-600 no-underline flex flex-row items-center justify-center py-4 px-5 gap-[10px] cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          <div className="text-base leading-[150%] inline-block shrink-0">
            ออกจากระบบ
          </div>
        </div>
      </div>
    </>
  );
};
