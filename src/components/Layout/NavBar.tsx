"use client";
import { AppAssests } from "@/constants/Assests";
import { FaBars } from "react-icons/fa6";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import CategoryItem from "../Common/CategoryItem";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

export default function NavBar() {
  const [Sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  const [category, setCategory] = useState(false);
  const toggleCategory = () => {
    setCategory((prev) => !prev);
  };

  
  const categoryRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event :any) => {
      if (categoryRef.current) {
        setCategory(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  let cdata = [
    { label: "Cloths", image: AppAssests.cloth, count: "20", status: "Available" },
    { label: "Electronics", image: AppAssests.electronics, count: "30", status: "Available" },
    { label: "Accessories", image: AppAssests.accessories, count: "10", status: "Available" },
    { label: "Stationery", image: AppAssests.stationery, count: "15", status: "Available" },
  ];

  return (
    <>
       <div
        className={`bg-white z-10  shadow-lg lg:pr-8 w-full fixed mx-auto font-geist lg:font-bold h-[7%] md:h-[6%] lg:h-[10%] flex justify-evenly lg:gap-10 sm:gap-3 md:gap-2 ${isScrolled ? '  animate-movenav  ' : '  '}`}
      >
        <div className="lg:w-[20%]  h-[70%] mt-2 w-[30%] gap-1 flex flex-row justify-center">
          <Image src={AppAssests.logo} alt="logo" className="overflow-hidden md:ml-2  h-full  w-[30%] sm:w-[22%] md:w-[28%] lg:w-[20%] " />
          <Link href={"/"}>
            <div className="flex font-exo_2  text-lg lg:text-3xl mt-1 md:mt-2 md:text-2xl font-bold text-teal-500 opacity-90"> Shopcart</div>
          </Link>
        </div>
        <div className="sm:flex flex-row items-center justify-center gap-2 md:gap-6 outline-none hidden">
          <button onClick={toggleCategory}>
            <div className={`flex flex-row gap-1 justify-center items-center ${category ? "bg-slate-200 h-10 bg-contain p-2 rounded-lg bg-opacity-80" : ""}`}>
              <span>Categories </span>
              <div className="transition-all duration-700">
                {category ? <FaChevronUp  className=" transition-all duration-700"/> : <FaChevronUp  className="transition-all  rotate-180 duration-700"/>}
              </div>
            </div>
          </button>

          {category && (
            <div
              ref={categoryRef} 
              className="absolute rounded-xl bg-opacity-80  transition-all duration-700 sm:flex hidden flex-wrap lg:gap-2 lg:h-48 lg:w-[40%] sm:w-[70%] justify-center flex-row p-2 left-[15%] lg:top-11 md:top-10 sm:top-16 bg-slate-200 border gap-2  " >
              <div className="w-full h-8 border-b-2 border-b-white">
                <span> Popular Categories </span>
              </div>
              <CategoryItem  cdata={cdata} />
            </div>
          )}
          <div>
            <Link href={"/deals"}>Deals</Link>
          </div>
          <div>
            <Link href={"/delivery"}>Delivery</Link>
          </div>
        </div>
        <div className="flex justify-center relative gap-2 lg:w-52  h-full  items-center">
          <form className="md:h-full  flex items-center">
          <input type="text" role="search" placeholder="Search..." className="h-[30%]  text-xs md:text-sm font-light  p-1   rounded-lg  lg:font-mono lg:h-[40%] sm:w-full sm:h-[40%]   bg-opacity-70 px-2 lg:py-1 sm:py-1 md:py-0 border  resize-none bg-slate-100 overflow-hidden outline-none"></input>
          </form>
          <IoSearchOutline className="absolute  right-[5%] lg:right-[8%] text-white   h-5 p-1 w-5 rounded-xl bg-teal-500    shadow-lg" />
        </div>
        <div className="sm:flex flex-row p-2 justify-center items-center gap-4 hidden">
          <Link href={"/account"}>
            <div className="flex flex-row gap-1 justify-center items-center">
              <VscAccount className="size-5" />
              <span>Account</span>
            </div>
          </Link>
          <Link href={"/cart"}>
            <button className="flex gap-1 size-30 justify-center items-center">
              <IoCartOutline className="size-6" />
              Cart
            </button>
          </Link>
        </div>

        <div className="flex flex-row p-2 sm:hidden">
          <button onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
      
          <div className={`flex flex-col sm:hidden rounded-l-lg  transition-all duration-700 right-0  text-white  ${Sidebar?"animate-movemenu":"hidden"} fixed    h-[50%] z-50 font-geist max-w-[42%]   bg-black  bg-opacity-90   justify-start items-center flex-wrap `}>
          <div className=" p-2   flex  justify-end  w-full  bg-teal-700 ">
   
   <button
     onClick={toggleSidebar}
     className="text-white  hover:bg-teal-500 bg-teal-500 r p-1 rounded-sm transition mr-2 duration-300">
     <FaBars />
   </button>
 </div>
            
             <button onClick={toggleCategory} className="hover:bg-teal-500    hover:bg-opacity-50 hover:rounded-md    p-2 m-2 ">
              <div    className="flex flex-row gap-1 justify-center items-center">
                <span >Categories</span>
                {category ? <FaChevronDown  className="  -rotate-180 transition-all duration-700"/> : <FaChevronDown  className="transition-all  duration-700"/>}
              </div>
            </button>
            {category && (
              <div   className="absolute z-10  duration-700 text-black rounded-xl flex flex-wrap w-36 bg-opacity-70 sm:hidden justify-center flex-row p-1 sm:p-2 right-1 mt-24 bg-slate-200 border gap-2">
                <CategoryItem   cdata={cdata} />
              </div>
            )}
            <button  onClick={toggleSidebar} className="hover:bg-teal-500  hover:rounded-md  hover:bg-opacity-50 p-2 m-2 w-[80%]">
              <Link href={"/deals"}>Deals</Link>
            </button>
            <button  onClick={toggleSidebar} className="hover:bg-teal-500  hover:rounded-md   hover:bg-opacity-50 p-2 m-2 w-[80%] ">
              <Link href={"/delivery"}>Delivery</Link>
            </button>

            <div className="flex flex-col ">
              <button  onClick={toggleSidebar} className="hover:bg-teal-500   hover:bg-opacity-50 hover:rounded-md p-2  flex m-2 gap-1 justify-center items-center">
                <Link href={"/account"}>
                  <div className="flex flex-row gap-1 justify-center items-center">
                    <VscAccount className="size-5" />
                    Account
                  </div>
                </Link>
              </button>
              <button  onClick={toggleSidebar} className="hover:bg-teal-500  hover:bg-opacity-50  hover:rounded-md  p-2 flex m-2 gap-1 justify-center items-center">
                <Link href={"/cart"}>
                  <div className="flex flex-row gap-1 justify-center items-center">
                    <IoCartOutline className="size-5" />
                    Cart
                  </div>
                </Link>
              </button>
            </div>
          </div>
        
      
    </>
  );
}
