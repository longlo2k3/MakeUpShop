import { useContext } from "react";
import { SvContext } from "../Components/SeviceContext/SeviceContext";
import ProductCart from "../Components/ProductCart";
import ExtraBanner from "../Components/ExtraBanner/ExtraBanner";

const Cart = () => {
  const { Cart, wishlist } = useContext(SvContext);

  return (
    <div className="container mx-auto lg:padding-primary my-5">
      <ExtraBanner title={"YOUR BAG"} />
      <div className="my-10">
        {Array.from(new Set(Cart.map((item) => item.id))).map((id) => (
          <ProductCart
            key={id}
            id={id}
            name={Cart.find((item) => item.id === id).name}
            brand={Cart.find((item) => item.id === id).brand}
            imgUrl={Cart.find((item) => item.id === id).imgUrl}
            price={Cart.find((item) => item.id === id).price}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
