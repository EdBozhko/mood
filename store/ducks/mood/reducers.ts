import { MOOD_INIT } from './actions';

const defaultState = {
  seo: {
    title: '',
    metaDescriptionContent: '',
  },
  page: {
    h1: '',
    slides: [],
    footer: {},
  },
};

const moodReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case MOOD_INIT:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default moodReducer;
