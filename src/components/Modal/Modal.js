import React from 'react';
import ImageInfo from 'models/ImageInfo';

export default class Modal extends React.Component {
  static propTypes = {
    content: React.PropTypes.instanceOf(ImageInfo),
    opened: React.PropTypes.bool,
    closeFunction: React.PropTypes.func,
  }

  static defaultProps = {
    content: ImageInfo.default(),
    opened: false,
    closeFunction: () => {},
  }

  render() {
    return (
      <div className={`modal ${this.props.opened ? 'modal--opened' : 'modal--closed'}`}>
        <span onClick={this.props.closeFunction}>x</span>
        {this.props.content.postUrl}
      </div>
    );
  }
}
