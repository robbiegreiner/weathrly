import React, { Component } from 'react';
import Key from '../apikey.js';

export default class API {
  constructor() {
    this.location = location;
    this.currentURL = '';
    this.forecastURL = '';
    this.hourlyURL = '';
    this.tenDayURL = '';
  }

  setURL() {
    this.location = `${this.location}.json`;
    this.currentURL = `http://api.wunderground.com/api/${Key}/conditions/q/${this.location}`;
    this.forecastURL = `http://api.wunderground.com/api/${Key}/forecast/q/${this.location}`;
    this.hourlyURL = `http://api.wunderground.com/api/${Key}/hourly/q/${this.location}`;
    this.tenDayURL = `http://api.wunderground.com/api/${Key}/hourly10day/q/${this.location}`;
  }

  getCurrentData() {
    fetch(this.currentURL)
      .then(data => data.json())
  }

  getForecastData() {
    fetch(this.currentURL)
      .then(data => data.json())
  }

  getHourlyData() {
    fetch(this.currentURL)
      .then(data => data.json())
  }

  getTenDayData() {
    fetch(this.currentURL)
      .then(data => data.json())
  }

  formatInput(){
    if(!isNaN(this.location) && this.location.length === 5) {

    }
  }


}
