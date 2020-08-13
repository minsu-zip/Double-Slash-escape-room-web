import { all, fork } from "redux-saga/effects";

// logic
import submitFilter from "./submitFilter";

export default function* () {
  yield all([fork(submitFilter)]);
}
