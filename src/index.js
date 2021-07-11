import React from 'react';
import ReactDOM from 'react-dom';


import Provider from './akhb/modules/index';
import store from './akhb/store';

import Main from './page/Main'
import './assets/styles/styles.scss'


export const baseurl = "http://192.168.10.151:8585/api";

ReactDOM.render(
    <Provider store={store}>
      <Main/>
    </Provider>
  ,
  document.getElementById('root')
);