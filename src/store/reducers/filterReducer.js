import immer from "immer";

// actions
import { CLICK_FILTER_CHECK_BOX } from "../actions/filterAction";
import {
  SUBMIT_FILTERING_REQUEST,
  SUBMIT_FILTERING_SUCCESS,
  SUBMIT_FILTERING_FAILURE,
} from "../actions/filterAction";

const initialState = {
  clickedList: [],
  filteringSuccess: false,
  filteringResult: "",
  posts: [],
};

const FilterReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      case CLICK_FILTER_CHECK_BOX: {
        if (draft.clickedList.includes(action.data)) {
          draft.clickedList = draft.clickedList.filter(
            (value) => value !== action.data
          );
        } else {
          draft.clickedList.push(action.data);
        }
        break;
      }
      case SUBMIT_FILTERING_REQUEST: {
        draft.clickedList = [];
        draft.filteringResult = "전송 중";
        draft.filteringSuccess = false;
        break;
      }
      case SUBMIT_FILTERING_SUCCESS: {
        draft.filteringSuccess = true;
        break;
      }
      case SUBMIT_FILTERING_FAILURE: {
        draft.filteringResult = "전송 실패";
        draft.filteringSuccess = false;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default FilterReducer;
