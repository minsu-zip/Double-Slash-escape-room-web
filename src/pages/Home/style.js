import styled from 'styled-components';

//전체 감쌈
export const Container = styled.header`
    width: 100%;
    height: 100%;
    position: relative;
`;

// 이미지 크기
export const ImgSize = styled.div`
    width: 100%;
    // height: 100vh;
   
    img{
        width: 100vw;
        height: 100vh;
    }
`;

export const TitleWrapper = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
`
export const Text = styled.div`
    margin: 10px;
`

export const Button = styled.button`
    margin: 10px;
`


// .container {
//     width: 100%;
//     height: 100%;
//     position: relative;
//   }
//   img{
//     width: 100%;
//   }
//   .title {
//       position: absolute;
//       top: 40%;
//       left: 50%;

//   }
//   .title-text, button{
//     margin: 10px;
//   }
