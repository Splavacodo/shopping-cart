import Image from "next/image";

import AddToCartForm from "./AddToCartForm";

export default function ProductCard({ productId, productImgURL, productTitle, productPrice}: { productId: string, productImgURL: string, productTitle: string, productPrice: string}) {
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
            <AddToCartForm
                productId={productId}
                productTitle={productTitle}
                productPrice={Number(productPrice)}
            />
        </div>
    )
}
