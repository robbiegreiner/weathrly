import TenDay from '../lib/Ten-Day.js';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('TenDay functionality', () => {
  const obj = {
    date: { weekday: 'Monday' },
    conditions: 'cloudy',
    icon_url: 'http://www.freeiconspng.com/img/11074',
    high: { fahrenheit: '83', celsius: '28' },
    low: { fahrenheit: '59', celsius: '15' },
  };
  const dailyInfo = [];
  for (let i = 0; i < 10; i++) {
    dailyInfo.push(obj);
  }
  const weather = { dailyInfo: dailyInfo };
  const mountTenDay = mount(<TenDay weather={weather}/>);
  const cards = mountTenDay.find('Card');

  it('should display ten cards', () => {
    expect(cards.nodes.length).toEqual(10);
  });

  it('should have day on cards', () => {
    expect(cards.nodes[0].props.time).toEqual('Monday');
  });

  it('should have condition on cards', () => {
    expect(cards.nodes[0].props.condition).toEqual('cloudy');
  });

  it('should have img url on cards', () => {
    expect(cards.nodes[0].props.img).toEqual('http://www.freeiconspng.com/img/11074');
  });

  it('should have high and low temp on cards', () => {
    expect(cards.nodes[0].props.temp).toEqual('High: 83°F Low: 59°F');
  });
});
