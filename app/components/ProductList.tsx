import ProductCard from "./ProductCard";

export default async function ProductList() {
    const products = await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => data);

    return (
        <div className="grid gap-8 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
            <ProductCard
                productId={products[0].id}
                productImgURL={products[0].image}
                productTitle={products[0].title}
                productPrice={products[0].price}
            />
        </div>
    )
}
