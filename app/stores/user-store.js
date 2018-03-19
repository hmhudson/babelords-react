import _ from 'lodash';
import jwtDecode from 'jwt-decode';
import { Cookies } from 'react-cookie';
import Dispatcher from '../dispatcher/dispatcher';
import { EventEmitter } from 'events';

const cookie = new Cookies();

class UserStore extends EventEmitter {
  constructor() {
    super();
    this.userData = {
        token: cookie.get('token')
    };
  }
  /**
   * LISTENERS
   */
  addChangeListener(callback) {
    this.on('USER_UPDATED', callback);
  }
  removeChangeListener(callback) {
    this.removeListener('USER_UPDATED', callback);
  }
  /**
   *    SETUPS
   */
  setupUserStore(listings) {
      this.userData = {
          token: cookie.get('token')
      };
    this.emit('USER_UPDATED');
  }
  /**
   * Accessors
   */
  getUser() {
      const userObj = {};
      if (!_.isEmpty(this.userData.token)) {
          const token = jwtDecode(this.userData.token);
          userObj.email = token.email;
          userObj.id = token.id;
          userObj.firstName = token.profile.firstName;
          userObj.lastName = token.profile.lastName;
      }
      return userObj;
  }

  isLoggedIn() {
      if (!_.isEmpty(this.userData.token)) {
          const currentTime = Date.now().valueOf() / 1000;
          const token = jwtDecode(this.userData.token);
          if (token.exp > currentTime) {
              return true;
          }
      }
      return false;
  }

  isAdmin() {
      if (!_.isEmpty(this.userData.token)) {
          const token = jwtDecode(this.userData.token);
          if (token.admin) {
              return true;
          }
      }

      return false;
  }
}
const store = new UserStore();
Dispatcher.register((action) => {
  let actionType = action.actionType;
  if (actionType === 'USER_UPDATED') {
    store.setupUserStore(action.data);
  }
});
export default store;
