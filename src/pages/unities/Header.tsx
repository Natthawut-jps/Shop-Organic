import { faSistrix } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faBars,
  faCube,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Avatar,
  Badge,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { ExpandLess, ExpandMore, Logout, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { Cart } from "./Cart";
import { Favorite } from "./Favorite";
import { CartContextProviders } from "./HandleCart";
import { SignUp } from "../SignUp";
import { SignIn } from "../SignIn";
import { Cookies } from "react-cookie";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons/faMapLocationDot";
import instance from "./axios_instance";
import instance_auth from "./instance_auth";

export const Header: FunctionComponent = () => {
  const cookie = new Cookies();
  const [anchorElAccounting, setAnchorElAccounting] =
    useState<null | HTMLElement>(null);
  const [openBars, setOpenBar] = useState<boolean>(false);
  const [openCollape, setOpenCollape] = useState<boolean>(true);
  const { cartItems, favoriteItem } = CartContextProviders();
  const [Categries, setCategries] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [openFavorite, setOpenFavorite] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);
  const [openSignIn, setOpenSignIn] = useState<boolean>(false);
  const quantity = cartItems.map((item) => item.quantity);
  const price = cartItems.map((item) => item.price);
  const priceSum = price.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const quantitySum = quantity.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setCategries(true);
  };
  const handleClose = () => {
    setCategries(false);
    setAnchorEl(null);
  };
  const handleLogout = () => {
    cookie.remove("_ut", { path: "/" });
    cookie.remove("_ur", { path: "/" });
    setCategries(false);
    setAnchorEl(null);
    location.href = "/";
  };
  const openAccounting = Boolean(anchorElAccounting);
  const handleClickAccounting = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAccounting(event.currentTarget);
  };
  const handleCloseAccounting = () => {
    setAnchorElAccounting(null);
  };
  interface category_Type {
    id: number;
    category_name: string;
    description: string;
    quantity: number;
    imgURL: string;
    createdAt: Date;
    updatedAt: Date;
  }
  const [categories, setCategories] = useState<category_Type[]>([]);
  const get_categories = async () => {
    await instance({
      method: "get",
      url: "/public/categories/get_category",
      responseType: "json",
    }).then((res) => {
      if (res.status === 200) {
        setCategories(res.data);
      }
    });
  };
  interface user_Type {
    id: number;
    first_name: string;
    last_name: string;
    imgURL: string;
  }
  const [userInfo, setUser] = useState<user_Type>({} as user_Type);
  const user = async () => {
    await instance_auth({
      method: "get",
      url: "/user/user_info",
      responseType: "json",
    }).then((res) => {
      if (res.status === 200) {
        setUser(res.data);
      }
    });
  };
  useEffect(() => {
    get_categories();
    user();
  }, []);
  return (
    <>
      <Favorite Favorite={{ openFavorite, setOpenFavorite }} />
      <Cart Carts={{ openCart, setOpenCart }} />
      <Search Search={{ openSearch, setOpenSearch }} />
      <SignUp SignUp={{ openSignUp, setOpenSignUp }} />
      <SignIn SignIn={{ openSignIn, setOpenSignIn }} />
      <div className=" absolute z-50 top-[0px] left-[-180px] sm:z-50 bg-gray-scale-white h-[190px] sm:h-fit flex flex-col items-center justify-start text-xs text-gray-scale-gray-600">
        <div className="bg-gray-scale-white sm:hidden shadow-[0px_1px_0px_#e5e5e5] grid grid-cols-2 w-full sm:pl-0 gap-[5px] p-1">
          {cookie.get("_ur") ? (
            <div className=" relative flex flex-row items-center justify-start left-[300px] gap-[8px]">
              <img
                className="relative w-4 h-[19px]"
                alt=""
                src="/img/map-pin.svg"
              />
              <div className="relative leading-[130%]">
                สถานที่ตั้ง: จังหวัดเลย เมืองเลย ตำบลเมือง ถนนเลย-เชียงคาน 42000, ประเทศไทย
              </div>
            </div>
          ) : (
            <div className="relative flex flex-row items-center justify-start gap-[8px] left-[300px] h-[50px]">
              <img
                className="relative w-4 h-[19px]"
                alt=""
                src="/img/map-pin.svg"
              />
              <div className="relative leading-[130%]">
                Store Location: Lei- 42000, District, Thailand
              </div>
            </div>
          )}
          <div className="flex flex-row items-center justify-between gap-[20px] text-center">
            {cookie.get("_ur") ? (
              <div className=" relative flex flex-row w-[700px] justify-end items-center gap-3 left-[0px]">
                <Link
                  to={"/Account/Dashboard"}
                  className="text-[16px] hover:bg-black/10 hover:cursor-pointer text-gray-600 no-underline right-[0px] box-border font-bold"
                >
                  {`${userInfo.first_name} ${userInfo.last_name}`}
                </Link>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClickAccounting}
                    size="small"
                    aria-controls={openAccounting ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openAccounting ? "true" : undefined}
                  >
                    <Avatar>
                      <img
                        src={`${import.meta.env.VITE_BASE_API}/img/${
                          userInfo.imgURL
                        }`}
                        width={50}
                      />
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorElAccounting}
                  onClose={handleCloseAccounting}
                  onClick={handleCloseAccounting}
                  open={openAccounting}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  sx={{
                    mt: 1.5,
                    "& .MuiMenu-list": {
                      width: 220,
                    },
                  }}
                >
                  <Link
                    to={"/Account/Dashboard"}
                    className=" no-underline text-black"
                  >
                    <MenuItem onClick={handleClose}>
                      <div className=" flex justify-center items-center gap-4">
                        <ViewQuiltIcon fontSize="large" />
                        <span>หน้าหลัก</span>
                      </div>
                    </MenuItem>
                  </Link>
                  <Link
                    to={"/Account/Orders"}
                    className=" no-underline text-black"
                  >
                    <MenuItem onClick={handleClose}>
                      <div className=" flex justify-center items-center gap-4">
                        <FontAwesomeIcon icon={faCube} size="2xl" />
                        <span>คำสั่งซื้อ</span>
                      </div>
                    </MenuItem>
                  </Link>
                  <Link
                    to={"/Account/Address"}
                    className=" no-underline text-black"
                  >
                    <MenuItem onClick={handleClose}>
                      <div className=" flex justify-center items-center gap-4">
                        <FontAwesomeIcon icon={faMapLocationDot} size="2xl" />{" "}
                        <span>ที่อยู่</span>
                      </div>
                    </MenuItem>
                  </Link>
                  <Divider />
                  <Link
                    to={"/Account/Settings"}
                    className=" no-underline text-black/70"
                  >
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Settings fontSize="medium" />
                      </ListItemIcon>
                      ตั้งค่า
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="medium" color="error" />
                    </ListItemIcon>
                    <span className=" text-branding-error opacity-90">
                      ออกจากระบบ
                    </span>
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <div className="flex flex-row relative left-16 items-start justify-end w-[600px] gap-[4px] text-left">
                <div
                  onClick={() => setOpenSignIn(true)}
                  className="relative cursor-pointer leading-[130%] hover:text-black/80 hover:underline text-black text-[14px]"
                >
                  เข้าสู่ระบบ
                </div>
                <div className="relative leading-[130%]">/</div>
                <div
                  onClick={() => setOpenSignUp(true)}
                  className="relative cursor-pointer leading-[130%] hover:text-black/80 hover:underline text-black text-[14px]"
                >
                  สมัครสมาชิก
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="relative sm:absolute w-[1920px] h-[75px] text-13xl text-gren-gray-scale-900 sm:z-0">
          <div>
            <Link
              to={"/"}
              className=" hover:translate-y-[-2px] no-underline text-black absolute top-[27.5px] sm:top-[5px] sm:left-[250px] left-[300px] flex flex-row items-center justify-start gap-[8px]"
            >
              <img
                className="relative w-[250px] top-[-25px] object-cover h-[70px] sm:w-5 sm:h-5 overflow-hidden shrink-0"
                alt=""
                src="/img/Logo.png"
              />
            </Link>
          </div>
          <div
            onClick={() => setOpenSearch(true)}
            className="hover:text-green-600 cursor-pointer hover:border-green-600 hover:border-opacity-50 absolute sm:w-0 top-[15px] sm:left-[250px] sm:top-[13px] left-[711px] rounded-md flex flex-row items-center justify-start text-mini text-gray-scale-gray-500 border-[1px] border-solid border-gray-scale-gray-100 sm:border-none"
          >
            <FontAwesomeIcon
              icon={faSistrix}
              size="xl"
              className=" hidden sm:block sm:left-[160px] sm:relative sm:box-border"
            />
            <div className="w-[500px] flex flex-row items-center justify-start py-3 pr-[18px] pl-4 box-border gap-[8px] sm:hidden">
              <FontAwesomeIcon
                icon={faSistrix}
                className=" relative w-5 h-5 overflow-hidden shrink-0 opacity-50"
              />
              <div className="relative leading-[21px] inline-block w-[400px] shrink-0">
                ค้นหา . . . . .
              </div>
            </div>
          </div>
          <div className="absolute top-[15px] left-[1429px] sm:left-[465px] sm:top-[5px] flex flex-row items-center justify-start gap-[16px] text-center text-3xs text-gray-scale-white sm:gap-[25px]">
            <div
              onClick={() => setOpenFavorite(true)}
              className="rounded-2xl cursor-pointer sm:text-[24px] text-[2.1875rem]"
            >
              <Badge badgeContent={favoriteItem.length} color="error">
                <FavoriteIcon
                  className="relative hover:text-red-400 text-red-600 opacity-50 sm:text-white"
                  fontSize="inherit"
                />
              </Badge>
            </div>
            <div className="relative box-border h-[25px] border-r-[1px] border-solid border-gray-scale-gray-200 sm:hidden" />
            <div
              onClick={() => setOpenCart(true)}
              className=" hover:opacity-80 cursor-pointer flex flex-row items-center justify-start gap-[20px] text-black "
            >
              <div className="relative w-[34px] h-[34px] sm:w-[22px]">
                <Badge badgeContent={quantitySum} color="primary">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="absolute top-[-8px] left-[0px] w-[30px] h-[34px] text-green-600 sm:w-[22px] sm:text-[#ffffff]/70 sm:relative sm:top-[2px]"
                  />
                </Badge>
              </div>
              <div className="text-green-700 flex flex-col items-start justify-start gap-[7px] text-left text-2xs sm:hidden ">
                <div className="relative leading-[120%]">ตะกร้าสินค้า</div>
                {priceSum ? (
                  <div className="relative text-sm leading-[100%] font-medium ">
                    {(priceSum + 50).toFixed(2) + "฿"}
                  </div>
                ) : (
                  <div className="relative text-sm leading-[100%] font-medium ">
                    {priceSum.toFixed(2) + "฿"}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1920px] bg-gray-scale-gray-800 flex flex-row items-center sm:h-[50px] justify-between sm:px-[200px] px-[300px] box-border text-sm text-gray-scale-gray-400">
          <FontAwesomeIcon
            onClick={() => setOpenBar(true)}
            size="xl"
            icon={faBars}
            className="hidden sm:block box-border p-1 sm:z-10"
          />
          <Drawer
            className=" hidden sm:block"
            sx={{
              "& .MuiDrawer-paper": {
                width: "70%",
                bgcolor: "#666666",
                color: "white",
              },
            }}
            anchor={"left"}
            open={openBars}
            onClose={() => setOpenBar(false)}
          >
            <div className=" container mx-auto p-4">
              <List>
                <ListItemButton
                  divider
                  onClick={() => setOpenCollape(!openCollape)}
                  className=" flex gap-[100px]"
                >
                  Allcategories
                  {openCollape ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={openCollape}
                  timeout={"auto"}
                  sx={{ mb: 2 }}
                  unmountOnExit
                >
                  <List component={"div"} disablePadding={true}>
                    {categories.map((item, index) => (
                      <ListItemButton key={index} sx={{ ml: 4 }} divider>
                        {item.category_name}
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
                <ListItemButton divider>About</ListItemButton>
                <ListItemButton divider>Contact</ListItemButton>
              </List>
            </div>
          </Drawer>
          <div className="flex flex-row items-center justify-start sm:hidden">
            <div
              onClick={handleClick}
              className=" cursor-pointer flex flex-row items-center justify-start box-border p-[15px] bg-branding-success gap-[12px] text-gray-scale-white hover:translate-x-1 transition-all"
            >
              <FontAwesomeIcon icon={faBars} />
              <div className="relative leading-[150%] font-medium">
                หมวดหมู่
              </div>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={Categries ? " rotate-180" : ""}
              />
            </div>
            <Menu
              open={Categries}
              anchorEl={anchorEl}
              onClose={handleClose}
              sx={{
                borderRadius: "0",
                "& .MuiPopover-paper": {
                  borderRadius: "0",
                },
                "& .MuiMenu-list": {
                  padding: "0",
                  paddingTop: "8px",
                  paddingBottom: "0px",
                  width: "175px",
                },
                "& .MuiMenuItem-root": {
                  minHeight: "50px",
                  display: "flex",
                  gap: "12px",
                  backgroundColor: "white",
                  ":hover": {
                    background: "rgba(76, 175, 80, 0.2)",
                    color: "black",
                    translate: "3px",
                  },
                  ":active": {
                    backgroundColor: "white",
                  },
                },
                cursor: "pointer",
                minHeight: null,
              }}
            >
              {categories.map((item, index) => (
                <Link
                  key={index}
                  to={`/product/categories/${item.category_name}/1`}
                  className=" no-underline text-black"
                >
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <img
                      src={`${import.meta.env.VITE_BASE_API}/img/${
                        item.imgURL
                      }`}
                      width={25}
                      height={25}
                      alt=""
                    />
                    {item.category_name}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
            <Link
              to={"/about"}
              className=" no-underline py-[15px] pl-[40px] pr-[40px] hover:bg-black cursor-pointer text-white flex flex-row items-center justify-start gap-[4px]"
            >
              <div className="relative leading-[150%] font-medium">
                เกี่ยวกับเรา
              </div>
            </Link>
            <Link
              to={"/contact"}
              className=" no-underline divide-y-2 divide-solid divide-white py-[15px] pl-[20px] pr-[20px] hover:bg-black cursor-pointer text-white flex flex-row items-center justify-start gap-[4px]"
            >
              <div className="relative leading-[150%] font-medium">
                ติดต่อเรา
              </div>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px] text-gray-scale-white sm:hidden">
            <img
              className="relative w-7 h-7 overflow-hidden shrink-0"
              alt=""
              src="/img/phonecall-1.svg"
            />
            <div className="relative leading-[150%] font-medium">
              (+66) 061-505-9483
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
