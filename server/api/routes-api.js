'use strict';
var express = require('express');
var router = express.Router();
var blogController = require('./controllers/blogs');

// Blog Endpoints
router.post('/blog/createPost', blogController.createPost);
router.get('/blog/fetchPosts', blogController.fetchPosts);

module.exports = router;
