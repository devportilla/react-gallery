import React from 'react';
import {shallow, mount} from 'enzyme';
import Gallery from 'components/Gallery';
import LazyImage from 'components/LazyImage';

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
    beforeEach(function() {
      //We spy on fetchImages in order to avoid the remote call
      spyOn(Gallery.prototype, 'fetchImages');
    });

    it(
      'Should import the component correctly', () => {
        expect(Gallery).not.toBe(null);
      }
    );

    it(
      'Should render a div tag', function () {
        expect(shallow(<Gallery />).find('div').length).toBe(1);
      }
    );

    it(
      'Should render as many LazyImage components as needed', function () {
        const component = shallow(<Gallery />);
        component.setState({ images: testImages });
        expect(component.find(LazyImage).length).toBe(testImages.length);
      }
    );

    it(
      'Should call fetch when mounting', function() {
        mount(<Gallery />);
        expect(Gallery.prototype.fetchImages).toHaveBeenCalled()
      }
    )

    it(
      'Should update its status after page changing and images are set', function() {
        const component = shallow(<Gallery />);
        component.setState({ images: testImages });
        spyOn(Gallery.prototype, 'componentDidUpdate');
        component.setState({ currentPage: component.state('currentPage') + 1});
        expect(Gallery.prototype.componentDidUpdate).toHaveBeenCalled();
      }
    )

    it(
      'Should not update its status when not changing page and images are set', function() {
        const component = shallow(<Gallery />);
        component.setState({ images: testImages });
        spyOn(Gallery.prototype, 'componentDidUpdate');
        component.setState({ currentPage: component.state('currentPage')});
        expect(Gallery.prototype.componentDidUpdate.calls.any()).toBeFalsy();
      }
    )

    it(
      'Should call fetch with correct parameters when mounting', function() {
        const pageSize = 3;
        mount(<Gallery pageSize={pageSize} />);
        expect(Gallery.prototype.fetchImages).toHaveBeenCalledWith(pageSize);
      }
    )
  }
);
