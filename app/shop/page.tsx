import { Suspense } from "react";

import LoadingProductList from "../components/LoadingProductList";
import ProductList from "../components/ProductList";

export default async function Shop() {
    return (
        <main className="flex-1 flex flex-col items-center font-sans py-8">
            <section className="flex flex-col w-full max-w-8/10 gap-8">
                <header>
                    <h1 className="font-semibold text-xl">Shop Products</h1>
                </header>
                <LoadingProductList/>

                {/* <Suspense fallback={<LoadingProductList/>}>
                    <ProductList/>
                </Suspense> */}
                
            </section>
        </main>
    );
}
