import React from "react";
import {Route, Link} from 'react-router-dom';

import * as S from './style.js'
import Cafe from '../../../pages/Cafe/index.jsx'
import Theme from '../../../pages/Theme/index.jsx'

const Header = () => {
  return (
    <>
    <S.Container>
      
      <S.Name><a href='/'>ROOM ESCAPE</a></S.Name>

      <S.MenuWrapper>
        <S.Menu><Link to='Cafe'>카페</Link></S.Menu>
        <S.Menu><Link to='Theme'>테마</Link></S.Menu>
        {/* <S.Menu><Link to=''>마이페이지</Link></S.Menu> */}
      </S.MenuWrapper>
      
    </S.Container>
    </>
  );
};

export default Header;
