import Logolink from "./Logolink/Logolink";
import CartIconNavBar from "../Icons/CartIconNavBar";
import HeartIconNavBar from "../Icons/HeartIconNavBar";
import NavLink from "../Navlink/NavLinks";
import { motion } from "framer-motion";

export default function Navbar() {
  const styles =
    "w-fit rounded-full bg-yellow hover:cursor-pointer hover:text-yellow hover:bg-dark hover:scale-125";
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
        </div>
        <div className={styles}>
          <CartIconNavBar />
        </div>
      </div>
    </motion.nav>
  );
}
