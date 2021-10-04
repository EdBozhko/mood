import { ERROR_INIT } from './actions';

const defaultState = {
  seo: {
    title: '',
    metaDescriptionContent: '',
  },
  page: {
    title: '',
    subtitle: '',
    backgroundImg: '',
  },
};

const errorReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ERROR_INIT:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default errorReducer;
