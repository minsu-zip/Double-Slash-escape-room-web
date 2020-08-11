/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// components
import CafeAccordionLayout from "./CafeAccordionLayout";
import MapSectionFallback from "../MapSectionFallback";

// style
import * as S from "./style";
const { kakao } = window;

const MapSection = () => {
  const cafeInfo = useSelector((state) => state.cafeDetail.cafeInfo);

  // 카카오 Map 생성
  useEffect(() => {
    const { longitude, latitude } = cafeInfo;
    kakao.maps.load(() => {
      let element = document.getElementById("map");
      const map = new kakao.maps.Map(element, {
        center: new kakao.maps.LatLng(latitude, longitude),
        draggable: false,
      });
      const markerPosition = new kakao.maps.LatLng(latitude, longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    });
  }, []);

  return (
    <>
      {cafeInfo && (
        <S.Layout>
          <S.Map id="map"></S.Map>
          <CafeAccordionLayout data={cafeInfo} />
        </S.Layout>
      )}
    </>
  );
};

export default MapSection;
