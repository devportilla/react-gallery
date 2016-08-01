import React from 'react';
import {shallow} from 'enzyme';
import ImageCard from 'components/ImageCard';
import LazyImage from 'components/LazyImage';
import ImageInfo from 'components/ImageInfo';

describe(
  'ImageCard Component', () => {
    it(
      'Should import the component correctly', () => {
        expect(ImageCard).not.toBe(null);
      }
    );

    it(
      'Should render a div tag', () => {
        expect(shallow(<ImageCard />).find('div').length).toBe(1);
      }
    );

    it(
      'Should render a LazyImage component', () => {
        expect(shallow(<ImageCard />).find(LazyImage).length).toBe(1);
      }
    );

    it(
      'Should render a ImageInfo component', () => {
        expect(shallow(<ImageCard />).find(ImageInfo).length).toBe(1);
      }
    );
  }
);
