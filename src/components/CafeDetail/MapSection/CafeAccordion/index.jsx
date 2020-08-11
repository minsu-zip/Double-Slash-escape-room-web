import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiPhone } from "react-icons/gi";

// component
import RatingBar from "../../../Common/RatingBar";

// style
import * as S from "./style";

const CafeAccordion = ({ data }) => {
  return (
    <>
      <S.Layout>
        <S.ImageWrapper>
          <img src={`http://220.149.235.230/${data.logo}`} />
        </S.ImageWrapper>
        <S.ImfoContainer>
          <h2>{data.cafeName}</h2>
          <S.RatingBarWrapper>
            <RatingBar ratings={data.rating} />
            <span>{data.review || 0}개의 평가</span>
          </S.RatingBarWrapper>
          <div className="address">
            <FaMapMarkerAlt />
            <span>{data.address}</span>
          </div>
          <div className="phone">
            <GiPhone />
            <span>{data.phoneNum}</span>
          </div>
        </S.ImfoContainer>
      </S.Layout>
    </>
  );
};

export default CafeAccordion;
