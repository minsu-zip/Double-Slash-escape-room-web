import React from "react";

// component
import RatingBar from "../RatingBar";

// style
import * as S from "./style";

const Review = ({ comment }) => {
  return (
    <>
      {comment && (
        <S.Layout>
          <S.Header>
            <S.MainInfo>
              <S.Image>
                <img />
              </S.Image>
              <div>
                <S.UserName>
                  <span className="name">{comment.name}</span>
                  <span>{comment.created_at}</span>
                </S.UserName>
                <RatingBar ratings={comment.ratings} />
              </div>
            </S.MainInfo>
            <S.SubInfo>
              <div>
                <h3>난이도</h3>
                <span>{comment.level}</span>
              </div>
              <div>
                <h3>난이도</h3>
                <span>{comment.escape}</span>
              </div>
            </S.SubInfo>
          </S.Header>
          <S.Comment>{comment.description}</S.Comment>
        </S.Layout>
      )}
    </>
  );
};

export default Review;
