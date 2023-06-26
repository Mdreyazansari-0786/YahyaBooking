import React from 'react';
// import back from '../Images/bag.jpg'
import {AiFillStar} from 'react-icons/ai'
import {MdOutlineKeyboardDoubleArrowDown} from 'react-icons/md'
const Herobanner = () => {
    return(
      <div className="relative bg-center bg-cover h-[88vh]" style={{backgroundImage: "url('https://yahya.xendekweb.com/wp-content/uploads/2018/10/22-6.jpg')"}}>
      <div className="absolute mt-10 inset-0 bg-gray-900 opacity-50 w-full"></div>
      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <span className='flex items-center justify-center gap-2 text-2xl'><AiFillStar /><AiFillStar className='text-yellow-500' /><AiFillStar/></span>
        <h1 className="text-5xl font-bold">Discover Your Dream Destination with YahYa Tours</h1>
        <h1 className="text-3xl mt-5 font-bold">Corporation</h1>

        <p className="mt-8 text-sm">Let's start exploring the world together with YahYa</p>
        

      </div>
    <button className="text-white absolute bottom-0 left-[46%] mt-8 bg-[#3aaced] py-2 px-4 rounded-md hover:bg-orange-300  hover:text-gray-900 transition duration-200 ease-in-out w-36 h-12 items-center justify-center text-2xl"><MdOutlineKeyboardDoubleArrowDown className='ml-12' /></button>
    </div>
  );

}
export default Herobanner;
