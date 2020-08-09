import React from "react";

// style
import * as S from "./style";

const MainSectionFallback = () => {
  return (
    <>
      <S.Layout>
        <S.Skeleton />
        <S.Skeleton />
        <S.Skeleton />
        <S.Skeleton />
        <S.Skeleton />
        <S.Skeleton />
        <S.Skeleton />
        <S.Skeleton />
      </S.Layout>
    </>
  );
};

export default MainSectionFallback;
