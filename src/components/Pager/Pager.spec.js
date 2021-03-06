import React from 'react';
import {shallow} from 'enzyme';
import Pager from 'components/Pager';

describe(
  'Pager Component', () => {
    it(
      'Should import the component correctly', () => {
        expect(Pager).not.toBe(null);
      }
    );

    it(
      'Should render a ul tag', () => {
        expect(shallow(<Pager />).find('ul').length).toBe(1);
      }
    );

    it(
      'Should render as many li tags as needed + 4 (first, prev, next, last)', () => {
        expect(shallow(<Pager />).find('li').length).toBe(9);
      }
    )

    it(
      'Should call the pagination function when any item is clicked', () => {
        const Parent = {handlePageChange : () => {}};
        spyOn(Parent, 'handlePageChange');
        const component = shallow(<Pager handlePageChange={Parent.handlePageChange} />);
        component.find('li').at(1).simulate('click');
        expect(Parent.handlePageChange).toHaveBeenCalled();
      }
    )
  }
)

