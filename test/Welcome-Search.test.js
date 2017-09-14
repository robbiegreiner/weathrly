import WelcomeSearch from '../lib/Welcome-Search.js';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('WelcomeSearch functionality', () => {
  let mockfn = () => {};
  const shallowWelcomeSearch = shallow(<WelcomeSearch />);

  it.skip('should have a title', () => {
    const title = shallowWelcomeSearch.find('h1');

    expect(title.text()).toEqual('welcome to good weather.');
  });

  it.only('should change state when search input changed', () => {
    const input = shallowWelcomeSearch.find('input');

    expect(shallowWelcomeSearch.state('searchInput')).toEqual(undefined);
    const event = { target: { value: 'Denver' } };

    input.simulate('change', event);
    expect(shallowWelcomeSearch.state('searchInput')).toEqual('Denver');
  });

  describe('button functionality', () => {
    const button = shallowWelcomeSearch.find('button');

    button.simulate('click');

    it('should execute onClick function once when clicked', () => {

    });

    it('should use searchInput to make API call', () => {

    });

    it('should change display of .welcome-screen div', () => {

    });

    it('should render sustained content', () => {

    });
  });
});
