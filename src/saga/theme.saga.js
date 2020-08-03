import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";

// dummy
import themeDummy from "../dummy/theme.json";

import {
  LOAD_THEME_REQUEST,
  LOAD_THEME_SUCCESS,
  LOAD_THEME_FAILURE,
} from "../store/actions/themeAction";

function loadThemeApi(data) {
  // return axios("/", )
  return "";
}

function* loadTheme(action) {
  try {
    //   const result = yield call(loadThemeApi, action.data)
    yield delay(2000);
    const result = themeDummy;
    yield put({
      type: LOAD_THEME_SUCCESS,
      data: result,
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
