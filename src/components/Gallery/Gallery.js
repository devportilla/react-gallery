import React from 'react';
import LazyImage from 'components/LazyImage';
import Pager from 'components/Pager';
import ImageFetcher from 'services/ImageFetcher';

export default class Gallery extends React.Component {
  static propTypes = {
    pageSize: React.PropTypes.number,
    fetcher: React.PropTypes.instanceOf(ImageFetcher),
  }

  static defaultProps = {
    pageSize: 5,
    finder: new ImageFetcher(),
  }

  constructor(props) {
    super(props);
    this.fetcher = this.props.fetcher;
  }

  state = {
    images: [],
    currentPage: 1,
  }

  componentDidMount() {
    this.fetchImages(this.props.pageSize);
  }

  fetchImages(pageSize) {
    this.fetcher.fetch(this.state.currentPage, pageSize).then(
      responseJSon => this.setState(
        { images: responseJSon.photos.photo.map(item => item.url_sq) }
      )
    );
  }

  handlePageChange = () => {
    this.fetchImages(this.props.pageSize);
  }

  render() {
    return (
      <div>
        {this.state.images.map(
          (item, index) => (
            <LazyImage key={index} src={item} />)
        )}
        <Pager handlePageChange={this.handlePageChange} />
      </div>
    );
  }

}
