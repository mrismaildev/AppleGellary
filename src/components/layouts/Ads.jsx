import React from 'react'
import Conteinar from '../Conteinar'
import Image from '../Image'
import adsOne from '/src/assets/ads1.png'
import adsTow from '/src/assets/ads2.png';
import adsThree from '/src/assets/ads3.png';
import { Link } from 'react-router-dom'

const Ads = () => {
  return (
    <>
      <div className="py-6">
        <Conteinar>
          <div className="flex gap-x-8">
            <div className="w-[48%]">
              <Link to={'/'}>
                <Image className={'w-full'} imgSrc={adsOne} />
              </Link>
            </div>
            <div className="grid grid-rows-1 w-[48%]">
              <Link to={'/'}>
                <Image className={'w-full'} imgSrc={adsTow} />
              </Link>
              <Link to={'/'}>
                <Image className={'w-full'} imgSrc={adsThree} />
              </Link>
            </div>
          </div>
        </Conteinar>
      </div>
    </>
  );
}

export default Ads