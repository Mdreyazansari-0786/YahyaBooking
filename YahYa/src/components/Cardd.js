import React from 'react';
import {FaParking,FaUserCircle} from 'react-icons/fa'
import {MdLocationPin} from 'react-icons/md'
import {AiOutlineWifi,AiFillStar,AiOutlineStar,AiOutlineHeart} from 'react-icons/ai'
import {GrMapLocation} from 'react-icons/gr'
import {CiLocationOn} from 'react-icons/ci'
import {HiArrowsRightLeft} from 'react-icons/hi2'
import './scrolling.css'
const Cardd = ({ photo, description, date }) => {
  return (
    <div className="mainm w-[100%] gap-10 py-7">
    <div className=" w-[330px] rounded-lg shadow-md m-5 relative overflow-hidden ">
      <div className='w-full h-[30vh] overflow-hidden'><img src={photo} alt="Card" className="card__image cursor-pointer hover:scale-125 transition-all overflow-hidden duration-500" /></div>

    <div className='flex w-[320PX] ml-1 justify-between items-center absolute -my-14 top-42 px-2 bg-fixed'>
      <div className='flex text-[orange]'><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></div>
      <div className='flex gap-2'>
        <div>
          <p className='text-[13px]'>Good</p>
          <span className='text-[11px]'>1 comment</span>
        </div>
        <div className='w-10 h-10 items-center flex text-center justify-center bg-[#18458b] rounded-tr-lg rounded-bl-lg'>4.0</div>
      </div>
    </div>

    <div className='absolute top-8 left-4 text-gray-400'><FaUserCircle className='bg-white cursor-pointer rounded-full text' size={32}/></div>




      <div className="card__content py-4 px-5">
        <div className='flex items-center justify-between pb-2'>
            <h3 className='text-[#46a5dc] text-[18px] font-bold'>City Tour</h3>
            <div className='text-[orange]' ><GrMapLocation size={28}/></div>
        </div>
        <p className='flex py-3 justify-start text-[13px] gap-4 text-[#999999]'><span><MdLocationPin color='orange' size={24} /></span>1327 INTERVALE AVE, BRONX,NY 10459,USA</p>
        <hr className='mt-3 mb-3 h-px my-4 bg-gray-200 border-0 dark:bg-gray-200' />
        <p className="card__description text-[12px] text-[#999999]">{description}</p>
        <div className='flex items-center gap-4 mt-3 mb-3 text-[gray]'><FaParking/><AiOutlineWifi/><FaParking/><AiOutlineWifi/><FaParking/>
            </div>
            <hr className='mt-3 mb-3 h-px my-8 bg-gray-200 border-0 dark:bg-gray-200' />
        <div className='flex justify-between'>
            <div className='text-[#999999] bg-gray-100 px-2 py-2 h-10'>AWS/NIGHT <span className='text-[#46a5dc]'>$ 50.00</span></div>
            <div className='flex gap-4 text-gray-500'>
                <div className='bg-gray-100 px-2 py-2 h-8 object-contain'><AiOutlineHeart/></div>
                <div className='inline-block gap-4 bg-gray-100 px-2 py-2'>
                    <div className='mb-2'><CiLocationOn/></div>
                    <div><HiArrowsRightLeft/></div>
                </div>
            </div>
        </div>
        {/* <p className="card__date">{date}</p> */}
      </div>
    </div>
    </div>
  );
};

export default Cardd;
