import React from 'react' 
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  var settings = {
    dots:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1800
    
    
  
  };
  return (
    
     
     <Slider {...settings} className="     overflow-hidden  rounded-t-lg md:rounded-t-xl font-exo_2    md:mt-14  lg:mt-20 mt-10  h-full  shadow-2xl ">
       <div className='bg-banner md:rounded-t-xl  bg-cover   h-full w-full bg-center bg-blend-multiply'>
      <div className="text-white    font-bold  flex   flex-col gap-4     p-2  w-[50%]    lg:ml-20 ml-5  mt-5  md:mt-8 lg:mt-10" >
        <span className="   text-2xl md:text-4xl ">Welcome!</span>
        <p className=" md:text-xl">Grab Upto 70% off on Selected Products!!</p>
        <span>
        <button className=" text-teal-400  text-xs md:text-base font-bold  hover:bg-slate-200 bg-slate-100   transition-all duration-300  shadow-lg rounded-3xl hover:scale-105  focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800   px-5 py-2.5 text-center me-2 mb-2">Buy Now</button>
        </span>  
      </div>
      </div>
      <div className=' bg-banner2 bg-cover md:rounded-t-xl h-full w-full bg-center bg-blend-multiply '>
      <div className="text-white    font-bold  flex   flex-col gap-4     p-2  w-[50%]    lg:ml-20 ml-5  mt-5  md:mt-8 lg:mt-10" >
        <span className="   text-2xl md:text-4xl ">Groceries</span>
        <p className=" md:text-xl">Grab Upto 60% off on Selected Groceries!!</p>
        <span>
        <button className=" text-green-400  text-xs md:text-base font-bold  hover:bg-slate-200 bg-slate-100   transition-all duration-300  shadow-lg rounded-3xl hover:scale-105  focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800   px-5 py-2.5 text-center me-2 mb-2">Buy Now</button>
        </span>  
      </div>
      </div>
      <div className='bg-banner3 md:rounded-t-xl bg-cover h-full flex justify-end w-full bg-center bg-blend-multiply'>
  <div className="text-white font-bold flex flex-col gap-4 items-end p-2 w-[50%]   ml-auto   lg:mr-6 mt-5 md:mt-8 lg:mt-10">
    <span className="text-2xl md:text-4xl">Electronics</span>
    <p className="md:text-xl  text-end ">Grab Upto 60% off on Selected Electronics!!</p>
    <span>
      <button className="text-black text-xs md:text-base font-bold hover:bg-slate-200 bg-slate-100 transition-all duration-300 shadow-lg rounded-3xl hover:scale-105 focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 px-5 py-2.5 text-center me-2 mb-2">
        Buy Now
      </button>
    </span>
  </div>
</div>
      </Slider>
    
    
    
  )
}

export default Banner