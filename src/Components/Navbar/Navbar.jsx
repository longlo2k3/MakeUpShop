import Logolink from "./Logolink/Logolink";
import CartIconNavBar from "../Icons/CartIconNavBar";
import HeartIconNavBar from "../Icons/HeartIconNavBar";
import NavLink from "../Navlink/NavLinks";
import { motion } from "framer-motion";
import { SvContext } from "../SeviceContext/SeviceContext";
import { useContext } from "react";

export default function Navbar() {
  const { Cart, wishlist } = useContext(SvContext);
  const styles =
    "relative w-fit rounded-full bg-yellow hover:cursor-pointer hover:text-yellow hover:bg-dark hover:scale-125";
  return (
    <motion.nav
      className="container mx-auto xl:padding-primary flex flex-row justify-between items-center py-5"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.4,
        type: "spring",
        stiffness: 120,
        damping: 10,
      }}
    >
      <Logolink />
      <div className="text-gray-800 font-krona">
        <NavLink />
      </div>
      <div className="w-fit text-xl  flex flex-row justify-center items-center md:gap-10 gap-5">
        <div className={styles}>
          <HeartIconNavBar />
          <div className="font-krona absolute left-full bottom-[90%] text-sm text-white bg-red-500 rounded-full w-4 h-4 flex justify-center items-center">
            {wishlist.length}
          </div>
        </div>
        <div className={styles}>
          <CartIconNavBar></CartIconNavBar>
          <div className="font-krona absolute left-full bottom-[90%] text-sm text-white bg-red-500 rounded-full w-4 h-4 flex justify-center items-center">
            {Cart.length}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
