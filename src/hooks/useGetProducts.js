import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(`${BASE_URL}.json`, {
        cancelToken: source.token,
      })
      .then((res) => {
        setProducts(res.data.slice(0, 100));
      });

    return () => {
      source.cancel();
    };
  }, []);
  return products;
};

export default useGetProducts;
