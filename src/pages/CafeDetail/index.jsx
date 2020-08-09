import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

// components
import MapSection from "../../components/CafeDetail/MapSection";
import ThemeListSection from "../../components/CafeDetail/ThemeListSection";
import Layout from "./layout";

const CafeDetail = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/cafe/:id" exact component={ThemeListSection} />
          <Route path="/cafe/:id/theme" component={ThemeListSection} />
          <Route path="/cafe/:id/map" component={MapSection} />
        </Switch>
      </Layout>
    </>
  );
};

export default CafeDetail;
