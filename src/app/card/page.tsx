import React from 'react'
import Image from 'next/image'
import { AppAssests } from '@/constants/Assests'
import { CiHeart } from "react-icons/ci";
import { LuSquareParking } from "react-icons/lu";
import { MdHealthAndSafety } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
const page = () => {

   const originalArray = [1, 2, 3, 4, 5, 6];

const evenMapped = originalArray.map(num => {
  if (num % 2 === 0) {
    return num;
  } else {
    return null; // or undefined
  }
});
console.log(evenMapped)

  return (
    <div className='felx h-100 mt-20 w-90 justify-center align-center border shadow-md shadow-black border-gray-300 '>
        <div >

            <Image src={AppAssests.salon} alt="Salon" width='300' height='100' />

        </div>
        <div className='flex flex-col justify-evenly m-4 '>
            <p className='text-xl text-bold flex justify-between '>Ritu Beauty Institution <span><CiHeart/></span> </p>
            <p className='text-gray-300 text-md'>Salon for men  <span>3 km</span> </p>
            <p className='text-sm'>Price Starts For 300/-</p>
            <div>
                <ul className='text-xs flex justify-evenly text-grey-300'>
                   
                    <li className='flex'><span className='mr-1'><LuSquareParking className='size-4'/></span>Parking</li>

                    <li className='flex'><span className='mr-1'><MdHealthAndSafety className='size-4'/></span>Healthy</li>
                    <li className='flex'><span className='mr-1'><IoFastFoodOutline className='size-4'/></span>Food</li>
                </ul>
            </div>


        </div>
      
    </div>
  )
}

export default page
