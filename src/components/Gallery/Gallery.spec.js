import React from 'react';
import {shallow, mount} from 'enzyme';
import Gallery from 'components/Gallery';
import ImageCard from 'components/ImageCard';
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
    beforeEach(() => {
      //We spy on fetchImages in order to avoid the remote call
      spyOn(Gallery.prototype, 'fetchImages');
    });

    it(
      'Should import the component correctly', () => {
        expect(Gallery).not.toBe(null);
      }
    );

    it(
      'Should render a div tag', () => {
        expect(shallow(<Gallery />).find('div').length).toBe(1);
      }
    );

    it(
      'Should render as many ImageCard components as needed', () => {
        const component = shallow(<Gallery />);
        component.setState({ images: testImages });
        expect(component.find(ImageCard).length).toBe(testImages.length);
      }
    );

    it(
      'Should call fetch when mounting', () => {
        mount(<Gallery />);
        expect(Gallery.prototype.fetchImages).toHaveBeenCalled()
      }
    )

    it(
      'Should fetch images after page changing and images are set', () => {
        const component = shallow(<Gallery />);
        component.setState({ images: testImages });
        component.setState({ currentPage: component.state('currentPage') + 1});
        expect(Gallery.prototype.fetchImages).toHaveBeenCalled();
      }
    )

    it(
      'Should not fetch new images when not changing page and images are set', () => {
        const component = shallow(<Gallery />);
        component.setState({ images: testImages });
        component.setState({ currentPage: component.state('currentPage')});
        expect(Gallery.prototype.fetchImages.calls.any()).toBeFalsy();
      }
    )

    it(
      'Should call fetch with correct parameters when mounting', () => {
        const pageSize = 3;
        mount(<Gallery pageSize={pageSize} />);
        expect(Gallery.prototype.fetchImages).toHaveBeenCalledWith(pageSize);
      }
    )

    it(
      'Should fetch image info after a new imageid is requested', () => {
        const component = shallow(<Gallery />);
        spyOn(Gallery.prototype, 'fetchImageInfo');
        component.setState({ modalImageId: '123'});
        expect(Gallery.prototype.fetchImageInfo).toHaveBeenCalled();
      }
    )

    it(
      'Should not fetch new image info after the same imageid is requested', () => {
        const component = shallow(<Gallery />);
        spyOn(Gallery.prototype, 'fetchImageInfo');
        component.setState({ modalImageId: '123'});
        component.setState({ modalImageId: '123'});
        expect(Gallery.prototype.fetchImageInfo).toHaveBeenCalledTimes(1);
      }
    )
  }
);
