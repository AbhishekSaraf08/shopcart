    import React from 'react'
    import Link from 'next/link'
    import { FcRating } from 'react-icons/fc'
    import useProducts from './useProducts'
    import Image from 'next/image'
    interface ISearchItems{
        searchValue:String
        searchRef?:any
    }
    const SearchItems = ({searchValue,searchRef}:ISearchItems) => {
        const { products, loading, error } = useProducts();
        
        if(searchValue){
        const filteredProducts = products.filter((item: any) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()) 
        );
        if (error) {
            return <div className="text-center text-red-500">{error}</div>;
        }
        if ( searchValue && filteredProducts.length === 0) {
            return (
            <div className="text-sm  lg:top-14 absolute top-11 bg-slate-200 w-full p-2 text-red-500">
                No products available
            </div>
            );
        }
    return (
    
     <div ref={searchRef} onClick={(e:any)=>e.preventDefault()} className="   absolute  max-h-96  top-11 rounded-b-md lg:top-14    w-full  overflow-y-scroll     bg-slate-200 text-black">
        {searchValue && filteredProducts.map(
            (item: any) =>
            (
              //  <div
              //  key={item.id} className=' flex flex-row justify-start gap-4 duration-700 transform hover:scale-105 w-full ease-in-out object-cover'>
                
                <Link href={`/product/${item.id}`} onClick={(e)=>e.stopPropagation()} className=" flex flex-row  gap-4   p-2 max-h-20 hover:shadow-xl duration-700 transform hover:scale-100  ease-in-out object-cover   ">
                    
                  <Image src={item.thumbnail} alt={item.title} height={50} width={50} className="  rounded-md " />
                 <h2 className="font-geist overflow-hidden t">{item.title}</h2>       
                                    
                  
                </Link>
//</div>
            
            
        ))
        }
          </div>
    
        

    )
        }
    }

    export default SearchItems;