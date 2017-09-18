import SevenHour from '../lib/Seven-Hour.js';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('SevenHour functionality', () => {
  const obj = {
    FCTTIME : { hour : '0' },
    condition: 'cloudy',
    icon_url: 'cloudy.png',
    temp: { english: '77' },
  };
  const hourlyInfo = [];
  for (let i = 0; i < 7; i++) {
    hourlyInfo.push(obj);
  }
  const weather = { hourlyInfo: hourlyInfo };
  const mountSevenHour = mount(<SevenHour weather={weather}/>);
  const cards = mountSevenHour.find('Card');

  it('should display seven cards', () => {
    expect(cards.nodes.length).toEqual(7);
  });

  it('should have hour on cards', () => {
    expect(cards.nodes[0].props.time).toEqual('');
  });

  it('should have condition on cards', () => {
    expect(cards.nodes[0].props.condition).toEqual('cloudy');
  });

  it('should have img url on cards', () => {
    expect(cards.nodes[0].props.img).toEqual('cloudy.png');
  });

  it('should have high and low temp on cards', () => {
    expect(cards.nodes[0].props.temp).toEqual('High: 83°F Low: 59°F');
  });

})
