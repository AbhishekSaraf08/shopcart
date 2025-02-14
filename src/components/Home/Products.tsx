"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FcRating } from "react-icons/fc";
import Image from "next/image";
import useProducts from "../Common/useProducts";
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";

interface IProducts {
  category ?: any;
  searchValue?: any;
  sortBy?:any
  discount?:any
  availability?:any
 
}
const Products = ({ category, searchValue ,sortBy  ,discount ,availability }: IProducts) => {
 
  const { products, loading, error ,cart ,  handleAddToCart ,handleRemoveFromCart } = useProducts();
  
 
  useEffect(()=>{
    console.log("updated");
   console.log(cart);
  },[cart])

  let upproducts=products;
  if (searchValue) {
    upproducts = products.filter((item: any) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()));  
 }
 else if(category){
  upproducts = products.filter((item: any) =>
    item.category.toLowerCase()===category);
 
 }

if(discount){
  if(discount=='50'){
    upproducts = upproducts.filter((item: any) =>
      item.discountPercentage>=discount);
  }
  else{
  upproducts = upproducts.filter((item: any) =>
    item.discountPercentage>discount-10 && item.discountPercentage<=discount);
}
}

if (availability?.length) {
  upproducts = upproducts.filter((item: any) =>
    availability.includes(item.availabilityStatus)
  );
}






 if (sortBy === "title") {
  upproducts.sort((a, b) => a.title.localeCompare(b.title)); // Sort by title A-Z
} else if (sortBy === "rating") {
  upproducts.sort((a, b) => b.rating - a.rating); // Sort by rating (high to low)
} else if (sortBy === "price-low") {
  upproducts.sort((a, b) => a.price - b.price); // Sort by price low to high
} else if (sortBy === "price-high") {
  upproducts.sort((a, b) => b.price - a.price); // Sort by price high to low
}
 
  if (loading) {
    return (
      <div role="status" className="flex h-full w-full justify-center items-center">
        <svg
          aria-hidden="true"
          className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-teal-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  }
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
     if(upproducts.length==0){
     return(<div className="flex justify-center items-center w-full h-screen font-geist text-red-500 text-xl md:text-3xl"> No Products Available</div>)
    }
  return (
    <>
      {upproducts.map((item: any) => (
        <div
          key={item.id}
          className="   max-w-[42%]  md:max-w-48  max-h-[10%] rounded-lg     lg:h-[15%]  flex  justify-between flex-col "
        >
          <Link href={`/product/${item.id}`} className="">
            <div className="flex flex-col ">
              <div className="transform relative overflow-hidden  transition-all">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  height={200}
                  width={200}
                  placeholder="blur"
                  blurDataURL={item.thumbnail}
                  className="bg-slate-200   hover:shadow-xl duration-700 transform hover:scale-125  min-w-30  md:min-w-48 ease-in-out object-cover  lg:min-w-48 bg-opacity-50 rounded-md mix-blend-color-burn"
                />
              </div>
              <h2 className="font-geist overflow-hidden text-nowrap">
                {item.title}
              </h2>
              <div className="flex justify-between">
                <span className="text-nowrap overflow-hidden"> {item.category}</span>
                <span className="flex flex-row text-yellow-600 gap-1 items-center">
                  {item.rating}
                  <FcRating />
                </span>
              </div>

              <p className="font-geist text-lg">${item.price}</p>
            </div>
          </Link>


        {cart[item.id] === undefined || cart[item.id] === 0  ?
          <button onClick={()=>handleAddToCart(item.id)} className=" text-white  font-exo_2     font-bold  hover:bg-teal-400 bg-teal-500 bg-opacity-70  transition-all duration-300  shadow-lg rounded-md hover:scale-105  focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800   px-3 py-2 text-center  mb-1">
            Add to Cart
          </button>:
          <div className="flex justify-between items-center py-1">
          <button  onClick={()=>handleRemoveFromCart(item.id)} className="p-1 text-center text-teal-600 bg-slate-200 mb-1 transition-all duration-100 shadow-lg hover:scale-105 rounded-md  hover:focus:ring-2 focus:outline-none  focus:ring-teal-300 dark:focus:ring-teal-800"> <GrSubtract className="size-6"/> </button>
          <span className="font-exo_2 text-center font-extrabold text-teal-500">{cart[item.id]}</span>
          <button onClick={()=>handleAddToCart(item.id)} className="p-1 text-center text-teal-600 bg-slate-200 mb-1 transition-all duration-100 shadow-lg hover:scale-105 rounded-md  hover:focus:ring-2 focus:outline-nonefocus:ring-teal-300 dark:focus:ring-teal-800"> <IoMdAdd className="size-6"/>  </button>
        </div>
}
        </div>
      ))}
    </>
  );
};

export default Products;
