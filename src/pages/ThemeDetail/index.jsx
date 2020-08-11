import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import MainSection from "../../components/ThemeDetail/MainSection";
import DescSection from "../../components/ThemeDetail/DescSection";
import ReviewSection from "../../components/ThemeDetail/ReviewSection";
import Fallback from "../../components/ThemeDetail/ThemeDetailFallback";

// action
import { LOAD_THEME_REQUEST } from "../../store/actions/themeDetailAction";

// style
import * as S from "./style";

const ThemeDetail = ({ match }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeDetail.theme);

  useEffect(() => {
    const {
      params: { id },
    } = match;
    dispatch({
      type: LOAD_THEME_REQUEST,
      data: {
        id,
      },
    });
  }, [dispatch, match]);

  return (
    <>
      {theme ? (
        <S.Layout>
          <MainSection />
          <DescSection />
          <ReviewSection />
          <section></section>
        </S.Layout>
      ) : (
        <Fallback />
      )}
    </>
  );
};

export default ThemeDetail;
