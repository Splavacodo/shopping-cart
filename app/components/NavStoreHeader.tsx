import Link from "next/link";

export default function NavStoreHeader() { 
    return (
        <Link href="/">
            <h1 className="font-semibold text-xl text-foreground">
                FakeStore
            </h1>
        </Link>
    )
}
