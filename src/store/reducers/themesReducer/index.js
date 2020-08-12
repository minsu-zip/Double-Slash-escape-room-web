import immer from "immer";

// actions
import {
  LOAD_THEMES_REQUEST,
  LOAD_THEMES_SUCCESS,
  LOAD_THEMES_FAILURE,
} from "../../actions/themesAction";

// case
import loadThemesSuccess from "./loadThemesSuccess";

const initialState = {
  top10Themes: [], // 인기 테마 10개
  theOthersTheme: [], // 그외 테마들
};

const ThemesReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      case LOAD_THEMES_REQUEST: {
        break;
      }
      case LOAD_THEMES_SUCCESS: {
        loadThemesSuccess(draft, action.data);
        break;
      }
      case LOAD_THEMES_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default ThemesReducer;
