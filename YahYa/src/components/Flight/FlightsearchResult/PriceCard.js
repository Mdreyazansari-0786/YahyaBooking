import React, { useState } from 'react'
import {BiCabinet} from 'react-icons/bi'
import Popuppage from './Popuppage';

function PriceCard({title,logo}) {
  const[showModel,setShowModel]=useState(false);
  const handleOnclose=()=>setShowModel(false);

  return (
    <>

    
    <div className="card flex overflow-hidden shadow-lg justify-between mb-4 py-2 w-full px-4 border-2 border-gray-200">
            <div className="fit flex py-4 justify-between w-[60%] gap-20 border-r-2 border-b-gray-300 px-4">
            <div>
                <div><img width="30px" src={logo} alt="" /></div>
                <span className='text-[12px] text-[#1a1a1a]'>{title}</span>
            </div>
            <div>
                <p className='text-[16px] font-bold'>11:20</p>
                <span className='text-[12px] text-[#1a1a1a]'>PNQ . 14 Jul</span>
            </div>
            <div>
                <p className='text-[12px] text-[#1a1a1a]'>1h 05m</p>
                <hr className='h-px mt-1 bg-[gray] border-0' />
                <span className='text-[12px] text-[#1a1a1a]'>Direct</span>
            </div>
            <div>
                <p className='text-[16px] text-[#1a1a1a] font-bold'>12:45</p>
                <span className='text-[12px] text-[#1a1a1a]'>BOM . 14 Jul</span>
            </div>
            </div>

            <div className=" inline-block text-end px-14 pr-3 items-end justify-end w-[40%]">
                <div className='flex items-end py-3 px-3 justify-end gap-2'>
                    <BiCabinet/>
                    <BiCabinet/>
                    <BiCabinet/>
                </div>
                <div className='px-3 pr-1'>
                    <span className='text-[12px] text-[#474747] px-10 pr-0'>Included: personal item, cabin bag, checked bag</span>
                </div>
                <div>
                    <p className='text-[20px] font-bold'>INR4,456.32</p>
                    <span className='text-[12px] text-[#474747]'>Total price for all travellers</span>
                </div>
                <div className='mb-4 mt-3 items-center text-center'>
                    <button onClick={()=>setShowModel(true)} className='text-center bg-transparent border-2 border-blue-700 outline-none py-2 w-full'>See flight</button>
                </div>
            </div>    
    </div>
    <Popuppage onClose={handleOnclose} visible={showModel} />
    </>
  )
}

export default PriceCard