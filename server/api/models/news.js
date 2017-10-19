'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
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
    author: {
        type: String,
        required: false
    }
}, {
    collection: "news"
});

newsSchema.statics = {
    listNewsPosts(){
        console.log('HIT MODEL');
        return this.find({})
        .lean()
        .exec();
    }
};

const News = mongoose.model('news', newsSchema);

module.exports = News;
