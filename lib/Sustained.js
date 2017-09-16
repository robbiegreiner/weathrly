import React from 'react';
import Controls from './Controls.js';

const Sustained = ({
  weather,
  setAppState,
  searchValue,
  getCurrentWeather,
  changeView,
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
          onClick={() => { changeView('current-weather'); }}
          onKeyPress={(e) => {
            const key = e.which;
            if (key === 13) {
              changeView('current-weather');
            }
          }}
          tabIndex="0">
          <p className="single-tab">current weather</p>
        </div>
        <div id="seven-hour-weather"
          className={setViewClass('seven-hour-weather')}
          onClick={() => { changeView('seven-hour-weather'); }}
          onKeyPress={(e) => {
            const key = e.which;
            if (key === 13) {
              changeView('seven-hour-weather');
            }
          }}
          tabIndex="0">
          <p className="single-tab">seven hour forecast</p>
        </div>
        <div id="ten-day-weather"
          className={setViewClass('ten-day-weather')}
          onClick={() => { changeView('ten-day-weather'); }}
          onKeyPress={(e) => {
            const key = e.which;
            if (key === 13) {
              changeView('ten-day-weather');
            }
          }}
          tabIndex="0">
          <p className="single-tab">ten day forecast</p>
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Sustained;
