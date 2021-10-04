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
    backgroundImg: '',
    column_1_img: '',
    column_2_img: '',
    column_3_img: '',
    column_4_img: '',
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
