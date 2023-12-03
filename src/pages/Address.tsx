import { Breadcrumbs } from "./unities/Breadcrumbs"
import { Header } from "./unities/Header"
import { NavAccount } from "./unities/NavAccount"

export const Address = () => {
    return (
        <>
            <div className="relative bg-gray-scale-white w-full h-[1699px] overflow-hidden text-left text-base text-gray-scale-gray-600 font-caps-lock-small-caps-lock">
                <Header />
                <Breadcrumbs categoies={undefined} tltle={undefined} Detail={undefined} />
                <NavAccount/>
            </div>
        </>
    )
}