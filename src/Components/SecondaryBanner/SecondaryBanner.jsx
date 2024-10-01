import { motion } from "framer-motion";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";

const SecondaryBanner = () => {
  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 xl:padding-primary gap-5 py-10 ">
      <div className="relative col-span-1 flex flex-col gap-6 bg-gray-100 p-10 overflow-hidden rounded-lg">
        <Banner1 />
      </div>
      <div className="relative col-span-2 flex flex-col gap-6 bg-yellow p-10 rounded-lg">
        <Banner2 />
      </div>
    </div>
  );
};

export default SecondaryBanner;
