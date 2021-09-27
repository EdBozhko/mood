import { MOOD_INIT } from './actions';

const defaultState = {
  title: '',
  metaDescriptionContent: '',
  h1: '',
  slides: [],
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
