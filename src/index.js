import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './screens/home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './common/NotFound';
import 'typeface-roboto';
ReactDOM.render(
  <HBrowserRouter/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

