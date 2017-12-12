import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './shows.css';
import calendar from '../calendar.calendar';

export default class Shows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Upcoming Shows</h1>

                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <h1 id="header">Date</h1>
                                <h2 id="date">April 20th, 2018</h2>
                                <h2 id="date">May 21st, 2018</h2>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <h1 id="header">With</h1>
                                <h2 id="band">Boreal Hills</h2>
                                <h2 id="band">Beyonce</h2>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <h1 id="header">Location</h1>
                                <h2 id="location">Pizza Head</h2>
                                <h2 id="location">Scottrade Center</h2>
                        </Col>
                    </Row>
            </div>
        );
    }
}
