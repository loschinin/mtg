import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { index } from './store';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={index}>
      <App />
    </Provider>
  </React.StrictMode>,
);
