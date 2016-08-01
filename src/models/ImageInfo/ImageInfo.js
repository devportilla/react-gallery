export default class ImageInfo {
  static defaultProps = {
    title: {
      _content: null,
    },
    dates: {
      taken: null,
    },
    urls: {
      url: [
        {
          _content: null,
        },
      ],
    },
  }

  constructor(values) {
    this.title = values.title._content;
    this.dateTaken = values.dates.taken;
    this.externalUrl = values.urls.url[0]._content;
  }

  static fromValues(values) {
    return new ImageInfo(values);
  }

  static default() {
    return new ImageInfo(this.defaultProps);
  }
}
