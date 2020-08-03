import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  padding: 1rem 2rem 1rem 2rem;
  margin: 1rem 0 1rem 0;
  border: 1px solid gray;
  border-radius: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
`;

export const MainInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.div`
  margin-bottom: 0.5rem;
  .name {
    margin-right: 0.5rem;
  }
`;

export const SubInfo = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    h3 {
      margin-right: 0.5rem;
      font-weight: bold;
    }
    span {
      color: gray;
    }
  }
  div:first-child {
    margin-right: 1rem;
  }
`;

export const Image = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  background: red;
  border-radius: 50%;
`;

export const Comment = styled.div`
  height: 60%;
  padding-top: 0.5rem;
`;
