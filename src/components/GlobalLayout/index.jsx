import React from "react";

// components
import Header from "../Common/Header";
import Footer from "../Common/Footer";

// style
import * as S from "./style";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <S.Layout>
        <Header />
        {children}
        <Footer />
      </S.Layout>
    </>
  );
};
export default GlobalLayout;
