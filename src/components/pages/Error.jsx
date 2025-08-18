import React from 'react'
import Image from '../Image'
import gifError from '/src/assets/error.gif'
import Conteinar from '../Conteinar';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <>
      <Conteinar>
        <div className="w-[100%]">
          <Link to={"/"}>
            <Image imgSrc={gifError} />
          </Link>
        </div>
      </Conteinar>
    </>
  );
}

export default Error