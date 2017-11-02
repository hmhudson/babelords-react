import React from 'react';
import './videos.css';

export default class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div class="video">
                <iframe id="foam" width="560" height="315" src="https://www.youtube.com/embed/-i4vCOltNt0" frameBorder="0" allowfullscreen></iframe>
            </div>
                <h2>Babe Lords live at Foam</h2>
                    <p>Performing 'Benny' live at Foam July 2, 2015</p>

            <div class= "video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/c0trZBfZXh0" frameBorder="0" allowfullscreen></iframe>
            </div>
                <h2>Babe Lords live at Acid Kat Fest</h2>
                    <p>Performing 'Epicenter' live, July 26, 2014</p>
                    <br/>
                    <br/>
            <div class="video">
                <iframe id="barnfest" width="560" height="315" src="https://www.youtube.com/embed/oihYQUU2qqw" frameBorder="0" allowfullscreen></iframe>
            </div>
                <h2>Babe Lords live at Barnfest</h2>
                    <p>Performing 'Pessimist' live, September 20, 2014</p>
            </div>

        );
    }
}
