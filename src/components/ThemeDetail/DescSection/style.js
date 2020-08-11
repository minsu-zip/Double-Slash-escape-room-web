import styled from "styled-components";

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  .cafe {
    margin-bottom: 1rem;
  }
  .room {
    margin-bottom: 4rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .description {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-bottom: 4rem;
    word-break: break-all;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(2, 50px);
  gap: 1rem;
  width: calc(100% + 16rem);
  height: 150px;
  padding-top: 1rem;
`;
