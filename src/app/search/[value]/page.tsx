import Products from '@/components/Home/Products';
import React from 'react'
interface IParams{
    value:any;

}
const page = ({params}:any) => {
    const {value}:IParams = React.use(params);
  return (
    <div className="flex py-5 flex-wrap w-[90%] mt-10 md:mt-14  justify-center items-start gap-5 ">
    <Products searchValue={value}/>
    </div>
  )
}

export default page