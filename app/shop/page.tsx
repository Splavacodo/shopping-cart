export default function Shop() {
    return (
        <main className="flex-1 flex flex-col items-center font-sans py-8">
            <section className="flex flex-col w-full max-w-8/10 gap-8">
                <header>
                    <h1 className="font-semibold text-xl">Shop Products</h1>
                </header>

                <div className="grid gap-8 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
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
            </section>
        </main>
    );
}
