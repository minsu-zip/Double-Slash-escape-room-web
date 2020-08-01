/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

// actioon
import { CLICK_FILTER_CHECK_BOX } from "../../../store/actions/filterAction";

import * as S from "./style";

const FilterButton = ({ name }) => {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.filterReducer.clickedList);
  const clickButton = useCallback((event) => {
    event.preventDefault();
    dispatch({
      type: CLICK_FILTER_CHECK_BOX,
      data: name,
    });
  }, []);

  return (
    <>
      <S.Button clicked={clicked.includes(name)} onClick={clickButton}>
        {name}
      </S.Button>
    </>
  );
};

export default memo(FilterButton);
