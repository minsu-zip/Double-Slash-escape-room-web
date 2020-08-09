import { all, call } from "redux-saga/effects";

import cafe from "./cafe.saga";
import filter from "./filter.saga";
import themeDetail from "./themeDetail.saga";

export default function* () {
  yield all([call(cafe), call(filter), call(themeDetail)]);
}
