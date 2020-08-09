import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 220px);
  grid-gap: 4rem;
  width: 100%;
  height: 100vh;
  padding: 0 8rem 0 8rem;
`;

export const Skeleton = styled.div`
  background: #f5f5f5;
`;
