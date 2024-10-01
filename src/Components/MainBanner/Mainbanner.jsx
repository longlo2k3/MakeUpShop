import { motion } from "framer-motion";
import ButtonLink from "../ButtonLink/ButtonLink";
import BannerImg from "../MainBanner/ImgSlide/banner.png";
import ImgSlide from "./ImgSlide/ImgSlide";
export default function Mainbanner() {
  const title = {
    subtitle:
      "The new lineup you'll swear by for dullness, dryness and breakouts.",
    detail:
      "Makeup can transform one's appearance, boosting self-confidence and making individuals feel more beautiful. " +
      "Makeup is a form of self-expression that allows individuals to enhance their natural beauty and boost their confidence. It can be a fun and creative way to experiment with different looks and styles.",
  };
  return (
    <div className="mx-auto xl:padding-primary w-full grid grid-cols-1 sm:grid-cols-2 py-20">
      <div className="flex flex-col sm:max-w-[500px] max-w-full gap-6 ">
        <motion.p
          className="text-4xl font-mono font-semibold "
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
          {title.subtitle}
        </motion.p>
        <motion.p
          className="text-sm font-base"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
          viewport={{ once: true }}
        >
          {title.detail}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
          viewport={{ once: true }}
        >
          <ButtonLink path="/about" text="see more" />
        </motion.div>
      </div>
      <div className="relative w-3/4 lg:mt-0 mt-5">
        <ImgSlide BannerImg={BannerImg} price="24.99" detail="per piece 30ml" />
      </div>
    </div>
  );
}
