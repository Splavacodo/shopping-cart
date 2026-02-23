"use client";

import { useCart } from "../contexts/CartContext";

export default function Cart() {
    const { cart } = useCart();

    return (
        <main className="flex-1 flex flex-col font-sans items-center justify-center">
            <section>
                <div>{`Cart (${cart.length})`}</div>
            </section>
        </main>
    )
}
