import { STAGES_INIT } from './actions';

const defaultState = {
  seo: {
    title: '',
    metaDescriptionContent: '',
  },
  page: {
    h1: '',
    title: '',
    subtitle: '',
    blackout: 0,
    // backgroundImg: '',
    backgroundImg: '',
    stages: [],
    callToAction: {
      href: '',
      blackout: 0,
      title: '',
      subtitle: '',
      src: '',
      alt: '',
    },
  },
};

const stagesReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case STAGES_INIT:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default stagesReducer;
