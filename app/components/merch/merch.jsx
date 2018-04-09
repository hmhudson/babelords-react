import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import MerchStore from '../../stores/merch-store';
import MerchActions from '../../actions/merch-actions';
import './merch.css';

export default class Merch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      loading: true,
    };

    this.updateListingData = this.updateListingData.bind(this);
  }

  componentWillMount() {
    MerchStore.addChangeListener(this.updateListingData);
  }

  componentDidMount() {
    MerchActions.getAllListings();
  }

  componentWillUnmount() {
    MerchStore.removeChangeListener(this.updateListingData);
  }

  updateListingData() {
    this.setState({ listings: MerchStore.getListings(), loading: false });
  }

  linkToItem(event, url) {
    event.preventDefault();
    location.href = url;
  }

  renderListings(listing) {
    return (
      <div>
        <Panel className="panel">
          <Panel.Heading>
            <Panel.Title componentClass="h1" className="title">{listing.title}</Panel.Title>
          </Panel.Heading>
          <h3 className="price">${listing.price}</h3>
          <a href={listing.url}><img alt="Babe Lords Merchandise" className="listing-image" src={listing.MainImage.url_fullxfull} /></a>
          <p className="description">{listing.description}</p>
          <a href={listing.url} target="_blank">Purchase in Store</a>
        </Panel>
      </div>
    );
  }


  render() {
    return (
      <div className="site-index-route">
        <Row>
          {!this.state.loading && (this.state.listings || []).map(listing => (
            <div key={listing.listing_id}>
              <Col xs={12} sm={12} md={6} lg={4}>
                {this.renderListings(listing)}
              </Col>
            </div>
          ))}
        </Row>
      </div>
    );
  }
}
