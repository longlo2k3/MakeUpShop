import axios from "axios";
import { useEffect, useState } from "react";
import { PRODUCT_TAGS } from "../constants/tags";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const getRandomProductTag = () => {
  return PRODUCT_TAGS[Math.floor(Math.random() * PRODUCT_TAGS.length)];
};

const useGetRecommendProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(`${BASE_URL}.json`, {
        params: {
          product_tags: getRandomProductTag(),
          cancelToken: source.token,
        },
      })
      .then((response) => {
        setProducts(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.error("Loại khi lấy dữ liệu sản phẩm:", error);
      });

    return () => {
      source.cancel();
    };
  }, []);
  return products;
};

export default useGetRecommendProduct;
