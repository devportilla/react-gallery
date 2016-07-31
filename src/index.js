import React from 'react';
import { render } from 'react-dom';
import ImageFetcher from 'services/ImageFetcher';
import Gallery from './components/Gallery/Gallery';

const imageFetcher = new ImageFetcher('0239e1b9142a1b6c77b098ecc4debd0d');

render(<Gallery pageSize={10} fetcher={imageFetcher} />, document.getElementById('root'));
