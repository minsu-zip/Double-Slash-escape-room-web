import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";

// dummy
import cafeDummy from "../dummy/cafe.json";

import {
  LOAD_CAFE_DETAIL_REQUEST,
  LOAD_CAFE_DETAIL_SUCCESS,
  LOAD_CAFE_DETAIL_FAILURE,
} from "../store/actions/cafeDetailAction";

function loadCafeApi(data) {
  // return axios("/", )
  return "";
}

function* loadCafe(action) {
  try {
    //   const result = yield call(loadThemeApi, action.data)
    yield delay(2000);
    const result = cafeDummy;
    yield put({
      type: LOAD_CAFE_DETAIL_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: LOAD_CAFE_DETAIL_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchLoadCafe() {
  yield takeLatest(LOAD_CAFE_DETAIL_REQUEST, loadCafe);
}

export default function* () {
  yield all([fork(watchLoadCafe)]);
}
