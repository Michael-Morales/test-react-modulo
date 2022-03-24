export const SAVE_DATA = "SAVE_DATA";
export const saveData = (products) => ({
  type: SAVE_DATA,
  products,
});

export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});
