import React from 'react';
import Controls from './Controls.js';

const Sustained = ({
  weather,
  setAppState,
  searchValue,
  getCurrentWeather,
  changeCurrentView,
  setViewClass,
}) => {
  return (
    <div className="sustained">
      <div className="sustained-info">
        <p className="city">{weather.city}</p>
        <p className="date">{weather.weekDay}
          <br></br>
          {weather.month} {weather.day}, 2017</p>
        <p className="temp">{weather.temp}°F</p>
          <Controls
            className='sustained-controls'
            setAppState={setAppState}
            searchValue={searchValue}
            getCurrentWeather={getCurrentWeather} />
      </div>
      <div className="tabs">
        <div id="current-weather"
          className={setViewClass('current-weather')}
          onClick={() => {changeCurrentView('current-weather')}}>
          <p className="single-tab">current weather</p>
        </div>
        <div id="seven-hour-weather"
          className={setViewClass('seven-hour-weather')}
          onClick={() => {changeCurrentView('seven-hour-weather')}}>
          <p className="single-tab">seven hour forecast</p>
        </div>
        <div id="ten-day-weather"
          className={setViewClass('ten-day-weather')}
          onClick={() => {changeCurrentView('ten-day-weather')}}>
          <p className="single-tab">ten day forecast</p>
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Sustained;
