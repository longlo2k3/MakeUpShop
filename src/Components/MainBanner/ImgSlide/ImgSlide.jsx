import { motion } from "framer-motion";
export default function ImgSlide({ BannerImg, price, detail }) {
  return (
    <>
      <motion.img
        src={BannerImg}
        alt="banner"
        className="w-full object-cover object-center img-shadow2 "
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          type: "spring",
          stiffness: 120,
          damping: 10,
        }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute 2xl:min-w-[300px] 2xl:min-h-[300px] min-w-[200px] min-h-[200px] bg-yellow rounded-full -z-10 right-[-30%] top-[-10%] shadow-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          type: "spring",
          stiffness: 120,
          damping: 10,
        }}
      >
        <p className="text-2xl font-krona font-bold absolute lg:top-14 lg:right-0 top-2 -right-3 leading-5 ">
          {/* 24.99$ */}
          {price} &euro;
          <br />
          <span className="text-sm font-normal mt-0">{detail}</span>
        </p>
      </motion.div>
    </>
  );
}
