import React from 'react';
import page from 'page';
import pagePaths from '../../config/page';
import {Button, Navbar, Nav, NavItem, Row, Col} from 'react-bootstrap';
import './nav-bar.css';

const style = {
    backgroundColor:"#f44283",
    "font":"bold"
};

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
                <div className="pictureExtend">
                    <img src="http://i.imgur.com/PLFPWPx.jpg" alt="Babe Lords logo" id="babeLogo" onClick={() => this.pageToHome()}/>
                </div>
                <Navbar style={style} inverse collapseOnSelect>
                  <Navbar.Collapse>
                    <Nav>
                        <Row>
                            <Col xs={2}/>
                <Col xs={1}>
                      <NavItem eventKey={1} onClick={() => this.pageToBabes()}>
                        Babes
                      </NavItem>
                  </Col>
                  <Col xs={1}>
                      <NavItem eventKey={2} onClick={() => this.pageToMerch()}>
                        Merch
                      </NavItem>
                </Col>
                <Col xs={1}>
                      <NavItem eventKey={3} onClick={() => this.pageToShows()}>
                          Shows
                      </NavItem>
                </Col>
                <Col xs={1}>
                      <NavItem eventKey={4} onClick={() => this.pageToGallery()}>
                          Gallery
                      </NavItem>
                </Col>
                <Col xs={1}>
                      <NavItem eventKey={5} onClick={() => this.pageToMusic()}>
                          Music
                      </NavItem>
                </Col>
                <Col xs={1}>
                      <NavItem eventKey={6} onClick={() => this.pageToVideos()}>
                          Videos
                      </NavItem>
                </Col>
                <Col xs={1}>
                      <NavItem eventKey={7} onClick={() => this.pageToContact()}>
                          Contact
                      </NavItem>
                </Col>
                <Col xs={1}>
                      <NavItem eventKey={8} onClick={() => this.pageToLogin()}>
                          Login
                      </NavItem>
                </Col>
                <Col xs={2}/>
                  </Row>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
