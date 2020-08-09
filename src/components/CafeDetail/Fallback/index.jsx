import React, { useMemo } from "react";
import { withRouter } from "react-router-dom";

// components
import MapSectionFallback from "../MapSectionFallback";
import ThemeSectionFallback from "../ThemeSectionFallback";

// style
import * as S from "./style";

const Fallback = ({ match }) => {
  const ThemeOrMapFallback = useMemo(() => {
    if (!("info" in match.params) || match.params.info === "theme") {
      return ThemeSectionFallback;
    } else {
      return MapSectionFallback;
    }
  }, [match.params]);

  return (
    <>
      <S.Layout>
        <S.MainSection>
          <S.Image></S.Image>
          <S.InfoContainer>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </S.InfoContainer>
          <S.ButtonContainer>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </S.ButtonContainer>
        </S.MainSection>
        <S.TabMenu>
          <div className="tab"></div>
          <div className="tab"></div>
        </S.TabMenu>
        <ThemeOrMapFallback />
      </S.Layout>
    </>
  );
};

export default withRouter(Fallback);
