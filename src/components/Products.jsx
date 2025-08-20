import React from 'react';
import Image from './Image';
import Badge from './Badge';
import Flex from './Flex';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { LuRefreshCw } from 'react-icons/lu';


const Products = ({ prouctImg, badgeText }) => {
  return (
    <>
      <div className="relative group px-3">
        <Badge text={badgeText} className={'absolute top-5 left-5'} />
        <Image className={'w-full'} imgSrc={prouctImg} />
        <div
          className="bg-white p-7 absolute w-full bottom-7 left-0 
                  opacity-0 translate-y-5 
                  group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-700 ease-in-out"
        >
          <Flex className={'items-center justify-end gap-x-3'}>
            <h3>Add to Wish List</h3>
            <FaHeart />
          </Flex>
          <Flex className={'items-center justify-end gap-x-3'}>
            <h3>Compare</h3>
            <LuRefreshCw />
          </Flex>
          <Flex className={'items-center justify-end gap-x-3'}>
            <h3>Add to Wish List</h3>
            <FaShoppingCart />
          </Flex>
        </div>
        <Flex className={'justify-between'}>
          <h3 className="text-xl font-bold">Basic Crew Neck Tee</h3>
          <h3 className="text-[16px] text-[#767676]">$44.00</h3>
        </Flex>
      </div>
    </>
  );
};

export default Products;
