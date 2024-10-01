import { motion } from "framer-motion";

const MotionImg = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.4,
        type: "spring",
        stiffness: 120,
        damping: 10,
      }}
      viewport={{ once: true }}
      className="relative z-20"
    >
      {children}
    </motion.div>
  );
};

export default MotionImg;
