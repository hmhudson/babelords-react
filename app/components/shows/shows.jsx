import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './shows.css';
import Calendar from '../calendar/calendar';

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
                        <Col xs={12}>
                             <Calendar/>
                        </Col>
                    </Row>
            </div>
        );
    }
}
