import Logolink from "./Logolink/Logolink"
import CartIcon from "../Icons/CartIcon"
import HeartIcon from "../Icons/HeartIcon"
import NavLink  from "../Navlink/NavLinks"
export default function Navbar() {
    const styles = "w-fit rounded-full bg-yellow hover:cursor-pointer hover:text-yellow hover:bg-dark hover:scale-125"
    return (
        <nav className="container mx-auto lg:padding-primary flex flex-row justify-between items-center py-5">
            <Logolink/>
                <div className="text-gray-800 font-krona">
                    <NavLink/>
                </div>
                <div className="w-fit text-xl  flex flex-row justify-center items-center md:gap-10 gap-5">
                    <div className={styles}>
                        <HeartIcon/>
                    </div>
                    <div className={styles}>
                        <CartIcon/>
                    </div>
                </div>
        </nav>
    )
}