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
import NavBar from './components/nav-bar/nav-bar';
import Babes from './components/babes/babes';
import Contact from './components/contact/contact';
import Gallery from './components/gallery/gallery';
import Login from './components/login/login';
import Music from './components/music/music';
import Shows from './components/shows/shows';
import Videos from './components/videos/videos';
import Signup from './components/signup/signup';

ReactDOM.render(
  <Router>
    <div>
    <NavBar/>
      <Route exact path="/" component={Blog} />
      <Route path="/app" component={App} />
      <Route path="/merch" component={Merch} />
      <Route path="/babes" component={Babes} />
      <Route path ="/contact" component={Contact} />
      <Route path ="/gallery" component={Gallery} />
      <Route path ="/login" component={Login} />
      <Route path ="/music" component={Music} />
      <Route path ="/shows" component={Shows} />
      <Route path = "/videos" component= {Videos} />
      <Route path = "/signup" component= {Signup} />
    </div>
  </Router>, document.getElementById('root'));
