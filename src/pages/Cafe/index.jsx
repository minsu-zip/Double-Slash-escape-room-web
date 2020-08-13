import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// components
import CafeTab from "../../components/CafeTab";
import ThemeCardList from "../../components/Common/ThemeCardList";

// action
import { loadCafes } from "../../store/actions/cafesAction";

const Cafe = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCafes());
  }, [dispatch]);

  return (
    <>
      <CafeTab />
      <ThemeCardList />
    </>
  );
};

export default Cafe;
