import React, { useState } from "react";
import Post from '../Post/index';
import './style.css'
import * as S from './style.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, } from 'swiper';
import 'swiper/swiper-bundle.css';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const PostList = () => {
  const slides = [<Post></Post>];
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

      {/* <Swiper onSwiper={setThumbsSwiper}
       spaceBetween={5}
       slidesPerView={3}
      
      >
        {slides_s}
      </Swiper>

      <Swiper id="controller" onSwiper={setControlledSwiper}>
        {slides_s}
      </Swiper>
      <div>AA</div> */}



    </>

  );
};

export default PostList;
