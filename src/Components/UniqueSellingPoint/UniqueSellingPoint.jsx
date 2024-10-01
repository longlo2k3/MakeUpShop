import React from "react";
import { motion } from "framer-motion";

import bannerImg from "./img.jpg";

const UniqueSellingPoint = () => (
  <div className="bg-light-grey pt-20 mb-20">
    <div className="container mx-auto pt-20 pb-16 flex flex-col md:flex-row items-center">
      <motion.div
        className="mr-0 md:mr-4 mb-4 md:mb-0"
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
        <img
          src={bannerImg}
          alt="Tooth brush and a paste laying on top of a green leaf"
        />
      </motion.div>
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
        <h2 className="font-krona text-3xl mb-4">
          Clean code that you deserve
        </h2>
        <p className="text-sm mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          expedita saepe quae mollitia? Quam odio accusamus facere!
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          expedita saepe quae mollitia? Quam odio accusamus facere deleniti
          nostrum.
        </p>
      </motion.div>
    </div>
  </div>
);

export default UniqueSellingPoint;
