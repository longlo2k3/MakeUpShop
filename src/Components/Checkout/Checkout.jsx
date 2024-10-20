import { useState } from "react";
import ButtonLink from "../ButtonLink/ButtonLink";
import PropType from "prop-types";
import PaymentMethod from "../PaymentMethod";
import { div } from "framer-motion/client";

const Checkout = ({ count, text, path, isBg }) => {
  const [shipping, setShipping] = useState(0);
  return (
    <div>
      <div
        className={`font-krona flex flex-col gap-4 px-10 py-5 h-fit ${
          isBg ? "bg-white" : " bg-gray-100"
        }`}
      >
        <p className="text-2xl font-bold">ORDER SUMMARY</p>
        <div className="flex flex-row justify-between items-center">
          <p>Subtotol</p>
          <p>{(+count).toFixed(2)} &euro;</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p>Estimoted Shipping</p>
          <p>{(+count * +shipping).toFixed(2)} &euro;</p>
        </div>
        <div className="flex flex-row justify-between items-center font-bold">
          <p>Estimoted totol</p>
          <p>{(count - (count * shipping) / 100).toFixed(2)} &euro;</p>
        </div>
        <div className="text-center">
          <ButtonLink path={path} text={text} isActive={true} isWfull={true} />
        </div>
      </div>
      <PaymentMethod />
    </div>
  );
};

Checkout.PropType = {
  count: PropType.number.isRequired,
};

export default Checkout;
