import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// components
import ThemeHeader from "../../components/Common/ThemeHeader";
import SwipeCardList from "../../components/Common/SwipeCardList";
import OffsetCardList from "../../components/Common/OffsetCardList";

// test
import ThemePopup from "../../components/FilterPopup";

// action
import { loadThemes } from "../../store/actions/themesAction";

const Theme = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadThemes());
  }, [dispatch]);

  return (
    <>
      <ThemeHeader />
      <SwipeCardList />

      <OffsetCardList />

      <ThemePopup />
    </>
  );
};

export default Theme;
