import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

interface Prop {
  tltle: string | undefined;
  categoies: string | undefined;
  Detail: string | undefined;
  EditAndadd: string | undefined;
}
export const Breadcrumbs: FunctionComponent<Prop> = (props) => {
  const { pageParam, order_id } = useParams();

  return (
    <>
      <div className="my-4 p-2 text-gray-scale-gray-500 bg-slate-100 shadow-sm">
        <div className=" relative">
          <div className=" flex flex-row items-center justify-start gap-[12px]">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "" : "")}
              end
            >
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/img/home1-1.svg"
              />
            </NavLink>
            <FontAwesomeIcon icon={faAngleRight} className=" relative" />
            {pageParam ? (
              <NavLink
                to={`/product/categories/${props.categoies}/${pageParam}`}
                className={({ isActive }) =>
                  isActive
                    ? " no-underline text-branding-success"
                    : " no-underline text-gray-scale-gray-400"
                }
                end
              >
                <div className="relative leading-[150%]">{props.categoies}</div>
              </NavLink>
            ) : (
              <NavLink
                to={`/product/categories/${props.categoies}/1`}
                className={({ isActive }) =>
                  isActive
                    ? " no-underline text-branding-success"
                    : " no-underline text-gray-scale-gray-400"
                }
                end
              >
                <div className="relative leading-[150%]">{props.categoies}</div>
              </NavLink>
            )}
            <NavLink
              to={`/about`}
              className={({ isActive }) =>
                isActive
                  ? " no-underline text-branding-success"
                  : " no-underline text-gray-scale-gray-400 hidden"
              }
              end
            >
              <div className="relative leading-[150%]">{"เกี่ยวกับเรา"}</div>
            </NavLink>
            <NavLink
              to={`/contact`}
              className={({ isActive }) =>
                isActive
                  ? " no-underline text-branding-success"
                  : " no-underline text-gray-scale-gray-400 hidden"
              }
              end
            >
              <div className="relative leading-[150%]">{"ติดต่อเรา"}</div>
            </NavLink>
            <NavLink
              to={`/Account`}
              className={({ isActive }) =>
                isActive
                  ? " no-underline text-branding-success"
                  : " no-underline text-gray-scale-gray-400 hidden"
              }
              end
            >
              <div className="relative leading-[150%]">{"บัญชี"}</div>
            </NavLink>
            <NavLink
              to={`/Account/Dashboard`}
              className={({ isActive }) =>
                isActive ? " no-underline text-gray-scale-gray-400" : " hidden"
              }
              end
            >
              <div className="relative leading-[150%]">{"บัญชี"}</div>
            </NavLink>
            <NavLink
              to={`/Account/Orders`}
              className={({ isActive }) =>
                isActive ? " no-underline text-gray-scale-gray-400" : " hidden"
              }
              end
            >
              <div className="relative leading-[150%]">{"บัญชี"}</div>
            </NavLink>
            <NavLink
              to={`/Account/Orders/Detail/${order_id}`}
              className={({ isActive }) =>
                isActive ? " no-underline text-gray-scale-gray-400" : " hidden"
              }
              end
            >
              <div className="relative leading-[150%]">{"บัญชี"}</div>
            </NavLink>
            <NavLink
              to={`/Account/Address`}
              className={({ isActive }) =>
                isActive ? " no-underline text-gray-scale-gray-400" : " hidden"
              }
              end
            >
              <div className="relative leading-[150%]">{"บัญชี"}</div>
            </NavLink>
            <NavLink
              to={`/Account/Address/Edit`}
              className={({ isActive }) =>
                isActive ? " no-underline text-gray-scale-gray-400" : " hidden"
              }
              end
            >
              <div className="relative leading-[150%]">{"บัญชี"}</div>
            </NavLink>
            <NavLink
              to={`/Account/Address/Add`}
              className={({ isActive }) =>
                isActive ? " no-underline text-gray-scale-gray-400" : " hidden"
              }
              end
            >
              <div className="relative leading-[150%]">{"บัญชี"}</div>
            </NavLink>
            <NavLink
              to={`/Account/Settings`}
              className={({ isActive }) =>
                isActive ? " no-underline text-gray-scale-gray-400" : " hidden"
              }
              end
            >
              <div className="relative leading-[150%]">{"บัญชี"}</div>
            </NavLink>
            <NavLink
              to={`/shop/checkout`}
              className={({ isActive }) =>
                isActive
                  ? " no-underline text-branding-success"
                  : " no-underline text-gray-scale-gray-400 hidden"
              }
              end
            >
              <div className="relative leading-[150%]">{"สั่งซื้อ"}</div>
            </NavLink>
            {props.tltle && (
              <FontAwesomeIcon icon={faAngleRight} className=" relative" />
            )}
            {props.categoies === "SignIn" && (
              <FontAwesomeIcon icon={faAngleRight} className=" relative" />
            )}
            {props.categoies === "SignUp" && (
              <FontAwesomeIcon icon={faAngleRight} className=" relative" />
            )}
            {props.categoies === "SignIn" || props.categoies === "SignUp" ? (
              <NavLink
                to={`/Acount/${props.categoies}`}
                className={({ isActive }) =>
                  isActive
                    ? " no-underline text-branding-success"
                    : " no-underline text-gray-scale-gray-400"
                }
                end
              >
                <div className="relative leading-[150%]">{props.categoies}</div>
              </NavLink>
            ) : (
              <NavLink
                to={`/product/detail/${props.categoies}/${props.tltle}`}
                className={({ isActive }) =>
                  isActive
                    ? " no-underline text-branding-success"
                    : " no-underline text-gray-scale-gray-400"
                }
                end
              >
                <div className="relative leading-[150%]">{props.tltle}</div>
              </NavLink>
            )}
            <NavLink
              to={`/Account/Dashboard`}
              className={({ isActive }) =>
                isActive
                  ? " no-underline text-branding-success"
                  : " no-underline text-gray-scale-gray-400 hidden"
              }
              end
            >
              <div className="relative leading-[150%]">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className=" relative text-gray-scale-gray-400 mr-[15px]"
                />
                {"หน้าหลัก"}
              </div>
            </NavLink>
            <NavLink
              to={"/Account/Orders"}
              className={({ isActive }) =>
                isActive
                  ? " no-underline text-branding-success"
                  : " no-underline text-gray-scale-gray-400 hidden"
              }
              end
            >
              <div className="relative leading-[150%]">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className=" relative text-gray-scale-gray-400 mr-[15px]"
                />
                {"ประวัติการสั่งซื้อ"}
              </div>
            </NavLink>
            {props.Detail === "Detail" && (
              <Link
                to={"/Account/Orders"}
                className="no-underline text-gray-scale-gray-400"
              >
                <div className="relative leading-[150%]">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className=" relative text-gray-scale-gray-400 mr-[15px]"
                  />
                  {"ประวัติการสั่งซื้อ"}
                </div>
              </Link>
            )}
            <NavLink
              to={`/Account/Orders/Detail/${order_id}`}
              className={({ isActive }) =>
                isActive
                  ? " no-underline text-branding-success"
                  : " no-underline text-gray-scale-gray-400 hidden"
              }
              end
            >
              <div className="relative leading-[150%]">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className=" relative text-gray-scale-gray-400 mr-[15px]"
                />
                {"รายละเอียด"}
              </div>
            </NavLink>
            <NavLink
              to={`/Account/Address`}
              className={({ isActive }) =>
                isActive
                  ? " no-underline text-branding-success"
                  : " no-underline text-gray-scale-gray-400 hidden"
              }
              end
            >
              <div className="relative leading-[150%]">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className=" relative text-gray-scale-gray-400 mr-[15px]"
                />
                {"ที่อยู่"}
              </div>
            </NavLink>
            {props.EditAndadd === "Edit" && (
              <Link
                to={`/Account/Address`}
                className=" no-underline text-gray-scale-gray-400"
              >
                <div className="relative leading-[150%]">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className=" relative text-gray-scale-gray-400 mr-[15px]"
                  />
                  {"ที่อยู่"}
                </div>
              </Link>
            )}
            {props.EditAndadd === "Add" && (
              <Link
                to={`/Account/Address`}
                className=" no-underline text-gray-scale-gray-400"
              >
                <div className="relative leading-[150%]">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className=" relative text-gray-scale-gray-400 mr-[15px]"
                  />
                  {"ที่อยู่"}
                </div>
              </Link>
            )}
            <NavLink
              to={`/Account/Address/Edit`}
              className={({ isActive }) =>
                isActive
                  ? " no-underline text-branding-success"
                  : " no-underline text-gray-scale-gray-400 hidden"
              }
              end
            >
              <div className="relative leading-[150%]">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className=" relative text-gray-scale-gray-400 mr-[15px]"
                />
                {"แก้ไข"}
              </div>
            </NavLink>
            <NavLink
              to={`/Account/Address/Add`}
              className={({ isActive }) =>
                isActive
                  ? " no-underline text-branding-success"
                  : " no-underline text-gray-scale-gray-400 hidden"
              }
              end
            >
              <div className="relative leading-[150%]">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className=" relative text-gray-scale-gray-400 mr-[15px]"
                />
                {"เพิ่ม"}
              </div>
            </NavLink>
            <NavLink
              to={`/Account/Settings`}
              className={({ isActive }) =>
                isActive
                  ? " no-underline text-branding-success"
                  : " no-underline text-gray-scale-gray-400 hidden"
              }
              end
            >
              <div className="relative leading-[150%]">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className=" relative text-gray-scale-gray-400 mr-[15px]"
                />
                {"ตั้งค่า"}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
