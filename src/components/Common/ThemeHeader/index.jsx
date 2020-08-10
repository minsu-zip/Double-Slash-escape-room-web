import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Router, Link } from "react-router-dom";

import Magnifier from "./그래픽_검색.png"
import FilterIcon from "./그래픽_필터.png"
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
        <S.Span>테마</S.Span>

        <form>
          <S.Input>
            <input
              type="text"
              placeholder="search"
              class="search"
            ></input>
            <S.Magni>
              <img src={Magnifier} /> 
            </S.Magni>
          </S.Input>
        </form>

        <S.Filter onClick={clickFilterBtn}>
          <div>filter</div> <img src={FilterIcon} />
        </S.Filter>
      </S.Container>
    </>
  );
};

export default ThemeHeader;
