import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// actions
import {
  LOAD_CAFES_REQUEST,
  LOAD_CAFES_SUCCESS,
  LOAD_CAFES_FAILURE,
} from "../../store/actions/cafesAction";

function loadCafesApi() {
  return axios.get("/cafe");
}

function* loadCafes() {
  try {
    const result = yield call(loadCafesApi);
    yield put({
      type: LOAD_CAFES_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_CAFES_FAILURE,
      data: error,
    });
  }
}

export default function* watchLoadCafes() {
  yield takeLatest(LOAD_CAFES_REQUEST, loadCafes);
}
