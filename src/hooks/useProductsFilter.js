import { useState, useEffect, useContext } from "react";
import { SvContext } from "../Components/SeviceContext/SeviceContext";
import useGetProducts from "../hooks/useGetProducts";

const useProductFilter = () => {
  const products = useGetProducts();
  const { minPrice, maxPrice, category } = useContext(SvContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [productsPerPage, setProductsPerPage] = useState(9);
  useEffect(() => {
    let isMounted = true;
    const filtered = products.filter(
      (product) => product.product_type === category.trim()
    );
    if (isMounted) {
      setFilteredProducts(filtered);
    }
    return () => {
      isMounted = false;
    };
  }, [products, category]);

  useEffect(() => {
    let isMounted = true;
    const filtered = products.filter(
      (product) =>
        product.price >= Number(minPrice) && product.price <= Number(maxPrice)
    );
    if (isMounted) {
      setFilteredProducts(filtered);
    }
    return () => {
      isMounted = false;
    };
  }, [products, minPrice, maxPrice]);

  return {
    filteredProducts,
    setFilteredProducts,
  };
};

export default useProductFilter;
