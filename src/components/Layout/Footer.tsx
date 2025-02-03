import React from 'react'
import Image from 'next/image'
import { AppAssests } from '@/constants/Assests'
import { FaFacebookSquare,FaLinkedin,FaTwitter,FaInstagram } from "react-icons/fa";

import Link from 'next/link'
export const Footer = () => {
  return (
    <div className='font-exo_2   w-screen h-full      text-white mt-10 shadow-lg bg-black bg-opacity-80 p-4'>
    <div className='h-full w-full  p-2 flex md:justify-between md:flex-row flex-col gap-8'>
<div className='flex  flex-col  sm:w-[25%] gap-5 md:justify-between'>
<div className="   h-[30%] mt-1   gap-2 flex  flex-row items-center md:ml-5 ">
<Image src={AppAssests.logo} alt="logo" className=" ml-2 h-full w-[12%] md:w-[30%] lg:w-[16%] " />
  <Link href={"/"}>
  <div className="flex font-exo_2 justify-center   items-center  md:mt-2 text-3xl font-bold text-teal-500 opacity-90"> Shopcart</div>
  </Link>
</div>
<div className='grid grid-rows-2 grid-cols-2 text-gray-400 md:ml-5 text-xs'   >
  <p className='col-span-2'>@2025 Shopcart by Shopcart,Inc.</p>
  <p className='col-span-2'>
    <span className='hover:cursor-pointer hover:text-white hover:underline transition-all duration-300' >Terms of Service</span> | <span className='hover:cursor-pointer hover:text-white hover:underline transition-all duration-300'>Privacy Policy</span>
  </p>
</div>
</div>
<div className='flex w-full md:w-1/3 justify-between   '>
<div className='grid grid-rows-6 h-fit text-sm text-gray-400  hover:cursor-pointer'>
<h1 className='text-lg text-white row-span-2 hover:cursor-text'>Products</h1>
<p className='hover:text-white hover:underline transition-all duration-300'>Cloths</p>
<p className='hover:text-white hover:underline transition-all duration-300'>Electronics</p>
<p className='hover:text-white hover:underline transition-all duration-300'>Accessories</p>
<p className='hover:text-white hover:underline transition-all duration-300'>Stationery</p>
</div>
<div className='grid  h-fit grid-rows-5 text-sm text-gray-400  hover:cursor-pointer'>
<h1 className='text-lg text-white row-span-2 hover:cursor-text'>About Us</h1>
<p className='hover:text-white hover:underline transition-all duration-300'>About ShopCart</p>
<p className='hover:text-white hover:underline transition-all duration-300'>Contact Us</p>
<p className='hover:text-white hover:underline transition-all duration-300'>Blog</p>
  </div>
  </div>
<div className='grid grid-rows-2  h-fit gap-2 md:gap-3 '>
  <h1 className='text-lg'>Get in Touch</h1>
  <div className='row-span-2'>
  <p className='text-xs text-gray-400'>Questions or feeback?</p>
  <p className="text-xs text-gray-400">We'd Love To hear from you</p>
  </div>
  <div className='flex justify-start text-xl gap-5'>
    <Link href={"https://www.facebook.com/"}>
    <FaFacebookSquare className='hover:cursor-pointer hover:scale-110 transition-all duration-200' />
    </Link>
    <Link href={"https://www.twitter.com/"}>
    <FaTwitter className='hover:cursor-pointer hover:scale-110 transition-all duration-300'/>
    </Link>
    <Link href={"https://www.linkedin.com/"}>
    <FaLinkedin className='hover:cursor-pointer hover:scale-110 transition-all duration-300'/>
    </Link>
    <Link href={"https://www.instagram.com/"}>
    <FaInstagram className='hover:cursor-pointer hover:scale-110 transition-all duration-300'/>
    </Link>
  </div>
  </div>

</div>
<hr/>
<p className='text-[10px]   text-gray-400 text-center  w-full'>Copyright @ 2025 Shopcart Inc. All Rights Reserved.</p>
 </div>
 
  )
}
 