export default class ImageInfo {
  static defaultProps = {
    urls: null,
  }
  constructor(values) {
    this.postUrl = values.secret;
  }
  static fromValues(values) {
    return new ImageInfo(values);
  }
  static default() {
    return new ImageInfo(this.defaultProps);
  }
}
