import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  LOAD_CAFE_DETAIL_REQUEST,
  LOAD_CAFE_DETAIL_SUCCESS,
  LOAD_CAFE_DETAIL_FAILURE,
} from "../store/actions/cafeDetailAction";

function loadCafeApi(data) {
  return axios.get(`/cafe/${data.id}`);
}

function* loadCafe(action) {
  try {
    const result = yield call(loadCafeApi, action.data);
    yield put({
      type: LOAD_CAFE_DETAIL_SUCCESS,
      data: result.data,
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
