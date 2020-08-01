import { all, call } from "redux-saga/effects";

import filter from "./filter.saga";

export default function* () {
  yield all([call(filter)]);
}
