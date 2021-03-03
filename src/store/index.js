/*
 * @Author: yzh
 * @Date: 2020-11-10 11:12:44
 * @LastEditTime: 2021-03-03 15:50:28
 * @LastEditors: yzh
 * @Description: 
 * @FilePath: /demo-project/src/store/index.js
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'

// 方式1
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 方式2
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store = createStore(reducer, enhancer);

export default store;