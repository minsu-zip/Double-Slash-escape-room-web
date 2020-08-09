import React from "react";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
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

// root reducer & saga
import RootRedux from "./store";
import RootSaga from "./saga";

const App = () => {
  return (
    <>
      <Provider store={store()}>
        <StyleReset />
        <GlobalLayout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cafe" exact component={Cafe} />
            <Route path="/cafe/:id" exact component={CafeDetail} />
            <Route path="/cafe/:id/:info" component={CafeDetail} />
            <Route path="/theme" exact component={Theme} />
            <Route path="/theme/result" exact component={ThemeResult} />
            <Route path="/theme/:id" exact component={ThemeDetail} />
          </Switch>
        </GlobalLayout>
      </Provider>
    </>
  );
};

// redux 및 redux-saga 세팅
const store = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const config = createStore(RootRedux, enhancer);
  sagaMiddleware.run(RootSaga);
  return config;
};

export default App;
