import { faArrowRightToBracket, faCube, faGear, faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FunctionComponent, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

export const NavAccount: FunctionComponent = () => {
    return (
        <>
            <div className="absolute top-[347px] left-[50px] rounded-lg bg-gray-scale-white flex flex-col items-start justify-start pt-0 px-0 pb-3 text-base text-gray-scale-gray-600 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="flex flex-row items-start justify-start pt-6 pb-4 pr-0 pl-5 text-xl text-gray-scale-gray-900">
                    <div className="relative leading-[150%] font-medium">Navigation</div>
                </div>
                <NavLink to={'/Account/Dashboard'} className={({ isActive }) =>
                    isActive ? " no-underline bg-gren-gray-scale-50 shadow-[3px_0px_0px_#20b526_inset] flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-black"
                        : " no-underline flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-gray-scale-gray-900"
                }>
                    <ViewQuiltIcon />
                    <div className="relative leading-[150%] inline-block w-[238px] shrink-0">
                        Dashboard
                    </div>
                </NavLink>
                <NavLink to={'/Account/Orders'} className={({ isActive }) =>
                    isActive ? " no-underline bg-gren-gray-scale-50 shadow-[3px_0px_0px_#20b526_inset] flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-black"
                        : " no-underline flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-gray-scale-gray-900"
                }>
                    <FontAwesomeIcon icon={faCube} />
                    <div className="relative leading-[150%] inline-block w-[238px] shrink-0">
                        Order History
                    </div>
                </NavLink>
                <NavLink to={'/Account/Address'} className={({ isActive }) =>
                    isActive ? " no-underline bg-gren-gray-scale-50 shadow-[3px_0px_0px_#20b526_inset] flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-black"
                        : " no-underline flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-gray-scale-gray-900"
                }>
                    <FontAwesomeIcon icon={faMapLocationDot} />
                    <div className="relative leading-[150%] inline-block w-[238px] shrink-0">
                        Address
                    </div>
                </NavLink>
                <NavLink to={'/Account/Settings'} className={({ isActive }) =>
                    isActive ? " no-underline bg-gren-gray-scale-50 shadow-[3px_0px_0px_#20b526_inset] flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-black"
                        : " no-underline flex flex-row items-center justify-center py-4 px-5 gap-[10px] text-gray-scale-gray-900"
                }>
                    <FontAwesomeIcon icon={faGear} />
                    <div className="relative leading-[150%] inline-block w-[238px] shrink-0">
                        Settings
                    </div>
                </NavLink>
                <Link to={'/SignIn'} onClick={() => ''} className=" text-red-600 no-underline flex flex-row items-center justify-center py-4 px-5 gap-[10px]">
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                    <div className="relative leading-[150%] inline-block w-[238px] shrink-0">
                        Log-out
                    </div>
                </Link>
            </div>
        </>
    )
}