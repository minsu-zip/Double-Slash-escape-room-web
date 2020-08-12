import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Router, Link } from "react-router-dom";

import { RiEqualizerLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
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
              <BsSearch /> 
            </S.Magni>
          </S.Input>
        </form>

        <S.Filter onClick={clickFilterBtn}>
          <div>filter</div> <RiEqualizerLine />
        </S.Filter>
      </S.Container>
    </>
  );
};

export default ThemeHeader;
