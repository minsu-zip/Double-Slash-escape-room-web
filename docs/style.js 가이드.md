# style.js 가이드

## 가이드

1. styled components 사용

- 일반적인 css나, css의 전처리기인 sass를 사용하지 않고 styled components를 사용하려고 합니다
- css조차 컴포넌트로 만들기 때문에 css의 재활용성과 code의 가독성을 높일 수 있습니다.
- styled components의 공식 홈페이지에서 자세한 정보를 확인 할 수 있습니다.
  - https://styled-components.com/docs/basics

2. styled components 작성

- layout header를 작성한다는 예시로 설명드리겠습니다.
- 현재 layout header에서 좌측에는 방탈출 로고, 우측에는 메뉴 버튼이 있다고 가정하겠습니다.
- 원하시는 대로 변수 이름을 작성하셔도 되지만, 이름만 보고 한 눈에 무엇인지 알 수 있도록 작성 부탁 드립니다.
- 저는 전체적인 layout을 의미할 때는 Container, input이나 button처럼 하나의 태그에만 사용하고 싶을 때는 Input, Button으로 작성합니다. 그리고 여러 태그를 감싸긴 하지만 Container보다는 범위가 작을 경우 Wrapper라고 작성합니다.
- 변수 앞에는 export default가 아닌, default를 붙여주시기 바랍니다.

```javascript
// components/Common/Header/style.js
import styled from "styled-componts";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  padding: 0 1rem 0 1rem;
`;

export const Logo = styled.div`
  dispaly: inline-flex;
  width: 80px;
  height: 100%;
  // Logo style component에 있는 img 태그에만 특정 style 적용
  img {
    pointer: cursor;
  }
`;

export const MenuWrapper = styled.ul`
  display: flex;
  justify-content: center;
  width: 20%;
  height: 100%;
`;
```

- style.js에서 작성한 css를 import 해야 됩니다. index.jsx에는 일반 태그, style에 관련된 컴포넌트, 자식 컴포넌트 등 여러 컴포넌트가 있을 겁니다.

- 그 중에서 style 관련 컴포넌트, 자식 컴포넌트를 구분하기 위해 키워드를 붙이려고 합니다.
- import \* as S from "./style.js"로 불러옵니다.
- *의 의미는 style.js에서 작성했던 모든 export를 *으로 묶어버린다는 뜻입니다.
- 그리고 * as S는 *의 이름을 S로 변경하겠다는 뜻입니다.
- index.jsx에서 return 부분에 css 컴포넌트를 적용해야 합니다. S.라는 키워드를 붙여주시면 export로 작성한 변수를 불러올 수 있습니다.

```javascript
// components/Common/Header/index.js
import React from "react";

import * as S from "./style";

const Header = () => {
  return (
    <>
      <S.Container>
        <S.Logo>
          <img />
        </S.Logo>
        <S.MenuWrapper>
          <Menu />
          <Menu />
          <Menu />
        </S.MenuWrapper>
      </S.Container>
    </>
  );
};
```
