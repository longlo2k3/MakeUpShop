import { useContext } from "react";
import ExtraBanner from "../Components/ExtraBanner/ExtraBanner";
import { SvContext } from "../Components/SeviceContext/SeviceContext";
import ProductWish from "../Components/ProductWish/ProductWish";
import Checkout from "../Components/Checkout";

const Wishlist = () => {
  const { wishlist } = useContext(SvContext);
  return (
    <div className="container mx-auto lg:padding-primary my-5">
      <ExtraBanner title={"YOUR WISHLIST"} />
      <div className="mx-auto my-10 flex flex-row justify-between gap-28">
        <div className="flex-1">
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
        <Checkout
          count={wishlist.reduce(
            (sum, item) => Number(sum) + Number(item.price),
            0
          )}
          text={"Buy now"}
          path={"/payment"}
        />
      </div>
    </div>
  );
};

export default Wishlist;
