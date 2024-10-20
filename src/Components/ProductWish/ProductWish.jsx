import { useContext, useEffect, useState } from "react";
import CloseIcon from "../Icons/CloseIcon";
import { Link } from "react-router-dom";
import { SvContext } from "../SeviceContext/SeviceContext";

const ProductWish = ({ id, name, brand, imgUrl, price }) => {
  const { wishlist, setWishlist } = useContext(SvContext);
  const [count, setCount] = useState(
    wishlist.filter((item) => item.id === id).length
  );

  const handleAddCount = () => {
    setCount((c) => c + 1);
    setWishlist([...wishlist, { id, name, brand, imgUrl, price }]);
  };
  const handleRemoveCount = () => {
    setCount((c) => c - 1);
    setWishlist((prevWish) => {
      const indexToRemove = prevWish.findIndex((item) => item.id === id);
      if (indexToRemove !== -1) {
        // Xóa phần tử đầu tiên mà nó tìm thấy
        return [
          ...prevWish.slice(0, indexToRemove),
          ...prevWish.slice(indexToRemove + 1),
        ];
      }
      return prevWish; // Trả về giỏ hàng không thay đổi nếu không tìm thấy
    });
  };

  const handleRemoveAll = () => {
    setWishlist((c) => c.filter((item) => item.id !== id));
  };

  return count > 0 ? (
    <div className="flex flex-row justify-between items-center mt-2">
      <Link
        to={`/product/${id}`}
        className="flex flex-row justify-between items-center gap-2"
      >
        <img src={imgUrl} className="w-40 h-40" alt={name} />
        <div>
          <div className="text-yellow">{brand}</div>
          <div className="font-semibold">{name}</div>
          <div>{price} &euro;</div>
        </div>
      </Link>
      <div className="flex flex-row gap-10">
        <div className="flex flex-row gap-2">
          <div
            key={id}
            className="px-2 bg-yellow hover:cursor-pointer"
            onClick={handleRemoveCount}
          >
            -
          </div>
          <div key={id}>{count}</div>

          <div
            key={id}
            className="px-2 bg-yellow hover:cursor-pointer"
            onClick={handleAddCount}
          >
            +
          </div>
        </div>
        <div onClick={handleRemoveAll}>
          <CloseIcon />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ProductWish;
