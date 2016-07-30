import React from 'react';
import './LazyImage.scss';

export default class LazyImage extends React.Component {
  state = {
    loaded: false,
  }

  handleImageLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <img
        className={`image ${this.state.loaded ? 'image--loaded' : 'image--loading'}`}
        alt="flickr"
        src="http://placehold.it/20"
        onLoad={this.handleImageLoaded}
      />
    );
  }

}
