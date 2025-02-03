import React from 'react'
 import Image from 'next/image'
 import { AppAssests } from '@/constants/Assests'
const Bcards = () => {
  const cards=[
 {title:"Frequently Asked Questions" , image:AppAssests.faq , bg:"bg-yellow-300 bg-opacity-20",tcolor:"text-yellow-500"},
 {title:"Online Payment Process" ,   image:AppAssests.onlinepay , bg:"bg-red-600 bg-opacity-20",tcolor:"text-teal-400 text-opacity-80"},
 {title:"Home Delivery Options" ,   image:AppAssests.delivery , bg:"bg-stone-300 bg-opacity-30",tcolor:"text-stone-500"}
 
  ]
 
   return (
 
     <div className='flex flex-col p-3'>
     <h1 className="w-full  text-xl md:text-2xl  font-exo_2 font-bold">
           Services To Help You Shop 
         </h1>
     
 
     <div className=' mt-3   flex flex-row  flex-wrap  justify-between'>
        
        {
         cards.map((item,index)=>(
           <div
           key={index}
           className="max-w-[31%]  md:max-w-[200px]  lg:min-w-[30%] ">
           <div className={`h-full flex flex-col  justify-between rounded-lg  shadow-md md:gap-2 bg-stone-300 bg-opacity-50`}>
             <div className="flex flex-col gap-2  px-1 md:px-2 py-1 md:py-2">
               
                 <span className={`font-geist text-sm md:text-xl relative gap-2 ${item.tcolor}`}>
                   <span className="">{item.title}</span>
                 </span>
               
               <p className="text-xs font-exo_2  md:font-bold">Updtes on safe Shopping in our Stores</p>
             </div>
             <div className="relative  rounded-b-lg  overflow-hidden">
               <div className=" rounded-b-lg  transform ease-in-out transition-all">
                 <Image
                   src={item.image}
                   alt="image"
                   quality={100}
                   className="  cursor-pointer hover:scale-110  min-h-30 lg:max-h-52  duration-500 rounded-b-lg  w-full h-full"
                   layout=''
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

export default Bcards