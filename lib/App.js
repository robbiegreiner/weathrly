import React, { Component } from 'react';
import '../css/css.js';
const dummyData = require('./dummy-data.js');
import WelcomeSearch from './Welcome-Search.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialSearchValue: null,

    };
    this.setState = this.setState.bind(this);
    this.getCurrentWeather = this.getCurrentWeather.bind(this);
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
    console.log('in search button');
    console.log(this.state.initialSearchValue);
    // .welcome-screen display: none;
    //  use this.state.searchInput to make API call
    // display sustained content and current forecast
  }
}
