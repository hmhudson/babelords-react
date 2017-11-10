import _ from 'lodash';
import Dispatcher from '../dispatcher/dispatcher';
import { EventEmitter } from 'events';

class BlogsStore extends EventEmitter {
  constructor() {
    super();
    this.blogData = {};
  }
  /**
   * LISTENERS
   */
  addChangeListener(callback) {
    this.on('BLOGS_RETRIEVED', callback);
  }
  removeChangeListener(callback) {
    this.removeListener('BLOGS_RETRIEVED', callback);
  }
  /**
   *    SETUPS
   */
  setupBlogsStore(blogs) {
    this.blogData = blogs;
    this.emit('BLOGS_RETRIEVED');
  }
  /**
   * Accessors
   */
  getBlogs() {
    return _.clone(this.blogData);
  }
}
const store = new BlogsStore();
Dispatcher.register((action) => {
  let actionType = action.actionType;
  if (actionType === 'BLOGS_RETRIEVED') {
    store.setupBlogsStore(action.data);
  }
});
export default store;
