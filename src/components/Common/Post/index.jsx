import React from "react";
import * as S from './style.js';

// import dummy from '../../../dummy/themes.json';
import { useSelector, useActions  } from 'react-redux';
import SwipeCardList from '../SwipeCardList'
const Post = () => {
  // const datadummy = dummy;

  const top10Themes = useSelector((state) => state.themes.top10Themes);
  // console.log(top10Themes)
   const img_data = top10Themes.map((top,index)=>{
     return(
      <img key={index} src={"http://220.149.235.230/"+top.image}></img>
      
     )
   })

  // const img_data = datadummy.map((dummy, index) => {
  //   return (
  //     <img key={index} src={dummy.thumbnail}></img>
  //   )
  // });


  return (
    <>
      <S.Wrapper img_data>{img_data}</S.Wrapper>
    </>
  );
};

export default Post;
