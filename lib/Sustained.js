import React from 'react';

const Sustained = ({ weather, setAppState, initialSearchValue, getCurrentWeather }) => {
  return (
    <div className="sustained">
      <div className="sustained-info">
        <p className="city">{weather.city}</p>
        <p className="day">{weather.weekDay}</p>
        <p className="date">{weather.month} {weather.day}, 2017</p>
        <p className="temp">{weather.temp}</p>
        <input
          type='text'
          placeholder="enter new city."
          className="sustained-search-input"
          onChange={
            (event) => {
              setAppState({ initialSearchValue: event.target.value });
            }
          }
          defaultValue={initialSearchValue} />
          <button
            className="search-button"
            onClick={getCurrentWeather}>
            get more weather.
          </button>
      </div>
      <div className="tabs">
        <div id="current-tab" className="in-view">
          <p>current weather</p>
        </div>
        <div id="seven-hour-tab">
          <p>seven hour forecast</p>
        </div>
        <div id="ten-day-tab">
          <p>ten day forecast</p>
        </div>
      </div>
    </div>
  );
};

export default Sustained;
