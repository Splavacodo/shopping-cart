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
    updateItemQty: (id: string, prodQty: number) => void
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

    function updateItemQty(id: string, prodQty: number) {
        if (prodQty === 0) {
            removeItem(id);
            return;
        }

        setCart(cart.map(cartProduct => {
            if (cartProduct.id === id)
                return {...cartProduct, quantity: prodQty};
            else
                return cartProduct;
        }));
    }

    return (
        <CartContext value={{cart, addItem, removeItem, updateItemQty}}>
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
