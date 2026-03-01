"use client";

import Link from "next/link";
import Image from "next/image";

import { useCart } from "../contexts/CartContext";

export default function CartNavLink() {
    const { cart } = useCart();

    return (
        <Link className="flex items-center gap-2 border-b-2 border-b-transparent py-6 hover:border-b-foreground hover:border-b-2" href="/cart">
            <Image 
                className="invert"
                src="/cart-outline.svg"
                alt="shopping cart icon"
                width={20}
                height={20}/>
            {`Cart (${cart.reduce((totalItems, product) => totalItems + product.quantity, 0)})`}
        </Link>
    );
}
