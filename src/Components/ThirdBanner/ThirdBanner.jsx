import TitleBanner from "../Banner/TitleBanner";
import ButtonLink from "../ButtonLink/ButtonLink";
import banner from "./banner.png";
import MotionImg from "../Banner/MotionImg";

const ThirdBanner = () => {
  return (
    <div className="flex flex-row justify-around items-center bg-pink p-6 ">
      <div>
        <div className="mb-6">
          <span>
            <TitleBanner width="100px" text="Be natural," />
          </span>
          <span>
            <TitleBanner width="100px" text="be beautiful," />
          </span>
          <span className="">
            <TitleBanner width="100px" text="be you" />
          </span>
        </div>
        <ButtonLink path="/about" text="see more" isActive />
      </div>
      <div className="relative">
        <img
          src={banner}
          alt="img"
          className="relative m-auto p-10 h-[300px] img-shadow2 [200px] z-10"
        />
        <div className="absolute sm:w-[200px] sm:h-[200px] w-[100px] h-[100px] border-8 border-white top-2 sm:-right-10 right-0 z-1 rounded-full ">
          <p className="lg:text-2xl  font-krona font-bold absolute top-4 right-3">
            24.99 &euro;
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdBanner;
