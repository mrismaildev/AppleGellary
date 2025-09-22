import React from 'react'
import Bannar from '../layouts/Bannar'
import Ads from '../layouts/Ads'
import Newarrival from '../layouts/Newarrival';
import Addcart from '../layouts/Addcart';
import Bestseller from '../layouts/Bestseller';



const Home = () => {
  return (
    <>
      <Addcart />
      <Bannar />
      <Ads />
      <Newarrival />
      <Bestseller />
   
    </>
  );
}

export default Home
