import React from 'react';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

const NextArrow = props => {
  const {onClick } = props;
  return (
    <>
      <div
        className={
          'w-[64px] h-[64px] rounded-full bg-[#979797] flex items-center justify-center text-4xl text-white absolute top-1/2 right-3 -translate-y-1/2'
        }
        onClick={onClick}
      >
        <GrFormNextLink />
      </div>

    </>
  );
};

export default NextArrow;
