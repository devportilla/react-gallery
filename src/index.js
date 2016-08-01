import React from 'react';
import { render } from 'react-dom';
import ImageFetcher from 'services/ImageFetcher';
import ImageInfoFetcher from 'services/ImageInfoFetcher';
import Gallery from './components/Gallery/Gallery';

import '../resources/styles/font-stack.scss';

const imageFetcher = new ImageFetcher('0239e1b9142a1b6c77b098ecc4debd0d');
const imageInfoFetcher = new ImageInfoFetcher('0239e1b9142a1b6c77b098ecc4debd0d');

render(
  <Gallery
    pageSize={10}
    imageFetcher={imageFetcher}
    imageInfoFetcher={imageInfoFetcher}
  />,
  document.getElementById('root'));
