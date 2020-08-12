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
    h1{
        font-size: 30px;
    }
    margin: 10px;
    padding: 10px;
    font-family:'Arial Black', sans-serif;
    color:white;
`
export const Button = styled.button`
    
    margin: 10px;
    width: 140px;
    height: 40px;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
      
    &:hover {
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
`
