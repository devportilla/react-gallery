import 'whatwg-fetch';

export default class ImageFetcher {
  extras = [
    'owner_name',
    'url_q',
  ];

  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  fetch(pageNumber, itemsPerPage) {
    return fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent
&api_key=${this.apiKey}
&extras=${this.extras.join()},
&per_page=${itemsPerPage}
&page=${pageNumber}
&format=json
&nojsoncallback=1`
    ).then(
      response => response.json()
    );
  }
}
