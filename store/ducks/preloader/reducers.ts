import { PRELOADER_INIT } from './actions';

const defaultState = {
  preloaderAnimationEnd: false,
};

const preloaderReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case PRELOADER_INIT:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default preloaderReducer;
