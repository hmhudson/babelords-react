import Dispatcher from '../dispatcher/dispatcher';
import BlogService from '../services/blog-service';

let BlogActions = {
  /**
   * Trigger a service call to retrieve all of the Blog Posts in the db
   */
  getAllBlogPosts() {
    BlogService.fetchAllBlogPosts()
      .then((res) => {
        Dispatcher.dispatch({
          data: res.blogPosts,
          actionType: 'BLOGS_RETRIEVED'
        });
      });
  },
};
export default BlogActions;
