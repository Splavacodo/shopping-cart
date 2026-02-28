import ProductCard from "./ProductCard";

export default async function ProductList() {
    const products: Array<Record<string, string>> = await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => data);

    return (
        <div className="grid gap-8 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
            {products.map(product => 
                <ProductCard
                    key={product.id}
                    productId={product.id}
                    productImgURL={product.image}
                    productTitle={product.title}
                    productPrice={product.price}
                />
            )}
        </div>
    )
}
