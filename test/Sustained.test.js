import Sustained from '../lib/Sustained.js';
import { shallow, mount } from 'enzyme';
import React from 'react';
import CompleteMe from '../lib/autocomplete/Complete-Me.js';

describe('Sustained functionality', () => {
  const weather = {
    city: 'Denver, CO',
    weekday: 'Tuesday',
    month: 'September',
    day: '19',
    temp: '77',
  };
  const shallowSustained = shallow(<Sustained weather={weather}
                                              setAppState={() => {}}
                                              getCurrentWeather={() => {}}
                                              changeView={() => {}}
                                              setViewClass={() => {}}
                                              suggestionArray={[]}
                                              cityTrie={new CompleteMe}
                                              searchValue={'Denver, CO'}/>);

  // it('should do a thing', () => {
  //   console.log(shallowSustained.debug());
  // });

  it('should have a city', () => {
    const city = shallowSustained.find('.city');

    expect(city.text()).toEqual('Denver, CO');
  });

  it('should have a date with weekday, month, and day', () => {

  });

  it('should have a temp', () => {

  });

  it('should render controls', () => {

  });

  it('should render autocomplete', () => {

  });

  it('should have current weather tab', () => {

  });

  it('should have seven hour tab', () => {

  });

  it('should have ten day tab', () => {

  });
});
