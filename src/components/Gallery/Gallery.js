import React from 'react';
import LazyImage from 'components/LazyImage';
import Pager from 'components/Pager';
import Modal from 'components/Modal';
import ImageFetcher from 'services/ImageFetcher';
import ImageInfoFetcher from 'services/ImageInfoFetcher';
import Image from 'models/Image';
import ImageInfo from 'models/ImageInfo';

export default class Gallery extends React.Component {
  static propTypes = {
    pageSize: React.PropTypes.number,
    imageFetcher: React.PropTypes.instanceOf(ImageFetcher),
    imageInfoFetcher: React.PropTypes.instanceOf(ImageInfoFetcher),
  }

  static defaultProps = {
    pageSize: 5,
    imageFetcher: new ImageFetcher(),
  }

  state = {
    images: [],
    imageInfo: ImageInfo.default(),
    currentPage: 1,
    modalImageId: 0,
  }

  componentDidMount() {
    this.fetchImages(this.props.pageSize);
  }

  componentWillUpdate(_, nextState) {
    if (nextState.currentPage !== this.state.currentPage) {
      this.fetchImages(this.props.pageSize);
    }
    if (nextState.modalImageId !== this.state.modalImageId) {
      this.fetchImageInfo(nextState.modalImageId, nextState.modalImageSecret);
    }
  }

  fetchImages(pageSize) {
    this.props.imageFetcher.fetch(this.state.currentPage, pageSize).then(
      responseJSon => this.setState(
        { images: responseJSon.photos.photo.map(item => Image.fromValues(item)) }
      )
    );
  }

  fetchImageInfo(imageId, imageSecret) {
    this.props.imageInfoFetcher.fetch(imageId, imageSecret).then(
      responseJSon => this.setState(
        { imageInfo: ImageInfo.fromValues(responseJSon.photo) }
      )
    );
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }

  openModal = (imageId, imageSecret) => {
    this.setState({ isModalOpened: true, modalImageId: imageId, modalImageSecret: imageSecret });
  }

  closeModal = () => {
    this.setState({ isModalOpened: false });
  }

  render() {
    return (
      <div>
        {this.state.images.map(
          (item, index) => (
            <LazyImage key={index} image={item} clickHandler={this.openModal} />)
        )}
        <Pager currentPage={this.state.currentPage} handlePageChange={this.handlePageChange} />
        <Modal
          opened={this.state.isModalOpened}
          content={this.state.imageInfo}
          closeFunction={this.closeModal} />
      </div>
    );
  }

}
