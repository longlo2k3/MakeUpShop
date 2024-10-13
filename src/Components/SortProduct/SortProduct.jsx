import SortBy from "./SortBy";
import { BRANDS } from "../../constants/brandslink.js";
import { CATEGORIES } from "../../constants/categories.js";
import { SvContext } from "../SeviceContext/SeviceContext.jsx";
import { useContext } from "react";

function SortProduct() {
  const { brand, sort, number, setNumber, setBrand, setSort } =
    useContext(SvContext);
  function handleChangePages(e) {
    setNumber(e.target.value);
  }
  function handleChangeBrand(e) {
    setBrand(e.target.value);
  }
  function handleChangeSort(e) {
    setSort(e.target.value);
  }

  return (
    <div className="container mx-auto flex flex-row justify-between items-center mb-10">
      <SortBy title="Brands">
        <select
          onChange={handleChangeBrand}
          value={brand}
          className="p-2 lg:w-[150px] w-0 shadow-sm rounded-lg"
        >
          <option value="">All</option>
          {BRANDS.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </SortBy>
      <SortBy title="Sort By">
        <select
          onChange={handleChangeSort}
          value={sort}
          className="p-2 lg:w-[150px] w-0 shadow-sm rounded-lg"
        >
          <option value="Low to High">Low to High</option>
          <option value="High to Low">High to Low</option>
        </select>
      </SortBy>
      <SortBy title="Show">
        {
          <select
            onChange={handleChangePages}
            value={number}
            className="p-2 lg:w-[150px] w-0 shadow-sm rounded-lg"
          >
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="21">21</option>
            <option value="36">36</option>
            <option value="45">45</option>
          </select>
        }
      </SortBy>
    </div>
  );
}

export default SortProduct;
