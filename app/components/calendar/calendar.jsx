import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
BigCalendar.momentLocalizer(moment);

const propFormats = {
  dayFormat: 'ddd MMM Do',
  dayHeaderFormat: 'ddd MMM Do'
};

var testEvents = [{
    title: "Babe Lords ft. Beyonce",
    start: moment('12/21/17'),
    end: moment("12/21/17"),
    fb_URL: "https://www.facebook.com/events/1208541792609819/"
}, {
    title: "Babe Lords ft. Ke$ha",
    start: moment("12/23/17"),
    end: moment("12/23/17"),
    fb_URL: "https://www.facebook.com/events/1208541792609819/"
}];


export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    Event({ event }) {
        return (
            <a href={event.fb_URL}><span>{event.title}</span></a>
        );
    }


    render() {
        console.log(testEvents);
        return (
            <div className='calendar-component'>
                <BigCalendar
                  events={testEvents}
                  formats={propFormats}
                  components={{event: this.Event}}
                />
            </div>
        );
    }
}
