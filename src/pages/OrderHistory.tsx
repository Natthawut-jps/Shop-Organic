import { FunctionComponent, useEffect, useState } from "react";
import { NavAccount } from "./unities/NavAccount";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";

const OrderHistory: FunctionComponent = () => {
  const [page, setPage] = useState<number>(1);
  const [order, setOrder] = useState<number[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    const sortByLstest = arr.sort((a, b) => b - a);
    const itemOffset = ((page - 1) * 10) % sortByLstest.length;
    const endOffset = itemOffset + 10;
    setOrder(sortByLstest.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(sortByLstest.length / 10));
  }, [page, pageCount]);

  return (
    <div className="relative bg-gray-scale-white w-full h-[1699px] overflow-hidden text-left text-base text-gray-scale-gray-600 font-caps-lock-small-caps-lock">
      <Header />
      <Breadcrumbs categoies={undefined} tltle={undefined} Detail={undefined} EditAndadd={undefined} />
      <NavAccount />
      <div className="absolute top-[347px] left-[400px] w-[984px] h-[742px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-scale-white box-border w-[984px] h-[742px] border-[1px] border-solid border-gray-scale-gray-100" />
        <div className="absolute top-[644px] left-[400px] flex flex-row items-start justify-start gap-[12px] text-center">
          <div className=" flex items-start justify-start">
            <div className="rounded-111xl flex flex-col items-start justify-start p-2 text-gray-scale-white">
              <Pagination variant="outlined" onChange={(event: React.ChangeEvent<unknown>, page: number) => {
                console.log(page)
                setPage(page);
                { event }
              }} count={pageCount} page={page} sx={{ '& .MuiPaginationItem-root.Mui-selected': { bgcolor: 'rgb(0 178 7/1)' } }} />
            </div>
          </div>
        </div>
        <div className=" relative top-[110px] pl-[24px] flex flex-col items-start justify-start text-sm text-gray-scale-gray-800">
          {order.map((item) => (
            <div className="relative w-[956px] h-[45px] odd:bg-white even:bg-slate-50">
              <div className="absolute top-[12px] left-[0px] flex flex-row items-start justify-start">
                <div className="relative leading-[150%]">#</div>
                <div className="relative leading-[150%]">3933</div>
              </div>
              <div className="absolute top-[12px] left-[176px] leading-[150%]">
                4 April, 2021
              </div>
              <div className="absolute top-[12px] left-[400px] leading-[150%]">
                <span className="font-medium">$135.00</span>
                <span> (5 Products)</span>
              </div>
              <div className="absolute top-[12px] left-[668px] leading-[150%]">
                Processing
              </div>
              <Link to={'/Account/Orders/Detail'} className=" no-underline absolute top-[12px] left-[850px] leading-[150%] font-medium text-branding-success">
                View Details
              </Link>
            </div>
          ))
          }
        </div>
        <div className="absolute top-[62px] left-[0px] w-[984px] h-9 text-xs text-gray-scale-gray-700">
          <div className="absolute top-[0px] left-[0px] bg-gray-scale-gray-50 w-[984px] h-9" />
          <div className="absolute top-[12px] left-[24px] tracking-[0.03em] leading-[100%] uppercase font-medium">
            Order ID
          </div>
          <div className="absolute top-[12px] left-[200px] tracking-[0.03em] leading-[100%] uppercase font-medium">
            Date
          </div>
          <div className="absolute top-[12px] left-[424px] tracking-[0.03em] leading-[100%] uppercase font-medium">
            Total
          </div>
          <div className="absolute top-[12px] left-[692px] tracking-[0.03em] leading-[100%] uppercase font-medium">
            Status
          </div>
        </div>
        <div className="absolute top-[16px] left-[24px] text-xl leading-[150%] font-medium text-gray-scale-gray-900">
          Order History
        </div>
      </div>
      <Foorter />
    </div>
  );
};

export default OrderHistory;
