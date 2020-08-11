import styled from "styled-components";

export const Layout = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  border: 0.2px solid gray;
  z-index: 10;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
  width: 100%;
  height: 50px;
  border-bottom: 0.5px solid black;
  background: white;
`;

export const ButtonBoreder = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 50%;
  cursor: pointer;
`;
