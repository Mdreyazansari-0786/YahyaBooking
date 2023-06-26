import React from 'react'
import './common1.css'
import {AiFillStar} from 'react-icons/ai'
const Common=({title,des})=> {
  return (
    <div className='containerr'>
        <div className="star"><AiFillStar className='text-gray-400 text-xl'/><AiFillStar className='text-yellow-600 text-3xl -my-2' /><AiFillStar className='text-gray-400 text-xl'/></div>
        <h3 className='text-[24px] font-bold py-3 text-[#18458b]'>{title}</h3>
        <div className='line'></div>
        <p>{des}</p>
    </div>
  )
}

export default Common