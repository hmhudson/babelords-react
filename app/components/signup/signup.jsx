import React from 'react';
import page from 'page';
import pagePaths from '../../config/page';
import formExtract from '../../util/form-extract';
import UserService from '../../services/user-service';
import './signup.css'
import {Row, Col, FormControl, FormGroup, ControlLabel, Button, Checkbox} from 'react-bootstrap';


export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordMismatch: false,
            errorMessage: null
        };

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(event) {
        event.preventDefault();
        const newUserObj = formExtract(event);

        if (newUserObj.password !== newUserObj.passwordCopy){
            this.setState({passwordMismatch: true});
        }
        UserService.createUser(newUserObj)
            .then((res) => {
                if (res.err) {
                    //Display error message
                    this.setState({errorMessage: res.err});
                } else {
                    //Redirect to homepage
                    page(pagePaths.home);
                }
            });
    }

    render() {
        return (
            <div class="container">
                <h3>Create an account to comment on posts!</h3>
                <Row>
                    <Col xs={4} xsOffset={4}>
                    <form className="create-user-form" onSubmit={this.submitForm}>
                        <FormGroup controlId="formControlFirstName">
                            <ControlLabel>First Name*</ControlLabel>
                            <FormControl type="text" name="firstName" placeholder="Name" required/>
                        </FormGroup>
                        <FormGroup controlId="formControlLastName">
                            <ControlLabel>Last Name*</ControlLabel>
                            <FormControl type="text" name="lastName" placeholder="Last Name" required/>
                        </FormGroup>
                        <FormGroup controlId="formControlPassword">
                            <ControlLabel>Password*</ControlLabel>
                            <FormControl type="password" name="password" placeholder="Password" required/>
                        </FormGroup>
                        <FormGroup controlId="formControlPasswordCopy">
                            <ControlLabel>Repeat Password*</ControlLabel>
                            <FormControl type="password" name="passwordCopy" placeholder="Repeat Password" required/>
                        </FormGroup>
                        {this.state.passwordMismatch === true && <p className="error">Your passwords must match!</p>}
                        <FormGroup controlId="formControlEmail">
                            <ControlLabel>Email*</ControlLabel>
                            <FormControl type="email" name="email" placeholder="Email" required/>
                        </FormGroup>
                      {this.state.errorMessage && <p className="error">{this.state.errorMessage}</p>}
                      <button id="button" type="submit">Create Account</button>
                      </form>
                    </Col>
                </Row>
            </div>

        );
    }
}
