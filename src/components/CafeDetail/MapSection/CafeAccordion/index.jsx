import React from "react";

// component
import RatingBar from "../../../Common/RatingBar";

// style
import * as S from "./style";

const CafeAccordion = ({ data }) => {
  console.log(data);
  return (
    <>
      <S.Layout>
        <S.ImageWrapper>
          <img src={data.thumbnail} />
        </S.ImageWrapper>
        <S.ImfoContainer>
          <h2>{data.cafe}</h2>
          <S.RatingBarWrapper>
            <RatingBar ratings={data.ratings} />
          </S.RatingBarWrapper>
          <div className="addreslocations">{data.location}</div>
          <div className="phone">{data.phone}</div>
        </S.ImfoContainer>
      </S.Layout>
    </>
  );
};

export default CafeAccordion;
