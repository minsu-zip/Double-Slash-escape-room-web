import styled from 'styled-components';
//components/Common/ThemeHeader/style.js

export const Container = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding:20px 25px;
    margin:50px 30px 10px 30px;
    
    font-size: 20px;
`;

export const Span = styled.span`
    display: inline-flex;
    font-size: 30px;
    font-weight: 900; 
    color:#6E6E6E;
    margin-left: 5px;
`;

export const Input = styled.form `
    display: inline-flex;
    justify-content: space-between;

    padding:0px 10px;
    margin-left: 50px;

    background-color:#FAFAFA;
    border-style: solid;
    border-width: 1.5px;
    border-color:#BDBDBD;
    border-radius: 45px / 45px;

    input {
        display: inline-flex;
        justify-content: space-between;
        border:0px;
        background-color:#FAFAFA;
        margin:5px 20px;
    }
    .search{
        font-size: 20px;
        width: 700px;
        height: 40px;
    }
    .search::placeholder{
        color:#A4A4A4;
    }
    .search:focus{
        outline:none;
    }
`;

export const Magni = styled.div `
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 25px;

    width: 50px;
    height: 40px;
    margin: 5px;
`;

export const Filter = styled.div `
    display: inline-flex;
    justify-content: space-around;
    align-items: center;

    cursor:pointer;
    font-size: 22px;
    color: #E6E6E6;
    background-color: #585858;
    border-radius: 45px / 45px;

    width: 180px;
    height: 50px;
    margin-right:10px;
    padding:5px 20px;
`;

