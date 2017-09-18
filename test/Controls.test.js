import Controls from '../lib/Controls.js';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('Controls', () => {
  const controls = shallow(<Controls />);
  const input = controls.find('input');
  const button = controls.find('button');

  it('should have a button', () => {
    expect(button.nodes.length).toEqual(1);
  });

  it('should have an input', () => {
    expect(input.nodes.length).toEqual(1);
  });
})
