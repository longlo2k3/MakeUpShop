import { IoMdCart } from "react-icons/io";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CartIconNavBar({ isIcon = "", id = 0 }) {
  return (
    <div>
      <Link to={`/cart`}>
        <IoMdCart
          key={id}
          id={id}
          className={`relative -right-2 hover:cursor-pointer hover:scale-125 transition-all delay-50 duration-300 ease-in-out  ${
            isIcon ? "hover:text-gray-500" : ""
          }`}
        ></IoMdCart>
      </Link>
    </div>
  );
}

CartIconNavBar.propTypes = {
  id: PropTypes.number.isRequired,
  isIcon: PropTypes.bool.isRequired,
};
