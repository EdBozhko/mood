import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createFetch } from './middlewares/fetch';
import { landing, error, contacts, about, stages, portfolio, preloader, mood } from './ducks';

let reducers = combineReducers({
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
