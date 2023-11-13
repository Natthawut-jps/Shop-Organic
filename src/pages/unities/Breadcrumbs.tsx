import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";


interface Prop {
    tltle: string | undefined
    categoies: string | undefined
}
export const Breadcrumbs: FunctionComponent<Prop> = ( props ) => {
    return (
        <>
            <div className="absolute top-[186px] left-[-225px] w-[1920px] h-[120px] bg-[url('/Breadcrumbs.svg')] bg-cover bg-no-repeat bg-[top] text-base text-gray-scale-gray-500">
                <div className="absolute top-[calc(50%_-_12px)] left-[350px] flex flex-row items-center justify-start gap-[12px]">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "" : ""} end >
                        <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/home1-1.svg"
                        />
                    </NavLink>
                    <FontAwesomeIcon icon={faAngleRight} className=" relative" />
                    <NavLink to={`/product/${props.categoies}`} className={({ isActive }) => isActive ? " no-underline text-branding-success" 
                     : " no-underline text-gray-scale-gray-400" } end >
                        <div className="relative leading-[150%]">
                            {props.categoies}
                        </div>
                    </NavLink>
                    { props.tltle && <FontAwesomeIcon icon={faAngleRight} className=" relative" /> }
                    <NavLink to={`/product/${props.categoies}/${props.tltle}`} className={({ isActive }) => isActive ? " no-underline text-branding-success" : " no-underline text-gray-scale-gray-400"} end >
                        <div className="relative leading-[150%]">
                            {props.tltle}
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}