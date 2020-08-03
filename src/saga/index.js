import { all, call } from "redux-saga/effects";

import filter from "./filter.saga";
import theme from "./theme.saga";

export default function* () {
  yield all([call(filter), call(theme)]);
}
