import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import ProductPreview from "../Pages/ProductPreview";
import Cart from "../Pages/Cart";
import Wishlist from "../Pages/Wishlist";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/product/:id",
    component: ProductPreview,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/wishlist",
    component: Wishlist,
  },
];

export { publicRoutes };
