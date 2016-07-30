import React from 'react';
import { render } from 'react-dom';

import Gallery from './components/Gallery/Gallery';

render(<Gallery pageSize={10} />, document.getElementById('root'));
