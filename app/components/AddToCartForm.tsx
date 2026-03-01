"use client";

import { useCart } from "../contexts/CartContext";

export default function AddToCartForm({ productId, productTitle, productPrice, productImgURL }: { productId: string, productTitle: string, productPrice: number, productImgURL: string}) {
    const { addItem } = useCart();

    function handleAddToCart(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget.closest("form");
        const qty: number = Number(new FormData(form!).get("prod-qty"));

        if (!qty)
            return;

        addItem({
            id: productId,
            title: productTitle,
            price: productPrice,
            imgURL: productImgURL,
            quantity: qty
        });
    }

    return (
        <form className="flex justify-center items-center gap-4" onSubmit={handleAddToCart}>
            <label htmlFor="prod-qty" className="text-sm">Qty:</label>
            <input id="prod-qty" name="prod-qty" min={1} max={5} type="number" placeholder="1" className="rounded-sm text-sm border border-zinc-700 p-1" required></input>
            <button type="submit" className="rounded-sm bg-foreground text-background py-2 px-4 hover:cursor-pointer">Add to cart</button>
        </form>
    );
}
