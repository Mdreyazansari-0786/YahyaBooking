import React from 'react'

const Herobannerf = () => {
  return (
    <div>
    <div className="relative bg-center bg-cover h-[50vh]" style={{backgroundImage: "url(https://yahya.xendekweb.com/wp-content/uploads/2018/10/14-6.jpg)"}}>
        <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
        <div className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white text-left">
        <h1 className="text-[30px] font-bold">Welcome to My Website</h1>
        <p className="mt-4 text-[13px] w-[74%]">Visit YahYa Tours Corporation Today and Start Planning Your Dream Vacation! With
         Flight Search, Hotels, Car Rentals, Activities, and More, YahYa Tours Corporation Has 
         Everything You Need to Make Your Travel Experience Unforgettable. 
        Don’t Wait – Book Now and Get Exclusive Gifts and the Best Service Guarantee!”</p>
        {/* <button className="mt-8 bg-white text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-300 hover:text-gray-900 transition duration-200 ease-in-out">Get Started</button> */}
         </div>
</div>
    </div>
  )
}

export default Herobannerf