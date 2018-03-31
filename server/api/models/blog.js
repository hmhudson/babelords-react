'use strict';

const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: new Date()
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

const BlogSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: new Date()
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
    },
    comments: [CommentSchema]
}, {
    collection: 'blogs'
});

BlogSchema.statics = {
    createBlogPost(blogPost) {
        let blogPostObject = new this(blogPost);
        return blogPostObject.save();
    },
    fetchPosts() {
        return this.find({})
            .limit(5)
            .sort({date: -1})
            .lean()
            .exec();
    },
    createComment(blogPostId, comment) {
        return this.findOneAndUpdate(
            { _id: blogPostId },
            { $push: { comments: comment } },
            { new: true }
        )
        .lean()
        .exec();
    }
};

module.exports = mongoose.model('Blog', BlogSchema);
