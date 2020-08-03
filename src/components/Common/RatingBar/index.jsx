import React from "react";

// style
import * as S from "./style";

const RatingBar = ({ ratings }) => {
  return (
    <>
      {ratings &&
        Array(5)
          .fill()
          .map((value, index) => {
            const starColor = index + 1 <= ratings;
            return <S.Star style={starColor} />;
          })}
    </>
  );
};

export default RatingBar;
