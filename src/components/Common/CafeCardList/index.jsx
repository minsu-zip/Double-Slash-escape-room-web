import React, { useState } from "react";
import * as S from './style.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, } from 'swiper';
import 'swiper/swiper-bundle.css';
import { useSelector, useActions  } from 'react-redux';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const SwipeCardList = () => {

   const allCafes = useSelector((state) => state.cafes.allCafes);
    console.log(allCafes);
   const imgsilde = allCafes.map((all,index)=>{
    return(
      <SwiperSlide key={index} tag="li">
          <S.Img>
          <a href ={all.url}><img key={index} src={"http://220.149.235.230/"+all.logo}></img></a>
            <S.text><div>{all.cafeName+"   "+all.area+"점"}</div></S.text>
          </S.Img>
      </SwiperSlide>
     
    )
  })


  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ControlledSwiper, setControlledSwiper] = useState(null);

  return (
    <>
      <S.Container>
    
        
        <S.title>NEW STORE</S.title>
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
