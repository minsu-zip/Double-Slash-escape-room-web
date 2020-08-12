import { combineReducers } from "redux";

// reducers
import cafeDetail from "./reducers/cafeDetailReducer";
import filter from "./reducers/filterReducer";
import themeDetail from "./reducers/themeDetailReducer";
import themes from "./reducers/themesReducer";

export default combineReducers({
  cafeDetail,
  filter,
  themeDetail,
  themes,
});
