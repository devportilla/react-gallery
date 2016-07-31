import 'whatwg-fetch';

export default class ImageFetcher {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  fetch(imageId, imageSecret) {
    return fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo
&api_key=${this.apiKey}
&photo_id=${imageId}
&secret=${imageSecret}
&format=json
&nojsoncallback=1`
    ).then(
      response => response.json()
    );
  }
}
