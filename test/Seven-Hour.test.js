import SevenHour from '../lib/Seven-Hour.js';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('SevenHour functionality', () => {
  const obj = {
    condition: 'rainy',
    temp: { english: '82', metric: '28' },
    FCTTIME: { civil: '6:00 PM' },
    icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
  };
  const hourlyInfo = [];
  for (let i = 0; i < 7; i ++) {
    hourlyInfo.push(obj);
  }
  const weather = { hourlyInfo: hourlyInfo };
  const mountSevenHour = mount(<SevenHour weather={weather} />);
  const cards = mountSevenHour.find('Card');

  it('should display seven cards', () => {
    expect(cards.nodes.length).toEqual(7);
  });

  it('should have hour on cards', () => {
    expect(cards.nodes[0].props.time).toEqual('6:00 PM');
  });

  it('should have condition on cards', () => {
    expect(cards.nodes[0].props.condition).toEqual('rainy');
  });

  it('should have img url on cards', () => {
    expect(cards.nodes[0].props.img).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
  });

  it('should have temp on cards', () => {
    expect(cards.nodes[0].props.temp).toEqual('82°F');
  });
});
