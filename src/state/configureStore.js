import { createStore } from 'redux';

import rootReducer from './rootReducer';

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default () => {
  return createStore(rootReducer, devtools);
};
