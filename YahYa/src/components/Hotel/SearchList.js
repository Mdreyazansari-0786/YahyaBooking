import React, { useState } from 'react'
import './searchlist.css'
import {FaBed} from 'react-icons/fa'
import {GiPerson} from 'react-icons/gi'
import {AiOutlineCalendar} from 'react-icons/ai'
import { DateRange } from 'react-date-range';
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
function SearchList({type}) {
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

    const [openOption,setOpenOption]=useState(false)
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

  return (
    <div className="header py-6">
        <div className='headerSearch'>
    <div className="headerSearchItem ">
            <FaBed className='headerIcon' />
            <input type="text" placeholder='Where are you going.' className='headerSearchInput' />

    </div>
    <div className="headerSearchItem ">
            <AiOutlineCalendar className='headerIcon' />
            <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>  
            {openDate &&  <DateRange editableDateInputs={true} onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'
             />}          
    </div>
    <div className="headerSearchItem ">
            <GiPerson className='headerIcon' />
            <span onClick={()=>setOpenOption(!openOption)} className='headerSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>            
          {

            openOption &&
            <div className="options">
            <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
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
            <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
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
            <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          onClick={()=>handleOption("room","d")}
                          className="optionCounterButton"
                          disabled={options.room<=1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={()=>handleOption("room","i")}
                        >
                          +
                        </button>
                      </div>
            </div>

            </div>

          }
    </div>

    <div className="headerSearchItem">
                <button className="headerBtn">
                  Search
                </button>
     </div>

    
    </div>
    </div>
  )
}

export default SearchList