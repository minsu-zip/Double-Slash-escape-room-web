import styled from 'styled-components';


//전체 감쌈
export const Container = styled.div`
    overflow: hidden;
    padding: 20px;
    margin: 10px
    
`;

export const Img = styled.div`
    position: relative;
   img{
    height: 300px;
    width: 300px;
   }
`
export const text = styled.button`
        position: absolute;
        top:10%;
        left:80%;
        text-align: center;
`


export const Row = styled.div`
    // overflow: hidden;
    
`;

export const Column = styled.div`
    float: left;
    width: 25%;
    padding: 10px;
    
`;

export const Item = styled.div`
    border: grey solid 1px;
    text-align: center;
    
`;

export const More = styled.div`

	margin-left: 370px;
    padding-left: 370px;
`;

