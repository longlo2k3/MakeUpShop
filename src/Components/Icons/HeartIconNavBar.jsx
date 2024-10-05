import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export default function HeartIcon({ id, isIcon }) {
  return (
    <>
      <Link to={`/wishlist`}>
        <FaHeart
          key={id}
          id={id}
          className={`relative -right-2 hover:cursor-pointer hover:scale-150 transition-all delay-50 duration-300 ease-in-out ${
            isIcon ? "hover:text-gray-500" : ""
          }`}
        />
      </Link>
    </>
  );
}
