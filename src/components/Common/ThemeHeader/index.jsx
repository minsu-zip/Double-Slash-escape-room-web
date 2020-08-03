import React from "react";
import {Router, Link} from 'react-router-dom';
import {FaFilter} from 'react-icons/fa';

import * as S from './style.js';
// import Theme from '/';
import Filter from '../../FilterPopup';

const ThemeHeader = () => {
  // const showFilterPopup = useCallback(() => { alert(1);});

  return (
    <>
      <S.Container>
        <span>테마검색</span>
        <S.Input>
        <form>
          
        </form>
        </S.Input>
      </S.Container>
    </>
  );
};

export default ThemeHeader;
