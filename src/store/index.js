import { combineReducers } from "redux";

// reducers
import cafeDetail from "./reducers/cafeDetailReducer";
import cafes from "./reducers/cafesReducer";
import filter from "./reducers/filterReducer";
import themeDetail from "./reducers/themeDetailReducer";
import themes from "./reducers/themesReducer";

export default combineReducers({
  cafeDetail,
  cafes,
  filter,
  themeDetail,
  themes,
});
