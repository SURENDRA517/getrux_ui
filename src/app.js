import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import router from './config/router'
import store from './config/store'

render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);
