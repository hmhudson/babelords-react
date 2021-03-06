import React from 'react';
import { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Row } from 'react-bootstrap';
import _ from 'lodash';
import './gallery.css';

const images = [
  'https://i.imgur.com/hqN4uoo.jpg',
  'https://i.imgur.com/NlWGcx5.jpg',
  'https://i.imgur.com/JtGx7Ot.jpg',
  'https://i.imgur.com/O1qVcbk.jpg',
  'https://i.imgur.com/ccTNoET.jpg',
  'https://i.imgur.com/V0GAGM7.jpg',
  'https://i.imgur.com/jUDMJVM.jpg',
  'https://i.imgur.com/QyZfmsR.jpg',
  'https://i.imgur.com/ly5a2xa.jpg',
  'https://i.imgur.com/l8FuTWT.jpg',
];

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(event) {
    event.preventDefault();
    const index = images.indexOf(event.target.src);
    this.setState({
      photoIndex: index,
      isOpen: true,
    });
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="photo-gallery-component">
        <div>
          <Row>
            {images.map((url, i) => (
              <div className="imageContainer">
                <a href="#" onClick={this.openLightbox}>
                  <img className="images" key={i} src={url} alt="Babe Lords" />
                </a>
              </div>
            ))}
          </Row>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
