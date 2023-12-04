import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { Link, NavLink, useParams } from "react-router-dom";


interface Prop {
    tltle: string | undefined
    categoies: string | undefined
    Detail: string | undefined
    EditAndadd: string | undefined
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
                    {pageParam ?
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
                    <NavLink to={`/SignIn`} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                        : " no-underline text-gray-scale-gray-400 hidden"} end >
                        <div className="relative leading-[150%]">
                            {"SignIn"}
                        </div>
                    </NavLink>
                    <NavLink to={`/SignUp`} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                        : " no-underline text-gray-scale-gray-400 hidden"} end >
                        <div className="relative leading-[150%]">
                            {"SignUp"}
                        </div>
                    </NavLink>
                    <NavLink to={`/Account`} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                        : " no-underline text-gray-scale-gray-400 hidden"} end >
                        <div className="relative leading-[150%]">
                            {"Account"}
                        </div>
                    </NavLink>
                    <NavLink to={`/Account/Dashboard`} className={({ isActive }) => isActive ? " no-underline text-gray-scale-gray-400"
                        : " hidden"} end >
                        <div className="relative leading-[150%]">
                            {"Account"}
                        </div>
                    </NavLink>
                    <NavLink to={`/Account/Orders`} className={({ isActive }) => isActive ? " no-underline text-gray-scale-gray-400"
                        : " hidden"} end >
                        <div className="relative leading-[150%]">
                            {"Account"}
                        </div>
                    </NavLink>
                    <NavLink to={`/Account/Orders/Detail`} className={({ isActive }) => isActive ? " no-underline text-gray-scale-gray-400"
                        : " hidden"} end >
                        <div className="relative leading-[150%]">
                            {"Account"}
                        </div>
                    </NavLink>
                    <NavLink to={`/Account/Address`} className={({ isActive }) => isActive ? " no-underline text-gray-scale-gray-400"
                        : " hidden"} end >
                        <div className="relative leading-[150%]">
                            {"Account"}
                        </div>
                    </NavLink>
                    <NavLink to={`/Account/Address/Edit`} className={({ isActive }) => isActive ? " no-underline text-gray-scale-gray-400"
                        : " hidden"} end >
                        <div className="relative leading-[150%]">
                            {"Account"}
                        </div>
                    </NavLink>
                    <NavLink to={`/Account/Address/Add`} className={({ isActive }) => isActive ? " no-underline text-gray-scale-gray-400"
                        : " hidden"} end >
                        <div className="relative leading-[150%]">
                            {"Account"}
                        </div>
                    </NavLink>
                    <NavLink to={`/Account/Settings`} className={({ isActive }) => isActive ? " no-underline text-gray-scale-gray-400"
                        : " hidden"} end >
                        <div className="relative leading-[150%]">
                            {"Account"}
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
                    <NavLink to={`/Account/Dashboard`} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                        : " no-underline text-gray-scale-gray-400 hidden"} end >
                        <div className="relative leading-[150%]">
                            <FontAwesomeIcon icon={faAngleRight} className=" relative text-gray-scale-gray-400 mr-[15px]" />
                            {"Dashboard"}
                        </div>
                    </NavLink>
                    <NavLink to={'/Account/Orders'} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                        : " no-underline text-gray-scale-gray-400 hidden"} end >
                        <div className="relative leading-[150%]">
                            <FontAwesomeIcon icon={faAngleRight} className=" relative text-gray-scale-gray-400 mr-[15px]" />
                            {"Order History"}
                        </div>
                    </NavLink>
                    {props.Detail === 'Detail' &&
                        <Link to={'/Account/Orders'} className="no-underline text-gray-scale-gray-400" >
                            <div className="relative leading-[150%]">
                                <FontAwesomeIcon icon={faAngleRight} className=" relative text-gray-scale-gray-400 mr-[15px]" />
                                {"Order History"}
                            </div>
                        </Link>
                    }
                    <NavLink to={`/Account/Orders/Detail`} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                        : " no-underline text-gray-scale-gray-400 hidden"} end >
                        <div className="relative leading-[150%]">
                            <FontAwesomeIcon icon={faAngleRight} className=" relative text-gray-scale-gray-400 mr-[15px]" />
                            {"Detail"}
                        </div>
                    </NavLink>
                    <NavLink to={`/Account/Address`} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                        : " no-underline text-gray-scale-gray-400 hidden"} end >
                        <div className="relative leading-[150%]">
                            <FontAwesomeIcon icon={faAngleRight} className=" relative text-gray-scale-gray-400 mr-[15px]" />
                            {"Address"}
                        </div>
                    </NavLink>
                    {props.EditAndadd === 'Edit' &&
                        <Link to={`/Account/Address`} className=" no-underline text-gray-scale-gray-400" >
                            <div className="relative leading-[150%]">
                                <FontAwesomeIcon icon={faAngleRight} className=" relative text-gray-scale-gray-400 mr-[15px]" />
                                {"Address"}
                            </div>
                        </Link>
                    }
                    {props.EditAndadd === 'Add' &&
                        <Link to={`/Account/Address`} className=" no-underline text-gray-scale-gray-400" >
                            <div className="relative leading-[150%]">
                                <FontAwesomeIcon icon={faAngleRight} className=" relative text-gray-scale-gray-400 mr-[15px]" />
                                {"Address"}
                            </div>
                        </Link>
                    }
                    <NavLink to={`/Account/Address/Edit`} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                        : " no-underline text-gray-scale-gray-400 hidden"} end >
                        <div className="relative leading-[150%]">
                            <FontAwesomeIcon icon={faAngleRight} className=" relative text-gray-scale-gray-400 mr-[15px]" />
                            {"Edit"}
                        </div>
                    </NavLink>
                    <NavLink to={`/Account/Address/Add`} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                        : " no-underline text-gray-scale-gray-400 hidden"} end >
                        <div className="relative leading-[150%]">
                            <FontAwesomeIcon icon={faAngleRight} className=" relative text-gray-scale-gray-400 mr-[15px]" />
                            {"Add"}
                        </div>
                    </NavLink>
                    <NavLink to={`/Account/Settings`} className={({ isActive }) => isActive ? " no-underline text-branding-success"
                        : " no-underline text-gray-scale-gray-400 hidden"} end >
                        <div className="relative leading-[150%]">
                            <FontAwesomeIcon icon={faAngleRight} className=" relative text-gray-scale-gray-400 mr-[15px]" />
                            {"Settings"}
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}