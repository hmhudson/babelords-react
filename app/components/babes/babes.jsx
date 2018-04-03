import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './babes.css'

export default class Babes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="about-page">
                <h1 className="about">About Us</h1>
                    <div>
                        <Col lg={12}>
                            <p className="band-bio">
                                Before there was "Babe Lords" there was "The Hannas,"--an ill-fated high school rock and roll band that burned
                                out seemingly as quickly as it had screeched its way onto the scene. To the dismay of the band's fans,
                                the glamour and romance of a youthful pursuit of punk rock freedom soon darkened in the face of ACT tests, curfews,
                                parental chauffeurs, and an incredible lack of sexual opportunity. It was during this time, however, that those in
                                the band made a choice that would send them headlong towards their destiny, putting their young lives in the hands of
                                fate- they chose their instruments. Haley Hudson on guitar, and Mandy Davis on bass. Out of the fire that was the Hannas,
                                came a more firey fire that is Babe Lords. In the past, bassist Mandy Davis has referenced influences such as the Replacements,
                                Sleater-Kinney, Ke$ha, and the overwhelming, life-affirming, bellyscream feeling that fuels all feminists to scream when no
                                one is listening.
                            </p>
                        </Col>
                    </div>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <h1 className="babe">Ian Parks</h1>
                            <div>
                                <img src="http://imgur.com/M2i4gli.jpg" className="image-circle" alt="Ian drumming"/>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className="list-container">
                            <ul className="list">
                                <li><strong>Instrument:</strong> Drums, Vocals</li>
                                <li><strong>Favorite Halloween Movie:</strong> The Evil Dead</li>
                                <li><strong>Favorite song to play:</strong> Epicenter</li>
                                <li><strong>Favorite pizza topping:</strong> Pepperoni</li>
                                <li><strong>Favorite Beyonce song:</strong> ¯\_(ツ)_/¯</li>
                            </ul>
                        <div>
                            <p className="bio"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <h1 className="babe">Mandy Davis</h1>
                            <div>
                                <img src="https://i.imgur.com/NZBaAwB.jpg" className="image-circle" alt="Mandy playing bass"/>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className="list-container">
                            <ul className="list">
                                <li><strong>Instrument:</strong> Bass, Vocals</li>
                                <li><strong>Favorite Halloween Movie:</strong> Hocus Pocus</li>
                                <li><strong>Favorite song to play:</strong> Skirt</li>
                                <li><strong>Favorite pizza topping:</strong> Green Pepper</li>
                                <li><strong>Favorite Beyonce song:</strong> Halo</li>
                            </ul>
                            <p className="bio"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <h1 className="babe">Haley Hudson</h1>
                            <div>
                                <img src="http://imgur.com/RIvkfx0.jpg" className="image-circle" alt="Haley playing guitar"/>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className="list-container">
                            <ul className="list">
                                <li><strong>Instrument:</strong> Guitar, Vocals</li>
                                <li><strong>Favorite Halloween Movie:</strong> Halloweentown</li>
                                <li><strong>Favorite song to play:</strong> Spit/Housewife</li>
                                <li><strong>Favorite pizza topping:</strong> Steak</li>
                                <li><strong>Favorite Beyonce song:</strong> Sorry</li>
                            </ul>
                            <p className="bio"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Col>
                    </Row>
            </div>
        );
    }
}
