import _ from 'lodash';
import Dispatcher from '../dispatcher/dispatcher';
import { EventEmitter } from 'events';

class MerchStore extends EventEmitter {
  constructor() {
    super();
    this.listingData = {};
  }
  /**
   * LISTENERS
   */
  addChangeListener(callback) {
    this.on('MERCH_RETRIEVED', callback);
  }
  removeChangeListener(callback) {
    this.removeListener('MERCH_RETRIEVED', callback);
  }
  /**
   *    SETUPS
   */
  setupMerchStore(listings) {
    this.listingData = listings;
    this.emit('MERCH_RETRIEVED');
  }
  /**
   * Accessors
   */
  getListings() {
    return _.clone(this.listingData);
  }
}
const store = new MerchStore();
Dispatcher.register((action) => {
  let actionType = action.actionType;
  if (actionType === 'MERCH_RETRIEVED') {
    store.setupMerchStore(action.data);
  }
});
export default store;
