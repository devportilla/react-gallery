import React from 'react';
import './LazyImage.scss';
import Image from 'models/Image';

export default class LazyImage extends React.Component {
  static propTypes = {
    image: React.PropTypes.instanceOf(Image),
  }
  static defaultProps = {
    loaded: false,
    image: Image.default(),
  }

  state = {
    loaded: false,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.image.url !== nextProps.image.src) {
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
        src={this.props.image.url}
        onLoad={this.handleImageLoaded}
      />
    );
  }

}
