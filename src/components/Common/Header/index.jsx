import React from "react";

import * as S from './style.js'

const Header = () => {
  return (
    <>
    <S.Container>
      
      <S.Name><a href='/'>방탈출</a></S.Name>

      <S.MenuWrapper>
        <S.Menu><a href='/'>카페</a></S.Menu>
        <S.Menu><a href='/'>테마</a></S.Menu>
        <S.Menu><a href='/'>마이페이지</a></S.Menu>
      </S.MenuWrapper>
      
    </S.Container>
    </>
  );
};

export default Header;
