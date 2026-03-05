"use client";

import { useCart } from "../contexts/CartContext";
import CartProducts from "../components/CartProducts";
import CartCard from "../components/CartCard";

export default function Cart() {
    const { cart, removeItem, updateItemQty} = useCart();

    return (
        <main className="flex-1 flex flex-col font-sans items-center py-8">
            <section className="flex flex-col w-full max-w-5/10 gap-8">
                <header className="flex justify-between">
                    <h1 className="font-semibold text-xl">{`Cart (${cart.reduce((totalItems, product) => totalItems + product.quantity, 0)})`}</h1>
                    <div className="font-semibold text-xl">{`Total: $${(cart.reduce((totalPrice, product) => totalPrice + product.price * product.quantity, 0)).toFixed(2)}`}</div>
                </header>

                <CartProducts>
                    {
                        cart.map(product => 
                            <CartCard
                                key={product.id}
                                product={product}
                                removeProductHandler={removeItem}
                                updateProductHandler={updateItemQty}
                            />
                        )
                    }
                </CartProducts>
            </section>
        </main>
    )
}
