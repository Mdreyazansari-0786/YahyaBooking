import React from 'react'

function Flightcard({ title, description, image }) {
  console.log(title)
  return (
    <> 
    <div className="bg-white rounded-lg shadow-lg ml-6 mr-4 pb-8">
      <img src={image} alt={title} className="w-full h-[32vh] object-cover mb-4 rounded-lg" />
      <div className='px-2 py-3'>
      <h3 className="text-xl text-[#1a1a1a] text-[16px] font-semibold mb-2">{title}</h3>
      <p className="text-[#474747] text-[14px]">{description}</p>
      </div>
    </div>
    </>
  )
}

export default Flightcard