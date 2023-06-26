import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'
import {IoPricetagsOutline} from 'react-icons/io5'


function Card1({img,title,des}) {
  return (
    <div className="inline-block bg-white shadow-md w-[32%] p-6">
      <img src={img} alt="Card" className="w-full mr-4 rounded-md" />
      <div className="inline-block flex-col justify-center">
        <h2 className="text-[18px] font-bold py-4 text-[#18458b] hover:text-[#3aaced]">{title}</h2>
        <hr />
        <p className="text-[#878c9f] mb-2 text-[13px]">{des}</p>
        <div className='flex items-center gap-3 py-4'><FaUserCircle className='text-[gray] text-4xl'/> <span className='text-[gray]'> By, yahya</span></div>
        <hr />
        <div className='flex items-center py-4 gap-4' ><BsFillCalendarCheckFill className='text-orange-300'/><span className='text-[gray] text-sm'>June 7, 2019</span><AiOutlineEye className='text-orange-300'/> <span className='text-[gray] text-sm'>742</span><IoPricetagsOutline className='text-orange-300'/><span className='text-[gray] text-sm'>Adventure</span></div>
        {/* <p className="text-gray-500 text-sm">Date</p> */}
      </div>
    </div>
  )
}

export default Card1