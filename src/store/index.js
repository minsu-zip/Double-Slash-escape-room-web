import { combineReducers } from "redux";

// reducers
import filterReducer from "./reducers/filterReducer";
import theme from "./reducers/themeReducer";

export default combineReducers({ filterReducer, theme });
