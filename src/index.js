import React, { Component } from "react";
import ReactDOM from 'react-dom';
import 'rxjs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
    {/* </ConnectedRouter> */}
  </Provider>
  ,document.querySelector('.store-container'));
