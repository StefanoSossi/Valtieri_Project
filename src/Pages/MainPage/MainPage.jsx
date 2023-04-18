import React from 'react';
import PromSection from '../../Components/PromSection/PromSection';
import StoreSection from '../../Components/StoreSection/StoreSection';
import BottomBar from '../../Components/BottomBar/BottomBar'
import MainCarousel from '../../Components/Carousel/carousel';
import NewCollection from '../../Components/NewCollection/NewCollection';

const MainPage = () => {

  return (
    <>
      <MainCarousel />
      <NewCollection />
      <PromSection></PromSection>
      <StoreSection></StoreSection>
      <BottomBar></BottomBar>
    </>
  );
}

export default MainPage;