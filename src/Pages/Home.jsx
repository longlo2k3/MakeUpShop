import Mainbanner from "../Components/MainBanner";
import TopProducts from "../Components/TopProducts";
import SecondaryBanner from "../Components/SecondaryBanner";
import UniqueSellingPoint from "../Components/UniqueSellingPoint";
import ThirdBanner from "../Components/ThirdBanner";
import Benefits from "../Components/Benefits";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Mainbanner />
      <TopProducts title={"Top Products"} />
      <SecondaryBanner />
      <TopProducts title={"Our Best"} />
      <div className="relative top-32 lg:padding-primary">
        <ThirdBanner />
      </div>
      <UniqueSellingPoint />
      <Benefits />
    </div>
  );
};

export default Home;
