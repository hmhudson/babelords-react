'use strict';

var news = require("../models/news");

module.exports = {
    fetchNewsPosts (req, res){
        news.listNewsPosts()
        .then((posts)=>{
            console.log(posts);
            res.json(posts);
        });
    }
};
