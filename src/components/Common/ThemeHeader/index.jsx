import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Router, Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

import * as S from "./style.js";

// action
import { filterPopupStatus } from "../../../store/actions/themeAction";

const ThemeHeader = () => {
  const dispatch = useDispatch();

  // 필터링 버튼 클릭
  const clickFilterBtn = useCallback(() => {
    dispatch(filterPopupStatus());
  }, [dispatch]);

  return (
    <>
      <S.Container>
        <S.Span>테마검색</S.Span>

        <form>
          <S.Input>
            <input
              type="text"
              placeholder="이름으로 테마 검색"
              class="search"
            ></input>
            <input type="submit" value="검색" class="submit"></input>
          </S.Input>
        </form>

        <S.Filter onClick={clickFilterBtn}>
          <FaFilter />
        </S.Filter>
      </S.Container>
    </>
  );
};

export default ThemeHeader;
