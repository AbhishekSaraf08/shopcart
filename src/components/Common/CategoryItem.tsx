
import Image from 'next/image'
import React from 'react'


interface ICategoryItem{
  cdata:any
  
   
}
const CategoryItem = ({cdata}:ICategoryItem) => {
  return (
    <>
       { 
            cdata.map((value:any, index:any) =>(
                  
            <div   key={index}  className="  rounded-lg   w-full  max-h-14 sm:max-h-16 sm:w-[49%]   lg:w-[48%] flex transition-all duration-350 hover:cursor-pointer hover:scale-105  bg-white hover:bg-slate-100">


              <div className=" h-12 w-12 sm:h-16  sm:w-16">
              <Image src={value.image} alt={value.label}    className=" h-full w-full p-1 max-h-15 "/>
               </div>
              <div className='flex flex-col gap-3'>
           
             <h1 className='font-bold text-sm md:text-base overflow-hidden'> {value.label}</h1>
             <div className="flex gap-2 text-xs  text-slate-400">
              <p>{value.count}</p>
              <p  className='overflow-hidden'>{value.status}</p>
              </div>
              </div>
              
                   
               </div>
                ))
              
              }
              
  </>

  )
}

export default CategoryItem