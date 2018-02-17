import React from 'react';
import MerchStore from '../../stores/merch-store';
import MerchActions from '../../actions/merch-actions';
import './merch.css';
import {Row, Col, FormControl, FormGroup, ControlLabel, Button, Panel} from 'react-bootstrap';



export default class Merch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [],
            loading: true
        };

        this.updateListingData = this.updateListingData.bind(this);
    }

    componentWillMount() {
        MerchStore.addChangeListener(this.updateListingData);
    }

    componentDidMount(){
        MerchActions.getAllListings();
    }

    componentWillUnmount() {
        MerchStore.removeChangeListener(this.updateListingData);
    }

    updateListingData() {
        this.setState({listings: MerchStore.getListings(), loading: false});
    }

    linkToItem (event, url) {
        event.preventDefault();
        location.href= url;
    }

    renderListings(listing) {
        return (
            <div>
                <Panel>
                    <Panel.Heading componentClass="h3">{listing.title}</Panel.Heading>
                    <h3>${listing.price}</h3>
                    <a href={listing.url}><img className="listing-image" src={listing.MainImage.url_fullxfull}/></a>
                    <p>{listing.description}</p>
                    <a href={listing.url}>Purchase in Store</a>
                </Panel>
            </div>
        )
    }


   render() {
      return (
         <div className="site-index-route">
            <h1>MERCH</h1>
            <Row>
            {!this.state.loading && (this.state.listings || []).map(listing => (
                <div key={listing.listing_id}>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            {this.renderListings(listing)}
                        </Col>
                </div>
            ))}
            </Row>
         </div>
      );
   }
}
