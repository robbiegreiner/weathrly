import React, { Component } from 'react';
import Key from '../apikey.js';

export default class API {
  constructor(location){
    this.location = `${this.location}.json`;
    this.currentURL = '';
    this.forecastURL = '';
    this.hourlyURL = '';
    this.tenDayURL = '';
  }

  setURL(){
    this.currentURL = `http://api.wunderground.com/api/${Key}/conditions/q/${this.location}`;
    this.forecastURL = `http://api.wunderground.com/api/${Key}/forecast/q/${this.location}`;
    this.hourlyURL = `http://api.wunderground.com/api/${Key}/hourly/q/${this.location}`;
    this.tenDayURL = `http://api.wunderground.com/api/${Key}/hourly10day/q/${this.location}`;
  }

  formatInput(this.location){
    if(!isNaN(this.location) && this.location.length === 5){

    }
  }


}
