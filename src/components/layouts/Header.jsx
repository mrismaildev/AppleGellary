import React from 'react';
import Conteinar from '../Conteinar';
import Image from '../Image';
import logo from '/src/assets/logo.png';
import { Link } from 'react-router-dom';
import Heading from '../Heading';
import { FaSearch, FaUserAlt, FaCaretDown,FaShoppingCart  } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="bg-[#FFFFFF] ">
      <Conteinar>
        <div className="flex items-center py-8">
          <div className="">
            <Link to={'/'}>
              <Image imgSrc={logo} />
            </Link>
          </div>

          <div className=" flex-grow flex justify-center">
            <ul className="flex space-x-[39px]">
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
        </div>
      </Conteinar>
      <div className="bg-[#F5F5F3] py-10">
        <Conteinar>
          <div className="flex justify-between">
            <div className="flex items-center space-x-4">
              <svg
                width="19"
                height="10"
                viewBox="0 0 19 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z"
                  fill="#262626"
                />
                <path
                  d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z"
                  fill="#262626"
                />
              </svg>
              <Heading
                as="h5"
                text={'Shop by Category'}
                className={'text-[14px]'}
              />
            </div>
            <div className="relative ">
              <input
                type="text"
                placeholder="Search Products"
                className="w-[601px] py-4 px-5 bg-white outline-0 placeholder:text-[#C4C4C4]"
              />
              <FaSearch className="absolute top-1/2 right-5 -translate-y-1/2" />
            </div>
            <div className="flex space-x-7">
              <div className="flex space-x-3">
                <FaUserAlt />
                <FaCaretDown />
              </div>
              <FaShoppingCart />
            </div>
          </div>
        </Conteinar>
      </div>
    </nav>
  );
};

export default Header;

;
