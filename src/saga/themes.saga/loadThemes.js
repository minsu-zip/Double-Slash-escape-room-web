import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// actions
import {
  LOAD_THEMES_REQUEST,
  LOAD_THEMES_SUCCESS,
  LOAD_THEMES_FAILURE,
} from "../../store/actions/themesAction";

function loadThemesApi() {
  return axios.get("/theme");
}

function* loadThemes() {
  try {
    const result = yield call(loadThemesApi);
    yield put({
      type: LOAD_THEMES_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_THEMES_FAILURE,
      data: error,
    });
  }
}

export default function* watchLoadThemes() {
  yield takeLatest(LOAD_THEMES_REQUEST, loadThemes);
}
