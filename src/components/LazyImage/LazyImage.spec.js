import React from 'react';
import {shallow} from 'enzyme';
import LazyImage from './LazyImage';

describe(
  'Lazy Image Component', () => {

    it(
      'Should import the component correctly', () => {
        expect(LazyImage).not.toBe(null);
      }
    );

    it(
      'Should render an img tag', function () {
        expect(shallow(<LazyImage />).find('img').length).toBe(1);
      }
    );

    it(
      'Should be rendered with the loaded state to false', function () {
        expect(shallow(<LazyImage />).state('loaded')).toBeFalsy();
      }
    );

    it(
      'Should change its state to loaded after image has fully loaded', function () {
        const component = shallow(<LazyImage />);
        component.find('img').simulate('load');
        expect(component.state('loaded')).toBeTruthy();
      }
    );
  }
);
