import PaymentProcess from "../Components/PaymentProcess/PaymentProcess";
import Checkout from "../Components/Checkout/Checkout";
import { SvContext } from "../Components/SeviceContext/SeviceContext";
import { useContext } from "react";
import ProductCart from "../Components/ProductCart";
import { Button } from "@mui/material";

const Payment = () => {
  const { Cart, wishlist } = useContext(SvContext);
  return (
    <div
      className="container mx-auto py-5 lg:padding-primary bg-gray-100 flex flex-row justify-center "
      // style={{ maxHeight: "calc(100vh)" }}
    >
      <div className="flex-1">
        <PaymentProcess />
      </div>
      <div
        className="mx-3 bg-white h-fit overflow-y-auto"
        style={{ maxHeight: "calc(130vh)" }}
      >
        <div className="flex-1 text-xs flex flex-col gap-1 max-w-[400px] border-b-8 border-solid border-gray-100">
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
        <div className="p-2 h-fit">
          <Checkout
            isBg={true}
            count={Cart.reduce(
              (sum, item) => Number(sum) + Number(item.price),
              0
            )}
            text={"Checkout"}
            path={"/payment"}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
