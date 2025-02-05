    import React from 'react'
    import Link from 'next/link'
    import useProducts from './useProducts'
    import Image from 'next/image'
    interface ISearchItems{
        searchValue:String
        searchRef:any
        setIsSearch:any
    }
    const SearchItems = ({searchValue,searchRef,setIsSearch}:ISearchItems) => {
        const { products, loading, error } = useProducts();
        
        if(searchValue){
        const filteredProducts = products.filter((item: any) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()) 
        );
        if (error) {
            return <div className="text-sm  lg:top-14 absolute top-11 bg-slate-200 w-full p-2 text-center text-red-500">{error}</div>;
        }
        if ( searchValue && filteredProducts.length === 0) {
            return (
            <div className="text-sm  lg:top-14 absolute top-11 text-center font-geist bg-slate-200 w-full p-2 text-teal-600">
                No products available
            </div>
            );
        }
    return (
        
     <div ref={searchRef} className=  "absolute  max-h-96 border border-teal-600 border-t-0  top-11 rounded-b-md lg:top-12    w-full  overflow-y-scroll scrollbar-hide overflow-x-hidden  p-2    bg-white text-black">
       <h1 className='text-lg font-geist'>Products</h1>
        { searchValue && filteredProducts.map(
            (item: any,index) =>
            (
              //  <div
              //  key={item.id} className=' flex flex-row justify-start gap-4 duration-700 transform hover:scale-105 w-full ease-in-out object-cover'> 
                <Link  key={index} href={`/product/${item.id}`} onClick={()=>setIsSearch(false)}  className=" flex flex-row  gap-4  border border-b-2  p-2 max-h-20 hover:shadow-xl duration-700 transform hover:scale-105  ease-in-out object-cover">
                  <Image src={item.thumbnail} alt={item.title} height={50} width={50} className="  rounded-md " />
                 <h2 className="font-geist overflow-hidden ">{item.title}</h2>       
                                   
                  
                </Link>
//</div>
            
            
        ))
        }
          </div>
    
        

    )
        }
    }

    export default SearchItems;