export const toggleDrawer = (open) => {
  return {
    type: 'TOGGLE_DRAWER',
    data: open,
  }
};

export const resetLoading = () => {
  return {
    type: 'RESET_LOADING',
  }
};

export const setLoading = () => {
  return {
    type: 'SET_LOADING',
  }
};

