import React from "react";
import { AppAssests } from "@/constants/Assests";
import Image from "next/image";
import Link from "next/link";
export const Categories = () => {
  const categories = [
    {title:"beauty", image:AppAssests.beauty},
    {title:"fragrance" , image:AppAssests.frag}, 
    {title:"furniture",image:AppAssests.furniture},
    {title:"groceries",image:AppAssests.grocery},
    {title:"home-decoration",image:AppAssests.homedeco},
    {title:"laptops",image:AppAssests.laptop}
  ];

  return (
     <div className="  w-full flex flex-col ">
          <div className=" h-[50%] lg:min-h-full p-2 flex flex-col gap-3">
            <h1 className="w-full text-2xl drop-shadow-xl  font-exo_2  font-bold">
              Top Categories
            </h1>
            {/* <hr className=" bg-teal-600  bg-opacity-60 h-1" /> */}
    
            <div className="flex  flex-row  lg:flex-nowrap  flex-wrap   justify-center md:justify-between overflow-hidden  gap-1   h-full ">
              {categories.map((value: any, index: any) => (
                <div className=" w-[48%] overflow-hidden sm:w-[32%]  h-[40%] lg:min-h-full lg:w-[16%] " key={index}>
                  <Link href={`/products/${value.title}`}
                    key={index}
                    className="  hover:scale-95  hover:bg-slate-300 rounded-xl    md:h-20 lg:h-16   duration-300  flex  flex-row    md:px-2 py-1  justify-evenly px-1  gap-1 md:gap-2   items-center  min-h-full  w-full  lg:min-h-full lg:w-full bg-slate-300 bg-opacity-50  "
                  >
                   {/* <div className=" h-full  max-w-16 md:max-w-20   lg:min-h-14    lg:min-w-16 lg:max-w-16  rounded-full  bg-white"> */}
                        <Image src={value.image} alt={value.title}  className="     h-12  w-[35%] md:w-[35%] sm:max-w-16     rounded-full  "/>
                    {/* </div> */}
                    <h1 className=" text-xs md:text-lg lg:text-base font-geist     text-teal-600  font-bold">
                      {value.title.toUpperCase()}
                    </h1>
                  </Link>
                </div>
          ))}
        </div>
      </div>
    </div>
  );
};
