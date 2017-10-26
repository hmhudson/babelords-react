import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import Blog from './components/news/blog';
import Merch from './components/merch/merch';
const Main = () => {
  <main>
    <Switch>
      <Route path="/" component={Blog}/>
      <Route path="/merch" component={Merch}/>
    </Switch>
  </main>
}
