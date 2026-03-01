"use client";

import Image from "next/image";

import { useCart } from "../contexts/CartContext";

export default function Cart() {
    const { cart } = useCart();

    return (
        <main className="flex-1 flex flex-col font-sans items-center py-8">
            <section className="flex flex-col w-full max-w-5/10 gap-8">
                <header>
                    <h1 className="font-semibold text-xl">{`Cart (${cart.reduce((totalItems, product) => totalItems + product.quantity, 0)})`}</h1>
                </header>

                <ul className="flex flex-col gap-8">
                    {
                        cart.map(product => 
                            <li key={product.id} className="list-none flex gap-4 aspect-[5/1]">
                                <div className="relative h-full aspect-square">
                                    <Image
                                        src={product.imgURL}
                                        alt={"Image of " + product.title}
                                        fill={true}
                                        className="object-contain"
                                    />
                                </div>

                                <div className="flex-1 flex justify-between">
                                    <div className="flex flex-col gap-4">
                                        <div>{product.title}</div>
                                        <div>{`Price: $ ${product.price}`}</div>
                                        <input type="number" name="prod-qty" id="prod-qty" className="rounded-sm text-sm border border-zinc-700 p-2" value={product.quantity}/>
                                        <div className="font-semibold">{`Subtotal: $ ${product.price * product.quantity}`}</div>
                                    </div>

                                    <button className="mb-auto">Remove Button</button>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </section>
        </main>
    )
}
