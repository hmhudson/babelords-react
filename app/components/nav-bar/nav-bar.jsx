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

    pageToGallery() {
        page(pagePaths.gallery);
    }
    pageToMusic() {
        page(pagePaths.music);
    }
    pageToVideos() {
        page(pagePaths.videos);
    }
    pageToContact() {
        page(pagePaths.contact);
    }
    pageToLogin() {
        page(pagePaths.login);
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
                    <button class="button"  id="gallery" onClick={() => this.pageToGallery()}>Gallery</button>
                    <button class="button"  id="music" onClick={() => this.pageToMusic()}>Music</button>
                    <button class="button"  id="videos" onClick={() => this.pageToVideos()}>Videos</button>
                    <button class="button" id="contact" onClick={() => this.pageToContact()}>Contact Us</button>
                    <button class="button"  id="signIn" onClick={() => this.pageToLogin()}>Login</button>
                </div>
            </div>
        );
    }
}
