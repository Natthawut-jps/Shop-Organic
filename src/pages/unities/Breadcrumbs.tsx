import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { NavLink, useParams } from "react-router-dom";


interface Prop {
    tltle: string | undefined
    categoies: string | undefined
}
export const Breadcrumbs: FunctionComponent<Prop> = (props) => {
    const { pageParam } = useParams();
    return (
        <>
            <div className="absolute top-[186px] left-[-225px] w-[1920px] h-[120px] bg-[url('/img/Breadcrumbs.svg')] bg-cover bg-no-repeat bg-[top] text-base text-gray-scale-gray-500">
                <div className="absolute top-[calc(50%_-_12px)] left-[350px] flex flex-row items-center justify-start gap-[12px]">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "" : ""} end >
                        <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/img/home1-1.svg"
                        />
                    </NavLink>
                    <FontAwesomeIcon icon={faAngleRight} className=" relative" />
                    {props.categoies === "SignIn" || props.categoies === "SignUp" ?
                        'Acount'
                        : pageParam ?
                            <NavLink to={`/product/categories/${props.categoies}/${pageParam}`} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                                : " no-underline text-gray-scale-gray-400"} end >
                                <div className="relative leading-[150%]">
                                    {props.categoies}
                                </div>
                            </NavLink>
                            :
                            <NavLink to={`/product/categories/${props.categoies}/1`} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                                : " no-underline text-gray-scale-gray-400"} end >
                                <div className="relative leading-[150%]">
                                    {props.categoies}
                                </div>
                            </NavLink>
                    }
                    <NavLink to={`/about`} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                        : " no-underline text-gray-scale-gray-400 hidden"} end >
                        <div className="relative leading-[150%]">
                            {"About"}
                        </div>
                    </NavLink>
                    <NavLink to={`/contact`} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                        : " no-underline text-gray-scale-gray-400 hidden"} end >
                        <div className="relative leading-[150%]">
                            {"Contact"}
                        </div>
                    </NavLink>

                    {props.tltle && <FontAwesomeIcon icon={faAngleRight} className=" relative" />}
                    {props.categoies === 'SignIn' && <FontAwesomeIcon icon={faAngleRight} className=" relative" />}
                    {props.categoies === 'SignUp' && <FontAwesomeIcon icon={faAngleRight} className=" relative" />}
                    {props.categoies === "SignIn" || props.categoies === "SignUp" ?
                        <NavLink to={`/Acount/${props.categoies}`} className={({ isActive }) => isActive ? " no-underline text-branding-success" : " no-underline text-gray-scale-gray-400"} end >
                            <div className="relative leading-[150%]">
                                {props.categoies}
                            </div>
                        </NavLink>
                        :
                        <NavLink to={`/product/detail/${props.categoies}/${props.tltle}`} className={({ isActive }) => isActive ? " no-underline text-branding-success" : " no-underline text-gray-scale-gray-400"} end >
                            <div className="relative leading-[150%]">
                                {props.tltle}
                            </div>
                        </NavLink>
                    }
                </div>
            </div>
        </>
    )
}