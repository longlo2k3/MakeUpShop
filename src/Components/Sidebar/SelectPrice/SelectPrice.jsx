import { SvContext } from "../../SeviceContext/SeviceContext";
import { useContext, useState } from "react";

const SelectPrice = () => {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } =
    useContext(SvContext);

  const handleMinChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div className="container my-20 p-4 bg-gray-100">
      <p className="font-bold mb-4">Select price</p>
      <div className="flex flex-row justify-between items-center gap-2 ">
        <input
          type="text"
          className="w-[50px] focus:outline-none focus:ring-0 focus:border-none text-center rounded-lg"
          value={minPrice}
          onChange={handleMinChange}
        />
        <hr className="flex-1 border-t-yellow border-2" />
        <input
          type="text"
          className="w-[50px] focus:outline-none focus:ring-0 focus:border-none text-center rounded-lg"
          value={maxPrice}
          onChange={handleMaxChange}
        />
      </div>
      <div className="flex flex-row justify-between items-center gap-2 text-gray-600 text-[14px] mt-2 mx-2">
        <p>min</p>
        <p>max</p>
      </div>
    </div>
  );
};

export default SelectPrice;
