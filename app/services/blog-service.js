import request from '../config/superagent';
import endpoints from '../config/endpoints';

let BlogServices = {
    /**
     * Creates a new blog post in the db
     * @param {object} blogPost - The blog post to be saved
     */
    createBlogPost(blogPost) {
        console.log(blogPost);
        return request
            .post(endpoints.createBlogPost)
            .send(blogPost)
            .end()
            .then((res) => {
                return res.body;
            });
    }
}

export default BlogServices;
