import { faSistrix } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Slide, TextField } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import {
  FunctionComponent,
  ReactElement,
  Ref,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import instance from "./axios_instance";

export const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return (
    <>
      <Slide direction="down" ref={ref} {...props} />
    </>
  );
});
interface open {
  Search: {
    openSearch: boolean;
    setOpenSearch: (e: boolean) => void;
  };
}
interface datatypesProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  categories: string;
  rating: number;
  imgURL: string;
  uid: number;
  shoppingHanding: number;
  createdAt: string;
  updatedAt: string;
}
export const Search: FunctionComponent<open> = (props) => {
  const [input, setInput] = useState<string>("");
  const [search, setDataSearch] = useState<datatypesProduct[]>([]);
  const [list, setList] = useState<datatypesProduct[]>([]);
  const Valuesearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value.toLowerCase();
    setList(() =>
      search.filter((item: datatypesProduct) => {
        return (
          item.name.toLowerCase().search(value) !== -1 &&
          value.trim().length >= 1
        );
      })
    );
    setInput(value);
  };
  // productItem
  const Product = async () => {
    try {
      await instance({
        method: "get",
        url: "/public/products/get_product",
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          setDataSearch(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Product();
  }, []);
  return (
    <>
      <Dialog
        maxWidth={false}
        fullWidth
        onClose={() => props.Search.setOpenSearch(false)}
        open={props.Search.openSearch}
        // TransitionComponent={Transition}
      >
        <div className="box-border relative top-3 right-3 ">
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            className="cursor-pointer p-[9px] opacity-50 active:bg-slate-300 active:bg-opacity-60 float-right"
            onClick={() => {
              setInput("");
              setList([]);
              props.Search.setOpenSearch(false);
            }}
          />
        </div>
        <div className=" relative top-0 flex flex-row items-center space-x-2 container mx-auto p-4 box-border">
          <div className=" flex-1 flex flex-row items-center justify-start">
            <FontAwesomeIcon
              size="lg"
              icon={faSistrix}
              color="black"
              className=" opacity-30 box-border relative top-0 mr-1 mt-5 "
            />
            <TextField
              id="standard-basic"
              label="ค้นหา..."
              variant="standard"
              className=" w-full h-10 focus:outline-none text-[#6d6b6ba2] box-border relative left-2"
              type="text"
              onChange={Valuesearch}
            />
          </div>
        </div>
        <div className="flex flex-col mx-auto p-4 box-border justify-start space-y-0 w-full overflow-auto">
          {input.length >= 1
            ? list.map((item: datatypesProduct) => (
                <div key={item.id}>
                  <Link
                    to={`/product/detail/${item.categories}/${item.name.replace(
                      /\s/g,
                      ""
                    )}`}
                    state={{ product: item, status: "toTop" }}
                    className=" flex flex-row items-center gap-7 no-underline text-black cursor-pointer w-full hover:bg-black/10"
                  >
                    <div>
                      <img
                        src={`${import.meta.env.VITE_BASE_API}/img/${
                          item.imgURL
                        }`}
                        alt=""
                        className="max-w-[100px] w-[100px] object-cover"
                      />
                    </div>
                    <div>
                      <div className="sm:relative break-words max-w-full">
                        {item.name}
                      </div>
                      <div className=" text-[#06e102] font-semibold sm:relative break-words">
                        {`฿${item.price}`}
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            : null}
        </div>
      </Dialog>
    </>
  );
};
