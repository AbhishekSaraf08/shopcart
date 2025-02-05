"use client";
import Products from '@/components/Home/Products';
import React from 'react'

interface Params {
  category?: string; 
}
export default function page({params}:any) {
  const {category}:Params = React.use(params);
  
  //  const [products, setProducts] = useState([]);
  //       const [loading, setLoading] = useState(true);
  //       const [error, setError] = useState('');
        
  //    useEffect(() => {
  //       fetch('https://dummyjson.com/products?limit=80')
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setProducts(data.products); 
  //           setLoading(false); 
  //         })
  //         .catch((error) => {
  //           setError('Error fetching data');
  //           setLoading(false);
  //         });
  //     }, []); 
  //       res ..category=="beauty"
  //     if (loading) {
  //       return <div className="text-center text-lg">Loading...</div>;
  //     }
    
  //     if (error) {
  //       return <div className="text-center text-red-500">{error}</div>;
  //     }
  //     if (products.length === 0) {
  //       return <div className="text-center text-xl text-red-500">No products available</div>;
  //     }
  return (
      <div className="flex py-5 flex-wrap w-[90%] mt-10 lg:mt-14  justify-center items-start gap-5 ">
    <Products category={category}/>
    </div>
  )
}
 