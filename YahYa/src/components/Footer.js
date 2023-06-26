import React from 'react'
import './footer.css'

import {
    AiOutlineMail,
    AiOutlinePhone,
    AiFillCalendar
} from 'react-icons/ai'
import {TfiLocationPin} from 'react-icons/tfi'
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn} from 'react-icons/fa'
import Copywr from './Copywr'
const Footer=()=> {
  return (

    <>
    <div className="container">
    <hr />
        <div className="first">
            
            <h3>ABOUT US</h3>
            <hr style={{width:"300px"}} className='mb-8' />
            <p className='pag'>YahYa Tours Corporation has a dedicated team of travel 
                experts who are passionate about helping customers plan 
                their dream vacations.</p>
                {/* <hr /> */}
            <p className='flex items-center gap-2 mt-0 text-[gray]'><AiOutlineMail className='text-[orange]' /><span className='text-[gray]' >Mail :</span>Contact@Yahya.com</p>
            <p className='flex items-center gap-2 mt-0 text-[gray]' ><TfiLocationPin className='text-[orange]' /><span className='text-[gray]'>Adress :</span>USA 27TH Brooklyn NY</p>
            <p className='flex items-center gap-2 mt-0 text-[gray]' ><AiOutlinePhone className='text-[orange]' /><span className='text-[gray]'>Phone :</span>+7(111)123456789</p>
            {/* <hr /> */}

            <div className="social flex w-full py-2">
                <div className='font-bold mt-1'>FIND US :</div>
                <div className='flex gap-4 social1'>
                    <span className=''><FaFacebookF size={18}/></span>
                    <span className=''><FaInstagram size={18}/></span>
                    <span className=''><FaTwitter size={18}/></span>
                    <span className=''><FaLinkedinIn size={18}/></span>
                </div>
            </div>
        </div>
        <div className="sec">
            <h3>OUR LAST NEWS</h3>
            <hr style={{width:"300px ma"}} className='mb-8' />
            <div className="main">
            <div className="img py-0">
                <div><img src="https://yahya.xendekweb.com/wp-content/uploads/2018/10/13-6.jpg" alt="" /></div>
                <div>
                    <p>In hac habitasse platea</p>
                    <span className='flex items-center gap-3'><AiFillCalendar/> 07 Jun 2019</span>
                </div>
            </div>
            <div className="img">
                <div><img src="https://yahya.xendekweb.com/wp-content/uploads/2018/12/11-7.jpg" alt="" /></div>
                <div>
                    <p>In hac habitasse platea</p>
                    <span className='flex items-center gap-3'><AiFillCalendar/> 07 Jun 2019</span>
                </div>
            </div>
            <div className="img">
                <div><img src="https://yahya.xendekweb.com/wp-content/uploads/2016/02/10-6.jpg" alt="" /></div>
                <div>
                    <p>In hac habitasse platea</p>
                    <span className='flex items-center gap-3'><AiFillCalendar/> 07 Jun 2019</span>
                </div>
            </div>
            
            </div>
        </div>
        <div className="last">
            <h3 className='mt-24'>QUICK LINKS</h3>
            <hr style={{width:"300px"}} className='mb-8' />

            <p className='py-0'>Home</p>
            <p>About</p>
            <p>Listings</p>
            <p>Contact</p>
        </div>
    </div>
    <Copywr/>
    </>
  )
}

export default Footer