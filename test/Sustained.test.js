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

  it('should have a date with month, day and year', () => {
    const day = shallowSustained.find('.date');

    expect(day.text()).toEqual('September 19, 2017');
  });

  it('should have a temp', () => {
    const temp = shallowSustained.find('.temp');

    expect(temp.text()).toEqual('77°F');
  });

  it('should render controls', () => {
    const controls = shallowSustained.find('Controls');

    expect(controls.nodes.length).toEqual(1);
  });

  it('should render autocomplete', () => {
    const autoComplete = shallowSustained.find('AutoComplete');

    expect(autoComplete.nodes.length).toEqual(1);
  });

  it('should have a current tab, seven hour tab and ten day tab', () => {
    const tabs = shallowSustained.find('.single-tab');

    expect(tabs.nodes.length).toEqual(3);
  });
});
