import Dispatcher from '../dispatcher/dispatcher';
import MerchService from '../services/merch-service';

let MerchActions = {
  /**
   * Trigger a service call to retrieve all of the Blog Posts in the db
   */
  getAllListings() {
    MerchService.getListings()
      .then((res) => {
        Dispatcher.dispatch({
          data: res.results,
          actionType: 'MERCH_RETRIEVED'
        });
      });
  },
};
export default MerchActions;
