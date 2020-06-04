import { createStore } from 'redux';
import rootReducer from '../reducers';

let store = null;

export function configureStore() {
  store = createStore(rootReducer);

  return store;
}
