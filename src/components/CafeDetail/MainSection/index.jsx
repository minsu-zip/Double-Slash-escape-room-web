import React, { memo } from "react";

// component
import RatingBar from "../../Common/RatingBar";

// style
import * as S from "./style";

const MainSection = ({ data }) => {
  return (
    <>
      <S.Layout>
        <S.ImageWrapper>
          <img src={data.thumbnail} />
        </S.ImageWrapper>
        <S.InfoContainer>
          <h2>{data.cafe}</h2>
          <S.RatingBarWrapper>
            <RatingBar ratings={data.ratings} />
            <span>{data.review_count}개의 리뷰</span>
          </S.RatingBarWrapper>
          <span className="phone">{data.phone}</span>
          <span className="location">{data.location}</span>
        </S.InfoContainer>
        <S.ButtonContainer>
          <button>찜</button>
          <div className="link">
            <span>업체 홈페이지</span>
            <button>이동</button>
          </div>
        </S.ButtonContainer>
      </S.Layout>
    </>
  );
};

export default memo(MainSection);
