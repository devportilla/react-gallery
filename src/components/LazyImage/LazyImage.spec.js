import React from 'react';
import {shallow} from 'enzyme';
import LazyImage from 'components/LazyImage';

const classNames = {
  loadingState: '.image--loading',
  loadedState: '.image--loaded',
}

describe(
  'LazyImage Component', () => {
    it(
      'Should import the component correctly', () => {
        expect(LazyImage).not.toBe(null);
      }
    );

    it(
      'Should render a img tag', () => {
        expect(shallow(<LazyImage />).find('img').length).toBe(1);
      }
    );

    it(
      'Should be rendered with the loaded state to false', () => {
        expect(shallow(<LazyImage />).state('loaded')).toBeFalsy();
      }
    );

    it(
      'Should be rendered with the class loading state', () => {
        expect(shallow(<LazyImage />).is(classNames.loadingState)).toBeTruthy();
      }
    );

    it(
      'Should change its state to loaded after image has fully loaded', () => {
        const component = shallow(<LazyImage />);
        component.find('img').simulate('load');
        expect(component.state('loaded')).toBeTruthy();
      }
    );

    it(
      'Should change its classname after the image has fully loaded', () => {
        const component = shallow(<LazyImage />);
        component.find('img').simulate('load');
        expect(component.is(classNames.loadedState)).toBeTruthy();
      }
    )

    it(
      'Should call the modal opening function when clicked', () => {
        const Parent = {openModal : () => {}};
        spyOn(Parent, 'openModal');
        const component = shallow(<LazyImage clickHandler={Parent.openModal} />);
        component.find('img').simulate('click');
        expect(Parent.openModal).toHaveBeenCalled();
      })
  }
);
