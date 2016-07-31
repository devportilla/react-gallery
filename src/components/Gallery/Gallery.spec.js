import React from 'react';
import {shallow, mount} from 'enzyme';
import Gallery from 'components/Gallery';
import LazyImage from 'components/LazyImage';
import Image from 'models/Image';

const testValues  = {
  ownerName: "test",
  url: "test",
  title: "test",
}

const testImages = [
  Image.fromValues(testValues),
  Image.fromValues(testValues),
  Image.fromValues(testValues),
  Image.fromValues(testValues),
  Image.fromValues(testValues),
  Image.fromValues(testValues),
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
      'Should fetch images after page changing and images are set', function() {
        const component = shallow(<Gallery />);
        component.setState({ images: testImages });
        component.setState({ currentPage: component.state('currentPage') + 1});
        expect(Gallery.prototype.fetchImages).toHaveBeenCalled();
      }
    )

    it(
      'Should not fetch new images when not changing page and images are set', function() {
        const component = shallow(<Gallery />);
        component.setState({ images: testImages });
        component.setState({ currentPage: component.state('currentPage')});
        expect(Gallery.prototype.fetchImages.calls.any()).toBeFalsy();
      }
    )

    it(
      'Should call fetch with correct parameters when mounting', function() {
        const pageSize = 3;
        mount(<Gallery pageSize={pageSize} />);
        expect(Gallery.prototype.fetchImages).toHaveBeenCalledWith(pageSize);
      }
    )

    it(
      'Should fetch image info after a new imageid is requested', function() {
        const component = shallow(<Gallery />);
        spyOn(Gallery.prototype, 'fetchImageInfo');
        component.setState({ modalImageId: '123'});
        expect(Gallery.prototype.fetchImageInfo).toHaveBeenCalled();
      }
    )

    it(
      'Should not fetch new image info after the same imageid is requested', function() {
        const component = shallow(<Gallery />);
        spyOn(Gallery.prototype, 'fetchImageInfo');
        component.setState({ modalImageId: '123'});
        component.setState({ modalImageId: '123'});
        expect(Gallery.prototype.fetchImageInfo).toHaveBeenCalledTimes(1);
      }
    )
  }
);
