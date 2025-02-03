import React from "react";
import Link from "next/link";
import { AppAssests } from "@/constants/Assests";
import Image from "next/image";

export const Brands = () => {
  const brands = [
    {title:"Apple", image:AppAssests.apple},
    {title:"Gucci" , image:AppAssests.gucci}, 
    {title:"Puma",image:AppAssests.puma},
    {title:"Adidas",image:AppAssests.adidas},
    {title:"Samsung",image:AppAssests.samsung},
    {title:"Chanel",image:AppAssests.chanel},
    {title:"Apple", image:AppAssests.apple},
    {title:"Gucci" , image:AppAssests.gucci}, 
    {title:"Puma",image:AppAssests.puma},
    {title:"Adidas",image:AppAssests.adidas},
    {title:"Samsung",image:AppAssests.samsung},
    {title:"Chanel",image:AppAssests.chanel},
  ];

  return (
    <div className=" w-full flex flex-col ">
      <div className=" h-[30%] lg:h-[21%] p-2 flex flex-col gap-3">
        <h1 className="w-full text-2xl  drop-shadow-xl font-exo_2  font-bold">
          Choose By Brand 
        </h1>
       {/* <hr className=" bg-teal-600  bg-opacity-60 h-1" /> */}
        <div className="flex  scroll-smooth s flex-row  lg:flex-nowrap   scrollbar-hide  justify-evenly overflow-x-scroll   gap-3   h-full ">
          {brands.map((value: any, index: any) => (
            <div className=" w-[48%] sm:w-[30%]  cursor-pointer h-[40%]  lg:h-full lg:w-[16%] " key={index}>
              <div
                key={index}
                className="  hover:scale-95  hover:bg-slate-300 duration-300  rounded-xl px-2  py-2   flex  flex-row   justify-evenly  gap-2 lg:gap-4  items-center  h-full md:h-16 md:w-16  min-w-32  lg:h-full lg:w-full bg-slate-300 bg-opacity-50  "
              >
               <div className=" transition-all duration-700 h-full  max-w-12 max-h-11 md:max-w-16 md:max-h-14 lg:min-w-12 lg:max-w-16 lg:h-[90%]  rounded-full  bg-white">
                    <Image src={value.image} alt={value.title}   className=" md:min-w-6  h-full    rounded-full   "/>
                </div>
                <h1 className=" text-xs md:text-lg lg:text-lg font-schibsted_grotesk  text-teal-600  font-bold">
                  {value.title.toUpperCase()}
                </h1>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
