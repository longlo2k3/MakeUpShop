import links from "../../../data/ProductLinks.json";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { SvContext } from "../../SeviceContext/SeviceContext";

const CategoriesLinks = () => {
  const { category, setCategory } = useContext(SvContext);

  const handleClick = (e) => {
    setCategory(e.target.textContent);
  };

  return (
    <div className="bg-gray-100 p-4">
      {links.map((item) => (
        <div className="flex flex-col flex-wrap gap-2 mb-2" key={item.title}>
          <h6 className="font-krona text-sm font-bold">{item.title}</h6>
          <div className="ml-2">
            {item.links.map((link) => (
              <div
                key={link.name}
                onClick={handleClick}
                className={`lowercase text-sm block hover:text-yellow hover:cursor-pointer ${
                  category === link.name ? "text-yellow" : ""
                }`}
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesLinks;
