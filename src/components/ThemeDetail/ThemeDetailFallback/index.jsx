import React from "react";

import * as S from "./style";

const ThemeDetailFallback = () => {
  return (
    <>
      <S.Layout>
        <S.MainSection>
          <div className="container">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
          <div className="image"></div>
        </S.MainSection>
        <S.TabMenu>
          <div className="tab"></div>
          <div className="tab"></div>
          <div className="tab"></div>
        </S.TabMenu>
        <S.DescSection>
          <div className="contaienr">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
          <div className="grid-layout">
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
          </div>
        </S.DescSection>
        <S.ReviewSection>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </S.ReviewSection>
        <S.OtherThemesSection>
          <div className="grid"></div>
          <div className="grid"></div>
          <div className="grid"></div>
          <div className="grid"></div>
          <div className="grid"></div>
          <div className="grid"></div>
          <div className="grid"></div>
          <div className="grid"></div>
        </S.OtherThemesSection>
      </S.Layout>
    </>
  );
};

export default ThemeDetailFallback;
