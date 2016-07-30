import React from 'react';
import LazyImage from 'components/LazyImage/LazyImage';

export default class Gallery extends React.Component {
  static propTypes = {
    images: React.PropTypes.array.isRequired,
  }

  static defaultProps = {
    images: [1, 2, 3, 4, 5],
  }

  render() {
    return (
      <div>
        {this.props.images.map(i => (<LazyImage key={i} />))}
      </div>
    );
  }

}
