import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './music.css';


const style = {
  border: '0',
  width: '250px',
  height: '364px',
};

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="music">
        <Row>
          <Col xs={4}>
            <iframe title="song" style={style} src="https://bandcamp.com/EmbeddedPlayer/album=1034666290/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=494413939/transparent=true/" seamless><a href="http://babelords.bandcamp.com/track/cool-girl-4">Cool Girl by Babe Lords</a></iframe>
          </Col>
          <Col xs={4}>
            <iframe title="song" style={style} src="https://bandcamp.com/EmbeddedPlayer/album=1034666290/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=494413939/transparent=true/" seamless><a href="http://babelords.bandcamp.com/track/cool-girl-4">Cool Girl by Babe Lords</a></iframe>
          </Col>
          <Col xs={4}>
            <iframe title="song" style={style} src="https://bandcamp.com/EmbeddedPlayer/album=1034666290/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=494413939/transparent=true/" seamless><a href="http://babelords.bandcamp.com/track/cool-girl-4">Cool Girl by Babe Lords</a></iframe>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <iframe title="song" style={style} src="https://bandcamp.com/EmbeddedPlayer/album=1034666290/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=494413939/transparent=true/" seamless><a href="http://babelords.bandcamp.com/track/cool-girl-4">Cool Girl by Babe Lords</a></iframe>
          </Col>
          <Col xs={4}>
            <iframe title="song" style={style} src="https://bandcamp.com/EmbeddedPlayer/album=1034666290/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=494413939/transparent=true/" seamless><a href="http://babelords.bandcamp.com/track/cool-girl-4">Cool Girl by Babe Lords</a></iframe>
          </Col>
          <Col xs={4}>
            <iframe title="song" style={style} src="https://bandcamp.com/EmbeddedPlayer/album=1034666290/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=494413939/transparent=true/" seamless><a href="http://babelords.bandcamp.com/track/cool-girl-4">Cool Girl by Babe Lords</a></iframe>
          </Col>
        </Row>
      </div>
    );
  }
}
