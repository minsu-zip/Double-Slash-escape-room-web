import React, { useState } from "react";
import Post from '../Post';
import * as S from './style.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const SwipeCardList = () => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ControlledSwiper, setControlledSwiper] = useState(null);
  const slides_s = [];

  for (let i = 0; i < 10; i++) {
    slides_s.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        {Post`style={listStyle: 'none'}`}
      </SwiperSlide>
    )
  }

  return (
    <>
      <S.Container>

        <S.text>BEST POPULAR</S.text>
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
