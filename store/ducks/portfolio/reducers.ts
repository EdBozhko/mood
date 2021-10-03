import { PORTFOLIO_INIT } from './actions';

const defaultState = {
  seo: {
    title: '',
    metaDescriptionContent: '',
  },
  page: {
    h1: '',
    title: '',
    subtitle: '',
    galleries: [],
  },
};

const portfolioReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case PORTFOLIO_INIT:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default portfolioReducer;
