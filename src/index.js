import React, { Component } from "react";
import ReactDOM from 'react-dom';
import 'rxjs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store, { history } from './store';

import App from './App';

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter history={history}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>
</Provider>
,document.querySelector('.book-store-container'));
