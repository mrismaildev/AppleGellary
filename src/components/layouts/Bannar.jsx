import React from 'react';
import Image from '../Image';
import banners from '/src/assets/banner.png';
import { Link } from 'react-router-dom';
import { PiNumberTwoBold } from 'react-icons/pi';
import Conteinar from '../Conteinar';
import { FaTruck } from 'react-icons/fa6';
import { FaUndo } from 'react-icons/fa';


const Bannar = () => {
  return (
    <div className="">
      <Link>
        <Image imgSrc={banners} />
      </Link>

      <div className="bg-[#FFFFFF]">
        <Conteinar>
          <div className="flex justify-between border-b-2 border-b-[#F0F0F0]">
            <div className="flex items-center gap-x-2 py-9">
              <PiNumberTwoBold />
              <p className="text-[16px] text-[#6D6D6D]">Two years warranty</p>
            </div>
            <div className="flex items-center gap-x-2 py-9">
              <FaTruck />
              <p className="text-[16px] text-[#6D6D6D]">Free shipping</p>
            </div>
            <div className="flex items-center gap-x-2 py-9">
              <FaUndo />
              <p className="text-[16px] text-[#6D6D6D]">
                Return policy in 30 days
              </p>
            </div>
          </div>
        </Conteinar>
      </div>
    </div>
  );
};

export default Bannar;
