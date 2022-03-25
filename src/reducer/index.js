import {
  SAVE_DATA,
  TOGGLE_LOADING,
  ADD_TO_CART,
  REPLACE_PRODUCT,
  INCREASE_COUNT,
  DECREASE_COUNT,
  REMOVE_PRODUCT,
} from "../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return { ...state, products: action.products };

    case TOGGLE_LOADING:
      return { ...state, loading: !state.loading };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { product: action.product, count: action.count }],
      };

    case REPLACE_PRODUCT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.product.id !== action.id) return item;
          return { ...item, count: action.count };
        }),
      };

    case INCREASE_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.product.id !== action.id) return item;
          return { ...item, count: item.count + 1 };
        }),
      };

    case DECREASE_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.product.id !== action.id) return item;
          return { ...item, count: item.count - 1 };
        }),
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter(({ product }) => product.id !== action.id),
      };

    default:
      return state;
  }
};

export default reducer;
