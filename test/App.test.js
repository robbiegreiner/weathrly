import React from 'react';
import App from '../lib/App.js';
import { shallow, mount } from 'enzyme';
import LocalStorageMock from '../__mock__/mockLocalStorage.js';

describe('App functionality', () => {
  let wrapper;
  const thisLocalStorage = new LocalStorageMock();
  window.localStorage = thisLocalStorage.store;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    thisLocalStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('render welcome search if local storage empty', () => {
    const welcomeSearch = wrapper.find('.welcome-search-div');

    expect(welcomeSearch.nodes.length).toEqual(1);
  });

  it('should render sustained content if local storage not empty', () => {
    localStorage.push('string');
    wrapper = shallow(<App />);
    const sustained = wrapper.find('.sustained-div');

    expect(sustained.nodes.length).toEqual(1);
  });

  it('should render current window if view: current', () => {
    expect(wrapper.node.state.view).toEqual('current-weather');
    const current = wrapper.find('Current');

    expect(current.nodes.length).toEqual(1);
  });

  it('should render seven hour window if view: seven hour', () => {
    expect(wrapper.node.state.view).toEqual('current-weather');
    wrapper.node.setState({ view: 'seven-hour-weather' });
    expect(wrapper.node.state.view).toEqual('seven-hour-weather');
    const sevenHour = wrapper.find('SevenHour');

    expect(sevenHour.nodes.length).toEqual(1);
  });

  it('should render ten day window if view: ten day', () => {
    expect(wrapper.node.state.view).toEqual('current-weather');
    wrapper.node.setState({ view: 'ten-day-weather' });
    expect(wrapper.node.state.view).toEqual('ten-day-weather');
    const tenDay = wrapper.find('TenDay');

    expect(tenDay.nodes.length).toEqual(1);
  });

  it('should change this.state.searchValue onChange in input', () => {
    expect(wrapper.node.state.searchValue).toEqual('');
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Denver, CO' } });
    expect(wrapper.node.state.searchValue).toEqual('Denver, CO');
  });

  it.skip('should change this.url and this.state.weather onClick of button', () => {
    expect(wrapper.node.state.weather).toEqual({});
    expect(wrapper.node.url).toEqual('');
    const button = wrapper.find('button').at(0).node;
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Denver, CO' } });
    const event = wrapper.node.setState({ weather: { city: wrapper.node.state.searchValue },
                                                      url: 'http://www.wunderground.com' });
    button.dispatchEvent(event);
    // button.onClick = () => {
    //   wrapper.node.setState({ weather: { city: wrapper.node.state.searchValue },
    //                                                   url: 'http://www.wunderground.com' });
    // };
    // console.log(button.debug());
    // button.simulate('click');
    // console.log(wrapper.node.state.weather);
    // console.log(wrapper.node.url);
  });

  it('should change this.state.view to current when clicking current tab', () => {
    expect(wrapper.node.state.view).toEqual('current-weather');
    wrapper.node.setState({ view: 'ten-day-weather' });
    expect(wrapper.node.state.view).toEqual('ten-day-weather');
    const currentTab = wrapper.find('#current-weather');

    currentTab.simulate('click');
    expect(wrapper.node.state.view).toEqual('current-weather');
  });

  it('should change this.state.view to seven hour when clicking seven hour tab', () => {
    expect(wrapper.node.state.view).toEqual('current-weather');
    const sevenHourTab = wrapper.find('#seven-hour-weather');

    sevenHourTab.simulate('click');
    expect(wrapper.node.state.view).toEqual('seven-hour-weather');
  });

  it('should change this.state.view to ten day when clicking ten day tab', () => {
    expect(wrapper.node.state.view).toEqual('current-weather');
    const tenDayTab = wrapper.find('#ten-day-weather');

    tenDayTab.simulate('click');
    expect(wrapper.node.state.view).toEqual('ten-day-weather');
  });
});
