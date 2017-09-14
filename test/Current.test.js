import Current from '../lib/Current.js';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('Current functionality', () => {
  it.skip('should be a test?', () => {
    let mockfn = () => {};
    const shallowCurrent = shallow(<Current weather={mockfn} />);
  })
})
