import { combineReducers } from "redux";

// reducers
import cafeDetail from "./reducers/cafeDetailReducer";
import filterReducer from "./reducers/filterReducer";
import theme from "./reducers/themeReducer";
import themeDetail from "./reducers/themeDetailReducer";

export default combineReducers({
  cafeDetail,
  filterReducer,
  theme,
  themeDetail,
});
