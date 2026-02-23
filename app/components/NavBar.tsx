import NavStoreHeader from "./NavStoreHeader";
import ShopNavLink from "./ShopNavLink";
import CartNavLink from "./CartNavLink";

export default function NavBar() {
    return (
        <nav className="flex justify-around items-center border-b-zinc-700 border-b-1 font-sans">
            <ShopNavLink/>
            <NavStoreHeader/>
            <CartNavLink/>
        </nav>
    )
}
