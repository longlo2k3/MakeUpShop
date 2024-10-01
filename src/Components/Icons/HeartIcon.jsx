import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import MessageBox from "../MessageBox/MessageBox";

export default function HeartIcon({ id, isIcon }) {
  const alertBox = MessageBox();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked((prevState) => !prevState);

  useEffect(() => {
    if (clicked) {
      alertBox.innerHTML = "Added to wishlist successfully!";
      document.body.appendChild(alertBox);
      const timer = setTimeout(() => {
        document.body.removeChild(alertBox);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [clicked]);
  return (
    <>
      <FaHeart
        key={id}
        id={id}
        className={`relative -right-2 hover:cursor-pointer hover:scale-150 transition-all delay-50 duration-300 ease-in-out ${
          isIcon ? "hover:text-gray-500" : ""
        }
        ${clicked ? "text-red-500 hover:text-red-500" : ""}`}
        onClick={handleClick}
      />
    </>
  );
}
