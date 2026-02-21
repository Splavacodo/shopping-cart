"use client";

import { useCart } from "../contexts/CartContext";
import NavStoreHeader from "./NavStoreHeader";
import ShopNavLink from "./ShopNavLink";

export default function NavBar() {
    const { cart } = useCart();

    return (
        <nav className="flex justify-around items-center border-b-zinc-700 border-b-1 font-sans">
            <ShopNavLink/>
            <NavStoreHeader/>
            <div>{`Cart (${cart.length})`}</div>
        </nav>
    )
}
