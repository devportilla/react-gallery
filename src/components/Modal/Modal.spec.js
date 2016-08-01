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
      'Should render a close button', () => {
        expect(shallow(<Modal />).find('.modal__close-button').length).toBe(1);
      }
    );

    it(
      'Should render the background layer', () => {
        expect(shallow(<Modal />).find('.modal__background').length).toBe(1);
      }
    );

    it(
      'Should render the modal layer', () => {
        expect(shallow(<Modal />).find('.modal').length).toBe(1);
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

