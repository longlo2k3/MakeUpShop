import { Link } from "react-router-dom";
import CartIcon from "../Icons/CartIcon";
import HeartIcon from "../Icons/HeartIcon";
import Price from "../Price";
import { motion } from "framer-motion";

const ProductCard = ({ id, name, brand, imgUrl, price }) => {
  return (
    <motion.div
      className="relative flex flex-col gap-2 pb-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.4,
        type: "spring",
        stiffness: 120,
        damping: 10,
      }}
      viewport={{ once: true }}
    >
      <Link
        className="flex flex-col align-center justify-center rounded-md mb-6 xl:mr-6 mr-2
        px-4 py-6 transform hover:scale-105 hover:shadow-sm transition delay-50 duration-300 ease-in-out "
        to={`/product/${id}`}
      >
        <div className="flex flex-1 flex-col justify-center mb-4">
          <img
            src={imgUrl}
            alt={name}
            className="mx-auto w-[250px] h-[350px] object-center object-contain"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-yellow font-mono text-sm lowercase">{brand}</p>

          <p className="mb-4 font-mono">
            {name.replace(/^(.{12}[^\s]*).*/, "$1")}
          </p>
          <Price price={price} />
        </div>
      </Link>
      <div className="absolute top-[77%] right-[15%] text-2xl text-gray-300">
        <CartIcon id={id} isIcon={true} />
      </div>
      <div className="absolute top-0 text-lg text-gray-300">
        <HeartIcon id={id} isIcon={true} />
      </div>
    </motion.div>
  );
};

export default ProductCard;
