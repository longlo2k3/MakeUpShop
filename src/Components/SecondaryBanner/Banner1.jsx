import { motion } from "framer-motion";
import ButtonLink from "../ButtonLink/ButtonLink";
import Banner from "../SecondaryBanner/Banner.png";
import TitleBanner from "../Banner/TitleBanner";
import MotionImg from "../Banner/MotionImg";

const Banner2 = () => {
  return (
    <>
      <TitleBanner
        width="250px"
        text="Natural and ecological beauty solutions for you!"
      />
      <ButtonLink path="/about" text="see more" />
      <div className="relative">
        <MotionImg>
          <img
            src={Banner}
            alt="img"
            className="m-auto relative -bottom-20 -left-1/4 img-shadow2 -z-20"
          />
        </MotionImg>

        <motion.div
          className="absolute 2xl:w-[200px] 2xl:h-[200px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] bg-yellow rounded-full z-10 bottom-[25%] -right-3 shadow-lg"
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
          <p className="lg:text-2xl  font-krona font-bold absolute top-4 right-3 leading-5">
            24.99 &euro;
            <br />
            <span className="text-sm font-normal mt-0">per set</span>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Banner2;
