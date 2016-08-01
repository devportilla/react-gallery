import React from 'react';
import './LazyImage.scss';

export default class LazyImage extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    secret: React.PropTypes.string,
    url: React.PropTypes.string,
    clickHandler: React.PropTypes.func,
  }
  static defaultProps = {
    id: null,
    secret: null,
    url: null,
    clickHandler: () => {},
  }

  state = {
    loaded: false,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
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
        alt={this.props.id}
        src={this.props.url}
        onClick={() => this.props.clickHandler(this.props.id, this.props.secret)}
        onLoad={this.handleImageLoaded}
      />
    );
  }

}
