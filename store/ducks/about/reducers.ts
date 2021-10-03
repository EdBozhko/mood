import { ABOUT_INIT } from './actions';

const defaultState = {
  seo: {
    title: '',
    metaDescriptionContent: '',
  },
  page: {
    h1: '',
    title: '',
    subtitle: '',
    backgroundImg: '',
    blackout: 0,
    callToAction: {
      href: '',
      blackout: 0,
      title: '',
      subtitle: '',
      src: '',
      alt: '',
    },
    textBlocks: {
      block_1: {
        text_1: '',
      },
    },
    photoBlock: '',
    team: [],
  },
};

const aboutReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ABOUT_INIT:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default aboutReducer;
