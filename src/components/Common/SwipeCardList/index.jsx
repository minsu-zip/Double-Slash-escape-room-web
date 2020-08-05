import React, { useState } from "react";
import Post from '../Post';
import * as S from './style.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, } from 'swiper';
import 'swiper/swiper-bundle.css';

import dummy from '../../../dummy/themes.json';
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const SwipeCardList = () => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ControlledSwiper, setControlledSwiper] = useState(null);
  const slides_s = [];

  const datadummy = {dummy};

  // for (let i = 0; i< datadummy.length; i++){
  //   datadummy[i].
  // }

  for (let i = 0; i < 10; i++) {
    slides_s.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <S.Img>{Post`style={listStyle: 'none'}`} <S.text><div>금주의 테마</div></S.text></S.Img>
      </SwiperSlide>
    )
  }

  return (
    <>
      <S.Container>

        <S.title>BEST POPULAR</S.title>
        {/* 멀티슬라이드 적용부분 */}
        <Swiper id="main" tag="section" wrapperTag="ul"
          navigation pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={200}
          slidesPerView={4}
          // onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          onSwiper={setThumbsSwiper}
        >
          {slides_s}
        </Swiper>

      </S.Container>
    </>

  );
};

export default SwipeCardList;
