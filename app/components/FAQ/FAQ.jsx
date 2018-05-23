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
          <a href="mailto:babelordsstl@gmail.com"> here </a>
             and we'll post the answer on this page!
        </h3>
        <h3 className="question">What would your dream show lineup be to play with?</h3>
        <Row>
        <Col xs={8} sm={4}>
            <img src="http://imgur.com/M2i4gli.jpg" className="image-circle profile" alt="Ian drumming" />
        </Col>
        <Col>
          <ul className="answer" >Iron Maiden, Devin Townsend, and Martha</ul>
        </Col>
        <Col xs={8} sm={4}>
          <img src="https://i.imgur.com/NZBaAwB.jpg" className="image-circle profile" alt="Mandy playing bass" />
        </Col>
          <ul className="answer">Green Day, The Gaslight Anthem, and Sleater Kinney</ul>
        <Col xs={8} sm={4}>
           <img src="http://imgur.com/RIvkfx0.jpg" className="image-circle profile" alt="Haley playing guitar" />
        </Col>
          <ul className="answer">Beyoncé, the Regrettes, and Bikini Kill</ul>

        <Row>
          <h3 className="question">How did you guys get your name?</h3>
              <Col xs={8} sm={4}>
                 <img src="http://imgur.com/RIvkfx0.jpg" className="image-circle profile" alt="Haley playing guitar" />
              </Col>

                  <ul className="answer">
                        Mandy and I used to frequent a venue, The Hairhole, in
                        Columbia, MO when we went to Mizzou. One night we were there
                        and the woman on stage called the crowd "babe lords."
                        We loved that it sounded strong and feminine at the same
                        time, so it stuck.
                 </ul>
        
       </Row>
        </Row>
      </div>
    );
  }
}
