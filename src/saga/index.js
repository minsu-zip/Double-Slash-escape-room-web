import { all, call } from "redux-saga/effects";
import axios from "axios";

import cafeDetail from "./cafeDetail.saga";
import filter from "./filter.saga";
import themeDetail from "./themeDetail.saga";

axios.defaults.baseURL = "http://220.149.235.230:8001/api";

export default function* () {
  yield all([call(cafeDetail), call(filter), call(themeDetail)]);
}
