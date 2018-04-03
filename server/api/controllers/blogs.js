'use strict';
const Blog = require('../models/blog');
const HTTPStatus = require('http-status');

module.exports = {
     createPost(req, res) {
        var blogPost = req.body;

        // Add a new Date
        blogPost.date = new Date();

        // Call the createBlogPost method in the Blog Model
        Blog.createBlogPost(blogPost)
            .then((newBlogPost) => {
                // Catch error
                if (!newBlogPost) {
                    return res.status(HTTPStatus.UNPROCESSABLE_ENTITY).json({status: 0, error: "Error saving Blog Post"});
                }

                // Return Success
                return res.json({
                    status: 1
                });
            });
    },

    fetchPosts(req, res) {
        console.log(new Date());
        // Fetch blog posts from the db
        Blog.fetchPosts()
            .then((blogPosts) => {
                // Catch Error
                if (!blogPosts) {
                    return res.status(HTTPStatus.UNPROCESSABLE_ENTITY).json({status: 0, error: "Error retrieving blog posts"});
                }

                // Return Success
                return res.json({
                    status: 1,
                    blogPosts: blogPosts
                });
            })
    },

    createComment(req, res) {
        const commentObj = req.body;
        const blogPostId = commentObj.blogPostId;
        const newComment = {
            user: commentObj.userId,
            comment: commentObj.newComment,
            date: Date.now(),
        };

        Blog.createComment(blogPostId, newComment)
            .then((updatedBlogPost) => {
                // Catch Error
                if (!updatedBlogPost) {
                    return res.status(HTTPStatus.UNPROCESSABLE_ENTITY).json({status: 0, error: "Error updating blog posts"});
                }

                // Return Success
                return res.json({
                    status: 1,
                    updatedBlogPost: updatedBlogPost
                });
            });
    }
};
