import React from 'react'
import {GrFormPreviousLink } from 'react-icons/gr';

const PrevArrow = (props) => {
   const {onClick } = props;
  return (
    <div
      className={
        'w-[64px] h-[64px] rounded-full bg-[#979797] flex items-center justify-center text-4xl text-white absolute top-1/2 left-3 -translate-y-1/2 z-10'
      }
      onClick={onClick}
    >
      <GrFormPreviousLink />
    </div>
  );
}

export default PrevArrow