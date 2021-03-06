import request from '../config/superagent';
import endpoints from '../config/endpoints';

let BlogServices = {
    /**
     * Creates a new blog post in the db
     * @param {object} blogPost - The blog post to be saved
     */
    createBlogPost(blogPost) {
        return request
            .post(endpoints.createBlogPost)
            .send(blogPost)
            .end()
            .then((res) => {
                return res.body;
            });
    },
    /**
     * Fetch all blog posts from db
     */
    fetchAllBlogPosts() {
        return request
            .get(endpoints.getBlogPost)
            .end()
            .then((res) => {
                return res.body;
            });
    },
    /**
     * Creates a new comment in the db
     * @param {object} comment - The comment to be saved
     */
    createComment(comment) {
        return request
            .post(endpoints.createComment)
            .send(comment)
            .end()
            .then((res) => {
                return res.body;
            });
    },
}

export default BlogServices;
