import { LANDING_INIT } from './actions';

const defaultState = {
  seo: {
    title: '',
    metaDescriptionContent: '',
  },
  page: {
    h1: '',
    title: '',
    subtitle: '',
    telephoneBlock: {
      title: '',
      telephoneHref: '',
      telephone: '',
    },
    stepsList: [],
  },
};

const landingReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LANDING_INIT:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default landingReducer;
