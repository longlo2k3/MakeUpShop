import React from "react";
import { motion } from "framer-motion";
import BenefitsItem from "../BenefitsItem";

const benefits = [
  {
    title: "Delivery",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora repellendus excepturi",
  },
  {
    title: "Products",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  },
  {
    title: "Payments",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora repellendus excepturi, consequatur sed inventore ut",
  },
];

const Benefits = ({ isActive }) => (
  <motion.div
    className={`container my-20 mx-auto flex flex-col md:flex-row mb-20 space-y-8 md:space-y-0 md:space-x-8 sm:w-3/4 md:w-full ${
      isActive ? "" : "lg:padding-primary"
    }`}
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
    {benefits.map((item) => (
      <BenefitsItem key={item.title} item={item} />
    ))}
  </motion.div>
);

export default Benefits;
