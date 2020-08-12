import { all, fork } from "redux-saga/effects";

// logic
import loadThemes from "./loadThemes";

export default function* () {
  yield all([fork(loadThemes)]);
}
