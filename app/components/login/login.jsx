import React from 'react';
import { Row, Col, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import page from 'page';
import pagePaths from '../../config/page';
import formExtract from '../../util/form-extract';
import UserService from '../../services/user-service';
import UserActions from '../../actions/user-actions';
import './login.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    const userObj = formExtract(event);
    UserService.loginUser(userObj)
      .then((res) => {
        if (res.err) {
          // Display error message
          this.setState({ errorMessage: res.err });
        } else {
          // Refresh token in user store
          UserActions.refreshUserStore();
          // Redirect to homepage
          page(pagePaths.home);
        }
      });
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col xs={4} xsOffset={4}>
            <form className="user-login" onSubmit={this.submitForm}>
              <FormGroup controlId="formControlEmail">
                <ControlLabel>Email*</ControlLabel>
                <FormControl type="email" name="email" placeholder="Email" required />
              </FormGroup>
              <FormGroup controlId="formControlPassword">
                <ControlLabel>Password*</ControlLabel>
                <FormControl type="password" name="password" placeholder="Password" required />
              </FormGroup>
              {this.state.errorMessage && <p className="error">{this.state.errorMessage}</p>}
              <button id="button" type="submit">Login</button>
              <p>Not a user?</p><a href="#/signup">Sign up here!</a>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
