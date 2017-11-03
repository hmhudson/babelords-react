var Promise = require('promise');
var superagent = require('superagent-promise')(require('superagent'), Promise);

/**
 * Apply the Auth Interceptor to redirect on 401 for these API Methods
 * Apply the appropriate headers to each request for these API Methods
 */
module.exports = {
  get: (url) => {
    return superagent
      .get(url);
  },
  put: (url) => {
    return superagent
      .put(url);
  },
  post: (url) => {
    return superagent
      .post(url);
  },
  delete: (url) => {
    return superagent
      .del(url);
  }
};
