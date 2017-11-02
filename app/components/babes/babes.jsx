import React from 'react';
import './babes.css'

export default class Babes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1 class="about">About</h1>
                    <p class="about">
                        Before there was "Babe Lords" there was "The Hannas,"--an ill-fated high school rock and roll band that burned
                        out seemingly as quickly as it had screeched its way onto the scene. To the dismay of the band's hordes of fans,
                        the glamour and romance of a youthful pursuit of punk rock freedom soon darkened in the face of ACT tests, curfews,
                        parental chauffeurs, and an incredible lack of sexual opportunity. It was during this time, however, that those in
                        the band made a choice that would send them headlong towards their destiny, putting their young lives in the hands of
                        fate- they chose their instruments. Haley Hudson on guitar, and Mandy Davis on bass. Out of the fire that was the Hannas,
                        came a more firey fire that is Babe Lords. In the past, bassist Mandy Davis has referenced influences such as the Replacements,
                        Sleater-Kinney, Ke$ha, and the overwhelming, life-affirming, bellyscream feeling that fuels all feminists to scream when no one is listening.
                    </p>
                    <br/>
                    <br/>
                    <h1 id="Ian">Ian</h1>
                    <div class="row">
                         <div class="col-sm-8 col-lg-5">
                             <img src="http://imgur.com/M2i4gli.jpg" id="ianPic" alt="Ian drumming"/>
                         </div>
                        <h3 class="col-sm-4">
                            Instrument: Drums, Vocals
                            <br/>
                            Favorite Halloween Movie: The Evil Dead
                            <br/>
                            Favorite song to play: Epicenter
                            <br/>
                            Favorite pizza topping: Pepperoni
                            <br/>
                            Favorite Beyonce song: ¯\_(ツ)_/¯
                            <br/>
                        </h3>
                    </div>
                    <br/>
                    <h2 id="Mandy">Mandy</h2>
                    <div class="row">
                        <div class="col-sm-8 col-lg-5">
                            <img src="http://imgur.com/afeC5gg.jpg" id="mandyPic" alt="Mandy playing bass"/>
                        </div>
                        <h3 id="Mandy">
                            Instrument: Bass, Vocals
                            <br/>
                            Favorite Halloween Movie: Hocus Pocus
                            <br/>
                            Favorite song to play: Skirt
                            <br/>
                            Favorite pizza topping: Green pepper
                            <br/>
                            Favorite Beyonce song: Halo
                            <br/>
                        </h3>
                    </div>
                    <br/>
                    <h2 id="Haley">Haley</h2>
                    <div class="row">
                        <div class="col-sm-8 col-lg-5">
                            <img src="http://imgur.com/RIvkfx0.jpg" id="haleyPic" alt="Haley playing guitar"/>
                        </div>
                        <h3>
                            Instrument: Guitar, Vocals
                            <br/>
                            Favorite Halloween Movie: Halloweentown
                            <br/>
                            Favorite Babe song to play: Spit/Housewife
                            <br/>
                            Favorite pizza topping: Steak
                            <br/>
                            Favorite Beyonce song: Sorry
                            <br/>
                        </h3>
                    </div>
            </div>
        );
    }
}
