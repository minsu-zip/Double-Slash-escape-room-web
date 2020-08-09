import immer from "immer";

// actions
import {
  LOAD_THEME_REQUEST,
  LOAD_THEME_SUCCESS,
  LOAD_THEME_FAILURE,
} from "../actions/themeDetailAction";

const initialState = {
  theme: null,
};

const FilterReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      case LOAD_THEME_REQUEST: {
        draft.theme = null;
        break;
      }
      case LOAD_THEME_SUCCESS: {
        draft.theme = action.data;
        break;
      }
      case LOAD_THEME_FAILURE: {
        draft.theme = null;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default FilterReducer;
