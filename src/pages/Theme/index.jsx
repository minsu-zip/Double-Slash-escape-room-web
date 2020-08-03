import React from "react";

// components
import ThemeHeader from "../../components/Common/ThemeHeader";
import SwipeCardList from "../../components/Common/SwipeCardList";
import OffsetCardList from "../../components/Common/OffsetCardList";
// test
import ThemePopup from "../../components/FilterPopup";

const Theme = () => {
  return (
    <>
      <ThemeHeader />
      <SwipeCardList />
    
      <OffsetCardList/>
      
      <ThemePopup />
    </>
  );
};

export default Theme;
