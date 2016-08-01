import React from 'react';
import ImageInfo from 'models/ImageInfo';
import './Modal.scss';

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
      <div>
        <div
          className={`modal__background ${this.props.opened ? 'modal__background--opened' :
                                          'modal__background--closed'}`}
        ></div>
        <div className={`modal ${this.props.opened ? 'modal--opened' : 'modal--closed'}`}>
          <span className="modal__close-button" onClick={this.props.closeFunction}>x</span>
          {this.props.content.postUrl}
        </div>
      </div>
    );
  }
}
