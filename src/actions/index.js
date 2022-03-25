export const SAVE_DATA = "SAVE_DATA";
export const saveData = (products) => ({
  type: SAVE_DATA,
  products,
});

export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = (product, count) => ({
  type: ADD_TO_CART,
  product,
  count,
});

export const REPLACE_PRODUCT = "REPLACE_PRODUCT";
export const replaceProduct = (id, count) => ({
  type: REPLACE_PRODUCT,
  id,
  count,
});
