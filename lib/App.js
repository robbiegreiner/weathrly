import React, { Component } from 'react';
import '../css/css.js';
import WelcomeSearch from './Welcome-Search.js'
import Key from '../apikey.js';
import WeatherObject from './WeatherObject.js';
import Sustained from './Sustained.js';
import Current from './Current.js';
import SevenHour from './Seven-Hour.js'
import TenDay from './Ten-Day.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.url = '';
    this.state = {
      initialSearchValue: '',
      weather: {},
      currentView: 'current-weather',
    };
    this.setState = this.setState.bind(this);
    this.getCurrentWeather = this.getCurrentWeather.bind(this);
    this.changeCurrentViewToCurrent = this.changeCurrentViewToCurrent.bind(this);
    this.changeCurrentViewToSevenHour = this.changeCurrentViewToSevenHour.bind(this);
    this.changeCurrentViewToTenDay = this.changeCurrentViewToTenDay.bind(this);
    this.displayWeather = this.displayWeather.bind(this);
    this.setViewClass = this.setViewClass.bind(this);
  }

  changeCurrentViewToSevenHour() {
    this.setState({
      currentView: 'seven-hour-weather',
    });
  }

  changeCurrentViewToCurrent() {
    this.setState({
      currentView: 'current-weather',
    });
  }

  changeCurrentViewToTenDay() {
    this.setState({
      currentView: 'ten-day-weather',
    });
  }

  componentDidMount() {
    if (localStorage.length > 0) {
      window.addEventListener('load', () => {
        this.getPreviousCity();
        this.getData();
      });
    }
  }

  displayWeather() {
    if (this.state.currentView === 'current-weather') {
      return (
        <Current
          weather={this.state.weather} />

      );
    } else if (this.state.currentView === 'seven-hour-weather') {
      return (
        <SevenHour
          weather={this.state.weather} />
      );
    } else {
      return (
        // <div>10 day</div>
        <TenDay weather={this.state.weather} />
        );
    }
  }

  render() {
    if (localStorage.length < 1) {
      return (
        <div>
          <WelcomeSearch
            setAppState={this.setState}
            getCurrentWeather={this.getCurrentWeather}
            initialSearchValue={this.state.initialSearchValue} />
            </div>
          );
    } else {
      return (
        <div>
          <Sustained
            weather={this.state.weather}
            setAppState={this.setState}
            initialSearchValue={this.state.initialSearchValue}
            getCurrentWeather={this.getCurrentWeather}
            changeCurrentViewToTenDay={this.changeCurrentViewToTenDay}
            changeCurrentViewToSevenHour={this.changeCurrentViewToSevenHour}
            changeCurrentViewToCurrent={this.changeCurrentViewToCurrent}
            setViewClass={this.setViewClass}

          />
            {this.displayWeather()}
        </div>
      );
    }
  }

  setViewClass(tab) {
    // console.log(tab);
    if (this.state.currentView === tab) {
      return 'in-view';
    } else {
      return 'not-in-view';
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
      .then(weatherObj => {
        this.setState({ weather: weatherObj });
                          console.log(this.state.weather);
      })
      .catch(error => "error");
  }

  storeCity(apiURL) {
    localStorage.setItem('apiURL', apiURL);
  }

  getPreviousCity() {
    this.url = localStorage.getItem('apiURL');
  }


  getCurrentWeather() {
    this.setURL();
    this.getData();
    this.storeCity(this.url);
  }
}
