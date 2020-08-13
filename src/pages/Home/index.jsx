import React, { useEffect } from "react";
import * as S from './style.js';
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";

import img from './main.png';
import SwipeCardList from "../../components/Common/SwipeCardList";



// action
import { loadThemes } from "../../store/actions/themesAction";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadThemes());
  }, [dispatch]);

  return (
    <>
      <S.Container>

        <S.ImgSize><img src={img} alt="z" /></S.ImgSize>

        <S.TitleWrapper>
          <S.Text><h1>ROOM ESCAPE</h1></S.Text>
          <S.Text><div>방탈출 카페 사이트에 오신것을 환영합니다.</div></S.Text>
          <S.Button><Link to='Cafe'>카페검색-></Link></S.Button>
          <S.Button><Link to='Theme'>테마검색-></Link></S.Button>
        </S.TitleWrapper>
      </S.Container>

      
      <S.Div><SwipeCardList></SwipeCardList></S.Div>
      
      
    </>
  );
};

export default Home;
