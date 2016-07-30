import React from 'react';
import {shallow} from 'enzyme';
import Gallery from './Gallery';
import LazyImage from 'components/LazyImage/LazyImage';

const testImages = [
  "http://placehold.it/10",
  "http://placehold.it/10",
  "http://placehold.it/10",
  "http://placehold.it/10",
  "http://placehold.it/10",
  "http://placehold.it/10",
];

describe(
  'Gallery Component', () => {
    it(
      'Should import the component correctly', () => {
        expect(Gallery).not.toBe(null);
      }
    );

    it(
      'Should render a div tag', function () {
        expect(shallow(<Gallery images={testImages}/>).find('div').length).toBe(1);
      }
    );

    it(
      'Should render as many LazyImage components as needed', function () {
        expect(shallow(<Gallery images={testImages}/>).find(LazyImage).length).toBe(testImages.length);
      }
    );
  }
);
