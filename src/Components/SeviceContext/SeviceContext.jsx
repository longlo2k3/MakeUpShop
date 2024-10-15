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
  const [Cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [count, setCount] = useState(1);
  return (
    <SvContext.Provider
      value={{
        minPrice,
        maxPrice,
        category,
        brand,
        number,
        sort,
        Cart,
        wishlist,
        count,
        setMinPrice,
        setMaxPrice,
        setCategory,
        setBrand,
        setNumber,
        setSort,
        setCart,
        setWishlist,
        setCount,
      }}
    >
      {children}
    </SvContext.Provider>
  );
};

export default SeviceContext;
