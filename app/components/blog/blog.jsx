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
            <h1>News</h1>
            <form method= "post">
            <label>
                <div>Title</div>
                <input type="text" name= "title" required/>
                <input type="text" name="user" required/>
            </label>
            <div>Post</div>
            <textarea  required></textarea>
            <button>Submit</button>
        </form>

        <div class="blog-posts">
            <h2>Babe Blog!</h2>
        </div>
        </div>
      );
    }
}
