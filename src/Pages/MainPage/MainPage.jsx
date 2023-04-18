import React from 'react';
import PromSection from '../../Components/PromSection/PromSection';
import StoreSection from '../../Components/StoreSection/StoreSection';
import BottomBar from '../../Components/BottomBar/BottomBar'

const MainPage = () => {

  return (
    <>
      <PromSection></PromSection>
      <StoreSection></StoreSection>
        <BottomBar></BottomBar>
    </>
  );
}

export default MainPage;