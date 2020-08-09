import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
  font-weight: ${(props) => props.url && "bold"};
  cursor: pointer;
  a {
    color: black;
  }
`;
