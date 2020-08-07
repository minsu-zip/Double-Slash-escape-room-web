import React from "react";
import * as S from './style.js';
import {Route, Link} from 'react-router-dom';


import img from './16.jpg';
import SwipeCardList from "../../components/Common/SwipeCardList";
import Cafe from '../../pages/Cafe/index.jsx'
import Theme from '../../pages/Theme/index.jsx'

const Home = () => {
  return (
    <>
      <S.Container>

        <S.ImgSize><img src={img} alt="z" /></S.ImgSize>

        <S.TitleWrapper>
          <S.Text><h1>xx방탈출</h1></S.Text>
          <S.Text>토론을 시작하거나, 메모를 작성하거나, 아트보드에 주석을 달려면 댓글을 남겨 주십시오.</S.Text>
          <S.Button><Link to='Cafe'>카페검색</Link></S.Button>
          <S.Button><Link to='Theme'>테마검색</Link></S.Button>
        </S.TitleWrapper>
      </S.Container>

      <SwipeCardList></SwipeCardList>
      
    </>
  );
};

export default Home;
