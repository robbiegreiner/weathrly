import Current from '../lib/Current.js';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('Current functionality', () => {
  const weather = {
    condition: 'sunny',
    img: 'http://www.freeiconspng.com/img/11074',
    high: '76',
    low: '56',
    summary: 'Lots of sunshine. High 76F. Winds ESE at 5 to 10 mph.',
  };
  const shallowCurrent = shallow(<Current weather={weather} />);

  it('should display condition', () => {
    const condition = shallowCurrent.find('.condition');

    expect(condition.text()).toEqual('sunny');
  });

  it('should display an image', () => {
    const img = shallowCurrent.find('img');

    expect(img.nodes.length).toEqual(1);
  });

  it('should display high temp', () => {
    const high = shallowCurrent.find('.high');

    expect(high.text()).toEqual('High: 76°F');
  });

  it('should display low temp', () => {
    const low = shallowCurrent.find('.low');

    expect(low.text()).toEqual('Low: 56°F');
  });

  it('should display summary', () => {
    const summary = shallowCurrent.find('.summary-text');

    expect(summary.text()).toEqual('Lots of sunshine. High 76F. Winds ESE at 5 to 10 mph.');
  });
});
