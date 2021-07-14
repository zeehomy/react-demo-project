/*
 * @Date: 2021-07-14 15:35:57
 * @LastEditTime: 2021-07-14 16:04:00
 * @Description: 
 * @FilePath: /demo-project/src/store/index-saga.js
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import todoSaga from './sagas'

// 添加REDUX_DEVTOOLS_EXTENSION
// 方式1
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 方式2
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

const store = createStore(reducer, enhancer);

// then run the saga
sagaMiddleware.run(todoSaga);

// render the application

export default store;