import React from 'react';
import page from 'page';
import pagePaths from '../../config/page';
import {Button} from 'react-bootstrap';
import './nav-bar.css';
export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    pageToMerch() {
      page(pagePaths.merch);
    }
    pageToBabes() {
        page(pagePaths.babes);
    }
    pageToShows() {
        page(pagePaths.shows);
    }
    pageToHome() {
        page(pagePaths.home);
    }
    render() {
        return (
            <div>
                <div id="pictureExtend">
                    <img src="http://i.imgur.com/PLFPWPx.jpg" alt="Babe Lords logo" id="babeLogo" onClick={() => this.pageToHome()}/>
                </div>
                <div class="container btn-group-justified">
                    <button class="button" id="babes" onClick={() => this.pageToBabes()}>Babes</button>
                    <button class="button"  id="merch" onClick={() => this.pageToMerch()}>Merch</button>
                    <button class="button" id="shows" onClick={() => this.pageToShows()}>Shows</button>
                    <button class="button"  id="gallery" href="/#/gallery">Gallery</button>
                    <button class="button"  id="music" href="/#/music">Music</button>
                    <button class="button"  id="videos" href="/#/videos">Videos</button>
                    <button class="button" id="contact" href="/#/contact">Contact Us</button>
                    <button class="button"  id="signIn" href="/#/login">Sign In</button>
                </div>
            </div>
        );
    }
}
