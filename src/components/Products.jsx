import React from 'react';
import Image from './Image';
import Badge from './Badge';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { LuRefreshCw } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/addToCartSlice';





const Products = ({ productImg, badgeText, title, price }) => {
  
 let dispatch = useDispatch()
  let handelAddToCart = () => {
    dispatch(
      addToCart({
        title: title,
        price: price,
        productImg: productImg,
        quantity: 1,
      })
    );
  };
  return (
    <>
      <div className="relative px-3 group">
        <Badge text={badgeText} className={'absolute top-5 left-5 z-10'} />
        <Image className={'w-full object-contain'} imgSrc={productImg} />
        <div
          className="bg-white p-7 absolute w-full bottom-7 left-0 
                  opacity-0 translate-y-5 
                  group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-700 ease-in-out"
        >
          <div className={'flex items-center justify-end gap-x-3'}>
            <h3>Add to Wish List</h3>
            <FaHeart />
          </div>
          <div className={'flex items-center justify-end gap-x-3'}>
            <h3>Compare</h3>
            <LuRefreshCw />
          </div>
          <div className={'flex items-center justify-end gap-x-3'} onClick={handelAddToCart}>
            <h3>Add to Cart</h3>
            <FaShoppingCart />
          </div>
        </div>
        <div className={'flex justify-between'}>
          <h3 className="text-xl font-bold">{title}</h3>
          <h3 className="text-[16px] text-[#767676]">{price}</h3>
        </div>
      </div>
    </>
  );
};

export default Products;
