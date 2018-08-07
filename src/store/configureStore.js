/* eslint-env browser */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from '../combineReducers';

const middlewares = [
  thunk,
];
let devToolsExtension = f => f;

/* istanbul ignore if  */
if (process.env.NODE_ENV === 'development') {
//  const { createLogger } = require('redux-logger');
// const logger = createLogger({ collapsed: true });
//  middlewares.push(logger);
  if (window.devToolsExtension) {
    devToolsExtension = window.devToolsExtension();
  }
}

// console.log(rootReducer);
export default function configReduxStore(initialState) {
  const store = createStore(combinedReducers, initialState, compose(
    applyMiddleware(...middlewares),
    devToolsExtension,
  ));

  /* istanbul ignore if  */
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('./rootReducer', () => {
  //     const nextRootReducer = require('./rootReducer').default; // eslint-disable-line
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }
  return store;
}
