import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  padding: 1rem;
  background: white;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 20%;
  height: 100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ImfoContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 2rem 1rem 2rem 1rem;
  h2 {
    margin-bottom: 1rem;
    font-weight: bold;
  }
  .location {
    margin: 0.5rem 0 0.5rem 0;
  }
`;

export const RatingBarWrapper = styled.div`
  margin-bottom: 1rem;
`;
