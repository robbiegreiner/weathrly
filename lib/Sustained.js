import React from 'react';
import Controls from './Controls.js';

const Sustained = ({
  weather,
  setAppState,
  searchValue,
  getCurrentWeather,
  changeCurrentViewToCurrent,
  changeCurrentViewToSevenHour,
  changeCurrentViewToTenDay,
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
        <div>
          <Controls
            setAppState={setAppState}
            searchValue={searchValue}
            getCurrentWeather={getCurrentWeather} />
      </div>
      <div className="tabs">
        <div id="current-tab"
          className={setViewClass('current-weather')}
          onClick={changeCurrentViewToCurrent}>
          <p className="single-tab">current weather</p>
        </div>
        <div id="seven-hour-tab"
          className={setViewClass('seven-hour-weather')}
          onClick={changeCurrentViewToSevenHour}>
          <p className="single-tab">seven hour forecast</p>
        </div>
        <div id="ten-day-tab"
          className={setViewClass('ten-day-weather')}
          onClick={changeCurrentViewToTenDay}>
          <p className="single-tab">ten day forecast</p>
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Sustained;
