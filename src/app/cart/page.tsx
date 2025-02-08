import React from 'react'

 const Cart = () => {
  return (
    <div className="container mx-auto px-4 mt-16 h-screen py-6">
    <h1 className="text-3xl font-semibold mb-6 text-teal-600 font-exo_2">Shopping Cart</h1>
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
          <div className="flex sm:flex-row  items-center gap-4">
            <img
              src="default.jpg"
              alt="Product"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="sm:ml-4 w-28">
              <h3 className="text-xl font-medium">Product 1</h3>
              <p className="text-gray-600 ">$29.99 each</p>
            </div>
          </div>

          <div className="flex sm:flex-col md:flex-row gap-4 items-center  w-full md:justify-evenly">
  <div className="flex items-center gap-2 ">
    <button className="bg-gray-200 p-2 rounded-full text-sm">-</button>
    <span className="text-lg">2</span>
    <button className="bg-gray-200 p-2 rounded-full text-sm">+</button>
  </div>

 

  
  <p className="text-xl font-semibold text-right flex-shrink-0">$59.98</p>
</div>


        
          <button className="text-red-500 hover:text-red-700 mt-4 sm:mt-0">
            Remove
          </button>
        </div>
      </div>

      {/* Cart Summary Section */}
      <div className="lg:w-1/4 bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Cart Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="text-lg">Subtotal</p>
            <p className="text-lg font-semibold">$91.47</p>
          </div>

          <div className="flex justify-between">
            <p className="text-lg">Shipping</p>
            <p className="text-lg font-semibold">$5.00</p>
          </div>

          <div className="flex justify-between mt-4">
            <p className="text-xl font-semibold">Total</p>
            <p className="text-xl font-semibold">$96.47</p>
          </div>
        </div>

        <button className="w-full lg:w-full  mt-6 bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 md:w-auto md:px-8">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default Cart
