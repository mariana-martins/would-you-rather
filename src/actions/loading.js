export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export function setShowLoading() {
  return {
    type: SHOW_LOADING,
  };
}

export function setHideLoading() {
  return {
    type: HIDE_LOADING,
  };
}
