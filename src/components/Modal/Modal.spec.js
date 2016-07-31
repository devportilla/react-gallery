import React from 'react';
import {shallow} from 'enzyme';
import Modal from 'components/Modal';

describe(
  'Modal Component', () => {
    it(
      'Should import the component correctly', () => {
        expect(Modal).not.toBe(null);
      }
    );

    it(
      'Should render a div tag', () => {
        expect(shallow(<Modal />).find('div').length).toBe(1);
      }
    );

    it(
      'Should call the close function when the button is clicked', () => {
        const Parent = {closeModal : () => {}};
        spyOn(Parent, 'closeModal');
        const component = shallow(<Modal closeFunction={Parent.closeModal} />);
        component.find('span').simulate('click');
        expect(Parent.closeModal).toHaveBeenCalled();
      }
    )
  }
)

