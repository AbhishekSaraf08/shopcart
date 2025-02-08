import Products from '@/components/Home/Products';
import React from 'react'
interface IParams{
    value:any;

}
const page = ({params}:any) => {
    const {value}:IParams = React.use(params);
  return (
    <div className=" mt-20  flex flex-wrap   justify-start md:justify-evenly lg:justify-start ml-10 md:ml-0  lg:ml-5 w-full   items-start  gap-5">
    <Products searchValue={value}/>
    </div>
  )
}

export default page