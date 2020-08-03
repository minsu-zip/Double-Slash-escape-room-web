import React from "react";
import { useSelector } from "react-redux";

// components
import TabMenu from "../TabMenu";
import RatingBar from "../../Common/RatingBar";

// style
import * as S from "./style";

const MainSection = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
      {theme && (
        <S.MainSection>
          <S.Article>
            <S.Background>
              <img />
            </S.Background>
            <S.InfoContainer>
              <S.Description>
                <h3>{theme.cafe}</h3>
                <h2>{theme.room}</h2>
                <div className="rating">
                  <RatingBar ratings={theme.ratings} />
                  <div>{`${theme.review_count}개의 리뷰`}</div>
                </div>
              </S.Description>
              <S.Buttons>
                <div className="button">찜</div>
                <div className="url">
                  <span>카페정보</span>
                  <span className="button">이동</span>
                </div>
              </S.Buttons>
            </S.InfoContainer>
            <S.Thumbnail>
              <img src={theme.thumbnail} />
            </S.Thumbnail>
          </S.Article>
          <TabMenu />
        </S.MainSection>
      )}
    </>
  );
};

export default MainSection;
