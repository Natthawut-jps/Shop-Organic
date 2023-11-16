import { createContext, useContext, useState } from "react";

// context CartShopping
interface Provider {
    children: JSX.Element
};
interface increaseCartQuantityType {
    id: number,
    name: string,
    price: number,
    imgURL: string,
};
interface dataTypes {
    getItemQuantityCart: (id: number) => void;
    increaseCartQuantity: (props: increaseCartQuantityType) => void;
    decreaseCartQuantity: (id: number) => void;
    removeCartItem: (id: number) => void;
    removeCartItemAll: (removeAll: boolean) => void;
    cartItem: setCart[],
    getItemQuantityFavorite: (id: number) => void;
    increaseFavoriteQuantity: (props: increaseFavoriteQuantityType) => void;
    decreaseFavoriteQuantity: (id: number) => void;
    removeFavoriteItem: (id: number) => void;
    removeFavoriteItemAll: (removeAll: boolean) => void;
    addFavorite: (id: number) => void;
    favItem: number[],
    favoriteItem: setFavorite[]
};
interface setCart {
    id: number,
    name: string,
    price: number,
    quantity: number,
    imgURL: string,
};
// Favorite
// context FavoriteShopping
interface increaseFavoriteQuantityType {
    id: number,
    name: string,
    price: number,
    imgURL: string,
};
interface setFavorite {
    id: number,
    name: string,
    price: number,
    quantity: number,
    imgURL: string,
};
export const CartContext = createContext<dataTypes>({} as dataTypes)
export const CartContextProviders = () => {
    return useContext(CartContext);
};
export const CartProvider = ({ children }: Provider) => {
    const [cartItem, setCartItem] = useState<setCart[]>([]);

    const getItemQuantityCart = (id: number) => {
        return cartItem.find(item => item.id === id)?.quantity || 0
    };

    const increaseCartQuantity = (prop: increaseCartQuantityType) => {
        setCartItem(curr => {
            if (curr.find(item => item.id === prop.id) == null) {
                return [...curr, { id: prop.id, name: prop.name, price: prop.price, quantity: 1, imgURL: prop.imgURL }]
            } else {
                return curr.map((item) => {
                    if (item.id === prop.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseCartQuantity = (id: number) => {
        setCartItem(curr => {
            if (curr.find(item => item.id === id)?.quantity === 1) {
                return curr.filter(item => item)
            } else {
                return curr.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeCartItem = (id: number) => {
        setCartItem(currItem => {
            return currItem.filter(item => item.id !== id)
        })
    }

    const removeCartItemAll = (removeAll: boolean) => {
        if (removeAll) {
            setCartItem([])
        }
    }

    // Favorite
    const [favoriteItem, setFavoritetItem] = useState<setFavorite[]>([]);
    const [favItem, setFavItem] = useState<number[]>([]);

    const getItemQuantityFavorite = (id: number) => {
        return favoriteItem.find(item => item.id === id)?.quantity || 0
    };
    const addFavorite = (id: number) => {
        setFavItem(curr => {
            if(curr.find(item => item === id) == null){
                return [...curr, id]
            } else {
               return curr.filter((item) => item !== id)
            }
        })
    };

    const increaseFavoriteQuantity = (prop: increaseFavoriteQuantityType) => {
        setFavoritetItem(curr => {
            if (curr.find(item => item.id === prop.id) == null) {
                return [...curr, { id: prop.id, name: prop.name, price: prop.price, quantity: 1, imgURL: prop.imgURL }]
            } else {
                return curr.map((item) => {
                    if (item.id === prop.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    const decreaseFavoriteQuantity = (id: number) => {
        setFavoritetItem(curr => {
            if (curr.find(item => item.id === id)?.quantity === 1) {
                return curr.filter(item => item)
            } else {
                return curr.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFavoriteItem = (id: number) => {
        setFavoritetItem(currItem => {
            return currItem.filter(item => item.id !== id)
        })
    }

    const removeFavoriteItemAll = (removeAll: boolean) => {
        if (removeAll) {
            setFavoritetItem([])
            setFavItem([])
        }
    }

    return (
        <CartContext.Provider value={{
            getItemQuantityCart,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeCartItem,
            removeCartItemAll,
            cartItem,
            getItemQuantityFavorite,
            increaseFavoriteQuantity,
            decreaseFavoriteQuantity,
            removeFavoriteItem,
            removeFavoriteItemAll,
            addFavorite,
            favItem,
            favoriteItem,
        }}>
            {children}
        </CartContext.Provider>
    )
};