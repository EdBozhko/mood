export const MENU_INIT = 'MENU_INIT';
export const IS_MENU_OPEN = 'IS_MENU_OPEN';

export const menuInit = (data) => ({
  type: MENU_INIT,
  payload: data,
});

export const isMenuOpen = (data) => ({
  type: IS_MENU_OPEN,
  payload: data,
});
