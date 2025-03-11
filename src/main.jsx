import { createRoot } from 'react-dom/client'
import React from "react";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store.js'
import { StrictMode } from 'react'
import ReactDOM from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);