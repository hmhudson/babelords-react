import React from 'react';
import {Row, Col, FormControl, FormGroup, ControlLabel, Button, Checkbox} from 'react-bootstrap';


export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="container">
                <h3>Create an account to comment on posts!</h3>
                <Row>
                    <Col xs={4} xsOffset={4}>
                      <label><b>First Name</b></label>
                      <input className="input" type="text" placeholder="Enter First Name" name="uname" required/>

                     <label><b>Last Name</b></label>
                     <input className="input" type="text" placeholder="Enter Last Name" name="uname" required/>

                      <label><b>Password</b></label>
                      <input className="input" type="password" placeholder="Enter Password" name="psw" required/>

                     <label><b>Repeat Password</b></label>
                     <input className="input" type="password" placeholder="Repeat Password" name="psw" required/>

                    <label><b>Email</b></label>
                    <input className="input" type="password" placeholder="Email Address" name="psw" required/>

                      <button id="button" type="submit">Create Account</button>
                    </Col>
                </Row>
            </div>

        );
    }
}
