export default class Image {
  static defaultProps = {
    id: null,
    secret: null,
    ownerName: null,
    url: null,
    title: null,
  }
  constructor(values) {
    this.id = values.id;
    this.secret = values.secret;
    this.ownerName = values.ownername;
    this.url = values.url_q;
    this.title = values.title;
  }
  static fromValues(values) {
    return new Image(values);
  }
  static default() {
    return new Image(this.defaultProps);
  }
}
