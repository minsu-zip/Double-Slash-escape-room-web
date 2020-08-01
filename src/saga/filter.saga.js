import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";

import {
  SUBMIT_FILTERING_REQUEST,
  SUBMIT_FILTERING_SUCCESS,
  SUBMIT_FILTERING_FAILURE,
} from "../store/actions/filterAction";

function filteringApi() {
  return "";
}

function* filtering(action) {
  try {
    //   const result = yield call(filteringApi, action.data)
    yield delay(2000);
    yield put({
      type: SUBMIT_FILTERING_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: SUBMIT_FILTERING_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchFiltering() {
  yield takeLatest(SUBMIT_FILTERING_REQUEST, filtering);
}

export default function* () {
  yield all([fork(watchFiltering)]);
}
