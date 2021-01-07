import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import { store } from './store/store';

import createSocketClient from './events/websocket';

import appHistory from './history';

createSocketClient(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={appHistory}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
