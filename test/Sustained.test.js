import Sustained from '../lib/Sustained.js';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('Sustained functionality', () => {
  const shallowSustained = shallow(<Sustained />);

  it('should render controls', () => {
    const controls = shallowSustained.find('Controls');

    expect(controls.nodes.length).toEqual(1);
  });

  it('should render autocomplete', () => {
    const autocomplete = shallowSustained.find('AutoComplete');

    expect(autocomplete.nodes.length).toEqual(1);
  });
});
