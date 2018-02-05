import React from 'react';
import {Row, Col, FormControl, FormGroup, ControlLabel, Button, Checkbox} from 'react-bootstrap';
import './login.css';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="container">
            <Row>
                <Col xs={4} xsOffset={4}>
                  <label><b>Username</b></label>
                  <input className="input" type="text" placeholder="Enter Username" name="uname" required/>

                  <label><b>Password</b></label>
                  <input className="input" type="password" placeholder="Enter Password" name="psw" required/>

                  <button id="button" type="submit">Login</button>
                  <Checkbox type="checkbox" checked="checked">Remember Me</Checkbox>
                </Col>
            </Row>
            </div>
        );
    }
}
