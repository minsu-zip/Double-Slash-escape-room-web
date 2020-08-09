import immer from "immer";

// actions
import { CLICK_FILTER_BUTTON } from "../../actions/themeAction";

// case
import clickFilterButton from "./clickFilterButton";

const initialState = {
  filterPopupStatus: false,
};

const ThemeReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      case CLICK_FILTER_BUTTON: {
        clickFilterButton(draft);
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default ThemeReducer;
