import React from 'react';
import { Link } from 'react-router-dom';

import Heading from '../Heading';
import Image from '../Image';
import foot from '/src/assets/logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Container from '../Container';

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] py-14">
      <Container>
        <div className="flex justify-between">
          <div className="">
            <Heading
              as="h4"
              text={'Menu'}
              className="text-[16px] font-bold leading-[23px]"
            />
            <ul className="flex flex-col space-y-1.5 mt-3 text-[#6D6D6D]">
              <Link>
                <li>Home</li>
              </Link>
              <Link>
                <li>Shop</li>
              </Link>
              <Link>
                <li>About</li>
              </Link>
              <Link>
                <li>Contact</li>
              </Link>
              <Link>
                <li>Journal</li>
              </Link>
            </ul>
          </div>

          <div className="">
            <Heading
              as="h4"
              text={'Menu'}
              className="text-[16px] font-bold leading-[23px]"
            />
            <ul className="flex flex-col space-y-1.5 mt-3 text-[#6D6D6D]">
              <Link>
                <li>Category 1</li>
              </Link>
              <Link>
                <li>Category 2</li>
              </Link>
              <Link>
                <li>Category 3</li>
              </Link>
              <Link>
                <li> Category 4</li>
              </Link>
              <Link>
                <li>Category 5</li>
              </Link>
            </ul>
          </div>

          <div className="">
            <Heading
              as="h4"
              text={'Menu'}
              className="text-[16px] font-bold leading-[23px]"
            />
            <ul className="flex flex-col space-y-1.5 mt-3 text-[#6D6D6D] ">
              <Link>
                <li>Privacy Policy</li>
              </Link>
              <Link>
                <li> Secure Payments</li>
              </Link>
              <Link>
                <li>Terms & Conditions</li>
              </Link>
              <Link>
                <li>Shipping</li>
              </Link>
              <Link>
                <li>Special E-shop</li>
              </Link>
            </ul>
          </div>

          <div className="">
            <div className="text-[16px] font-bold leading-[23px]">
              <Heading as="h4" text={'(052) 611-5711'} />
              <Heading as="h4" text={'company@domain.com'} />
            </div>
            <ul className="flex flex-col space-y-1.5 mt-3 text-[#6D6D6D]">
              <Link>
                <li>575 Crescent Ave. Quakertown, PA 18951</li>
              </Link>
            </ul>
          </div>

          <div className="">
            <Image imgSrc={foot} />
          </div>
        </div>
        <div className="flex items-center justify-between mt-16 text-[#6D6D6D]">
          <div className="flex gap-x-3">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </div>

          <div className="">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
