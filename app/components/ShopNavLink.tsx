import Link from "next/link";

export default function ShopNavLink() {
    return (
        <Link className="border-b-2 border-b-transparent py-6 hover:cursor-pointer hover:border-b-foreground hover:border-b-2" href="/shop">
            Shop
        </Link>
    );
}
