import useGetTopProducts from "../../hooks/useGetTopProducts";
import ProductCard from "../ProductCard/ProductCard";
import ButtonLink from "../ButtonLink/ButtonLink";
import SectionTitle from "../SectionTitle/SectionTitle";
import Loader from "../Loader";

export default function TopProducts({ title }) {
  const products = useGetTopProducts();
  return (
    <div className="container mx-auto  xl:padding-primary mt-20">
      <div className="flex items-center justify-between mb-6">
        <SectionTitle text={title} />
        <ButtonLink
          path="/products"
          text="see more"
          isMain
          className="hidden md:block"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {products.length === 0 ? (
          <Loader classes="my-4" />
        ) : (
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
        )}
      </div>
    </div>
  );
}
