import styled from "styled-components";

export const Layout = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  width: 100%;
  height: calc(75vh - 56px);
  padding-bottom: 4rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
  }
  span,
  svg {
    color: white;
  }
  svg {
    margin-right: 1rem;
  }
  .phone {
    margin-bottom: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  svg {
    color: white;
  }
  .link {
    display: flex;
    align-items: center;
    margin-top: 1rem;
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
