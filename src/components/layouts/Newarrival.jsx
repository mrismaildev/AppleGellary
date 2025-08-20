import React from 'react';
import Flex from '../Flex';
import Conteinar from '../Conteinar';
import Products from '../Products';
import prouct1 from '/src/assets/product4.png';
import prouct2 from '/src/assets/product3.png';
import prouct3 from '/src/assets/product2.png';
import prouct4 from '/src/assets/product1.png';
// ========================================== 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import NextArrow from '../NextArrow';
import PrevArrow from '../PrevArrow';
// ========================================== 

const Newarrival = () => {
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
      <Conteinar>
        <h3>New Arrivals</h3>
        <Slider {...settings}>
          <div>
            <Products prouctImg={prouct1} badgeText={'New'} />
          </div>
          <div>
            <Products prouctImg={prouct2} badgeText={'10%'} />
          </div>
          <div>
            <Products prouctImg={prouct3} badgeText={'New'} />
          </div>
          <div>
            <Products prouctImg={prouct4} badgeText={'New'} />
          </div>
          <div>
            <Products prouctImg={prouct1} badgeText={'New'} />
          </div>
          <div>
            <Products prouctImg={prouct3} badgeText={'New'} />
          </div>
        </Slider>
      </Conteinar>

  
    </>
  );
};

export default Newarrival;
