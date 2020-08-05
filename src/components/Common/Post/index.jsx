import React from "react";
import * as S from './style.js';

import dummy from '../../../dummy/themes.json';

const Post = () => {
  const datadummy = dummy;
  const img_data = datadummy.map((dummy, index) => {
    return (
      <img key={index} src={dummy.thumbnail}></img>
    )
  });

  return (
    <>
      <S.Wrapper>{img_data}</S.Wrapper>
    </>
  );
};

export default Post;
