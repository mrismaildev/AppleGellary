import React, { useState } from 'react'
import Heading from '../Heading';
import {
  FaSearch,
  FaUserAlt,
  FaCaretDown,
  FaShoppingCart,
} from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useSelector } from 'react-redux';
import Container from '../Container';

const Addcart = () => {
   let [showCart, setShow] = useState(false);
   let data = useSelector(state => state.addcart.value);
  return (
    <>
      <div className="bg-[#F5F5F3] py-10">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="flex items-center space-x-3">
                <svg
                  width="19"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-[19px] sm:h-[10px]"
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
                  text="Shop by Category"
                  className="text-sm sm:text-base md:text-lg font-medium"
                />
              </div>
            </div>

            <div className="relative w-full md:w-[601px] mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full py-3 px-4 bg-white outline-0 rounded-md"
              />
              <FaSearch className="absolute top-1/2 right-4 -translate-y-1/2" />
            </div>

            <div className="flex space-x-7 relative">
              <div className="flex space-x-3">
                <FaUserAlt />
                <FaCaretDown />
              </div>
              <FaShoppingCart onClick={() => setShow(!showCart)} />
            </div>
          </div>

          {showCart && (
            <div className="h-screen w-[500px] bg-white shadow-lg absolute right-0 top-0 flex flex-col">
              {/* Close button */}
              <div className="flex justify-between items-center border-b px-5 py-4">
                <h2 className="text-lg font-semibold">Shopping Cart</h2>
                <ImCross
                  onClick={() => setShow(!showCart)}
                  className="cursor-pointer hover:text-red-500"
                />
              </div>

              {/* Cart Items */}
              <div className="p-5 flex-1 overflow-y-auto">
                <div className="grid grid-cols-5 gap-4 bg-gray-100 font-semibold text-center py-3 rounded">
                  <p>Product</p>
                  <p>Price</p>
                  <p>Qty</p>
                  <p>Image</p>
                  <p>Total</p>
                </div>

                {data.map(item => (
                  <div
                    key={item.title}
                    className="grid grid-cols-5 gap-4 items-center text-center border-b py-4 hover:bg-gray-50 transition"
                  >
                    <p className="text-sm font-medium">{item.title}</p>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                    <img
                      className="w-12 h-12 object-contain mx-auto border rounded"
                      src={item.productImg}
                      alt={item.title}
                    />
                    <p className="font-semibold text-green-600">
                      ${parseFloat(item.price.replace('$', '')) * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer (Subtotal + Button) */}
              <div className="border-t px-5 py-4 space-y-3">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Subtotal</span>
                  <span>
                    $
                    {data.reduce(
                      (acc, item) =>
                        acc +
                        parseFloat(item.price.replace('$', '')) * item.quantity,
                      0
                    )}
                  </span>
                </div>
                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}

export default Addcart