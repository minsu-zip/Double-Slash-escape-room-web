import immer from "immer";

// actions
import {
  PRINT_FILTER_POPUP,
  CLICK_FILTER_CHECK_BOX,
  SUBMIT_FILTERING_REQUEST,
  SUBMIT_FILTERING_SUCCESS,
  SUBMIT_FILTERING_FAILURE,
} from "../../actions/filterAction";

// case
import printFilterPopup from "./printFilterPopup";
import clickFilterCheckBox from "./clickFilterCheckBox";
import * as submitFiltering from "./submitFiltering";

const initialState = {
  printFilterPopup: false,
  clickedList: {
    activity: "",
    area: "",
    barrier: "",
    genreId: 0,
    level: 0,
    peopleNum: 0,
    sorting: "",
    themeName: "",
    time: 0,
  },
  filteringSuccess: false,
  filteringResult: "",
  posts: [],
};

const FilterReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      // 필터 팝업 여닫기
      case PRINT_FILTER_POPUP: {
        printFilterPopup(draft, action.data);
        break;
      }
      // 필터링 체크박스 클릭
      case CLICK_FILTER_CHECK_BOX: {
        clickFilterCheckBox(draft, action.data);
        break;
      }
      // 필터링 결과 전송(요청)
      case SUBMIT_FILTERING_REQUEST: {
        submitFiltering.request(draft, action.data);
        break;
      }
      // 필터링 결과 전송(성공)
      case SUBMIT_FILTERING_SUCCESS: {
        submitFiltering.success(draft, action.data);
        break;
      }
      // 필터링 결과 전송(실패)
      case SUBMIT_FILTERING_FAILURE: {
        submitFiltering.failure(draft, action.data);
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default FilterReducer;
