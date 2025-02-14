
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [cart, setCart] = useState<{ [key: string]: number }>({});
   const [cartcount,setCartCount] =useState(Object.keys(cart).length);
  useEffect(() => {
    setLoading(true);
    const url =
       `https://dummyjson.com/products?limit=194`;
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
  }, []);

  const handleAddToCart = (itemId: string) => {
    setCart((prevCart) => {
      const currentCount = prevCart[itemId]|| 0;
      if (currentCount < products.find((item) => item.id === itemId)?.stock) {
        
        return { ...prevCart, [itemId]: currentCount + 1 }; 
      }
      return prevCart;
    });
      setCartCount(Object.keys(cart).length+1)
    console.log(cartcount);
  };
  
  const handleRemoveFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const currentCount = prevCart[itemId];
      if (currentCount > 1) {
        return { ...prevCart, [itemId]: currentCount - 1 };
      } else {
        const newCart = { ...prevCart };
        delete newCart[itemId]; 
       
        return newCart;
    }}
  );
  setCartCount(Object.keys(cart).length-1)
    
    console.log(cartcount);
  };
  

  return { products, loading, error ,cart ,cartcount,handleAddToCart,handleRemoveFromCart };
};

export default useProducts;
