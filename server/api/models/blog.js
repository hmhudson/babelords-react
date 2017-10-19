'use strict';

const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {
    collection: 'blogs'
});

BlogSchema.statics = {
    createBlogPost(blogPost) {
        var blogPostObject = new this(blogPost);
        return blogPostObject.save();
    },
    fetchPosts() {
        return this.find({})
            .limit(5)
            .sort({date: -1})
            .lean()
            .exec();
    }
};

module.exports = mongoose.model('Blog', BlogSchema);
