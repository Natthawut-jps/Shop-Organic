import { createContext, useContext, useState } from "react";

// context
interface dataTypes {
    open: boolean,
    setOpens: (e: boolean) => void,
};
interface Provider {
    children: JSX.Element
};
export const CartContext = createContext<dataTypes>({
    open: false,
    setOpens: () => {}
});
export const CartContextProviders = () => {
    return useContext(CartContext);
}
export const CartProvider = ({ children }: Provider) => {
    const [open, setOpen] = useState<boolean>(false);
    const dataContext: dataTypes = {
        open: open,
        setOpens: setOpen,
    };
    return (
        <CartContext.Provider value={dataContext}>
            {children}
        </CartContext.Provider>
    )
};
