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
    
            <div className="flex  flex-row  lg:flex-nowrap   flex-wrap    gap-1 md:gap-2      h-full ">
              {categories.map((value: any, index: any) => (
                <div className=" w-[32.5%]  md:w-[24%] lg:w-[15%]   lg:min-h-full   " key={index}>
                  <Link href={`/products/${value.title}`}
                    key={index}
                    className="  hover:scale-95  hover:bg-slate-300 rounded-xl overflow-hidden    md:h-14 lg:h-14   duration-300  flex  flex-row    py-1   px-1   gap-1 md:gap-2   items-center  h-12   lg:min-h-full  bg-slate-300 bg-opacity-50  "
                  >
                   {/* <div className=" h-full  max-w-16 md:max-w-20   lg:min-h-14    lg:min-w-16 lg:max-w-16  rounded-full  bg-white"> */}
                        <Image src={value.image} alt={value.title}  className="   w-[35%] md:w-[30%] min-h-[90%] md:min-h-full md:h-[90%]  sm:max-w-16   rounded-full  "/>
                    {/* </div> */}
                    <h1 className="   text-xs md:text-base font-geist    text-teal-600  font-bold">
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
