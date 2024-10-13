// import useProductFilter from "../hooks/useProductsFilter";
import ProductCard from "../Components/ProductCard";
import Loader from "../Components/Loader";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ThirdBanner from "../Components/ThirdBanner";
import SecondaryBanner from "../Components/SecondaryBanner";
import Benefits from "../Components/Benefits";
import Sidebar from "../Components/Sidebar/";
import SortProduct from "../Components/SortProduct";
import useSortProduct from "../hooks/useSortProduct";

const Products = () => {
  const { page, productsPerPage, pages, handleChange, filteredProducts } =
    useSortProduct();

  return (
    <div>
      <div className="conatiner lg:padding-primary mt-10">
        <ThirdBanner />
      </div>
      <div className="container mx-auto lg:padding-primary flex flex-row mt-10">
        <div className="lg:max-w-[350px] lg:w-[300px] lg:block hidden">
          <Sidebar />
        </div>
        <div className="flex flex-col items-center justify-center mb-10 my-20 flex-1">
          <SortProduct />
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center mb-10 my-20 flex-1">
              <Loader classes="my-4" />
            </div>
          ) : (
            <div className="container grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
              {filteredProducts
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
          )}
          <Stack spacing={2}>
            <Pagination
              count={pages}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Stack>
        </div>
      </div>
      <SecondaryBanner />
      <Benefits />
    </div>
  );
};

export default Products;
