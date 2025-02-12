"use client";
import React, { useState } from 'react'
import Products from '@/components/Home/Products';
const page = () => {
    let categories= ["all","beauty","fragrances","furniture","groceries","home-decoration","kitchen-accessories","laptops","mens-shirts","mens-shoes","mens-watches","mobile-accessories","motorcycle","skin-care","smartphones","sports-accessories","sunglasses","tablets","tops","vehicle","womens-bags","womens-dresses","womens-jewellery","womens-shoes","womens-watches"]
      const [category,setCategory]= useState("all");
      const [sortBy, setSortBy] = useState("title");
      const [discount, setDiscount] = useState('');
    
      let disvalues =[
        {
          id:'',value:"",text:"All"
        },
        {
        id:'10',value:10,text:"Up to 10% off"
      },
      {
        id:'20',value:20,text:"Up to 20% off"
      },
      {
        id:'30',value:30,text:"Up to 30% off"
      },
      {
        id:'40',value:40,text:"Up to 40% off"
      },
      {
        id:'50',value:50,text:"50%  or more"
      }
    ];
 
    let availvalues=["In Stock" ,"Low Stock" , "Out of Stock"];
  
      const [selectedAvailabilities, setSelectedAvailabilities] = useState<string[]>([]);

      
      const handleAvailabilityChange = (value: string) => {
        setSelectedAvailabilities((prevSelected) =>
          prevSelected.includes(value)
            ? prevSelected.filter((item) => item !== value) 
            : [...prevSelected, value] 
        );
      };
      

      const handleSortChange = (e:any) => {
        setSortBy(e.target.value);
      };
    return (
    <div className='flex w-full '>
        <div className='w-[25%] shadow-xl border-teal-600 rounded-r-md  md:w-[15%]  p-2   flex-col  border border-l-0  flex gap-2  mt-20 '>
          
          <div>
            <label  htmlFor='category' className='font-geist text-sm'>Category</label>
             <select value={category}  id='category'  onChange={(e) => setCategory(e.target.value)} className=' text-xs   rounded-md w-full h-7   bg-slate-200 p-1 '>
            
              {
                categories.map((item,index)=>(
                    <option  key={index}  value={item} className='text-xs'>{item.toUpperCase()}</option>
                ))
              }
             </select>
           
             </div>
             <div>
             <label  htmlFor='sort' className='font-geist text-sm'>Sort By</label>
             <select  id='sort'
          className='rounded-md bg-slate-200  text-xs  h-7  w-full  p-1' 
          value={sortBy}
          onChange={handleSortChange}
        >
         
          <option  value="title" className='text-xs'>Sort by Title (A-Z)</option>
          <option value="rating" className='text-xs'>Sort by Rating (High to Low)</option>
          <option value="price-low" className='text-xs'>Sort by Price (Low to High)</option>
          <option value="price-high" className='text-xs'>Sort by Price (High to Low)</option>
        </select>
              </div>  
              <div >
                <label htmlFor='discount' className='font-geist text-sm'>Discount</label>
                <form  className='ml-2'>
                   {

                    disvalues.map((item,index)=>(
                      <div key={index} className='  flex gap-1'>
                      <input type='radio' name='discount' id={item.id} value={item.value}  onChange={(e)=>setDiscount(e.target.value)}/>
                      <label className='text-xs w-full' htmlFor={item.id}>{item.text}</label>
                      </div>
                    ))
                   }
                
                  </form>
                </div>  
                <div>
                  <label className='font-geist text-sm'>Availability</label>
                  <form  className='ml-2'>
                   {

                    availvalues.map((item,index)=>(
                      <div key={index} className='  flex gap-1'>
                      <input type='checkbox'  id={item} value={item} checked={selectedAvailabilities.includes(item)}
                         onChange={() => handleAvailabilityChange(item)} />
                      <label className='text-xs w-full' htmlFor={item}>{item}</label>
                      </div>
                    ))
                   }
                
                  </form>

                  </div>  
              </div>
              <div className=" mt-20 w-[75%]  md:w-[85%]   flex  flex-wrap  h-full  justify-evenly md:justify-evenly lg:justify-start  md:ml-0  lg:ml-5    items-start  gap-5">
            <Products category={category === "all" ? undefined : category} sortBy={sortBy} discount={discount} availability={selectedAvailabilities}  />
     
        </div>
        </div>
        
  )
}

export default page