import React from 'react'
import { AppAssests } from '@/constants/Assests'
import Image from 'next/image'
const Cards = () => {
 const cards=[
{price:"100" ,  description:"Explore Our Furniture & Home Furnishing Range", image:AppAssests.furn , bg:"bg-yellow-300 bg-opacity-20",tcolor:"text-yellow-500"},
{price:"29" ,  description:"Enjoy Discount  all types of Books & Gadgets item", image:AppAssests.books , bg:"bg-red-600 bg-opacity-20",tcolor:"text-red-500"},
//{price:"90" ,  description:"Explore Our all types Electronics  item", image:AppAssests.laptop , bg:"bg-stone-300 bg-opacity-30",tcolor:"text-stone-500"},
{price:"67" ,  description:"Explore Our all types Dresses for Men ", image:AppAssests.dress , bg:"bg-orange-300 bg-opacity-20",tcolor:"text-orange-300"}
,{price:"59" ,  description:"Enjoy Discount all types of Educational accessories", image:AppAssests.educational , bg:"bg-teal-300 bg-opacity-20",tcolor:"text-teal-500"}

 ]

  return (

    <div className='flex flex-col p-3'>
    <h1 className="w-full text-2xl  font-exo_2 font-bold">
          Get Up To 70% off
        </h1>
    

    <div className=' mt-3   flex flex-row  flex-wrap  justify-between gap-2'>
       
       {
        cards.map((item,index)=>(
          <div
          key={index}
          className="max-w-[48%] md:max-w-[150px]    lg:min-w-[23%]  ">
          <div className={` flex   flex-col  min-h-full justify-between rounded-lg   shadow-md gap-2 ${item.bg}`}>
            <div className="flex h-1/2 flex-col gap-2 px-2 ">
              <div className="flex flex-col">
                <span className="font-geist">Save</span>
                <span className={`font-geist  text-3xl md:text-4xl relative gap-2 ${item.tcolor}`}>
                  <span className="text-xl absolute">$</span>
                  <span className="ml-4">{item.price}</span>
                </span>
              </div>
              <p className="text-xs font-exo_2 md:font-bold md:text-gray-500">{item.description}</p>
            </div>
            <div className="relative    rounded-b-lg  overflow-hidden">
              <div className=" rounded-b-lg  flex  transform ease-in-out transition-all">
                <Image
                  src={item.image}
                  alt="image"
                  quality={100}
                  className="  cursor-pointer hover:scale-110      min-h-30   duration-500 rounded-b-lg  w-full h-full"
                
                  width={300}  
                  height={300}  />
              </div>
            </div>
          </div>
        </div>
        
            

        ))
       }

        </div>
    </div>
  )
}

export default Cards