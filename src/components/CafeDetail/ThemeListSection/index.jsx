import React from "react";
import { useSelector } from "react-redux";

// style
import * as S from "./style";

const ThemeListSection = () => {
  const cafeInfo = useSelector((state) => state.cafeDetail.cafeInfo);
  return (
    <>
      <S.Layout>ThemeListSection</S.Layout>
    </>
  );
};

export default ThemeListSection;
