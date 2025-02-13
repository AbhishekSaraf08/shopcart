import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AppAssests } from '@/constants/Assests'

const Account = () => {
  return (
    <div className="flex  w-full    mt-14 md:mt-16  justify-center flex-col md:flex-row">
   
    <nav className="bg-teal-600 flex md:justify-center  text-white w-full md:w-1/4  md:p-4 md:h-screen">
      <ul className='flex flex-row  w-full   items-center  md:flex-col gap-4'>
        <li className=" border  h-full md:w-full  md:h-12 bg-slate-100 p-2 text-center">
          <Link href="#" className="hover:text-blue-400 text-black font-geist">Dashboard</Link>
        </li>
        <li className="">
          <Link href="#" className="hover:text-blue-400">Profile</Link>
        </li>
        <li className="">
          <Link href="#" className="hover:text-blue-400">Settings</Link>
        </li>
        <li className="">
          <Link href="#" className="hover:text-blue-400">Security</Link>
        </li>
        
      </ul>
    </nav>
    <div className="bg-gray-100 w-full md:w-3/4 p-4">
      <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 mb-3 border-gray-300">
              <Image
                src={AppAssests.account}
                width={200}
                height={200}
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
      <div className="space-y-4">
       
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Personal Information</h3>
          <p><strong>Name:</strong> Abhishek</p>
          <p><strong>Email:</strong> abhi@gmail.com</p>
          <p><strong>Phone:</strong> 9876543210</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Security</h3>
          <p><strong>Two-Factor Authentication:</strong> Enabled</p>
          <p><strong>Password:</strong> Updated Just Now</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Account