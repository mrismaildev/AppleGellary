import React from 'react'

const Badge = ({ className, text }) => {
  return (
    <>
      <div className={`py-2.5 px-8 w-[90px] text-white bg-black ${className}`}>
        {text}
      </div>
    </>
  );
};

export default Badge