import Image from "next/image";

interface Product {
    id: string,
    title: string,
    price: number,
    imgURL: string,
    quantity: number
}

export default function CartCard({ product, removeProductHandler, updateProductHandler }: 
    {
        product: Product, 
        removeProductHandler: (id: string) => void 
        updateProductHandler: (prodQty: number) => void
    }
) {
    return (
        <li key={product.id} className="list-none flex gap-4 h-48">
            <Image
                src={product.imgURL}
                alt={"Image of " + product.title}
                width={175}
                height={175}
                className="object-contain"
            />

            <div className="flex-1 flex justify-between">
                <div className="flex flex-col gap-4">
                    <div>{product.title}</div>
                    <div>{`Price: $${product.price}`}</div>
                    <input type="number" name="prod-qty" id="prod-qty" className="rounded-sm text-sm border border-zinc-700 p-2 mb-auto w-20" value={product.quantity}/>
                    <div className="font-semibold">{`Subtotal: $${product.price * product.quantity}`}</div>
                </div>

                <button className="flex items-center gap-2 mb-auto hover:cursor-pointer text-accent" onClick={() => removeProductHandler(product.id)}>
                    <Image
                        src={"/trash-can-outline.svg"}
                        alt={"trash outline icon"}
                        width={30}
                        height={30}
                        className="filter-[brightness(0)_saturate(100%)_invert(65%)_sepia(24%)_saturate(6513%)_hue-rotate(318deg)_brightness(80%)_contrast(123%)]"
                    />
                    Remove
                </button>
            </div>
        </li>
    )
}
