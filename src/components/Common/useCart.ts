
 import { useEffect,useState } from 'react';
 import useProducts from './useProducts';
 const useCart = () => {
    const {products}=useProducts();
    const [cart, setCart] = useState<{ [key: string]: number }>({});
     const [cartcount,setCartCount] =useState(0);

      const handleAddToCart = (itemId: string) => {
        
         setCart((prevCart) => {
           const currentCount = prevCart[itemId]|| 0;
           if (currentCount < products.find((item) => item.id === itemId)?.stock) {
             
             return { ...prevCart, [itemId]: currentCount + 1 }; 
           }
           return prevCart;
         });
           
       };
       useEffect(() => {
        
         setCartCount(Object.keys(cart).length);
       }, [cart]);

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
       
       };
       
        return{cart,cartcount,handleAddToCart,handleRemoveFromCart}
 }

 export default useCart
 
 