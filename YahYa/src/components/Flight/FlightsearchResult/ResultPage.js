import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Link } from 'react-router-dom'
import PriceCard from './PriceCard'
import Navbar from '../../Navbar'

function ResultPage() {
  return (
    <>
    <Navbar/>
    <div className='bg-[#ffffff] py-40 pb-10 text-black w-full flex'>
    <div className="filterr bg-[#ffffff] justify-between px-36 pr-11 inline-block w-[37%]">
       <div className='flex justify-between px-10 pb-4'>
         
       <div className='inline-block'>
            <p className='text-[#1a1a1a] font-bold text-[16px]'>Filters</p>
            <span className='text-[14px] text-[#474747]'>Showing 82 results</span>
        </div>
        <div>
            <span className='text-[14px] text-[#006ce4] hover:underline'>Reset all</span>
        </div>
       </div>
       <div className='flex justify-between px-10 py-3'>
         
       <div className='inline-block items-center justify-between'>
            <p className='text-[14px] text-[#474747]'>Journey time</p>
        </div>
        <div className='px-1 py-1 items-center justify-center mr-3 flex cursor-pointer hover:opacity-40 hover:bg-slate-400'>
        <RxCross1/>
        </div>
       </div>
       <div className='flex justify-between px-10 py-2'>
       <p className='text-[#1a1a1a] font-bold text-[16px]'>Stops</p>
       </div>
       <div className='flex justify-between px-10 py-2'>
         
       <div className='inline-block'>
            <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="radio" /></span>Any</p>
            <span className='text-[14px] text-[#474747] ml-5'>From INR4,916.68</span>
        </div>
        <div>
            <span className='text-[14px] text-[#474747] hover:underline'>124</span>
        </div>
       </div>
       <div className='flex justify-between px-10 py-2'>
         
       <div className='inline-block'>
            <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="radio" /></span>Direct only</p>
            <span className='text-[14px] text-[#474747] ml-5'>From INR4,916.68</span>
        </div>
        <div>
            <span className='text-[14px] text-[#474747] hover:underline'>7</span>
        </div>
       </div>
       <div className='flex justify-between px-10 py-2'>
         
       <div className='inline-block'>
            <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="radio" /></span>1 stop max</p>
            <span className='text-[14px] text-[#474747] ml-5'>From INR4,916.68</span>
        </div>
        <div>
            <span className='text-[14px] text-[#474747] hover:underline'>39</span>
        </div>
       </div>
       <div className='flex justify-between px-10 py-2'>
       <p className='text-[#1a1a1a] font-bold text-[16px]'>Airlines</p>
       </div>
       <div className='flex justify-between px-10 py-2'>
         
       <div className='inline-block'>
            <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="checkbox" /></span>Air India</p>
        </div>
        <div>
            <span className='text-[14px] text-[#474747] hover:underline'>92</span>
        </div>
       </div>
       <div className='flex justify-between px-10 py-2'>
         
       <div className='inline-block'>
            <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="checkbox" /></span>IndiGo</p>
        </div>
        <div>
            <span className='text-[14px] text-[#474747] hover:underline'>30</span>
        </div>
       </div>
       <div className='flex justify-between px-10 py-2'>
         
       <div className='inline-block'>
            <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="checkbox" /></span>Vistara</p>
        </div>
        <div>
            <span className='text-[14px] text-[#474747] hover:underline'>52</span>
        </div>
       </div>
       <div className='flex justify-between px-10 py-4'>
       <p className='text-[#1a1a1a] font-bold text-[16px]'>Flight times</p>
       </div>
       <div className='flex justify-center items-center px-10 py-2'>
       <p className='text-[#006ce4] font-semibold text-[16px] cursor-pointer'>Outbound flight</p>
       </div>
       <div className='px-10 py-2'>
        <hr className='h-[3px] my-3 bg-[#006ce4] border-0' />
       </div>
       <div className='flex justify-between px-10 pr-0 py-4'>
       <p className='text-[#1a1a1a] font-bold text-[16px]'>Departs from Pune International Airport</p>
       </div>
       <div className='flex justify-between px-10 py-1'>
         
         <div className='inline-block'>
              <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="checkbox" /></span>00:00 - 05:59</p>
          </div>
          <div>
              <span className='text-[14px] text-[#474747] hover:underline'>52</span>
          </div>
         </div>
         <div className='flex justify-between px-10 py-1'>
         
         <div className='inline-block'>
              <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="checkbox" /></span>00:00 - 05:59</p>
          </div>
          <div>
              <span className='text-[14px] text-[#474747] hover:underline'>52</span>
          </div>
         </div>
         <div className='flex justify-between px-10 py-1'>
         
         <div className='inline-block'>
              <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="checkbox" /></span>00:00 - 05:59</p>
          </div>
          <div>
              <span className='text-[14px] text-[#474747] hover:underline'>52</span>
          </div>
         </div>
         <div className='flex justify-between px-10 py-1'>
         
         <div className='inline-block'>
              <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="checkbox" /></span>00:00 - 05:59</p>
          </div>
          <div>
              <span className='text-[14px] text-[#474747] hover:underline'>52</span>
          </div>
         </div>
         
         <div className='flex justify-between px-10 pr-0 py-4'>
       <p className='text-[#1a1a1a] font-bold text-[16px]'>Arrives at Chhatrapati Shivaji International Airport Mumbai</p>
       </div>
       <div className='flex justify-between px-10 py-1'>
         
         <div className='inline-block'>
              <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="checkbox" /></span>00:00 - 05:59</p>
          </div>
          <div>
              <span className='text-[14px] text-[#474747] hover:underline'>52</span>
          </div>
         </div>
         <div className='flex justify-between px-10 py-1'>
         
         <div className='inline-block'>
              <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="checkbox" /></span>00:00 - 05:59</p>
          </div>
          <div>
              <span className='text-[14px] text-[#474747] hover:underline'>52</span>
          </div>
         </div>
         <div className='flex justify-between px-10 py-1'>
         
         <div className='inline-block'>
              <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="checkbox" /></span>00:00 - 05:59</p>
          </div>
          <div>
              <span className='text-[14px] text-[#474747] hover:underline'>52</span>
          </div>
         </div>
         <div className='flex justify-between px-10 py-1'>
         
         <div className='inline-block'>
              <p className='text-[14px] text-[#474747]'><span className='mr-2'><input name='searc' type="checkbox" /></span>00:00 - 05:59</p>
          </div>
          <div>
              <span className='text-[14px] text-[#474747] hover:underline'>52</span>
          </div>
         </div>


        <div className='flex justify-between px-10 pr-0 mt-4'>
            <p className='text-[#1a1a1a] font-bold text-[16px]'>Duration</p>
       </div>
       <div className='inline-block justify-start px-10 pr-0 py-2'>
            <p className='text-[#1a1a1a] font-semibold text-[16px]'>Maximum travel time</p>
            <span className='text-[14px] text-[#474747]'>27 hours</span>
       </div>
       <div className='flex justify-start px-10 pr-0 py-2'>
            <input className='w-full' type="range" min="0" max="100" step="10" />
       </div>
      
       
    
    </div>
    <div className="filterr inline-block bg-[#fff] w-[63%] px-4">
        <div className='flex items-center justify-between border-solid border-0 shadow-md border-gray-400 w-full'>
            <Link className='w-[33%] py-4 text-center border-b-4 border-blue-700 hover:bg-slate-300 ease-in duration-300 text-[#006ce4] text-[14px]' to="#">Best</Link>
            <Link className='w-[33%] py-4 text-center border-b-4 hover:bg-slate-300 ease-in duration-300 text-[14px]' to="#">Cheapest</Link>
            <Link className='w-[33%] py-4 text-center border-b-4 hover:bg-slate-300 ease-in duration-300 text-[14px]' to="#">Fastest</Link>
        </div>


        <div className='w-full inline-block py-3 mt-5'>

        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
        <PriceCard title="Air India" logo='https://r-xx.bstatic.com/data/airlines_logo/AI.png' />
       
        </div>

    </div>
    
    </div>
</>
  )
}


export default ResultPage
