"use client";
import React, { useEffect, useState } from 'react'
import Products from '@/components/Home/Products';
const page = () => {
    let categories= ["all","beauty","fragrances","furniture","groceries","home-decoration","kitchen-accessories","laptops","mens-shirts","mens-shoes","mens-watches","mobile-accessories","motorcycle","skin-care","smartphones","sports-accessories","sunglasses","tablets","tops","vehicle","womens-bags","womens-dresses","womens-jewellery","womens-shoes","womens-watches"]
      const [category,setCategory]= useState("all");
      const [sortBy, setSortBy] = useState("title");
    

      const handleSortChange = (e:any) => {
        setSortBy(e.target.value);
      };
    return (
    <>
        <div className='w-full justify-center    flex gap-5  mt-20 '>
             <select value={category}   onChange={(e) => setCategory(e.target.value)} className=' text-sm rounded-md w-28  md:w-40  bg-slate-200 p-2 '>
              {
                categories.map((item,index)=>(
                    <option  key={index}  value={item} className='text-xs'>{item.toUpperCase()}</option>
                ))
              }
             </select>
             <select 
          className='rounded-md bg-slate-200  text-sm w-28 md:w-40 p-2' 
          value={sortBy}
          onChange={handleSortChange}
        >
         
          <option  value="title" className='text-xs'>Sort by Title (A-Z)</option>
          <option value="rating" className='text-xs'>Sort by Rating (High to Low)</option>
          <option value="price-low" className='text-xs'>Sort by Price (Low to High)</option>
          <option value="price-high" className='text-xs'>Sort by Price (High to Low)</option>
        </select>
              </div>
              <div className=" mt-10  flex flex-wrap   justify-start md:justify-evenly lg:justify-start ml-10 md:ml-0  lg:ml-5 w-full   items-start  gap-5">
            
            <Products category={category === "all" ? undefined : category} sortBy={sortBy} />
     
        </div>
        </>
        
  )
}

export default page