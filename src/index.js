import React from 'react';    // React 使得可以使用JSX语法
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')   // 页面上除root之外的标签 可与react无关（使用其他框架）
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
