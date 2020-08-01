import React from "react";

// components
import ThemeHeader from "../../components/Common/ThemeHeader";
import PostList from "../../components/Common/PostList";

// test
import ThemePopup from "../../components/FilterPopup";

const Theme = () => {
  return (
    <>
      <ThemeHeader />
      <PostList />
      <ThemePopup />
    </>
  );
};

export default Theme;
