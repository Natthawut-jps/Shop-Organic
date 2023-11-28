import { faSistrix } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import axios from 'axios';
import { FunctionComponent, ReactElement, Ref, forwardRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return (
        <>
            <Slide direction="down" ref={ref} {...props} />
        </>
    )
});
interface open {
    Search: {
        openSearch: boolean,
        setOpenSearch: (e: boolean) => void,
    }
};
interface datatypes {
    id: number,
    name: string,
    price: number,
    categories: string,
    rating: number,
    imgURL: string,
};
export const Search: FunctionComponent<open> = (props) => {
    const [input, setInput] = useState<string>('');
    const [search, setDataSearch] = useState<datatypes[]>([]);
    const [list, setList] = useState<datatypes[]>([]);
    const Valuesearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value.toLowerCase();
        setList(() => search.filter((item: datatypes) => {
            return item.name.toLowerCase().indexOf(value) !== -1 && value.trim().length >= 3
        }));
        setInput(value)
    };
    const data = async () => {
        const { PopularProduct } = await (await axios.get('/data/popularProduct.json')).data
        setDataSearch(PopularProduct)
    };
    useEffect(() => {
        data()
    }, []);
    return (
        <>
            <Dialog
                maxWidth={'md'}
                onClose={() => props.Search.setOpenSearch(false)}
                open={props.Search.openSearch}
                TransitionComponent={Transition}
            >
                <div className="box-border relative top-3 right-3 ">
                    <FontAwesomeIcon icon={faXmark} size="lg" className="cursor-pointer p-[5px] opacity-50 active:bg-slate-300 active:bg-opacity-60 float-right " onClick={() => props.Search.setOpenSearch(false)} />
                </div>
                <div className=" w-full relative top-0 flex flex-row items-center space-x-2 container mx-auto p-4 box-border">
                    <FontAwesomeIcon icon={faSistrix} color="black" className=" opacity-30 box-border relative top-0 " />
                    <div className=" flex-1">
                        <input type="text" placeholder="Search..." className=" w-full h-10 focus:outline-none text-[#6d6b6ba2]" onChange={Valuesearch} />
                        <div className=' relative top-[-5px] border-solid border-b border-t-0 border-[#666666]/30' />
                    </div>
                </div>
                <div className=" grid grid-flow-row container mx-auto p-4 pl-8 box-border space-y-3 w-[500px] h-[400px]">
                    {input.length >= 3 ?
                        list.map((item: datatypes) => (
                            <div key={item.id}>
                                <Link to={`/product/${item.categories}/${item.name}`} state={{ product: item, status: 'toTop' }} className=" flex items-center gap-10 no-underline text-black hover:text-[#06e102] hover:bg-[#666666]/10">
                                    <div>
                                        <img src={item.imgURL} alt="" width={70} height={70} />
                                    </div>
                                    <div className=' break-words'>
                                        {item.name}
                                    </div>
                                    <div className=' text-[#06e102] font-semibold'>
                                        {`฿${item.price}`}
                                    </div>
                                </Link>
                            </div>
                        )) :
                        <div className="text-[#6d6b6ba2]/30 w-full flex justify-center pt-8 box-border">
                            การุณาใส่อย่างน้อย 3 ตัวอักษร
                        </div>
                    }
                </div>
            </Dialog>
        </>
    )
}