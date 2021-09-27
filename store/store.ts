import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createFetch } from './middlewares/fetch';
import { preloader, mood } from './ducks';

let reducers = combineReducers({
  preloader,
  mood,
});

let middleware = [createFetch, thunk];
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
