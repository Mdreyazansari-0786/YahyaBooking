import React, { useState } from 'react'
import HeroImage2 from '../components/herobanner/HeroImage2'
import Navbar from '../components/Navbar'
import {BsChevronDown} from 'react-icons/bs'
import './flight.css'
import {AiOutlineCalendar} from 'react-icons/ai'
import { DateRange } from 'react-date-range';
import {RiFlightTakeoffLine,RiFlightLandFill} from 'react-icons/ri'
import {LuArrowRightLeft} from 'react-icons/lu'
import { format } from "date-fns";
import Footer from '../components/Footer'
import Flightcardtitle from '../components/Flight/Flightcardtitle'
import Scrollbarsection from '../components/Flight/Scrollbarsection'
import { Link } from "react-router-dom";
// import ResultPage from '../components/Flight/FlightsearchResult/ResultPage'

const imageUrl = 'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=1380&t=st=1686993051~exp=1686993651~hmac=c041a4a2a84d4d282cb597db37d69684bcfed53781680c9532281964b5c8b2ac';
const altText = 'Compare and book flights with ease';
const heading = 'Book Now'
function Flight() {
  // e.preventDefault();
  // const [isOpen, setIsOpen] = useState(false);
  // const [isOpen2, setIsOpen2] = useState(false);

  const [openDate,setOpenDate]=useState(false)
    const [date,setDate] = useState(
        [
            {
                startDate: new Date(),
                endDate:new Date(),
                key:'selection'
            }
        ]
    );

    const [openOption,setOpenOption]=useState(false);

    const [options,setOptions]=useState({
        adult:1,
        children:0,
        room:1,
    })

    const handleOption=(name,operation)=>{
        setOptions(prev=>{return{
            ...prev, 
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
    });
    };



    const [selectedOption, setSelectedOption] = useState('option1');

const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
};




  return (

    <div className='bg-white w-full'>
      <Navbar/>
      <HeroImage2 imageUrl={imageUrl} text={altText} heading={heading} />

    <div className="h inline-block items-center py-4 w-full">
    <div className='flex justify-center gap-10 items-center'>
    <div className="gap-2 flex items-center">
            <input type="radio" name=''
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
             className='' />
            <span className='text-black'>Round-trip</span>

    </div>
    <div className="gap-2 flex items-center">
            <input type="radio" name=''
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
             className='' />
            <span className='text-black'>One-way</span>

    </div>
    <div className="gap-2 flex items-center">
            <input type="radio" name=''
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
             className='' />
            <span className='text-black'>Multi-city</span>

    </div>
    
    <div className=" flex items-center">
          <select name="" id="" className='text-gray-800 outline-none'>
            <option value="">Economy</option>
            <option value="">Premium economy</option>
            <option value="">Business</option>
            <option value="">First-class</option>
          </select>
    </div>
    <div className="">
            <span onClick={()=>setOpenOption(!openOption)} className='headerSearchText flex items-center justify-center'>{`${options.adult} travelers`} <BsChevronDown className='ml-2'/> </span>            
          {

            openOption &&
            <div className="optionss">
            <div className="optionItems">
            <div className='gap-4 inline-block'>
                    <div><span className="optionText">Adult</span></div>
                    <div><span className='text-[12px]'>Age 18+</span></div>
                    </div>
                      <div className="optionCounters">
                        <button
                          disabled={options.adult<=1}
                          className="optionCounterButton"
                          onClick={()=>handleOption("adult","d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={()=>handleOption("adult","i")}
                        >
                          +
                        </button>
                      </div>
            </div>
            <div className="optionItems">
                    <div className='gap-4 inline-block'>
                    <div><span className="optionText">Children</span></div>
                    <div><span className='text-[12px]'>Age 0 - 17</span></div>
                    </div>
                      {/* <span className="optionText">Children</span> */}
                      <div className="optionCounters">
                        <button
                          disabled={options.children<=1}
                          className="optionCounterButton"
                          onClick={()=>handleOption("children","d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={()=>handleOption("children","i")}
                        >
                          +
                        </button>
                      </div>
            </div>
            <div className="optionItem flex-wrap hidden">
                      <span className="optionText">1st child's age</span>
                      <br />
                      <div className='w-full border py-3 px-3 flex items-center justify-between'>
                        <div>0</div>
                        <div><BsChevronDown className=''/></div>
                      </div>
                      <br />
                      <p>Select the age this child will be on the date of your final flight</p>


            </div>
           
            <div className='flex justify-between items-center py-3 px-6'>
              <div><p>1 adult</p></div>
              <div><button className="headerBtn">
                  Search
                </button></div>
            </div>

            </div>

          }
    </div>
    <div className="gap-2 flex items-center">
            <input type="checkbox" name='radio' className='' />
            <span className='text-black'>Direct flights only</span>

    </div>

    
    </div>


      
{/* input fields */}

  <div className='w-full text-white flex items-center mt-5 justify-center' >

  {selectedOption === 'option1' && 
    <div className='flex justify-start border-4 border-orange-400 gap-10 px-4 py-3'>
    <div className="flex items-center gap-4 justify-center ">
            <RiFlightTakeoffLine className='headerIcon' />
            <input type="text" placeholder='Where From ?' className='headerSearchInput1 bg-transparent' />

    </div>
    <div className="flex items-center gap-4 justify-center border-l-2 border-gray-500 border-r-2 px-3">
       <LuArrowRightLeft className='headerIcon' />
    </div>
    <div className="flex items-center gap-4 justify-center ">
            <RiFlightLandFill className='headerIcon' />
            <input type="text" placeholder='Where to ?' className='headerSearchInput1 bg-transparent' />

    </div>
    <div className="flex items-center gap-4 justify-center border-l-2 border-gray-600 px-2 ">
            <AiOutlineCalendar className='headerIcon' />
            <span onClick={()=>setOpenDate(!openDate)} className='headerSearchTe cursor-pointer text-gray-500 relative bottom-0'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>  
            {openDate &&  <DateRange editableDateInputs={true} onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date2 -bottom-[188px] absolute mt-12'
             />}          
    </div>

    <div className="headerSearchItem">
                <Link to="/flightresult"><button className="bg-blue-400 py-2 rounded-sm hover:bg-blue-500 px-4">
                  Search
                </button></Link>
     </div>

    
    </div>
  }

      </div>

    </div>


    
      <div className='py-6'>
      <Flightcardtitle name="Popular flights near you" title="Find deals on domestic and international flights" />
      <div className='flex gap-4 text-black px-36'>
        <span className='text-[#006ce4] text-[14px] cursor-pointer border-[2px solid black] font-medium'>International</span>
        <span className='cursor-pointer'>Domestic</span>
     </div>  
    <Scrollbarsection/>
    <Flightcardtitle name="Trending cities" title="Book flights to a destination popular with travellers from India" />
    <Scrollbarsection/>

      </div>



    <Footer/>
    </div>
  )
}

export default Flight