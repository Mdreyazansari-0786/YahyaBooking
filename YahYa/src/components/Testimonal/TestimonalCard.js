import React from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {BsBadgeAd} from 'react-icons/bs'
import './testi.css'
const TestimonalCard = ({ photo, description}) => {
  return (
    <div className="mainm w-[100%] gap-10 py-10">
    <div className=" w-[380px] pb-4 rounded-lg shadow-md m-5 relative hover:bg-black bg-[#ecf6f8] transition-all duration-2000 items-center text-left justify-center ">

      <div className='w-[84px] h-20 rounded-full mx-50 absolute border-[4px] items-center flex -top-12 left-[20%]'>
      <img src={photo} alt="Card" className=" w-20 h-20 rounded-full" />
      </div>

  


      <div className='flex items-center justify-between px-8 py-6'>
        <div><BsBadgeAd size={50} /></div>
        <div className='flex text-[orange]'><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></div>
      </div>
      <div className="card__content px-14">

          <h3 className='text-[#46a5dc] text-[18px] pb-4 font-bold'>ANTONY MOORE.</h3>
        <i className="card__description text-[13px] text-[#999999] leading-none">{description}</i>
        <div className=''><BsBadgeAd size={50} /></div>
      </div>
    </div>
    </div>
  );
};

export default TestimonalCard;
