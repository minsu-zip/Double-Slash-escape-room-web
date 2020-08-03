import styled from "styled-components";

export const MainSection = styled.section`
  width: 100%;
  height: 100%;
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
  background: red;
  z-index: -1;
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
  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: white;
    color: gray;
    cursor: pointer;
  }
  .url {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 110px;
    margin-left: 4rem;
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
