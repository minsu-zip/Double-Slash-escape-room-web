/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

// action
import { clickFilterCheckBox } from "../../../store/actions/filterAction";
import { genre } from "../../../store/reducers/filterReducer/clickFilterCheckBox";

import * as S from "./style";

const FilterButton = ({ name, category }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.filter.clickedList);
  const clicked =
    category === "genre"
      ? list[category] === genre[name]
      : list[category] === name;

  // 체크박스 클릭
  const clickButton = useCallback((event) => {
    event.preventDefault();
    dispatch(clickFilterCheckBox(category, name));
  }, []);

  return (
    <>
      <S.Button onClick={clickButton} clicked={clicked}>
        {name}
      </S.Button>
    </>
  );
};

export default memo(FilterButton);
