import React from "react";

// style
import * as S from "./style";

const MapSectionFallback = () => {
  return (
    <>
      <S.Layout>
        <S.Map></S.Map>
        <S.Accordion></S.Accordion>
      </S.Layout>
    </>
  );
};

export default MapSectionFallback;
