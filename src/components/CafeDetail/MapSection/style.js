import styled from "styled-components";

export const Layout = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Map = styled.div`
  position: absolute;
  width: calc(100% + 16rem);
  height: 100%;
  top: 0;
  left: -8rem;
  z-index: 1;
`;
