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
        <h2 className="video-title">Babe Lords live at Foam</h2>
        <p>Performing the song Benny live at Foam July 2, 2015</p>

        <div className="video">
          <iframe title="Benny" id="foam" width="560" height="315" src="https://www.youtube.com/embed/-i4vCOltNt0" frameBorder="0" allowFullscreen></iframe>
        </div>

        <h2 className="video-title">Babe Lords live at Acid Kat Fest</h2>
        <p>Performing the song Epicenter live, July 26, 2014</p>

        <div className="video">
          <iframe title="Epicenter" width="560" height="315" src="https://www.youtube.com/embed/c0trZBfZXh0" frameBorder="0" allowFullscreen></iframe>
        </div>

        <h2 className="video-title">Babe Lords live at Barnfest</h2>
        <p>Performing the song Pessimist live, September 20, 2014</p>
        <div className="video">
          <iframe title="Pessimist" id="barnfest" width="560" height="315" src="https://www.youtube.com/embed/oihYQUU2qqw" frameBorder="0" allowFullscreen></iframe>
        </div>

      </div>
    );
  }
}
