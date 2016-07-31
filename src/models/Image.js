export default class Image {
  static defaultProps = {
    ownerName: null,
    url: null,
    title: null,
  }
  constructor(values) {
    this.ownerName = values.ownerName;
    this.url = values.url_sq;
    this.title = values.title;
  }
  static fromValues(values) {
    return new Image(values);
  }
  static default() {
    return new Image(this.defaultProps);
  }
}
