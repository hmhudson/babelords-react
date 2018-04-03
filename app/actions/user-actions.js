import Dispatcher from '../dispatcher/dispatcher';

let UserActions = {
  /**
   * Trigger refresh of user store
   */
  refreshUserStore() {
      Dispatcher.dispatch({
        actionType: 'USER_UPDATED'
      });
  },
};
export default UserActions;
