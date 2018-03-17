import React from 'react';
import {Row, Col, FormControl, FormGroup, ControlLabel, Button, Checkbox} from 'react-bootstrap';
import formExtract from '../../util/form-extract';
import UserService from '../../services/user-service';
import './login.css';



export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(event) {
        event.preventDefault();
        const userObj = formExtract(event);
        UserService.loginUser(userObj)
            .then((res) => {
                console.log(res);
            });
    }

    render() {
        return (
            <div class="container">
            <Row>
                <Col xs={4} xsOffset={4}>
                <form className="user-login" onSubmit={this.submitForm}>
                    <FormGroup controlId="formControlEmail">
                        <ControlLabel>Email*</ControlLabel>
                        <FormControl type="email" name="email" placeholder="Email" required/>
                    </FormGroup>
                    <FormGroup controlId="formControlPassword">
                        <ControlLabel>Password*</ControlLabel>
                        <FormControl type="password" name="password" placeholder="Password" required/>
                    </FormGroup>
                  <button id="button" type="submit">Login</button>
                  <p>Not a user?</p><a href="#/signup">Sign up here!</a>
                  </form>
                </Col>
            </Row>
            </div>
        );
    }
}
