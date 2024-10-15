import { useState, useEffect, useRef } from "react";
import { IoMdCart } from "react-icons/io";
import PropTypes from "prop-types";
import MessageBox from "../MessageBox/MessageBox";

export default function CartIcon({ id, isIcon }) {
  const alertBox = MessageBox();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    alertBox.innerHTML = "Added to cart successfully!";
    document.body.appendChild(alertBox);
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 1000);
  };

  // useEffect(() => {
  //   if (clicked) {
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [clicked]);

  return (
    <>
      <IoMdCart
        key={id}
        id={id}
        className={`relative -right-2 hover:cursor-pointer hover:scale-125 transition-all delay-50 duration-300 ease-in-out  ${
          isIcon ? "hover:text-gray-500" : ""
        }
        ${clicked ? "text-yellow hover:text-yellow" : ""}`}
        onClick={handleClick}
      />
    </>
  );
}

CartIcon.propTypes = {
  id: PropTypes.number.isRequired,
  isIcon: PropTypes.bool.isRequired,
};
