import { all, call } from "redux-saga/effects";
import axios from "axios";

import cafeDetail from "./cafeDetail.saga";
import cafes from "./cafes.saga";
import filter from "./filter.saga";
import themeDetail from "./themeDetail.saga";
import themes from "./themes.saga";

axios.defaults.baseURL = "http://220.149.235.230:8001/api";

export default function* () {
  yield all([
    call(cafeDetail),
    call(cafes),
    call(filter),
    call(themeDetail),
    call(themes),
  ]);
}
