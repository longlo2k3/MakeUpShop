import useGetRecommendProduct from "../../hooks/useGetRecommendProduct";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader";
import Title from "../Product/Title";

const RecommendProduct = () => {
  const products = useGetRecommendProduct();
  return (
    <div className="flex flex-wrap justify-center">
      {products.length === 0 ? (
        <Loader classes="my-4" />
      ) : (
        <div className="flex flex-col gap-10">
          <div className="text-center">
            <Title name="FOR YOU" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
            {products.map((product) => (
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
        </div>
      )}
    </div>
  );
};

export default RecommendProduct;
