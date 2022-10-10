import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom'
import store, { persistor } from './store/store';
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

//React create router
