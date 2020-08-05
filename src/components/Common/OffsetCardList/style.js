import styled from 'styled-components';


//전체 감쌈
export const Container = styled.div`
    overflow: hidden;
    padding: 20px;
    margin: 10px;
    padding-left: 70px;
    
`;

export const Img = styled.div`
    position: relative;
    height : 200px;
    width : 300px;
   img{
    height: 200px;
    width: 300px;
   }
`
export const text = styled.button`
        position: absolute;
        top:10%;
        left:85%;
        text-align: center;
`


export const Row = styled.div`
    overflow: hidden;
    
`;

export const Column = styled.div`
    float: left;
    width: 25%;
    padding-top: 10px;
   
`;

export const Item = styled.div`
    border: grey solid 1px;
    text-align: center;
    border-style: none;
    
`;

export const More = styled.div`
	margin-left: 370px;
    padding-left: 370px;
`;

