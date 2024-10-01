import { motion } from "framer-motion";

const TitleBanner = ({ width, text }) => {
  return (
    <>
      <motion.p
        //   text-3xl max-w-[250px] font-mono font-semibold
        className={`text-3xl max-w-[${width}] font-mono font-semibold`}
        initial={{ opacity: 0, x: -100 }}
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
        {text}
        {/* Natural and ecological beauty solutions for you! */}
      </motion.p>
    </>
  );
};

export default TitleBanner;
