import React, { useEffect, useState } from 'react';


import Products from '../Products';

// ========================================== 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import NextArrow from '../NextArrow';
import PrevArrow from '../PrevArrow';
import axios from 'axios';
import Container from '../Container';


// ========================================== 

const Newarrival = () => {

  let [allData, setAllData] = useState([])
  
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get('https://dummyjson.com/products');

      setAllData(data.data.products);
    }
    alldatas()
  }, []);

   var settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 1,
     nextArrow: <NextArrow />,
     prevArrow: <PrevArrow />,
   };
  return (
    <>
      <Container>
        <h3>New Arrivals</h3>
        <div className="m-3">
  
            <Slider {...settings}>
              {allData.map(item => (
                <div key={item.id}>
                  <Products
                    productImg={item.thumbnail}
                    title={item.title}
                    price={`$${item.price}`}
                    badgeText="New"
                  />
                </div>
              ))}
            </Slider>
              </div>
      </Container>
    </>
  );
};

export default Newarrival; 