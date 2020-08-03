import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  z-index: 10;
  background: white;
  &.hide {
    display: none;
  }
`;

export const PopupHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: pink;
    svg {
      cursor: pointer;
    }
  }
`;

export const AccordionWrapper = styled.ul`
  margin-bottom: 2rem;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 10%;
  left: calc(50% - 75px);
  width: 150px;
  height: 40px;
  button {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .positioner {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .block {
    display: ${(props) => (props.block.length === 0 ? "inline-flex" : "none")};
    background: ${(props) => (props.block.length === 0 ? "gray" : "white")};
    color: ${(props) => (props.block.length === 0 ? "black" : "white")};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
