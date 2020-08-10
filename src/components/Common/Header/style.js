import styled from 'styled-components';
//components/Common/Header/style.js

//전체 감쌈
export const Container = styled.header `
    display: block;
    top: 0px
    position: fixed;
    padding: 15px 10px;
    margin: 0px;
`;

//서비스 이름
export const Name = styled.div `
    display: inline-block;
    padding: 5px 10px;
    margin: 10px 35px;
    font-size:25px;
    font-family:'Arial Black', sans-serif;
    a{
        color:black;
    }
`;

//메뉴묶음
export const MenuWrapper = styled.div `
    display: inline-block;
    float: right;
    margin: 5px 20px; 
    font-size:20px;
    align-items:center;
    a{
        color:#585858;
    }
    a:hover{
        color:black;
        font-weight:bolder;
    }
   
`;

//메뉴개별
export const Menu = styled.span `
    display: inline-block;
    padding: 5px;
    margin: 5px 30px;
`;
