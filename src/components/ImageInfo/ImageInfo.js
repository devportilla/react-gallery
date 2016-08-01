import React from 'react';
import './ImageInfo.scss';

export default class ImageInfo extends React.Component {
  static propTypes = {
    author: React.PropTypes.string,
    title: React.PropTypes.string,
  }
  static defaultProps = {
    author: '',
    title: '',
  }
  render() {
    return (
      <div className="image-info">
        <span>{this.props.author}</span>
        <span>{this.props.title}</span>
      </div>
    );
  }
}
