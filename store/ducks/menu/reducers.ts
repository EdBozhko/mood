import { MENU_INIT, IS_MENU_OPEN } from './actions';

const defaultState = {
  telephoneHref: '+',
  telephone: '',
  links: [],
  isMenuOpen: false,
};

const menuReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case MENU_INIT:
      return {
        ...state,
        ...payload,
      };
    case IS_MENU_OPEN:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default menuReducer;
