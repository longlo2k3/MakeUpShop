import useProductFilter from "./useProductsFilter";
import { useContext, useState, useEffect } from "react";
import { SvContext } from "../Components/SeviceContext/SeviceContext";
import useGetProducts from "../hooks/useGetProducts";

const useSortProduct = () => {
  const products = useGetProducts();
  const { number, sort, brand } = useContext(SvContext);
  const { filteredProducts, setFilteredProducts } = useProductFilter();

  const [page, setPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  //   const productsPerPage = 9;
  useEffect(() => {
    setProductsPerPage(number);
  }, [number]);

  useEffect(() => {
    let filtered = [...filteredProducts];
    if (sort === "Low to High") {
      filtered.sort((a, b) => a.price - b.price);
    } else {
      filtered.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(filtered);
  }, [sort]);

  useEffect(() => {
    if (brand === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.brand === brand);
      setFilteredProducts(filtered);
    }
  }, [brand, products]);

  const pages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };
  return {
    page,
    productsPerPage,
    pages,
    handleChange,
    filteredProducts,
  };
};

export default useSortProduct;
