import { createContext, useState } from "react";

// Tạo context
export const SvContext = createContext();

export const SeviceContext = ({ children }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(45);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("All");
  const [number, setNumber] = useState(9);
  const [sort, setSort] = useState("Low to High");
  return (
    <SvContext.Provider
      value={{
        minPrice,
        maxPrice,
        category,
        brand,
        number,
        sort,
        setMinPrice,
        setMaxPrice,
        setCategory,
        setBrand,
        setNumber,
        setSort,
      }}
    >
      {children}
    </SvContext.Provider>
  );
};

export default SeviceContext;
