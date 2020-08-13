import { all, fork } from "redux-saga/effects";

// logic
import loadCafes from "./loadCafes";

export default function* () {
  yield all([fork(loadCafes)]);
}
