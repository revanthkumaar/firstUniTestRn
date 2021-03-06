//you cna use either spec.js or test.js to define the files of testing code
// jest accepts both files/formats
// Example: jest accepts both Button.test.js and Button.spec.json

import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Button label="test label" />);
      expect(component).toMatchSnapshot();
    });
  });
});
