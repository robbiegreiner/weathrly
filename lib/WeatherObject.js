import React from 'react';

export default class WeatherObject {
  constructor(data) {
    this.city = data.current_observation.display_location.full;
    this.condition = data.current_observation.weather;
    this.day = data.forecast.simpleforecast.forecastday[0].date.day;
    this.month = data.forecast.simpleforecast.forecastday[0].date.monthname;
    this.temp = data.current_observation.temp_f;
    this.high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    this.low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    this.summary = data.forecast.txt_forecast.forecastday[0].fcttext;
    this.img = data.current_observation.icon_url;
    this.hourlyInfo = data.hourly_forecast.splice(0, 7);
    this.dailyInfo = data.forecast.simpleforecast.forecastday;
  }

  getAltText() {
    // conditional for alt text depending on this.condition
  }
}
