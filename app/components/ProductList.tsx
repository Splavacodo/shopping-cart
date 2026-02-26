export default async function ProductList() {
    const products = await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => data);

    return (
        <div className="grid gap-8 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
            <div className="flex flex-col w-[300px] h-[400px] border-1 border-foreground">
                <div className="h-[300px] border-b-1 border-b-foreground">{products.length}</div>
                <div className="h-[25px] border-b-1 border-b-foreground"></div>
                <div className="h-[25px] border-b-1 border-b-foreground"></div>
                <div className="h-[50px] flex justify-center items-center gap-2">
                    <div className="border-1 border-foreground">Qty</div>
                    <div className="border-1 border-foreground">Add to cart</div>
                </div>
            </div>

            <div className="flex flex-col w-[300px] h-[400px] border-1 border-foreground">
                <div className="h-[300px] border-b-1 border-b-foreground"></div>
                <div className="h-[25px] border-b-1 border-b-foreground"></div>
                <div className="h-[25px] border-b-1 border-b-foreground"></div>
                <div className="h-[50px] flex justify-center items-center gap-2">
                    <div className="border-1 border-foreground">Qty</div>
                    <div className="border-1 border-foreground">Add to cart</div>
                </div>
            </div>

            <div className="flex flex-col w-[300px] h-[400px] border-1 border-foreground">
                <div className="h-[300px] border-b-1 border-b-foreground"></div>
                <div className="h-[25px] border-b-1 border-b-foreground"></div>
                <div className="h-[25px] border-b-1 border-b-foreground"></div>
                <div className="h-[50px] flex justify-center items-center gap-2">
                    <div className="border-1 border-foreground">Qty</div>
                    <div className="border-1 border-foreground">Add to cart</div>
                </div>
            </div>

            <div className="flex flex-col w-[300px] h-[400px] border-1 border-foreground">
                <div className="h-[300px] border-b-1 border-b-foreground"></div>
                <div className="h-[25px] border-b-1 border-b-foreground"></div>
                <div className="h-[25px] border-b-1 border-b-foreground"></div>
                <div className="h-[50px] flex justify-center items-center gap-2">
                    <div className="border-1 border-foreground">Qty</div>
                    <div className="border-1 border-foreground">Add to cart</div>
                </div>
            </div>
            
            <div className="flex flex-col w-[300px] h-[400px] border-1 border-foreground">
                <div className="h-[300px] border-b-1 border-b-foreground"></div>
                <div className="h-[25px] border-b-1 border-b-foreground"></div>
                <div className="h-[25px] border-b-1 border-b-foreground"></div>
                <div className="h-[50px] flex justify-center items-center gap-2">
                    <div className="border-1 border-foreground">Qty</div>
                    <div className="border-1 border-foreground">Add to cart</div>
                </div>
            </div>
        </div>
    )
}
