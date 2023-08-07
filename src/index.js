
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import './index.css';
import App from './App';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
