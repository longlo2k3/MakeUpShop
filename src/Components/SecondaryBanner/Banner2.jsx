import Banner1 from "../SecondaryBanner/Banner1.png";
import ButtonLink from "../ButtonLink/ButtonLink";
import { motion } from "framer-motion";
import TitleBanner from "../Banner/TitleBanner";
import MotionImg from "../Banner/MotionImg";

const Banner2 = () => {
  return (
    <>
      <TitleBanner
        width="300px"
        text="Beauty has a purpose, and purpose is you. Let go!"
      />
      <ButtonLink path="/about" text="see more" isActive />
      <div className="relative">
        <MotionImg>
          <img
            src={Banner1}
            alt="img"
            className="m-auto w-1/2  relative img-shadow lg:top-8 top-1/3 z-20 "
          />
        </MotionImg>
        <motion.div
          className="absolute lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] w-[100px] h-[100px] bg-white rounded-full z-10 bottom-[40%] right-[10%] shadow-lg"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
          viewport={{ once: true }}
        >
          <p className="lg:text-2xl font-krona font-bold absolute lg:top-10 lg:right-20  top-1/3 right-0 leading-5">
            125.84 &euro;
            <br />
            <span className="text-sm font-normal mt-0">per set</span>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Banner2;
