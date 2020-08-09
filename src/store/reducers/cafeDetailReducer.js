import immer from "immer";

// actions
import {
  LOAD_CAFE_DETAIL_REQUEST,
  LOAD_CAFE_DETAIL_SUCCESS,
  LOAD_CAFE_DETAIL_FAILURE,
} from "../actions/cafeDetailAction";

const initialState = {
  cafeInfo: null,
};

const FilterReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      case LOAD_CAFE_DETAIL_REQUEST: {
        break;
      }
      case LOAD_CAFE_DETAIL_SUCCESS: {
        draft.cafeInfo = action.data;
        break;
      }
      case LOAD_CAFE_DETAIL_FAILURE: {
        draft.cafe = null;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default FilterReducer;
