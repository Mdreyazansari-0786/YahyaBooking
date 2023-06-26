import React from 'react'
import Common from './Common'
import Chosecard from './Chosecard'
// import { HiOutlineSparkles, HiOutlineHeart } from 'react-icons/hi';
import {BsGiftFill,BsFillCreditCard2BackFill,BsHeadphones} from 'react-icons/bs'
// import {BiSolidLike} from 'react-icons/bi5'
import {AiOutlineUsergroupAdd,AiTwotoneLike} from 'react-icons/ai'


function Chooseus() {
  return (
    <>
        <div className='bg-white'>   
        <Common title="Why Choose Us" des="Find Out Why YahYa Tours Corporation is Your Top Choice for Hassle-Free Travel Planning!" />
        
    <div className="flex gap-5 justify-center items-center px-[10%]">
      <Chosecard icon={<BsHeadphones size={64} />} title="Best service guarantee" description="YahYa Tours Corporation is committed to providing its customers with the best possible travel experience. As part of this commitment, the company offers a Best Service Guarantee." />
      <Chosecard icon={<BsGiftFill size={64} />} title="Exclusive gifts" description="YahYa Tours Corporation values its customers and wants to ensure that they have a memorable travel experience. To show their appreciation, the company offers exclusive gifts to customers who book their travel through the platform." />
      <Chosecard icon={<BsFillCreditCard2BackFill size={64} />} title="Get more from your card" description="YahYa Tours Corporation has partnerships with various banks and credit card companies, allowing customers to get more out of their cards. The company offers exclusive discounts and deals for customers who use their credit cards to book travel through the platform." />
    </div>
    
    <div className=" w-full px-[10%] flex gap-10 py-16">
        <div className="fff w-[24%] bg-[#ecf6f8] rounded-lg shadow-md p-8 inline-block items-center">
            <div className='flex items-center justify-between'>
            <div><span className='text-[#18458b] font-bold text-[34px]'>254</span></div>
            <div><AiOutlineUsergroupAdd size={64} className='text-[#3aaced]' /></div>
            </div>
            <p className='text-gray-500 text-[10px]'>New Visiters Every Week</p>
        </div>
        <div className="fff w-[24%] bg-[#ecf6f8] rounded-lg shadow-md p-8 inline-block items-center">
            <div className='flex items-center justify-between'>
            <div><span className='text-[#18458b] font-bold text-[34px]'>12168</span></div>
            <div><AiTwotoneLike size={64} className='text-[#3aaced]' /></div>
            </div>
            <p className='text-gray-500 text-[10px]'>New Visiters Every Week</p>
        </div><div className="fff w-[24%] bg-[#ecf6f8] rounded-lg shadow-md p-8 inline-block items-center">
            <div className='flex items-center justify-between'>
            <div><span className='text-[#18458b] font-bold text-[34px]'>254</span></div>
            <div><AiTwotoneLike size={64} className='text-[#3aaced]' /></div>
            </div>
            <p className='text-gray-500 text-[10px]'>New Visiters Every Week</p>
        </div><div className="fff w-[24%] bg-[#ecf6f8] rounded-lg shadow-md p-8 inline-block items-center">
            <div className='flex items-center justify-between'>
            <div><span className='text-[#18458b] font-bold text-[34px]'>254</span></div>
            <div><AiOutlineUsergroupAdd size={64} className='text-[#3aaced]' /></div>
            </div>
            <p className='text-gray-500 text-[10px]'>New Visiters Every Week</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Chooseus