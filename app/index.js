import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import App from './App.jsx';
import Merch from './components/merch/merch';
import Blog from './components/blog/blog';
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Blog} />
      <Route path="/app" component={App} />
      <Route path="/merch" component={Merch} />
    </div>
  </Router>, document.getElementById('root'));
