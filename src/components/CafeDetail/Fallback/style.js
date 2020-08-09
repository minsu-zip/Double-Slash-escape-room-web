import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: calc(100vh - 56px);
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  width: 100%;
  height: 80%;
  padding: 0 8rem 0 8rem;
  .skeleton {
    width: 200px;
    height: 20px;
    margin-bottom: 1rem;
    background: #e8e8e8;
  }
`;

export const Image = styled.div`
  position: absolute;
  width: calc(100% + 8rem);
  height: 100%;
  left: -8rem;
  background: #f5f5f5;
  z-index: -1;
`;

export const InfoContainer = styled.div``;

export const ButtonContainer = styled.div``;

export const TabMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  .tab {
    width: 100px;
    height: 20px;
    background: #f5f5f5;
    margin-right: 2rem;
  }
`;
