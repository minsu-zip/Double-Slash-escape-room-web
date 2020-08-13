import styled from 'styled-components';


export const Container = styled.div`
    padding-left: 30px;
    margin-left: 30px;
    padding-right: 30px;
    margin-right: 30px;
`
export const title = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size:25px;
    font-family:'Arial Black', sans-serif;

`
export const Img = styled.div`
    position: relative;
    img{
        height: 300px;
        width: 500px;
        border-radius: 10%;
    }
    padding-top: 20px;
    margin-top: 20px;
    
`
export const text = styled.div`
        position: absolute;
        bottom:5%;
        font-weight: bold;
        left:5%;
        color: white;
        margin: 10px;
        div{
            padding:5px;
        }
        div:nth-child(2){
            font-weight: lighter;
        }
        
    
`

export const bold = styled.div`
// margin: 10px;
// font-weight: lighter;

    
`