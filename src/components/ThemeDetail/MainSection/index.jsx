import React from "react";
import { useSelector } from "react-redux";
import { BsHeart } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

// components
import TabMenu from "../TabMenu";
import RatingBar from "../../Common/RatingBar";

// style
import * as S from "./style";

const MainSection = () => {
  const theme = useSelector((state) => state.themeDetail.theme);

  return (
    <>
      {theme && (
        <S.MainSection>
          <S.Article>
            <S.Background>
              <img
                alt="배경화면"
                src={`http://220.149.235.230/${theme.image}`}
              />
            </S.Background>
            <S.InfoContainer>
              <S.Description>
                <h3>{theme.cafeName}</h3>
                <h2>{theme.themeName}</h2>
                <div className="rating">
                  <RatingBar ratings={theme.rating} />
                  <div>{`${theme.review.length}개의 리뷰`}</div>
                </div>
              </S.Description>
              <S.Buttons>
                <BsHeart className="heart" />
                <div className="url">
                  <span>카페정보</span>
                  <BsArrowRight className="right-arrow" />
                </div>
              </S.Buttons>
            </S.InfoContainer>
            <S.Thumbnail>
              <img
                alt="배경화면"
                src={`http://220.149.235.230/${theme.image}`}
              />
            </S.Thumbnail>
          </S.Article>
          <TabMenu />
        </S.MainSection>
      )}
    </>
  );
};

export default MainSection;
