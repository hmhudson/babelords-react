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
            <h3 className="question">What has been your most memorable show as a band?</h3>
            <row>
                <Col xs={8} sm={4}>
                    <img src="http://imgur.com/M2i4gli.jpg" className="image-circle profile" alt="Ian drumming" />
                </Col>
                <Col>
                  <ul className="answer" >Some of the most memorable shows to me have always been playing
                  Barnfests.  My favorite being when we played during sunset to a large crowd. </ul>
                </Col>
                <Col xs={8} sm={4}>
                  <img src="https://i.imgur.com/NZBaAwB.jpg" className="image-circle profile" alt="Mandy playing bass" />
                </Col>
                  <ul className="answer">We played this show a Plush, a venue that's no longer around,
                  back in our earlier days. That one got pretty wild with all of our friends there.  </ul>
                <Col xs={8} sm={4}>
                   <img src="http://imgur.com/RIvkfx0.jpg" className="image-circle profile" alt="Haley playing guitar" />
                </Col>
                  <ul className="answer">The most memorable show to me was when we had our release show at Vintage
                  Vinyl.  Since it was just for us, I loved having all of our friends and supporters there.</ul>
            </row>

       </Row>
        </Row>
      </div>
    );
  }
}
