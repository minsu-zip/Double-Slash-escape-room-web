import styled from 'styled-components';
//components/Common/ThemeHeader/style.js

export const Container = styled.header `
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding:20px 25px;
    margin:10px 30px;
    
    font-size: 20px;
    border-style: solid;
    border-width: 0px 0px 0.5px 0px;
    border-color: gray;
`;

export const Span = styled.span`
    display: inline-flex;
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 10px;
`;

export const Input = styled.form `
    display: inline-flex;
    justify-content: space-between;

    padding:0px 10px;
    background-color: royalBlue;
    input {
        display: inline-flex;
        justify-content: space-between;
        border:0px;
        margin:5px 20px;
    }
    .search{
        font-size: 20px;
        width: 400px;
        height: 40px;
    }
    .submit{
        justify-content: center;
        align-items: center;
        background-color: skyblue;
        cursor: pointer;

        width: 50px;
        height: 40px;
    }
`;

export const Filter = styled.div `
    display: inline-flex;
    justify-content: space-between;
    svg{cursor:pointer;}
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 40px;

    margin:0px 0px 0px 50px;
    padding:5px 10px;
    background-color: skyblue;
`;

