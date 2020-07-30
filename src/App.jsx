import React from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import Cafe from "../src/pages/Cafe";
import CafeDetail from "../src/pages/CafeDetail";
import Home from "../src/pages/Home";
import Theme from "../src/pages/Theme";
import ThemeResult from "../src/pages/ThemeResult";
import ThemeDetail from "../src/pages/ThemeDetail";

// global layout
import GlobalLayout from "../src/components/GlobalLayout";

// style reset
import StyleReset from "../src/components/styleReset";

const App = () => {
  return (
    <>
      <StyleReset />
      <GlobalLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cafe" exact component={Cafe} />
          <Route path="/cafe/:id" exact component={CafeDetail} />
          <Route path="/theme" exact component={Theme} />
          <Route path="/theme/result" exact component={ThemeResult} />
          <Route path="/theme/:id" exact component={ThemeDetail} />
        </Switch>
      </GlobalLayout>
    </>
  );
};

export default App;
