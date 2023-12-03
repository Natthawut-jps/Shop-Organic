import { FunctionComponent } from "react";
import { Header } from "./unities/Header";
import { Foorter } from "./unities/Foorter";
import { Link } from "react-router-dom";

const ErrorPage: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-scale-white w-full h-[1407px] overflow-hidden text-left text-sm text-gray-scale-white font-heading-03-heading-03-600">
      <Header />
      <div className="absolute top-[250px] left-[474px] w-[612px] h-[571.03px] text-center">
        <Link to={'/'} className=" text-white no-underline absolute top-[526.03px] left-[225px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-left">
          <div className="relative leading-[120%] font-semibold">
            Back to Home
          </div>
        </Link>
        <div className="absolute top-[454.03px] left-[0px] text-base leading-[150%] text-gray-scale-gray-500 inline-block w-[612px] mix-blend-normal">
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor at metus mollis
        </div>
        <div className="absolute top-[386.03px] left-[85px] text-21xl leading-[120%] font-semibold text-gray-scale-gray-900 mix-blend-normal">
          Oops! page not found
        </div>
        <img
          className="absolute top-[0px] left-[17.9px] w-[582.72px] h-[354.03px] overflow-hidden"
          alt=""
          src="/img/illustration2.svg"
        />
      </div>
    <Foorter/>
    </div>
  );
};

export default ErrorPage;
