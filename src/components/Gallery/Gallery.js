import React from 'react';
import LazyImage from 'components/LazyImage';
import Pager from 'components/Pager';
import ImageFetcher from 'services/ImageFetcher';
import Image from 'models/Image';

export default class Gallery extends React.Component {
  static propTypes = {
    pageSize: React.PropTypes.number,
    fetcher: React.PropTypes.instanceOf(ImageFetcher),
  }

  static defaultProps = {
    pageSize: 5,
    fetcher: new ImageFetcher(),
  }

  state = {
    images: [],
    currentPage: 1,
  }

  componentDidMount() {
    this.fetchImages(this.props.pageSize);
  }

  componentDidUpdate(_, nextState) {
    if (nextState.currentPage !== this.state.currentPage) {
      this.fetchImages(this.props.pageSize);
    }
  }

  fetchImages(pageSize) {
    console.log(this.state.currentPage);
    this.props.fetcher.fetch(this.state.currentPage, pageSize).then(
      responseJSon => this.setState(
        { images: responseJSon.photos.photo.map(item => Image.fromValues(item)) }
      )
    );
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }

  render() {
    return (
      <div>
        {this.state.images.map(
          (item, index) => (
            <LazyImage key={index} image={item} />)
        )}
        <Pager currentPage={this.state.currentPage} handlePageChange={this.handlePageChange} />
      </div>
    );
  }

}
