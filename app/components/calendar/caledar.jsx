import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

var testEvents = [{
    title: "Babe Lords ft. Beyonce",
    start: moment.utc("12/21/17"),
    end: moment.utc("12/21/17"),
    fb_URL: "https://www.facebook.com/events/1208541792609819/"
}, {
    title: "Babe Lords ft. Ke$ha",
    start: moment.utc("12/23/17"),
    end: moment.utc("12/23/17"),
    fb_URL: "https://www.facebook.com/events/1208541792609819/"
}];


export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <BigCalendar
                  events={testEvents}
                />
            </div>
        );
    }
}
