import React from 'react';
import ImageFinder from 'services/ImageFinder';
import LazyImage from 'components/LazyImage';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.finder = new ImageFinder('0239e1b9142a1b6c77b098ecc4debd0d');
  }

  static propTypes = {
    pageSize: React.PropTypes.number,
  }

  static defaultProps = {
    pageSize: 5,
  }

  state = {
    images: [],
    currentPage: 1,
  }

  componentDidMount() {
    this.fetchImages(this.props.pageSize);
  }

  fetchImages(pageSize) {
    this.finder.find(this.state.currentPage, pageSize).then(
      responseJSon => this.setState(
        { images: responseJSon.photos.photo.map(item => item.url_sq) }
      )
    );
  }

  render() {
    return (
      <div>
        {this.state.images.map(
          (item, index) => (
            <LazyImage key={index} src={item} />)
        )}
      </div>
    );
  }

}
