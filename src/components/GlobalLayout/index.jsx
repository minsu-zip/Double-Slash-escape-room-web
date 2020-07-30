import React from "react";

// components
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
export default GlobalLayout;
