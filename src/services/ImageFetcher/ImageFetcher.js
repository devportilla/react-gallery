import 'whatwg-fetch';

export default class ImageFetcher {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  fetch(pageNumber, itemsPerPage) {
    return fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${this.apiKey}&extras=url_sq&per_page=${itemsPerPage}&page=${pageNumber}&format=json&nojsoncallback=1`
    ).then(
      response => response.json()
    );
  }
}
