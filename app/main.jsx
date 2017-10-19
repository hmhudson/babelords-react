import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import {Router, Route, IndexRoute, IndexRedirect, hashHistory} from 'react-router';
import App from './App';
import Blog from './components/news/blog';

// Define Static Routes available to call
let routes = [
    {
        path: 'blog',
        component: Blog
    }
];

const routesRender = (routes || []).map(route => (<Route key={route.path} path={route.path} component={route.component}/>));

ReactDOM.render((
    <div className="root-node">
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Blog}/>
                {routesRender}
            </Route>
        </Router>
    </div>
));
