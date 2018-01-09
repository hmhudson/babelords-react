import React from 'react';
import './music.css';
import {Row, Col, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

const style={ border: "0",
              width: "250px",
              height: "364px"
          };

export default class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class= "music">
                <Row>
                    <Col xs={4}>
                        <iframe style={style} src="https://bandcamp.com/EmbeddedPlayer/track=844489545/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/transparent=true/" seamless><a href="http://babelords.bandcamp.com/track/jack-n-coke">Jack N Coke by Babe Lords</a></iframe>
                    </Col>
                    <Col xs={4}>
                        <iframe style={style} src="https://bandcamp.com/EmbeddedPlayer/track=844489545/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/transparent=true/" seamless><a href="http://babelords.bandcamp.com/track/jack-n-coke">Jack N Coke by Babe Lords</a></iframe>
                    </Col>
                    <Col xs={4}>
                        <iframe style={style} src="https://bandcamp.com/EmbeddedPlayer/track=844489545/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/transparent=true/" seamless><a href="http://babelords.bandcamp.com/track/jack-n-coke">Jack N Coke by Babe Lords</a></iframe>
                    </Col>
                </Row>
            </div>
        );
    }
}
