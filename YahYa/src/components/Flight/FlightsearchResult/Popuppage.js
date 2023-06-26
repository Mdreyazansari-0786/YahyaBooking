import React from 'react'
import {RxCross1} from 'react-icons/rx';
function Popuppage({visible,onClose}) {
    if(!visible) return null;
  return (
    <div className='fixed inset-0 bg-opacity-30 w-full backdrop-blur-sm py-[130px] left-auto right-0 items-center'>
        <div className='bg-white shadow-lg border-2 border-gray-300 py-5 inline-block px-4 w-[60%] ml-[20%] rounded-md'>

            <div className='flex items-center justify-between' >
            <div><h1 className='font-bold text-[20px]'>Your flight to Mumbai</h1></div>
            <div className=' px-3 py-2 hover:bg-gray-300 ease-in duration-300' ><button onClick={onClose}><RxCross1/></button></div>
            </div>
            <div className='py-4 mt-2 mb-2 rounded-md px-3 items-start text-[#008234] border-2 border-gray-200 shadow-md justify-start'>
            10% lower CO2 emissions than the average of all flights we offer for this route
            </div>
            <div className='inline-block'>
                <h3 className='font-bold text-[20px] text-[#1a1a1a]'>Flight to Munich</h3>
                <p className='text-[#474747] text-[14px]'>1 stop . 13h 15m</p>
            </div>   
            <div className='flex justify-between mt-3 items-center'>
            <div className='inline-block'>
                    <h1 className='font-bold text-[20px] text-[#1a1a1a]'>INR109,003.42</h1>
                    <p className='text-[#474747] text-[14px]'>Total price for all travellers</p>
            </div>
            <div>
                <button className='text-[#fff] bg-blue-600 text-center py-2 px-3 rounded-sm' >Select</button>
            </div>
            </div>   

        </div>
    </div>
  )
}

export default Popuppage