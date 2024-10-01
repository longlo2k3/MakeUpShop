import Mainbanner from "../Components/MainBanner";
import TopProducts from "../Components/TopProducts";
import SecondaryBanner from "../Components/SecondaryBanner";
import UniqueSellingPoint from "../Components/UniqueSellingPoint";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Mainbanner />
      <TopProducts title={"Top Products"} />
      <SecondaryBanner />
      <TopProducts title={"Our Best"} />
      <UniqueSellingPoint />
    </div>
  );
};

export default Home;
