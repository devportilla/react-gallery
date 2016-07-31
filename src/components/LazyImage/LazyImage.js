import React from 'react';
import './LazyImage.scss';

export default class LazyImage extends React.Component {
  static propTypes = {
    src: React.PropTypes.string,
  }

  state = {
    loaded: false,
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.src !== nextProps.src) {
      this.setState({ loaded: false });
    }
  }

  handleImageLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <img
        className={`image ${this.state.loaded ? 'image--loaded' : 'image--loading'}`}
        alt="flickr"
        src={this.props.src}
        onLoad={this.handleImageLoaded}
      />
    );
  }

}
