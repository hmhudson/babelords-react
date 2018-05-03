import React from 'react';
import page from 'page';
import { Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap';
import { Cookies } from 'react-cookie';
import pagePaths from '../../config/page';
import userStore from '../../stores/user-store';
import UserActions from '../../actions/user-actions';
import './nav-bar.css';

const cookie = new Cookies();

const style = {
  backgroundColor: '#f44283',
  font: 'bold',
};

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logout = this.logout.bind(this);
  }
  pageToMerch() {
    page(pagePaths.merch);
  }
  pageToBabes() {
    page(pagePaths.babes);
  }
  pageToFAQ() {
    page(pagePaths.FAQ);
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
  pageToSignup() {
    page(pagePaths.signup);
  }

  logout() {
    // Destroy the cookie
    cookie.remove('token', { path: '/' });
    // Refresh token in user store
    UserActions.refreshUserStore();
    // Rerender NavBar
    this.setState({});
    // Redirect to homepage
    page(pagePaths.home);
  }

  render() {
    return (
      <div>
        <Row className="logo-row">
          <Col xs={12} className="picture-col">
            <div className="pictureExtend">
              <img src="http://i.imgur.com/PLFPWPx.jpg" alt="Babe Lords logo" id="babeLogo" onClick={() => this.pageToHome()}/>
            </div>
          </Col>
        </Row>
        <Navbar style={style} inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <div className="nav-item-container">
                <NavItem eventKey={1} onClick={() => this.pageToBabes()}>
                          Babes
                </NavItem>

                <NavItem eventKey={1} onClick={() => this.pageToFAQ()}>
                          FAQ
                </NavItem>

                <NavItem eventKey={2} onClick={() => this.pageToMerch()}>
                          Merch
                </NavItem>

                <NavItem eventKey={3} onClick={() => this.pageToShows()}>
                            Shows
                </NavItem>

                <NavItem eventKey={4} onClick={() => this.pageToGallery()}>
                            Gallery
                </NavItem>

                <NavItem eventKey={5} onClick={() => this.pageToMusic()}>
                            Music
                </NavItem>

                <NavItem eventKey={6} onClick={() => this.pageToVideos()}>
                            Videos
                </NavItem>

                <NavItem eventKey={7} onClick={() => this.pageToContact()}>
                            Contact
                </NavItem>

                {!userStore.isLoggedIn() &&
                <NavItem eventKey={8} onClick={() => this.pageToLogin()}>
                                Login
                </NavItem>
                }
                {!userStore.isLoggedIn() &&
                <NavItem eventKey={8} onClick={() => this.pageToSignup()}>
                                Sign Up
                </NavItem>
                }
                {userStore.isLoggedIn() &&
                <NavItem eventKey={8} onClick={() => this.logout()}>
                                Log Out
                </NavItem>
                }
              </div>


            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
