import axios from "axios";
import { createContext, useContext, useState } from "react";

// context CartShopping
interface Provider {
    children: JSX.Element
};

interface dataTypesContext {
    setCartitems: (props: datatypesCart[]) => void;
    addTocart: (props: datatypesProduct) => void;
    increaseCartQuantity: (pid: number, price: number) => void;
    decreaseCartQuantity: (id: number, price: number) => void;
    removeCartItem: (id: number) => void;
    removeCartItemAll: (removeAll: boolean) => void;
    cartItems: datatypesCart[],
    setFavoritetItem: (props: datatypesCart[]) => void;
    addFavorite: (props: datatypesProduct) => void;
    removeFavoriteItem: (id: number) => void;
    removeFavoriteItemAll: (removeAll: boolean) => void;
    favoriteItem: datatypesCart[]
};

// Favorite
// context FavoriteShopping

interface datatypesProduct {
    id: number,
    name: string,
    price: number,
    categories: string,
    rating: number,
    imgURL: string,
    uid: number,
    shoppingHanding: number,
    createdAt: string,
    updatedAt: string,
};
interface datatypesCart {
    id: number,
    name: string,
    price: number,
    quantity: number,
    categories: string,
    rating: number,
    imgURL: string,
    pid: number,
    uid: number,
    shoppingHanding: number,
    createdAt: string,
    updatedAt: string,
};
export const CartContext = createContext<dataTypesContext>({} as dataTypesContext)
export const CartContextProviders = () => {
    return useContext(CartContext);
};
export const CartProvider = ({ children }: Provider) => {
    const [cartItems, setCartitems] = useState<datatypesCart[]>([]);

    const addTocart = async (prop: datatypesProduct) => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/cartAndFavorite/addTocart',
            data: {
                id: prop.id,
                name: prop.name,
                price: prop.price,
                categories: prop.categories,
                rating: prop.rating,
                imgURL: prop.imgURL,
                uid: prop.uid,
            }
        }).then((res) => {
            setCartitems(res.data);
        })
    }
    const increaseCartQuantity = async (pid: number, price: number) => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/cartAndFavorite/increase',
            data: { pid: pid, price: price }
        }).then((res) => {
            setCartitems(res.data);
        })
    }
    const decreaseCartQuantity = async (pid: number, price: number) => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/cartAndFavorite/decrease',
            data: { pid: pid, price: price }
        }).then((res) => setCartitems(res.data))
    }

    const removeCartItem = async (id: number) => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/cartAndFavorite/remove',
            data: { id: id }
        }).then((res) => setCartitems(res.data));
    }

    const removeCartItemAll = async (check: boolean) => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/cartAndFavorite/removeAll',
            data: { check: check }
        }).then((res) => setCartitems(res.data))
    }

    // Favorite
    const [favoriteItem, setFavoritetItem] = useState<datatypesCart[]>([]);

    const addFavorite = async (prop: datatypesProduct) => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/cartAndFavorite/addFavorite',
            data: {
                id: prop.id,
                name: prop.name,
                price: prop.price,
                categories: prop.categories,
                rating: prop.rating,
                imgURL: prop.imgURL,
                uid: prop.uid,
            }
        }).then((res) => {
            setFavoritetItem(res.data);
        })
    }

    const removeFavoriteItem = async (id: number) => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/cartAndFavorite/removeFavorite',
            data: { id: id }
        }).then((res) => setFavoritetItem(res.data));
    }

    const removeFavoriteItemAll = async (check: boolean) => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/cartAndFavorite/removeAllFavorite',
            data: { check: check }
        }).then((res) => setFavoritetItem(res.data))
    }

    return (
        <CartContext.Provider value={{
            setCartitems,
            addTocart,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeCartItem,
            removeCartItemAll,
            setFavoritetItem,
            addFavorite,
            removeFavoriteItem,
            removeFavoriteItemAll,
            cartItems,
            favoriteItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}