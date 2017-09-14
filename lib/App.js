import React, { Component } from 'react';
import '../css/css.js';
const dummyData = require('./dummy-data.js');
import WelcomeSearch from './Welcome-Search.js'
import Key from '../apikey.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.url = '';
    this.state = {
      initialSearchValue: null,
      city: '',
      condition: '',
      day: '',
      temp: '',
      hi: '',
      low: '',
      summary: '',
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

  setURL(){
    this.url = `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${this.state.initialSearchValue}.json`;
  }

  getData() {
    fetch(this.url)
      .then(data => data.json())
      .then(parsedData => this.setState({
                            //dig thru object here!!!
    })
      .catch(error => "error");
  }

  getCurrentWeather() {
    this.setURL();
    this.getData();
    // .welcome-screen display: none;
    //  use this.state.searchInput to make API call
    // display sustained content and current forecast
  }
}
