import Controls from '../lib/Controls.js';
import App from '../lib/App.js'
import WelcomeSearch from '../lib/Welcome-Search.js'
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('Controls', () => {
  let mockfn = () => {};
  let app = shallow(<App />)
  let welcomeSearch = shallow(<WelcomeSearch />)
  let controls = shallow(<Controls />);
  let input = controls.find('input');
  let button = controls.find('button');

  it.skip('should change state on user input', () => {


    expect(input.text()).toEqual('');
    expect(input.prop('value')).toEqual('');
    expect(input.prop('type')).toEqual('text');
    expect(controls.state('inputVal')).toEqual('');

    input.simulate('change', { target: { value: 'pup' } })
    expect(controls.state('inputVal')).toEqual('pup');

    button.simulate('click');
    expect(controls.state('inputVal')).toEqual('');
  })
})
