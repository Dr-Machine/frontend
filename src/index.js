import React from 'react';
import ReactDOM from 'react-dom';


import Provider from './akhb/modules/index';
import store from './akhb/store';

import Main from './page/Main'
import './assets/styles/styles.scss'


ReactDOM.render(
    <Provider store={store}>
      <Main/>
    </Provider>
  ,
  document.getElementById('root')
);