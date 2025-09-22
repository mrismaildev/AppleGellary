import React, { useState } from 'react';

import Image from '../Image';
import logo from '/src/assets/logo.png';
import { Link } from 'react-router-dom';


import Container from '../Container';
import { ImCross } from 'react-icons/im';
import { FaBarsStaggered } from 'react-icons/fa6';




const Header = () => {
  const [open , setOpen]=useState(false)
 

  return (
    <>
      <nav className="bg-[#FFFFFF] ">
        <Container>
          <div className="flex items-center py-8">
            <div className="">
              <Link to={'/'}>
                <Image imgSrc={logo} />
              </Link>
            </div>

            <div className=" flex-grow flex justify-center">
              <ul className=" hidden md:flex space-x-[39px]">
                <Link to={'/'}>
                  <li>Home</li>
                </Link>
                <Link to={'/shop'}>
                  <li>Shop</li>
                </Link>
                <Link to={'/about'}>
                  <li>About</li>
                </Link>
                <Link to={'/contact'}>
                  <li>Contacts</li>
                </Link>
                <Link to={'/journal'}>
                  <li>Journal</li>
                </Link>
              </ul>
            </div>
            <button className=" md:hidden" onClick={() => setOpen(!open)}>
              {open ? (
                <ImCross className="cursor-pointer text-xl hover:text-red-500" />
              ) : (
                <FaBarsStaggered className="text-gray-700" />
              )}
            </button>
          </div>
        </Container>
        {open && (
          <ul className=" md:hidden space-y-[39px]">
            <Link to={'/'}>
              <li>Home</li>
            </Link>
            <Link to={'/shop'}>
              <li>Shop</li>
            </Link>
            <Link to={'/about'}>
              <li>About</li>
            </Link>
            <Link to={'/contact'}>
              <li>Contacts</li>
            </Link>
            <Link to={'/journal'}>
              <li>Journal</li>
            </Link>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Header;
