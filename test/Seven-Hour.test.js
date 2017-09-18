import SevenHour from '../lib/Seven-Hour.js';
import { shallow, mount } from 'enzyme';
import WeatherObject from '../lib/WeatherObject.js'
import React from 'react';
import DummyData from './Dummy-Data.js';

describe('SevenHour functionality', () => {
  const parsedData = DummyData.json();
  console.log(parsedData);
  const weatherObj = new
 WeatherObject(parsedData);
  const hourlyInfo = [];
  for (let i = 0; i < 7; i++) {
    hourlyInfo.push(weatherObj);
  }
  const weather = { hourlyInfo: hourlyInfo };
  const mountSevenHour = mount(<SevenHour weather={weather}/>);
  const cards = mountSevenHour.find('Card');

  it('should display seven cards', () => {
    expect(cards.nodes.length).toEqual(7);
  });

  it('should have time on cards', () => {
    expect(cards.nodes[0].props.time).toEqual('');
  });

  it('should have condition on cards', () => {
    expect(cards.nodes[0].props.condition).toEqual('cloudy');
  });

  it('should have img url on cards', () => {
    expect(cards.nodes[0].props.img).toEqual('http://www.freeiconspng.com/img/11074');
  });

  it('should have temp on cards', () => {
    expect(cards.nodes[0].props.temp).toEqual('77°F');
  });

})
