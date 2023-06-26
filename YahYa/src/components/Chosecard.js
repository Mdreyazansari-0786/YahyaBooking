import React from 'react'

const Chosecard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-[30%] h-[50vh]  p-8 inline-block items-center text-center">
      <div className="text-[#3aaced] rounded-full my-4 mb-10 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h2 className="text-[18px] font-bold text-[#183c7d] mb-5">{title}</h2>
        <p className="text-[#878c9f] text-[13px] w-[90%]">{description}</p>
      </div>
    </div>
  );
};

export default Chosecard;
