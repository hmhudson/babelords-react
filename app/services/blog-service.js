import endpoints from '../config/endpoints';
var Promise = require('promise');
var superagent = require('superagent-promise')(require('superagent'), Promise);

let BlogServices = {
    /**
     * Creates a new blog post in the db
     * @param {object} blogPost - The blog post to be saved
     */
    createBlogPost(blogPost) {
        return superagent('POST', endpoints.createBlogPost)
            .send(blogPost)
            .end()
            .then((res) => {
                return res.body;
            });
    }
}

export default BlogServices;
