import { CONTACTS_INIT } from './actions';

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
    telephoneBlock: {
      title: '',
      telephoneHref: '',
      telephone: '',
    },
  },
};

const contactsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case CONTACTS_INIT:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default contactsReducer;
