import { useEffect, useState } from "react";

const useProducts = (category?: string) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    const url = category
      ? `https://dummyjson.com/products/category/${category}`
      : `https://dummyjson.com/products?limit=194`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, [category]);

  return { products, loading, error };
};

export default useProducts;
