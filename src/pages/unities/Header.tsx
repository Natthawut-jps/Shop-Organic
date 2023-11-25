import { faSistrix } from "@fortawesome/free-brands-svg-icons"
import { faAngleDown, faBars, faDrumstickBite, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Menu, MenuItem } from "@mui/material";
import { FunctionComponent,  useState } from "react";
import { Link } from "react-router-dom";
import { CartContextProviders } from "./HandleCart";
import { Cart } from "./Cart";
import { Favorite } from "./Favorite";



export const Header: FunctionComponent = () => {
    const [Categries, setCategries] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openCart, setOpenCart] = useState<boolean>(false);
    const [openFavorite, setOpenFavorite] = useState<boolean>(false);
    const { cartItem } = CartContextProviders();
    const quantity = cartItem.map((item) => item.quantity);
    const price = cartItem.map(item => item.price * item.quantity);
    const priceSum = price.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
    const quantitySum = quantity.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setCategries(true);
    }
    const handleClose = () => {
        setCategries(false);
        setAnchorEl(null);
    };
    return (
        <>
            <Favorite Favorite={{ openFavorite, setOpenFavorite }} />
            <Cart Carts={{ openCart, setOpenCart }} />
            <div className=" absolute top-[0px] left-[-180px] bg-gray-scale-white h-[195px] flex flex-col items-center justify-start text-xs text-gray-scale-gray-600">
                <div className="bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] flex flex-row items-center justify-start py-3 px-[300px] gap-[759px]">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                        <img className="relative w-4 h-[19px]" alt="" src="/img/map-pin.svg" />
                        <div className="relative leading-[130%]">
                            Store Location: Lincoln- 344, Illinois, Chicago, Thailand
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[20px] text-center">
                        <div className="flex flex-row relative left-16 items-start justify-start gap-[4px] text-left">
                            <a href={'#'} className="relative leading-[130%] hover:text-green-400 text-black">Sign In</a>
                            <div className="relative leading-[130%]">/</div>
                            <a href={'#'} className="relative leading-[130%] hover:text-green-400 text-black">Sign Up</a>
                        </div>
                    </div>
                </div>
                <div className="relative w-[1920px] h-[93px] text-13xl text-gren-gray-scale-900">
                    <Link to={'/'} className=" no-underline text-black absolute top-[27.5px] left-[300px] flex flex-row items-center justify-start gap-[8px]">
                        <img
                            className="relative w-8 h-8 overflow-hidden shrink-0"
                            alt=""
                            src="/img/plant-11.svg"
                        />
                        <div className="relative tracking-[-0.03em] leading-[38px] font-medium">
                            Ecobazar
                        </div>
                    </Link>
                    <div onClick={() => ''} className=" hover:text-green-600 cursor-pointer hover:border-green-600 hover:border-opacity-50 absolute top-[24px] left-[711px] rounded-md flex flex-row items-center justify-start text-mini text-gray-scale-gray-500 border-[1px] border-solid border-gray-scale-gray-100">
                        <div className="w-[500px] flex flex-row items-center justify-start py-3 pr-[18px] pl-4 box-border gap-[8px]">
                            <FontAwesomeIcon icon={faSistrix} className=" relative w-5 h-5 overflow-hidden shrink-0 opacity-50" />
                            <div className="relative leading-[21px] inline-block w-[400px] shrink-0">
                                Search . . . . .
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[29.5px] left-[1429px] flex flex-row items-center justify-start gap-[16px] text-center text-3xs text-gray-scale-white">
                        <div onClick={() => setOpenFavorite(true)} className="rounded-2xl cursor-pointer">
                            <FavoriteIcon className="relative hover:text-red-600 text-black opacity-50" fontSize="large" />
                        </div>
                        <div className="relative box-border w-px h-[25px] border-r-[1px] border-solid border-gray-scale-gray-200" />
                        <div onClick={() => setOpenCart(true)} className=" hover:text-green-600 cursor-pointer flex flex-row items-center justify-start gap-[12px] text-black">
                            <div className="relative w-[34px] h-[34px]">
                                <FontAwesomeIcon icon={faShoppingCart} className="absolute top-[0px] left-[0px] w-[30px] h-[34px]" />
                                <div className=" absolute  top-[-5px] left-[17px] rounded-2xl bg-branding-success-dark box-border w-[22px] h-[22px] overflow-hidden border-[1px] border-solid border-gray-scale-white">
                                    <div className="absolute z-10 top-[calc(50%_-_5.5px)] left-[calc(50%_-_5px)] leading-[12px] font-medium text-white">
                                        {quantitySum}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[7px] text-left text-2xs ">
                                <div className="relative leading-[120%] ">Shopping cart:</div>
                                <div className="relative text-sm leading-[100%] font-medium">
                                    {priceSum.toFixed(2) + '฿'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1920px] bg-gray-scale-gray-800 flex flex-row items-center justify-between px-[300px] box-border text-sm text-gray-scale-gray-400">
                    <div className="flex flex-row items-center justify-start gap-[32px]">
                        <div
                            onClick={handleClick}
                            className=" cursor-pointer flex flex-row items-center justify-start box-border p-[15px]  bg-branding-success gap-[12px] text-gray-scale-white hover:translate-x-1 transition-all"
                        >
                            <FontAwesomeIcon icon={faBars} />
                            <div className="relative leading-[150%] font-medium">All Categories</div>
                            <FontAwesomeIcon icon={faAngleDown} className={Categries ? " rotate-180" : ""} />
                        </div>
                        <Menu
                            open={Categries}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            sx={{
                                borderRadius: '0',
                                "& .MuiPopover-paper": {
                                    borderRadius: '0',
                                },
                                "& .MuiMenu-list": {
                                    padding: '0',
                                    paddingTop: '8px',
                                    paddingBottom: '0px',
                                    width: '175px',
                                },
                                "& .MuiMenuItem-root": {
                                    minHeight: '50px',
                                    display: 'flex',
                                    gap: '12px',
                                    backgroundColor: 'white',
                                    ":hover": {
                                        background: 'rgba(76, 175, 80, 0.2)',
                                        color: 'black',
                                        translate: '3px',
                                    },
                                    ":active": {
                                        backgroundColor: 'white',
                                    }
                                },
                                cursor: 'pointer',
                                minHeight: null
                            }}
                        >
                            <Link to={'/product/vegetables'} className=" no-underline text-black">
                                <MenuItem onClick={handleClose}> <img src="/img/vegetables-pumpkin-svgrepo-com.svg" width={25} height={25} alt="" />Vegetables</MenuItem>
                            </Link>
                            <MenuItem onClick={handleClose}><img src="/img/fish.svg" alt="" width={25} height={25} />River Fish</MenuItem>
                            <MenuItem onClick={handleClose}><FontAwesomeIcon icon={faDrumstickBite} />Meat</MenuItem>
                        </Menu>
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative leading-[150%] font-medium">Shop</div>
                            <img
                                className="relative w-4 h-4 overflow-hidden shrink-0"
                                alt=""
                                src="/img/chevron-down2.svg"
                            />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative leading-[150%] font-medium">Pages</div>
                            <img
                                className="relative w-4 h-4 overflow-hidden shrink-0"
                                alt=""
                                src="/img/chevron-down2.svg"
                            />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative leading-[150%] font-medium">Blog</div>
                            <img
                                className="relative w-4 h-4 overflow-hidden shrink-0"
                                alt=""
                                src="/img/chevron-down2.svg"
                            />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative leading-[150%] font-medium">
                                About Us
                            </div>
                            <img
                                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/img/shipping.svg"
                            />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                            <div className="relative leading-[150%] font-medium">
                                Contact Us
                            </div>
                            <img
                                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/img/shipping.svg"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px] text-gray-scale-white">
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
    )
}