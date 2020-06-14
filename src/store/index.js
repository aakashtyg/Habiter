import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let store = null;

export function configureStore() {
  store = createStore(rootReducer, applyMiddleware(thunk));

  return store;
}
