import React from 'react';
import LazyImage from 'components/LazyImage';
import ImageInfo from 'components/ImageInfo';
import Image from 'models/Image';
import './ImageCard.scss';

export default class ImageCard extends React.Component {
  static propTypes = {
    image: React.PropTypes.instanceOf(Image),
    clickHandler: React.PropTypes.func,
  }
  static defaultProps = {
    image: Image.default(),
    clickHandler: () => {},
  }
  render() {
    return (
      <div className="image-card">
        <LazyImage
          id={this.props.image.id}
          secret={this.props.image.secret}
          url={this.props.image.url}
          clickHandler={this.props.clickHandler}
        />
        <ImageInfo
          author={this.props.image.ownerName}
          title={this.props.image.title}
        />
      </div>
    );
  }
}
