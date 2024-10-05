import useGetProducts from "../hooks/useGetProducts";
import ProductCard from "../Components/ProductCard";
import Loader from "../Components/Loader";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ThirdBanner from "../Components/ThirdBanner";
import SecondaryBanner from "../Components/SecondaryBanner";
import Benefits from "../Components/Benefits";

const Products = () => {
  const products = useGetProducts();
  // products.sort((a, b) => b.price - a.price);
  const [page, setPage] = useState(1);
  const productsPerPage = 9;
  const pages = Math.ceil(products.length / productsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div className="conatiner lg:padding-primary mt-10">
        <ThirdBanner />
      </div>
      {products.length === 0 ? (
        <Loader classes="my-4" />
      ) : (
        <div className="flex flex-col items-center justify-center mb-10 my-20">
          <div className="container grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 lg:padding-primary">
            {products
              .slice((page - 1) * productsPerPage, page * productsPerPage)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  imgUrl={product.api_featured_image}
                  price={product.price}
                />
              ))}
          </div>
          <Stack spacing={2}>
            <Pagination
              count={pages}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Stack>
        </div>
      )}
      <SecondaryBanner />
      <Benefits />
    </div>
  );
};

export default Products;
