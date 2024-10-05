import React from "react";

const CartButton = ({ children }) => {
  return (
    <button className="inline-block rounded-full font-bold font-krona text-xs bg-yellow py-3 px-6 transition-all duration-[0.4s] hover:scale-125">
      add to basket {children}
    </button>
  );
};

export default CartButton;
