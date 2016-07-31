import React from 'react';
import './LazyImage.scss';
import Image from 'models/Image';

export default class LazyImage extends React.Component {
  static propTypes = {
    image: React.PropTypes.instanceOf(Image),
    clickHandler: React.PropTypes.func,
  }
  static defaultProps = {
    image: Image.default(),
    clickHandler: () => {},
  }

  state = {
    loaded: false,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.image.url !== nextProps.image.url) {
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
        alt={this.props.image.id}
        src={this.props.image.url}
        onClick={() => this.props.clickHandler(this.props.image.id, this.props.image.secret)}
        onLoad={this.handleImageLoaded}
      />
    );
  }

}
