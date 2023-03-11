import { TOGGLE_SIDEBAR } from '../actions/sidebar';

export const initialState = {
  isCollapse: true,
};

const SidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      return {
        isCollapse: !state.isCollapse,
      };
    }
    default: {
      return state;
    }
  }
};

export default SidebarReducer;
