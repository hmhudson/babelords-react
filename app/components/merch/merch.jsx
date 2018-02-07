import React from 'react';
import etsyServices from '../../services/merch-service';



export default class Merch extends React.Component {

    componentWillMount() {
        etsyServices.getStore();
    }

   render() {
      return (
         <div className="site-index-route">
            <h1>MERCH</h1>
         </div>
      );
   }
}
