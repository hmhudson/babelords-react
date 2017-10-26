import React from 'react';
import NavBar from '../nav-bar/nav-bar';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const qt = 'Haley';
      return (
        <div>
        <NavBar/>
        </div>
      );
    }
}
