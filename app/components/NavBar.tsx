"use client";

import { useCart } from "../contexts/CartContext";
import NavStoreHeader from "./NavStoreHeader";

export default function NavBar() {
    const { cart } = useCart();

    return (
        <nav className="flex justify-around items-center py-6 border-b-zinc-700 border-b-1 font-sans">
            <div>Shop</div>
            <NavStoreHeader/>
            <div>{`Cart (${cart.length})`}</div>
        </nav>
    )
}
