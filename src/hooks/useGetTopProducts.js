import axios from "axios";
import { useEffect, useState } from "react";

import { PRODUCT_TAGS } from "../constants/tags";
import { BRANDS } from "../constants/brands";
const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const getRandomProductTag = () => {
  const randomTag = Math.floor(Math.random() * BRANDS.length);
  return BRANDS[randomTag];
};

const useGetTopProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}.json`, {
        params: {
          brand: getRandomProductTag(),
        },
      })
      .then((response) => {
        setProducts(response.data.slice(0, 8));
      });
  }, []);

  return products;
};

export default useGetTopProducts;
