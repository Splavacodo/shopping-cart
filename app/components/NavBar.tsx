"use client";

import { useCart } from "../contexts/CartContext";

export default function NavBar() {
    const { cart } = useCart();

    return (
        <nav className="flex justify-around items-center">
            <div>Shop</div>
            <div>Fake Store</div>
            <div>{`Cart (${cart.length})`}</div>
        </nav>
    )
}
