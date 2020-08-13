import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// components
import CafeTab from "../../components/CafeTab";
import CafeCardList from "../../components/Common/CafeCardList";

// action
import { loadCafes } from "../../store/actions/cafesAction";

const Cafe = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCafes());
  }, [dispatch]);

  return (
    <>
      {/* <CafeTab /> */}
      <CafeCardList />
    </>
  );
};

export default Cafe;
