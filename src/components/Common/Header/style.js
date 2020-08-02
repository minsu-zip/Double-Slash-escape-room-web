import styled from 'styled-components';
//components/Common/Header/style.js

//전체 감쌈
export const Container = styled.header `
    display: block;
    top: 0px
    position: fixed;
    padding: 5px 10px 5px 10px;
    margin: 0px;
    background-color:linen;
`;//

//서비스 이름
export const Name = styled.div `
    display: inline-block;
    padding: 5px 10px;
    margin: 10px 10px;
    background-color:skyblue;
`;

//메뉴묶음
export const MenuWrapper = styled.div `
    display: inline-block;
    float: right;
    margin: 5px 10px 5px 10px; 
`;

//메뉴개별
export const Menu = styled.span `
    display: inline-block;
    padding: 5px;
    margin: 5px 20px;
    background-color:skyblue;
`;
