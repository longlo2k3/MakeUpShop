import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ButtonLink({ path, text, isActive, isWfull }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.4,
        type: "spring",
        stiffness: 120,
        damping: 10,
      }}
      viewport={{ once: true }}
    >
      <Link to={path} className="w-fit">
        <button
          className={`w-fit font-krona text-sm  transition-all duration-[0.4s]
              hover:scale-110 text-black font-bold px-14 py-3 rounded-3xl ${
                isActive ? "bg-black text-white" : "bg-yellow text-black"
              } ${isWfull ? "w-full" : ""}`}
        >
          {text}
        </button>
      </Link>
    </motion.div>
  );
}
