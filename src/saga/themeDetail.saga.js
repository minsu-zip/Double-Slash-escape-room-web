import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  LOAD_THEME_REQUEST,
  LOAD_THEME_SUCCESS,
  LOAD_THEME_FAILURE,
} from "../store/actions/themeDetailAction";

function loadThemeApi(data) {
  return axios.get(`/theme/${parseInt(data.id)}`);
}

function* loadTheme(action) {
  try {
    const result = yield call(loadThemeApi, action.data);
    yield put({
      type: LOAD_THEME_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_THEME_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchLoadTheme() {
  yield takeLatest(LOAD_THEME_REQUEST, loadTheme);
}

export default function* () {
  yield all([fork(watchLoadTheme)]);
}
