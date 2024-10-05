// import ProductCard from "../Components/ProductCard/ProductCard";
import Loader from "../Components/Loader/Loader";
import useGetProductPreview from "../hooks/useGetProducrPreview";
import HeartIcon from "../Components/Icons/HeartIcon";
import Product from "../Components/Product/Product";
import RecommendProduct from "../Components/RecommendProduct";
import Benefits from "../Components/Benefits";
import ThirdBanner from "../Components/ThirdBanner";

const ProductPreview = () => {
  const product = useGetProductPreview();
  return (
    <div>
      <div>
        {!product ? (
          <Loader classes="my-4" />
        ) : (
          <div className="container m-auto lg:padding-primary py-20">
            <Product
              name={product.name}
              img={product.image_link}
              type={
                product.product_type.charAt(0).toUpperCase() +
                product.product_type.slice(1)
              }
              category={product.category}
              price={product.price}
              description={product.description}
            />
            <Benefits isActive={true} />
            <RecommendProduct />
            <ThirdBanner />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPreview;
