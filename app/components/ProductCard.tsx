import Image from "next/image";
import React from "react";

export default function ProductCard({ productImgURL, productTitle, productPrice}: { productImgURL: string, productTitle: string, productPrice: string}) {
    function handleAddToCart(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
    }

    return (
        <div className="flex flex-col w-[300px] min-h-[400px] border border-zinc-700 rounded-lg p-4 gap-2">
            <div className="h-3/4 rounded-lg relative overflow-hidden">
                <Image
                    src={productImgURL}
                    alt={productTitle + " image"}
                    fill={true}
                    className="object-contain"
                />
            </div>
            <div className="text-foreground text-sm">{productTitle}</div>
            <div className="text-foreground text-sm">{"$ " + productPrice}</div>
            <form className="flex justify-center items-center gap-4">
                <label htmlFor="prod-qty" className="text-sm">Qty:</label>
                <input id="prod-qty" min={1} max={5} type="number" className="rounded-sm text-sm border border-zinc-700 p-1"></input>
                <button className="rounded-sm bg-foreground text-background py-2 px-4 hover:cursor-pointer">Add to cart</button>
            </form>
        </div>
    )
}
