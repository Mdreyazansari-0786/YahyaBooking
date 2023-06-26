import React from 'react'
import './heroimg2.css'
const HeroImage2 = ({heading,text,imageUrl}) => {


  return (
    <div
      className="hero-im h-[60vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
        <div className="heading">
         <h1 className='text-[38px]'>{heading}</h1>
         <p className='text-[18px]'>{text}</p>
     </div>
    </div>
  )
}

export default HeroImage2