import React from 'react'
import Image from '../Image'
import gifError from '/src/assets/error.gif'

import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <>
   
        <div className="w-[100%]">
          <Link to={"/"}>
            <Image imgSrc={gifError} />
          </Link>
        </div>
    
    </>
  );
}

export default Error