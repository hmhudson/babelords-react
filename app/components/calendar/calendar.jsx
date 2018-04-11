import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';

BigCalendar.momentLocalizer(moment);

const propFormats = {
  dayFormat: 'ddd MMM Do',
  dayHeaderFormat: 'ddd MMM Do',
};

const testEvents = [{
  title: 'Babe Lords ft. Beyonce',
  start: moment('4/18/18'),
  end: moment('4/18/18'),
  fb_URL: 'https://www.facebook.com/events/1208541792609819/',
}, {
  title: 'Babe Lords Album Release show',
  start: moment('5/05/18'),
  end: moment('5/05/18'),
  fb_URL: 'https://www.facebook.com/events/1208541792609819/',
}, {
  title: 'Babe Lords with Skating Polly',
  start: moment('6/03/18'),
  end: moment('6/03/18'),
  fb_URL: 'https://www.facebook.com/events/1208541792609819/',
},
];


export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Event({ event }) {
    return (
      <a href={event.fb_URL} target="_blank"><span>{event.title}</span></a>
    );
  }


  eventStyle() {
    const style = {
      backgroundColor: '#f44283',
    };
    return {
      style,
    };
  }

  render() {
    return (
      <div className="calendar-component">
        <BigCalendar
          events={testEvents}
          formats={propFormats}
          components={{ event: this.Event }}
          eventPropGetter={this.eventStyle}
        />
      </div>
    );
  }
}
