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
import SearchItems from "../Common/SearchItems";
import Products from "../Home/Products";
import { useRouter } from "next/navigation";

  export default function NavBar() {
    const [Sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
      setSidebar((prev) => !prev);
    };
    
    const [category, setCategory] = useState(false);
    const toggleCategory = () => {
      setCategory((prev) => !prev);
    };

    const [searchValue, setSearchValue] = useState("");
    
    const categoryRef = useRef(null);
    const searchRef = useRef<any>(null);
    useEffect(() => {
      const handleClickOutside = (event :any) => {
        if (categoryRef.current) {
          setCategory(false); 
        }
        if(searchRef.current && !searchRef.current.contains(event.target))
        {
          setIsSearch(false);
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

    const [isSearch, setIsSearch] = useState(false);
    const [searchButton,setSearchButton] = useState(false);

    let cdata = [
      { label: "Cloths", image: AppAssests.cloth, count: "20", status: "Available" },
      { label: "Electronics", image: AppAssests.electronics, count: "30", status: "Available" },
      { label: "Accessories", image: AppAssests.accessories, count: "10", status: "Available" },
      { label: "Stationery", image: AppAssests.stationery, count: "15", status: "Available" },
    ];
const router=useRouter()
    return (
      <>
        <div
          className={`bg-white z-10   shadow-lg  w-full fixed mx-auto font-geist lg:font-bold h-[8%] md:h-[6%] lg:h-[10%] flex  justify-evenly lg:justify-between lg:pl-6 lg:pr-14 sm:gap-3 md:gap-2 ${isScrolled ? '  animate-movenav  ' : '  '}`}
        >
          <div className="lg:w-[20%]  h-[70%] mt-2 w-[33%] md:w-[30%] gap-1 flex flex-row justify-center">
            <Image src={AppAssests.logo} alt="logo" className="overflow-hidden md:ml-2  h-full  w-[30%] sm:w-[22%] md:w-[28%] lg:w-[20%] " />
            <Link href={"/"}>
              <div className="flex font-exo_2  text-xl lg:text-3xl mt-2 md:mt-2 md:text-2xl font-bold text-teal-500 opacity-90"> Shopcart</div>
            </Link>
          </div>
          <div className="sm:flex flex-row items-center justify-center gap-2 md:gap-3 lg:gap-6 outline-none hidden">
            <button onClick={toggleCategory}>
              <div className={`flex flex-row gap-1 justify-center items-center lg:p-2 ${category ? " h-12  bg-[#5aa] bg-contain   shadow-xl  rounded-t-xl " : ""}`}>
                <span>Categories </span>
                <div className="transition-all duration-700">
                  {category ? <FaChevronUp  className="transition-all duration-700"/> : <FaChevronUp  className="transition-all  rotate-180 duration-700"/>}
                </div>
              </div>
            </button>

            {category && (
              <div
                ref={categoryRef} 
                className="absolute rounded-xl  z-10  shadow-xl transition-all duration-700 sm:flex hidden flex-wrap lg:gap-2 lg:h-48 lg:w-[40%] sm:w-[70%] justify-center flex-row p-2 left-[15%] lg:top-12 md:top-10 sm:top-16 bg-[#5aa]   gap-2  " >
                <div className="w-full h-8 border-b-2 border-b-white">
                  <span className="font-geist"> Popular Categories </span>
                </div>
                <CategoryItem  cdata={cdata} />
              </div>
            )}
            <div>
              <Link href={"/products"}>Products</Link>
            </div>
            <div>
              <Link href={"/delivery"}>Delivery</Link>
            </div>
          </div>
          <div className="flex justify-center  relative gap-2 lg:w-[30%]  h-full  items-center">
            <form  onSubmit={(e)=>{ e.preventDefault();  setIsSearch(false); searchValue?router.push(`/search/${searchValue}`):""}}className="md:h-full  flex items-center w-full">
            <input type="text" onChange={(e)=>setSearchValue(e.target.value)} role="search" onClick={()=>setIsSearch(true)} placeholder="Search..." className="h-[30%]  text-xs md:text-sm font-light  p-1  lg:p-4  rounded-lg  lg:font-mono lg:h-[60%] sm:w-full sm:h-[40%]   bg-opacity-50 px-2 lg:py-1 sm:py-1 md:py-0 border  resize-none bg-slate-200  overflow-hidden outline-none"></input>
            </form>
            <IoSearchOutline onClick={()=>{setSearchButton(true); 
              searchValue?router.push(`/search/${searchValue}`):""
            }} className="absolute right-[5%] lg:right-[6%] text-white  cursor-pointer  h-5 p-1 w-5 lg:h-6 lg:w-6 rounded-full bg-teal-500    shadow-lg" />
            
            {isSearch && (
              <SearchItems searchRef={searchRef}  setIsSearch={setIsSearch} searchValue={searchValue} />
              )}            
          </div>
          <div className="sm:flex flex-row p-1 justify-center items-center gap-2 hidden">
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
          {/* Sidebar */}
  <div className={`flex flex-col sm:hidden rounded-l-lg text-2xl transition-all  duration-100 right-0  border border-r-0 border-t-0 border-teal-700 text-black  ${Sidebar?"animate-movemenu ":"animate-movemenu2 "} fixed   h-screen z-50 font-geist w-[100%]  gap-5  bg-gradient-to-r from-teal-600 to-sky-700   justify-start items-center  `}>
            <div className="  p-2 w-full    flex  justify-between  bg-slate-100 ">
     <Image src={AppAssests.logo} alt="logo" className="w-[10%]  h-full"/>
    <button
      onClick={toggleSidebar}
      className="text-white  hover:bg-teal-800 bg-gradient-to-r from-teal-500 to-sky-700  p-1 rounded-sm transition mr-2 duration-300">
      <FaBars />
    </button>
  </div>
              <button onClick={toggleCategory} className="hover:bg-white w-[80%]    hover:bg-opacity-70 hover:rounded-md    p-2 m-2 ">
                <div    className="flex flex-row gap-1 justify-center items-center">
                  <span >Categories</span>
                  {category ? <FaChevronDown  className="  -rotate-180 transition-all duration-700"/> : <FaChevronDown  className="transition-all  duration-700"/>}
                </div>
              </button>
              {category && (
                <div   className="absolute z-10  duration-700 text-black rounded-xl flex flex-wrap w-[81%] right-9 bg-opacity-70 sm:hidden justify-center flex-row p-1 sm:p-2  top-32 bg-[#5aa] border gap-1">
                  <CategoryItem   cdata={cdata} />
                </div>
              )}
              <button  onClick={toggleSidebar} className="hover:bg-white  hover:rounded-md  hover:bg-opacity-70 p-2 m-2 w-[80%]">
                <Link href={"/products"}>Products</Link>
              </button>
              <button  onClick={toggleSidebar} className="hover:bg-white  hover:rounded-md   hover:bg-opacity-70 p-2 m-2 w-[80%] ">
                <Link href={"/delivery"}>Delivery</Link>
              </button>

              <div className="flex gap-5 flex-col w-[80%] ">
                <button  onClick={toggleSidebar} className="hover:bg-white   hover:bg-opacity-70 hover:rounded-md p-2  flex m-2 gap-1   justify-center items-center">
                  <Link href={"/account"}>
                    <div className="flex flex-row gap-1 justify-center items-center">
                      <VscAccount className="size-7" />
                      Account
                    </div>
                  </Link>
                </button>
                <button  onClick={toggleSidebar} className="hover:bg-white  hover:bg-opacity-70  hover:rounded-md  p-2 flex m-2 gap-1  justify-center items-center">
                  <Link href={"/cart"}>
                    <div className="flex flex-row gap-1 justify-center  items-center">
                      <IoCartOutline className="size-8" />
                      Cart
                    </div>
                  </Link>
                </button>
              </div>
            </div>
            
          
        
      </>
    );
  }
