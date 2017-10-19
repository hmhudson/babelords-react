'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

//Bring in the data model
require("./api/mongoose/mongoose");

var routesApi = require('./api/routes-api');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));

//app.use('/bower_components', express.static(path.join(__dirname, '../bower_components')));

//Set the angular folder to serve static resources
app.use(express.static(path.join(__dirname, '../app')));

//Use the API routes when path starts with /api
app.use('/api', routesApi);
//Otherwise render the index.html page for the Angular SPA
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../../src', 'index.html'));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers
//Catch unauthorised errors
app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({
            "message" : err.name + ": " + err.message
        });
    }
});
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message : err.message,
            error : err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message : err.message,
        error : {}
    });
});
module.exports = app;
