import React from 'react';

class WeatherObject {
  constructor(data) {
    this.city = '';
    this.condition = '';
    this.day = '';
    this.temp = '';
    this.hi = '';
    this.low = '';
    this.summary = '';
    this.img = '';
    this.alttext = this.getAltText();
  }

  getAltText() {
    // conditional for alt text depending on this.condition
  }
}

export default WeatherObject;
