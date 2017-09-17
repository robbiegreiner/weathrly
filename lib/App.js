import React, { Component } from 'react';
import '../css/css.js';
import WelcomeSearch from './Welcome-Search.js'
import Key from '../apikey.js';
import WeatherObject from './WeatherObject.js';
import Sustained from './Sustained.js';
import Current from './Current.js';
import SevenHour from './Seven-Hour.js'
import TenDay from './Ten-Day.js'
import CityList from './autocomplete/CityList.js'
import CompleteMe from './autocomplete/Complete-Me.js'
import AutoComplete from './autocomplete/AutoComplete.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.url = '';
    this.state = {
      searchValue: '',
      weather: {},
      view: 'current-weather',
      suggestions: [],
    };
    this.setState = this.setState.bind(this);
    this.getCurrentWeather = this.getCurrentWeather.bind(this);
    this.changeView = this.changeView.bind(this);
    this.displayWeather = this.displayWeather.bind(this);
    this.setViewClass = this.setViewClass.bind(this);
    this.cityTrie = new CompleteMe();
    this.cityTrie.populate(CityList);
  }

  changeView(view) {
    this.setState({ view: view });
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
    let weather;
    if (this.state.view === 'current-weather') {
      weather =
        <Current
          weather={this.state.weather} />;
    } else if (this.state.view === 'seven-hour-weather') {
      weather =
        <SevenHour
          weather={this.state.weather}
          convertTime={this.convertTime}/>;
    } else if (this.state.view === 'ten-day-weather') {
      weather =
        <TenDay weather={this.state.weather} />;
    }
    return weather;
  }

  convertTime(num) {
    let time;
    if (num <= 12) {
      time = `${num} :00 AM`;
    } else if (num < 12) {
      time = `${num - 12} :00 PM`;
    }
    return time;
  }

  render() {
    let content;
    if (localStorage.length < 1) {
      content =
        <div>
          <WelcomeSearch
            setAppState={this.setState}
            getCurrentWeather={this.getCurrentWeather}
            searchValue={this.state.searchValue}
            cityTrie={this.cityTrie}
            suggestionArray={this.state.suggestions}/>
          </div>;
    } else if (localStorage.length >= 1) {
      content =
        <div>
          <Sustained
            weather={this.state.weather}
            setAppState={this.setState}
            getCurrentWeather={this.getCurrentWeather}
            changeView={this.changeView}
            setViewClass={this.setViewClass}
            cityTrie={this.cityTrie}
            suggestionArray={this.state.suggestions}
          />
            {this.displayWeather()}
        </div>;
    }
    return content;
  }

  setViewClass(tab) {
    let viewClass;
    if (this.state.view === tab) {
      viewClass = 'in-view';
    } else {
      viewClass = 'not-in-view';
    }
    return viewClass;
  }

  setURL() {
    let formattedInput;
    let searchInput = this.state.searchValue;
    searchInput = searchInput.trim();
    if (!isNaN(searchInput) && searchInput.length === 5) {
      this.url = `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${searchInput}.json`;
    } else {
      formattedInput = this.formatInput(searchInput);
      this.url = `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${formattedInput}.json`;
    }
  }

  formatInput(searchInput) {
    const formattedSearchInput = searchInput.toLowerCase();
    let commaIndex = formattedSearchInput.indexOf(',');
    let formattedQuery;

    if (commaIndex === -1) {
      commaIndex = formattedSearchInput.indexOf(' ');
    }

    if (commaIndex === -1) {
      formattedQuery = formattedSearchInput;
      // error message here
    } else {
      const state = formattedSearchInput.slice(commaIndex + 1).trim();
      const city = formattedSearchInput.slice(0, commaIndex);

      if (state.length < 1 || city.length < 1) {
        formattedQuery = formattedSearchInput;
        // error message here
      } else {
        formattedQuery = `${state}/${city}`;
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
      })
      .catch(error => error);
  }

  storeCity(apiURL) {
    localStorage.setItem('apiURL', apiURL);
  }

  getPreviousCity() {
    this.url = localStorage.getItem('apiURL');
  }


  getCurrentWeather() {
    document.querySelector('input').value = '';
    this.changeView('current-weather');
    this.setURL();
    this.getData();
    this.storeCity(this.url);
  }
}
