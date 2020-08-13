import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// actions
import {
  SUBMIT_FILTERING_REQUEST,
  SUBMIT_FILTERING_SUCCESS,
  SUBMIT_FILTERING_FAILURE,
} from "../../store/actions/filterAction";
import { LOAD_THEMES_SUCCESS } from "../../store/actions/themesAction";

function submitFilteringApi(data) {
  return axios.post("/theme", data);
}

function* submitFiltering(action) {
  try {
    const result = yield call(submitFilteringApi, action.data);
    yield put({
      type: SUBMIT_FILTERING_SUCCESS,
    });
    yield put({
      type: LOAD_THEMES_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: SUBMIT_FILTERING_FAILURE,
      data: error.response.data,
    });
  }
}

export default function* watchSubmitFiltering() {
  yield takeLatest(SUBMIT_FILTERING_REQUEST, submitFiltering);
}
