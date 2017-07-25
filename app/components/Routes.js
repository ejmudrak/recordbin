/* Routes.js 
Author: https://github.com/pheuter, Erik Mudrak - Spring 2017 - Senior Seminar project
Description: Routes React pages for web app
*/

import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import cookie from 'react-cookie';

import App from './App';
import Home from '../pages/home/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
  </Route>
);