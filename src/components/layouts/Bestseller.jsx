import React, { useEffect, useState } from 'react';
import Products from '../Products';
import Container from '../Container';
import Heading from '../Heading';
import axios from 'axios';


const Bestseller = () => {
  let [alldata, setAllData] = useState([])
  useEffect(() => {
    async function allDatas() {
      let data = await axios.get('https://dummyjson.com/products');
      setAllData(data.data.products);
      
    }
    allDatas()
  }, []);
  return (
    <>
      <div className="">
        <Container>
          <Heading
            as="h3"
            text={'Our Bestsellers'}
            className={'text-[39px] text-black font-bold'}
          />

          <div className=" flex justify-between">
            {alldata.slice(-4).map(item => (
              <Products
                productImg={item.thumbnail}
                title={item.title}
                price={`$${item.price}`}
                badgeText="New"
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Bestseller;
