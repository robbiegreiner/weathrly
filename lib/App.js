import React, { Component } from 'react';
import '../css/css.js';
const dummyData = require('./dummy-data.js');
import WelcomeSearch from './Welcome-Search.js'
import API from './API.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialSearchValue: null,

    };
    this.setState = this.setState.bind(this);
    this.getCurrentWeather = this.getCurrentWeather.bind(this);
  }

  componentDidMount() {
    this.getCurrentWeather();
  }

  render() {
    return (
        <div>
          <WelcomeSearch
              setAppState={this.setState}
              getCurrentWeather={this.getCurrentWeather}
              initialSearchValue={this.state.initialSearchValue}/>
        </div>
    );
  }

  getCurrentWeather() {
    const api = new API(this.state.initialSearchValue);
    api.setURL();
    const currentWeatherData = api.getCurrentData();
    console.log(currentWeatherData);
    // .welcome-screen display: none;
    //  use this.state.searchInput to make API call
    // display sustained content and current forecast
  }
}
