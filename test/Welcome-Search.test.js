import WelcomeSearch from '../lib/Welcome-Search.js';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('WelcomeSearch functionality', () => {
  const shallowWelcomeSearch = shallow(<WelcomeSearch />);

  it('should have a title', () => {
    const title = shallowWelcomeSearch.find('h1');

    expect(title.text()).toEqual('welcome to good weather.');
  });

  it('should render controls', () => {
    const controls = shallowWelcomeSearch.find('Controls');

    expect(controls.nodes.length).toEqual(1);
  });

  it('should render autocomplete', () => {
    const autocomplete = shallowWelcomeSearch.find('AutoComplete');

    expect(autocomplete.nodes.length).toEqual(1);
  });
});
