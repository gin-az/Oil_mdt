import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { STORE } from './store';

if (process.env.NODE_ENV === 'development') {
  require('./mocks/browser');
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={STORE}>
      <App />
    </Provider>
  </React.StrictMode>
);
