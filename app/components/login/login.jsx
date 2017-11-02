import React from 'react';
import './login.css'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="container">
              <label><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required/>

              <label><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required/>

              <button type="submit">Login</button>
              <input type="checkbox" checked="checked"/>
            </div>
        );
    }
}
