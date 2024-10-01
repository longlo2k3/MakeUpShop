import { motion } from "framer-motion";

const SectionTitle = ({ text }) => {
  return (
    <>
      <motion.h2
        className="text-3xl font-base font-bold mb-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          type: "spring",
          stiffness: 120,
          damping: 10,
        }}
      >
        {text}
      </motion.h2>
    </>
  );
};

export default SectionTitle;
