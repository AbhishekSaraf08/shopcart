"use client"
import React from 'react'
import Banner from './Banner'
import Products from './Products' 
import { Categories } from './Categories'
import { Brands } from './Brands'
import Cards from './Cards'
import Bcards from './Bcards'
import { FaRegArrowAltCircleRight } from "react-icons/fa";


interface IHomePage{
  
}

export const HomePage = () => {
  return (
    <div className="   scroll-smooth w-full md:w-[90%]  justify-center flex  mt-6 gap-6 overflow-hidden flex-col  ">
    <Banner/>
    <Categories/>
    <Brands/>
    <Cards/>
    <div className='flex flex-col p-3'>
    <div className='flex justify-center '>
    <h1 className="w-full text-2xl font-exo_2  font-bold">
          Electronics
        </h1>
        <button className='   rounded-full hover:scale-95 duration-300 text-teal-500 text-2xl mr-2 hover:text-teal-700 font-geist'><FaRegArrowAltCircleRight className='animate-moveRight'/></button>
        </div>
    <hr className=" bg-teal-600  mt-1 bg-opacity-60 h-0.5" />

    <div className=' mt-2 flex flex-row overflow-x-scroll   scrollbar-hide justify-start gap-5'>
    <Products category={"laptops"}/>
    
    </div>
   </div>

   <div className='flex flex-col p-3'>
    <div className='flex justify-center '>
    <h1 className="w-full text-2xl  font-exo_2 font-bold">
          Groceries
        </h1>
        <button className='   rounded-full hover:scale-95 duration-300 text-teal-500 hover:text-teal-400 text-2xl mr-2 font-geist'><FaRegArrowAltCircleRight className='animate-moveRight'/></button>
        </div>
   <hr className=" bg-teal-600  mt-1 bg-opacity-60 h-0.5" />

    <div className=' mt-2   flex flex-row overflow-x-scroll  scrollbar-hide start gap-5'>
    <Products category={"groceries"}/>
    
    
    </div>
  
   </div>

   <div className='flex flex-col p-3'>
    <div className='flex justify-center '>
    <h1 className="w-full text-2xl  font-exo_2 font-bold">
          Motorcycle
        </h1>
        <button className='   rounded-full hover:scale-95 duration-300 text-teal-500 hover:text-teal-400 text-2xl mr-2 font-geist'><FaRegArrowAltCircleRight className='animate-moveRight'/></button>
        </div>
   <hr className=" bg-teal-600  mt-1 bg-opacity-60 h-0.5" />

    <div className=' mt-2   flex flex-row overflow-x-scroll  scrollbar-hide justify-start gap-5'>
    <Products category={"motorcycle"}/>  
    </div>
  
   </div>
   
   <Bcards/>
   </div>
    
  )
}
