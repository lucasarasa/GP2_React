import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const emptyCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, emptyCart }}>
            {children}
        </CartContext.Provider>
    );
}
