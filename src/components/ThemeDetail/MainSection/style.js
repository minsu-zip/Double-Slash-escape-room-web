import styled from "styled-components";

export const MainSection = styled.section`
  width: 100%;
  height: calc(100vh - 56px);
`;

export const Article = styled.article`
  display: flex;
  position: relative;
  padding: 4rem 0 4rem 0;
  width: 100%;
  height: 75%;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: -8rem;
  width: calc(100% + 16rem);
  height: 100%;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  height: 100%;
`;

export const Description = styled.div`
  height: 150px;
  color: white;
  h3 {
    margin-bottom: 1rem;
  }
  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  .rating {
    display: flex;
  }
`;

export const Buttons = styled.div`
  display: flex;
  color: white;
  img {
    width: 35px;
    height: 35px;
  }
  .heart {
    margin-right: 1.5rem;
  }
  .right-arrow {
    margin-left: 1rem;
  }
`;

export const Thumbnail = styled.div`
  width: 25%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
