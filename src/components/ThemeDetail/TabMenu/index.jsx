import React from "react";
import { Link } from "react-scroll";

import * as S from "./style";

const TabMenu = () => {
  return (
    <>
      <S.TabMenu>
        <S.Tab>
          <Link to="desc" smooth={true} duration={500}>
            소개
          </Link>
        </S.Tab>
        <S.Tab>
          <Link to="review" smooth={true} duration={700}>
            리뷰
          </Link>
        </S.Tab>
        <S.Tab>
          <Link to="otherTheme" smooth={true} duration={500}>
            이 업체의 다른 테마
          </Link>
        </S.Tab>
      </S.TabMenu>
    </>
  );
};

export default TabMenu;
