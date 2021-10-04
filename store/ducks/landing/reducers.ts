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
    column_1_img: '',
    column_2_img: '',
    column_3_img: '',
    column_4_img: '',
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
