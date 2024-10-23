import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://makeup-api.herokuapp.com/api/v1/products";

const useGetProductPreview = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = Number(location.pathname.replace("/product/", ""));
    const source = axios.CancelToken.source();
    axios
      .get(`${BASE_URL}/${productId}.json`, { cancelToken: source.token })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      });

    return () => {
      source.cancel();
    };
  }, [location.pathname]);

  return product;
};

export default useGetProductPreview;
