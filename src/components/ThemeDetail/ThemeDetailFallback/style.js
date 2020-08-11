import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  padding: 0 8rem 0 8rem;
`;

export const MainSection = styled.div`
  position: relative;
  width: 100%;
  height: calc(75vh - 56px);
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .skeleton {
    width: 200px;
    height: 20px;
    margin-bottom: 1rem;
    background: #e8e8e8;
  }
  .image {
    position: absolute;
    width: calc(100% + 16rem);
    height: 100%;
    top: 0;
    left: -8rem;
    background: #f5f5f5;
    z-index: -1;
  }
`;

export const TabMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25vh;
  .tab {
    width: 100px;
    height: 20px;
    background: #f5f5f5;
    margin-right: 2rem;
  }
`;

export const DescSection = styled.div`
  width: 100%;
  height: 100vh;
  .contaienr {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
    .skeleton {
      width: 200px;
      height: 50px;
      margin-bottom: 1rem;
      background: #e8e8e8;
    }
  }
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 50px);
    align-content: center;
    gap: 1rem;
    width: 100%;
    height: 30%;
    padding: 1rem 0 1rem 0;
    background: #f5f5f5;
    .grid {
      width: 100%;
      height: 100%;
      background: #e8e8e8;
    }
  }
`;

export const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  .skeleton {
    width: 100%;
    height: 150px;
    margin-bottom: 1.5rem;
    border-radius: 10px;
    background: #e8e8e8;
  }
`;

export const OtherThemesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 5rem;
  width: 100%;
  height: 100vh;
  .grid {
    width: 100%;
    height: 100%;
    background: #e8e8e8;
  }
`;
