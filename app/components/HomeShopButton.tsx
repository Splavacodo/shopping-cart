import Link from "next/link";

export default function HomeShopButton() {
    return (
        <button className="py-2 px-4 bg-foreground text-background rounded-md transition-colors duration-250 hover:bg-background hover:text-foreground border border-foreground">
            <Link href="/shop">
                Explore shop
            </Link>
        </button>
    )
}
