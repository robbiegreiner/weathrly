import SevenHour from '../lib/Seven-Hour.js';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('SevenHour functionality', () => {
  const obj = {
    time: { hour: '0' },
    conditions: 'cloudy',
    icon_url: 'cloudy.png',
    high: { fahrenheit: '83', celsius: '28' },
    low: { fahrenheit: '59', celsius: '15' },
  };
  const hourlyInfo = [];
  for (let i = 0; i < 7; i++) {
    hourlyInfo.push(obj);
  }
  const weather = { hourlyInfo: hourlyInfo };
  const mountSevenHour = mount(<SevenHour weather={weather}/>);
  const cards = mountSevenHour.find('Card');

  it('should display seven cards', () => {
    expect(cards.nodes.length).toEqual(10);
  });

})
