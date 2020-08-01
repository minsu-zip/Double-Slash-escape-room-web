import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.clicked ? "black" : "white")};
  color: ${(props) => (props.clicked ? "white" : "black")};
  border-radius: 20px;
  border: 0.5px solid gray;
  outline: 0;
  cursor: pointer;
`;
