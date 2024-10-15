import { useContext } from "react";
import ExtraBanner from "../Components/ExtraBanner/ExtraBanner";
import { SvContext } from "../Components/SeviceContext/SeviceContext";
import ProductWish from "../Components/ProductWish/ProductWish";

const Wishlist = () => {
  const { wishlist } = useContext(SvContext);
  return (
    <div className="container mx-auto lg:padding-primary my-5">
      <ExtraBanner title={"YOUR WISHLIST"} />
      <div className="my-10">
        {Array.from(new Set(wishlist.map((item) => item.id))).map((id) => {
          const item = wishlist.find((item) => item.id === id);
          return (
            <ProductWish
              key={id}
              id={id}
              name={item.name}
              brand={item.brand}
              imgUrl={item.imgUrl}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
