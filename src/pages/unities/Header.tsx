import { faSistrix } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faBars,
  faCube,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
import CloseIcon from "@mui/icons-material/Close";
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
  const [openCollape, setOpenCollape] = useState<boolean>(false);
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
      <div className="flex flex-row justify-start items-center shadow-lg drop-shadow-lg gap-3 sm:gap-6 bg-slate-100 text-gray-scale-gray-600">
        <div className=" flex-none">
          <Link
            to={"/"}
            className=" hover:translate-y-[-2px] no-underline text-black"
          >
            <img
              className="sm:max-w-[180px] max-w-[160px]"
              alt=""
              src="/img/Logo.png"
            />
          </Link>
        </div>
        <div className="hidden  flex-none lg:flex flex-row items-center justify-start gap-5">
          <div
            onClick={handleClick}
            className=" cursor-pointer flex flex-row items-center justify-start box-border p-[15px] bg-branding-success gap-[12px] text-gray-scale-white hover:translate-x-1 transition-all"
          >
            <FontAwesomeIcon icon={faBars} />
            <div className=" leading-[150%] font-medium">หมวดหมู่</div>
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
                    src={`${import.meta.env.VITE_BASE_API}/img/${item.imgURL}`}
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
            className=" no-underline hover:opacity-80 cursor-pointer"
          >
            <div className=" leading-[150%] font-medium text-gray-scale-gray-600">
              เกี่ยวกับเรา
            </div>
          </Link>
          <Link
            to={"/contact"}
            className=" no-underline divide-y-2 divide-solid divide-white hover:opacity-80 cursor-pointer"
          >
            <div className=" leading-[150%] font-medium text-gray-scale-gray-600">
              ติดต่อเรา
            </div>
          </Link>
        </div>
        <div className="flex-1 basis-1/5 text-13xl text-gren-gray-scale-900">
          <div
            onClick={() => setOpenSearch(true)}
            className=" hover:text-green-600 cursor-pointer hover:border-green-600 hover:border-opacity-50 rounded-md flex flex-row items-center justify-start text-mini text-gray-scale-gray-500"
          >
            <div className=" flex flex-row items-center text-[22px] sm:text-[16px] justify-start sm:border-b-[1px] sm:border-gray-700 sm:border-opacity-20 w-full border-solid">
              <FontAwesomeIcon
                icon={faSistrix}
                fontSize="inherit"
                className="shrink-0 opacity-50"
              />
              <div className=" hidden leading-[21px] sm:inline-block shrink-0">
                ค้นหา . . .
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-3 ">
          <div className="flex flex-row justify-end items-center">
            {cookie.get("_ur") && (
              <Link
                to={"/Account/Dashboard"}
                className=" hover:bg-black/10 hover:cursor-pointer text-gray-600 no-underline font-bold hidden lg:block w-fit"
              >
                {`${userInfo.first_name} ${userInfo.last_name}`}
              </Link>
            )}
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClickAccounting}
                size="small"
                className="p-0 m-0 w-[30px] h-[30px]"
                aria-controls={openAccounting ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openAccounting ? "true" : undefined}
              >
                <Avatar
                  sx={{
                    "&.MuiAvatar-root": {
                      width: 30,
                      height: 30,
                    },
                  }}
                >
                  <img
                    src={`${import.meta.env.VITE_BASE_API}/img/profile.jpg`}
                    className="max-w-full w-full object-cover"
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
                ".MuiMenu-list": {
                  width: 220,
                },
                ".MuiMenu-paper": {
                  backgroundColor: "#f1f5f9",
                  boxShadow: "none",
                  borderRadius: 0,
                },
              }}
            >
              {cookie.get("_ur") && (
                <Link
                  to={"/Account/Dashboard"}
                  className=" no-underline text-black"
                >
                  <MenuItem onClick={handleClose}>
                    <div className=" flex justify-center items-center gap-4">
                      <ViewQuiltIcon fontSize="medium" />
                      <span className="text-base">หน้าหลัก</span>
                    </div>
                  </MenuItem>
                </Link>
              )}
              {cookie.get("_ur") && (
                <Link
                  to={"/Account/Orders"}
                  className=" no-underline text-black"
                >
                  <MenuItem onClick={handleClose}>
                    <div className=" flex justify-center items-center gap-4">
                      <FontAwesomeIcon icon={faCube} size="lg" />
                      <span className="text-base">คำสั่งซื้อ</span>
                    </div>
                  </MenuItem>
                </Link>
              )}
              {cookie.get("_ur") && (
                <Link
                  to={"/Account/Address"}
                  className=" no-underline text-black"
                >
                  <MenuItem onClick={handleClose}>
                    <div className=" flex justify-center items-center gap-4">
                      <FontAwesomeIcon icon={faMapLocationDot} size="lg" />{" "}
                      <span className="text-base">ที่อยู่</span>
                    </div>
                  </MenuItem>
                </Link>
              )}
              {cookie.get("_ur") ? null : (
                <MenuItem onClick={() => setOpenSignIn(true)}>
                  <div className=" flex justify-center items-center gap-4">
                    <span className="text-base">เข้าสู่ระบบ</span>
                  </div>
                </MenuItem>
              )}
              {cookie.get("_ur") ? null : (
                <MenuItem onClick={() => setOpenSignUp(true)}>
                  <div className=" flex justify-center items-center gap-4">
                    <span className="text-base">สมัครสมาชิก</span>
                  </div>
                </MenuItem>
              )}
              {cookie.get("_ur") ? null : (
                <Divider className="lg:hidden block" />
              )}
              <MenuItem onClick={() => setOpenFavorite(true)}>
                <div className=" flex justify-center items-center gap-4 lg:hidden">
                  <FavoriteIcon fontSize="medium" />
                  <span className="text-base">สินค้าที่ชอบ</span>
                </div>
              </MenuItem>
              {cookie.get("_ur") && <Divider />}
              {cookie.get("_ur") && (
                <Link
                  to={"/Account/Settings"}
                  className=" no-underline text-black/70"
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="medium" />
                    </ListItemIcon>
                    <span className="text-base">ตั้งค่า</span>
                  </MenuItem>
                </Link>
              )}
              {cookie.get("_ur") && (
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="medium" color="error" />
                  </ListItemIcon>
                  <span className=" text-branding-error opacity-90 text-base">
                    ออกจากระบบ
                  </span>
                </MenuItem>
              )}
            </Menu>
          </div>
          <div
            onClick={() => setOpenFavorite(true)}
            className="rounded-2xl cursor-pointer hover:opacity-80 text-[25px] lg:block hidden"
          >
            <Badge badgeContent={favoriteItem.length} color="error">
              <FavoriteIcon
                className=" text-gray-scale-gray-600 opacity-80"
                fontSize="inherit"
              />
            </Badge>
          </div>
          <div
            onClick={() => setOpenCart(true)}
            className=" hover:opacity-80 cursor-pointer flex flex-row items-start justify-start gap-[20px] text-black "
          >
            <div className="text-[22px]">
              <Badge badgeContent={quantitySum} showZero={true} color="primary">
                <FontAwesomeIcon
                  fontSize="inherit"
                  icon={faShoppingCart}
                  className=" text-gray-scale-gray-600 opacity-80"
                />
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between box-border text-sm text-gray-scale-gray-600">
          <FontAwesomeIcon
            onClick={() => setOpenBar(true)}
            size="xl"
            icon={faBars}
            className="block lg:hidden box-border ml-[5px] mr-[16px] sm:z-50 "
          />
          <Drawer
            className="block lg:hidden"
            sx={{
              "& .MuiDrawer-paper": {
                width: "80%",
                bgcolor: "#666666",
                color: "white",
              },
            }}
            anchor={"left"}
            open={openBars}
            onClose={() => setOpenBar(false)}
          >
            <div className=" container mx-auto p-4">
              <span onClick={() => setOpenBar(false)}>
                <CloseIcon
                  color="inherit"
                  className=" active:bg-black/50 left-[80%]  w-full"
                />
              </span>
              <List>
                <ListItemButton
                  divider
                  onClick={() => setOpenCollape(!openCollape)}
                  className=" flex gap-[165px]"
                >
                  หมวดหมู่
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
                <ListItemButton divider>เกี่ยวกับเรา</ListItemButton>
                <ListItemButton divider>ติดต่อเรา</ListItemButton>
              </List>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
};
