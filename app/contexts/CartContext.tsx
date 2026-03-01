"use client";

import { createContext, useContext, useState } from "react";

interface Product {
    id: string,
    title: string,
    price: number,
    imgURL: string,
    quantity: number
}

interface CartContextType {
    cart: Array<Product>,
    addItem: (product: Product) => void,
    removeItem: (id: string) => void,
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode}) {
    const [cart, setCart] = useState<Array<Product>>([]); 

    function addItem(product: Product) {
        setCart(prevCart => {
            const matchingProduct = prevCart.find(cartProduct => cartProduct.id === product.id);

            if (matchingProduct)
                return prevCart.map(cartProduct => cartProduct.id === product.id ? { ...cartProduct, quantity: cartProduct.quantity + product.quantity } : cartProduct);

            return [...prevCart, {...product}];
        });
    }

    function removeItem(id: string) {
        setCart(cart.filter(cartProduct => cartProduct.id !== id));
    }

    return (
        <CartContext value={{cart, addItem, removeItem}}>
            {children}
        </CartContext>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === null)
        throw new Error('useCart must be used within a CartProvider');

    return context;
}
