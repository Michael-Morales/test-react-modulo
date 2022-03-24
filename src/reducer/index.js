import { SAVE_DATA, TOGGLE_LOADING } from "../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return { ...state, products: action.products };

    case TOGGLE_LOADING:
      return { ...state, loading: !state.loading };

    default:
      return state;
  }
};

export default reducer;
