import styled from "styled-components";

export const Layout = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  width: 100%;
  height: 80%;
  padding-bottom: 4rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  span {
    color: gray;
  }
  .phone {
    margin-bottom: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  button {
    width: 40px;
    height: 40px;
    outline: 0;
    border: 0.5px solid black;
    font-size: 0.7rem;
    background: white;
  }
  .link {
    display: flex;
    align-items: center;
    button {
      margin-top: 0.5rem;
    }
    span {
      margin-right: 0.5rem;
      color: white;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: calc(100% + 16rem);
  height: 100%;
  position: absolute;
  top: 0px;
  left: -8rem;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const RatingBarWrapper = styled.div`
  margin-bottom: 1.5rem;
`;
