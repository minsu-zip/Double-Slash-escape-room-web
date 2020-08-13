// 필터 팝업 여닫기
export const PRINT_FILTER_POPUP = "PRINT_FILTER_POPUP";
export const printFilterPopup = () => ({ type: PRINT_FILTER_POPUP });

// 필터링 요소 버튼 클릭
export const CLICK_FILTER_CHECK_BOX = "CLICK_FILTER_CHECK_BOX";
export const clickFilterCheckBox = (category, name) => ({
  type: CLICK_FILTER_CHECK_BOX,
  data: {
    category,
    name,
  },
});

// 필터링 결과 전송
export const SUBMIT_FILTERING_REQUEST = "SUBMIT_FILTERING_REQUEST";
export const SUBMIT_FILTERING_SUCCESS = "SUBMIT_FILTERING_SUCCESS";
export const SUBMIT_FILTERING_FAILURE = "SUBMIT_FILTERING_FAILURE";
export const submitFilteringRequest = (list) => ({
  type: SUBMIT_FILTERING_REQUEST,
  data: list,
});
