import React from 'react';
// import './nav-bar.css';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div id="pictureExtend">
                    <img src="http://i.imgur.com/PLFPWPx.jpg" alt="Babe Lords logo" id="babeLogo" href="#/"/>
                </div>
                <div class="container btn-group-justified">
                    <button class="button" id="babes" href="#/babes">Babes</button>
                    <button class="button"  id="merch" href="#/merch">Merch</button>
                    <button class="button" id="calendar" href="#/shows">Shows</button>
                    <button class="button"  id="gallery" href="#/gallery">Gallery</button>
                    <button class="button"  id="music" href="#/music">Music</button>
                    <button class="button"  id="videos" href="#/videos">Videos</button>
                    <button class="button" id="contact" href="#/contact">Contact Us</button>
                    <button class="button"  id="signIn" href="#/login">Sign In</button>
                </div>
            </div>
        );
    }
}
