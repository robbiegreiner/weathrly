import React, { Component } from 'react';
import '../css/css.js';
import WelcomeSearch from './Welcome-Search.js'
import Key from './apikey.js';
import WeatherObject from './WeatherObject.js';
import Sustained from './Sustained.js';
import Current from './Current.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.url = '';
    this.state = {
      initialSearchValue: '',
      weather: {},
    };
    this.setState = this.setState.bind(this);
    this.getCurrentWeather = this.getCurrentWeather.bind(this);
  }

  componentDidMount() {
    if (localStorage.length > 0) {
      window.addEventListener('load', () => {
        this.getPreviousCity();
        this.getData();
      });
    }
  }

  render() {
    if (localStorage.length < 1) {
      return (
        <div>
          <WelcomeSearch
            setAppState={this.setState}
            getCurrentWeather={this.getCurrentWeather}
            initialSearchValue={this.state.initialSearchValue}/>
            </div>
          );
    } else {
      return (
        <div>
          <Sustained
            weather={this.state.weather}
            setAppState={this.setState}
            initialSearchValue={this.state.initialSearchValue}
            getCurrentWeather={this.getCurrentWeather}/>
            <Current
              weather={this.state.weather} />
        </div>
      );
    }
  }

  setURL() {
    let formattedInput;
    let searchInput = this.state.initialSearchValue;
    searchInput = searchInput.trim();
    if (!isNaN(searchInput) && searchInput.length === 5) {
      this.url = `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${searchInput}.json`;
    } else {
      formattedInput = this.formatInput(searchInput);
      this.url = `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${formattedInput}.json`;
    }
  }

  formatInput(searchInput) {
    searchInput = searchInput.toLowerCase();
    let commaIndex = searchInput.indexOf(',');
    let formattedQuery;

    if (commaIndex === -1) {
      commaIndex = searchInput.indexOf(' ');
    }

    if (commaIndex === -1) {
      formattedQuery = searchInput;
      // error message here
    } else {
      const state = searchInput.slice(commaIndex + 1).trim();
      const city = searchInput.slice(0, commaIndex);

      if (state.length < 1 || city.length < 1) {
        formattedQuery = searchInput;
        // error message here
      } else {
        formattedQuery = state + '/' + city;
        formattedQuery = formattedQuery.replace(' ', '_');
      }
    }
    return formattedQuery;
  }

  getData() {
    fetch(this.url)
      .then(data => data.json())
      .then(parsedData => new WeatherObject(parsedData))
      .then(weatherObj => {this.setState({ weather: weatherObj });
                          console.log(this.state.weather);
      })
      .catch(error => "error");
  }

  storeCity(apiURL) {
    localStorage.setItem('apiURL', apiURL);
  }

  // function works, just not sure when to call it.
  getPreviousCity(){
    this.url = localStorage.getItem('apiURL');
  }


  getCurrentWeather() {
    this.setURL();
    this.getData();
    this.storeCity(this.url);
    // .welcome-screen display: none;
    //  use this.state.searchInput to make API call
    // display sustained content and current forecast
  }
}
