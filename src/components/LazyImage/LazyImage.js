import React from 'react';

export default class LazyImage extends React.Component {
  state = { loaded: false}

  handleImageLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <img alt="flickr" src="http://www.placehold.it/50" onLoad={this.handleImageLoaded} />
    );
  }

}
