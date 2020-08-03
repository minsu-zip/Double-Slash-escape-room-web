import React from "react";

// style
import * as S from "./style";

const GridItem = ({ name, data }) => {
  return (
    <>
      <S.Layout>
        <S.Name>{name}</S.Name>
        <div className="data">{data}</div>
      </S.Layout>
    </>
  );
};

export default GridItem;
