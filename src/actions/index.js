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

export const INCREASE_COUNT = "INCREASE_COUNT";
export const increaseCount = (id) => ({
  type: INCREASE_COUNT,
  id,
});

export const DECREASE_COUNT = "DECREASE_COUNT";
export const decreaseCount = (id) => ({
  type: DECREASE_COUNT,
  id,
});

export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id,
});
