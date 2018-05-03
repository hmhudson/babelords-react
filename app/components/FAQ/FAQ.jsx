import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './FAQ.css';


export default class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="submit">Have a question you would like the band to answer?</h1>
        <h3 className="byline"> Email us
          <a href="mailto:babelordsstl@gmail.com">here</a>
             and we'll post the answer on this page!
        </h3>
        <h3 className="question">Who is your dream band to play with?</h3>
        <Row>
          <ul className="answer">Ian: Iron Maiden</ul>
          <ul className="answer">Mandy: Green Day</ul>
          <ul className="answer">Haley: Beyoncé</ul>
          <h3 className="question">How did you guys get your name?</h3>
          <ul className="answer">
                Haley: Mandy and I used to frequent a venue, The Hairhole, in
                Columbia, MO when we went to Mizzou. One night we were there
                and the woman on stage called the crowd "babe lords."
                We loved that it sounded strong and feminine at the same
                time, so it stuck.
          </ul>
        </Row>
      </div>
    );
  }
}
