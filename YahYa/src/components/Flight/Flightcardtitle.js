import React from 'react'

function Flightcardtitle({name,title}) {
  return (
    <div className='py-4 px-32'>
        <h1 className='text-[24px] text-[#1a1a1a] font-bold' >{name}</h1>
        <p className='text-[16px] text-[#474747]' >{title}</p>
    </div>
  )
}

export default Flightcardtitle