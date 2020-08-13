import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  border-bottom: 1px solid gray;
`;

export const AccordionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    svg {
      cursor: pointer;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 50px);
  gap: 1rem;
  width: 100%;
  padding-top: 1rem;
`;
