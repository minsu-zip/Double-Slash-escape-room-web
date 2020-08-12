// 테마 리스트 불러오기
export const LOAD_THEMES_REQUEST = "LOAD_THEMES_REQUEST";
export const LOAD_THEMES_SUCCESS = "LOAD_THEMES_SUCCESS";
export const LOAD_THEMES_FAILURE = "LOAD_THEMES_FAILURE";

// 테마 불러오기 요청 함수
export const loadThemes = () => ({ type: LOAD_THEMES_REQUEST });
