import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// components
import MainSection from "../../components/ThemeDetail/MainSection";
import DescSection from "../../components/ThemeDetail/DescSection";
import ReviewSection from "../../components/ThemeDetail/ReviewSection";

// action
import { LOAD_THEME_REQUEST } from "../../store/actions/themeAction";

// style
import * as S from "./style";

const ThemeDetail = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { params } = match;
    dispatch({
      type: LOAD_THEME_REQUEST,
      data: {
        params,
      },
    });
  }, [dispatch, match]);

  return (
    <>
      <S.Layout>
        <MainSection />
        <DescSection />
        <ReviewSection />
        <section></section>
      </S.Layout>
    </>
  );
};

export default ThemeDetail;
