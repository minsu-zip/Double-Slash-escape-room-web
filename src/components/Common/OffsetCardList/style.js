import styled from 'styled-components';


//전체 감쌈
export const Container = styled.div`
    overflow: hidden;
    padding: 20px;
    margin: 10px;
    paading-top:50px;
    margin-top:50px;
    
    // position: relative;

    
`;

export const Img = styled.div`
    position: relative;
    // height : 200px;
    // width : 400px;
   img{
    height: 300px;
    width: 300px; 
    border-radius: 10%;
   }
`
export const Button = styled.div`
        position: absolute;
        top:10%;
        left:75%;
        text-align: center;

        button{
            font-family: 'Roboto', sans-serif;
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
            }
        
        button:hover {
            background-color: #2EE59D;
            box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
            color: #fff;
            transform: translateY(-7px);
        }
`


export const Row = styled.div`
    overflow: hidden;
    
`;

export const Column = styled.div`
    float: left;
    width: 25%;
    padding-top: 10px;
    padding-left: 30px;
    
   
`;

export const Item = styled.div`
    border: grey solid 1px;
    border-style: none;
    
`;

export const More = styled.div`

    margin-left: 23%;
    padding-left: 23%;
  
    button{
    height: 40px;
    width: 100px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    
    color: #fff;
    background-color: gray;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    }

button:hover {
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
}
    
`;

export const text = styled.div`
        font-size: 12px;
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