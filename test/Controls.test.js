import Controls from '../lib/Controls.js';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('Controls', () => {
  let mockfn = () => {};

  let controls = shallow(<Controls className='sustained-controls'
                                  setAppState={mockfn}
                                  searchValue= '80220'
                                  getCurrentWeather={mockfn}
                                  />);
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
