import { FOOTER_INIT } from './actions';

const defaultState = {
  title: '',
  subtitle: '',
  infoBox: {},
};

const footerReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case FOOTER_INIT:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default footerReducer;
