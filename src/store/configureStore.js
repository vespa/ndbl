/* eslint-env browser */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from '../combineReducers';

const middlewares = [
  thunk,
];
let devToolsExtension = f => f;

if (process.env.NODE_ENV === 'development') {
  if (window.devToolsExtension) {
    devToolsExtension = window.devToolsExtension();
  }
}

export default function configReduxStore(initialState) {
  const store = createStore(combinedReducers, initialState, compose(
    applyMiddleware(...middlewares),
    devToolsExtension,
  ));
  return store;
}
