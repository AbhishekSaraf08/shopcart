'use client'; 
import React, { useState, useEffect } from 'react';
import { FcRating } from "react-icons/fc";
import Image from 'next/image';
interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  availabilityStatus: string;
  warrantyInformation: string;
  shippingInformation: string;
  images: string[];
  reviews: Array<{
    reviewerName: string;
    rating: number;
    comment: string;
  }>;
}
interface Params {
    id: string; 
  }

const ProductDetail = ({ params }:any) => {
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const {id}:Params = React.use(params);

  useEffect(() => {
    if (!id) return; 

    
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError('Error fetching product details');
        setLoading(false);
      });
  }, [id]);  

  if (loading) {return <div role="status" className='h-screen w-screen flex justify-center items-center'>
  <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-teal-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg> </div>}
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-7xl  mt-20   mx-auto  p-6">
      <div className="flex flex-col md:flex-row gap-6">
      
        <div className="md:w-1/2 flex justify-center ">
          <Image
            src={product.images[0]}
            alt={product.title}
            priority={true}
            fetchPriority="high"
            width={400}
            height={300}
            className="  max-h-[80%] rounded-lg shadow-lg"
          />
        </div>

        
        <div className="md:w-1/2">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.title}</h1>
          <span className="text-lg text-teal-600 font-medium">{product.category}</span>
          <p className="text-lg text-gray-700 mt-2">{product.description}</p>
          
          
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
              <div className="ml-4 flex items-center text-yellow-500">
                <span className="mr-1">{product.rating}</span>
                <FcRating className='mb-0.5'/>
              </div>
            </div>
          </div>

         
          <div className="mt-2">
            <span
              className={`inline-block px-4 py-1 text-sm rounded-full ${
                product.availabilityStatus === "Low Stock"
                  ? "bg-yellow-300 text-yellow-800"
                  : "bg-green-300 text-green-800"
              }`}
            >
              {product.availabilityStatus}
            </span>
          </div>

          
          <div className="mt-4">
            <p className="text-sm text-gray-600">Warranty: {product.warrantyInformation}</p>
            <p className="text-sm text-gray-600">Shipping: {product.shippingInformation}</p>
          </div>

          <div className='flex flex-row gap-5'>
          <button className="w-1/2  bg-stone-200 text-teal-500 font-bold py-2 mt-6 rounded-lg hover:bg-stone-300 transition duration-300">
            Add to Cart
          </button>
          <button className="w-1/2 bg-teal-500 text-white font-bold py-2 mt-6 rounded-lg hover:bg-teal-600 transition duration-300">
            Buy Now
          </button>
          </div>
        </div>
      </div>

     
      <div className='mt-10 lg:mt-0'>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reviews</h2>
        {product.reviews.length > 0 ? (
          <div>
            {product.reviews.map((review: any, index: number) => (
              <div
                key={index}
                className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-800">{review.reviewerName}</div>
                  <div className="flex items-center text-yellow-500">
                    <span>{review.rating}</span>
                    <FcRating className=' ml-1 mb-0.5'/>
                     
                   
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-600">No reviews yet</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

