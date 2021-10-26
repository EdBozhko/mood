import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createFetch } from './middlewares/fetch';
import { menu, footer, landing, error, contacts, about, stages, portfolio, preloader, mood } from './ducks';

let reducers = combineReducers({
  menu,
  footer,
  landing,
  error,
  contacts,
  about,
  stages,
  portfolio,
  preloader,
  mood,
});

let middleware = [createFetch, thunk];
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
