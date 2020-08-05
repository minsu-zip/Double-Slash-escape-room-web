import React from "react";
import {Router, Link} from 'react-router-dom';
import {FaFilter} from 'react-icons/fa';

import * as S from './style.js';

const ThemeHeader = () => {

  return (
    <>
      <S.Container>
        <S.Span>테마검색</S.Span>
        
        <form>
          <S.Input>
          <input type='text' placeholder='이름으로 테마 검색' class='search'></input> 
          <input type='submit' value='검색' class='submit'></input>
          </S.Input>
        </form>

        <S.Filter><FaFilter /></S.Filter>
      </S.Container>
    </>
  );
};

export default ThemeHeader;
