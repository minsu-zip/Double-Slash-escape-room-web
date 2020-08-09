import React from "react";
import { useSelector } from "react-redux";
import { Element } from "react-scroll";

// component
import Review from "../../Common/Review";

// style
import * as S from "./style";

const ReviewSection = () => {
  const theme = useSelector((state) => state.themeDetail.theme);

  return (
    <>
      {theme && (
        <Element name="review">
          <S.Layout>
            <h3 className="room">{theme.room}</h3>
            <h2 className="review">리뷰</h2>
            {theme.reviews.map((comment) => {
              return (
                <Review
                  key={comment.name + Math.floor(Math.random() * 1000)}
                  comment={comment}
                />
              );
            })}
          </S.Layout>
        </Element>
      )}
    </>
  );
};

export default ReviewSection;
