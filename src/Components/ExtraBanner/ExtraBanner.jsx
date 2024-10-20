import { Link, useLocation } from "react-router-dom";
import ButtonLink from "../ButtonLink/ButtonLink";
import { SvContext } from "../SeviceContext/SeviceContext";
import { useContext } from "react";

const ExtraBanner = ({ title }) => {
  const { Cart, wishlist } = useContext(SvContext);
  const location = useLocation();
  return (
    <div>
      <div className="text-center flex flex-col gap-5">
        <div className="font-semibold text-2xl">{title}</div>
        <div className="flex flex-row justify-between">
          <div className="bg-white">
            <ButtonLink path="/products" text="Continue shopping" />
          </div>
          <Link to="/cart">
            <div className="font-semibold mr-14">
              <p
                className={`${
                  location.pathname === "/cart" && "border-b-2 border-black"
                }`}
              >
                Shopping bag ({Cart.length})
              </p>
            </div>
          </Link>
          <Link to="/wishlist">
            <div className="font-semibold">
              <p
                className={`${
                  location.pathname === "/wishlist" && "border-b-2 border-black"
                }`}
              >
                wishlist ({wishlist.length})
              </p>
            </div>
          </Link>
          <ButtonLink text="Check out" isActive={true} path={"/payment"} />
        </div>
      </div>
    </div>
  );
};

export default ExtraBanner;
