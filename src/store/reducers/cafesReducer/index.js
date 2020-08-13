import immer from "immer";

// actions
import {
  LOAD_CAFES_REQUEST,
  LOAD_CAFES_SUCCESS,
  LOAD_CAFES_FAILURE,
} from "../../actions/cafesAction";

// case
import loadCafes from "./loadCafes";

const initialState = {
  top10Cafes: [], // 인기 테마 10개
  allCafes: [], // 모든 카페 리스트
};

const CafesReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      case LOAD_CAFES_REQUEST: {
        break;
      }
      case LOAD_CAFES_SUCCESS: {
        loadCafes(draft, action.data);
        break;
      }
      case LOAD_CAFES_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default CafesReducer;
