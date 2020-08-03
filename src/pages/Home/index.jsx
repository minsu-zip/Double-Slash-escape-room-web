import React from "react";
import * as S from './style.js';
import img from './16.jpg';

// components
import PostList from "../../components/Common/PostList";

const Home = () => {
  return (
    <>
      <S.Container>

        <S.ImgSize><img src={img} alt="z" /></S.ImgSize>

        <S.TitleWrapper>
          <S.Text>xx방탈출</S.Text>
          <S.Text>토론을 시작하거나, 메모를 작성하거나, 아트보드에 주석을 달려면 댓글을 남겨 주십시오.</S.Text>
          <S.Button>테마검색</S.Button>
          <S.Button>테마검색</S.Button>
        </S.TitleWrapper>
      </S.Container>

      <PostList></PostList>
      
    </>
  );
};

export default Home;
