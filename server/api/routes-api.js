'use strict';
var express = require('express');
var router = express.Router();
var blogController = require('./controllers/blogs');
var userController = require('./controllers/users');

// Blog Endpoints
router.post('/blog/createPost', blogController.createPost);
router.get('/blog/fetchPosts', blogController.fetchPosts);

// User endpoints
router.post('/user/createUser', userController.createUser);

module.exports = router;
