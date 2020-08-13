import React, { useState } from "react";
import * as S from './style.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, } from 'swiper';
import 'swiper/swiper-bundle.css';
import { useSelector, useActions  } from 'react-redux';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const SwipeCardList = () => {

   const top10Themes = useSelector((state) => state.themes.top10Themes);
   const imgsilde = top10Themes.map((top,index)=>{
    return(
      <SwiperSlide key={index} tag="li">
          <S.Img><img key={index} src={"http://220.149.235.230/"+top.image} ></img><S.text><div>{top.themeName}</div><div>{top.cafeName+":   "+top.area}</div> </S.text></S.Img>
      </SwiperSlide>
     
    )
  })


  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ControlledSwiper, setControlledSwiper] = useState(null);

  return (
    <>
      <S.Container>
    
        
        <S.title>BEST POPULAR</S.title>
        {/* 멀티슬라이드 적용부분 */}
        <Swiper id="main" tag="section" wrapperTag="ul"
          navigation pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={200}
          slidesPerView={3}
          // onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          onSwiper={setThumbsSwiper}
        >
          {imgsilde}
        </Swiper>

      </S.Container>
    </>

  );
};

export default SwipeCardList;
