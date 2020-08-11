import React, { memo } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiPhone } from "react-icons/gi";
import { BsHeart } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

// component
import RatingBar from "../../Common/RatingBar";

// style
import * as S from "./style";

const MainSection = ({ data }) => {
  return (
    <>
      <S.Layout>
        <S.ImageWrapper>
          <img src={`http://220.149.235.230/${data.logo}`} alt="배경화면" />
        </S.ImageWrapper>
        <S.InfoContainer>
          <h2>{data.cafeName}</h2>
          <S.RatingBarWrapper>
            <RatingBar ratings={data.rating || 0} />
            <span>{data.review_count || 0}개의 리뷰</span>
          </S.RatingBarWrapper>
          <div className="phone">
            <FaMapMarkerAlt />
            <span>{data.phoneNum}</span>
          </div>
          <div className="location">
            <GiPhone />
            <span>{data.address}</span>
          </div>
        </S.InfoContainer>
        <S.ButtonContainer>
          <BsHeart className="heart" />
          <div className="link">
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <span>업체 홈페이지</span>
              <AiOutlineArrowRight />
            </a>
          </div>
        </S.ButtonContainer>
      </S.Layout>
    </>
  );
};

export default memo(MainSection);
