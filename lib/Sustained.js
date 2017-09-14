import React from 'react';

const Sustained = ({ weather, setAppState, initialSearchValue, getCurrentWeather }) => {
  return (
    <div className="sustained">
      <p className="city">{weather.city}</p>
      <p className="day">{weather.weekDay}, {weather.month} {weather.day}</p>
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
        <div className="current-tab">
          <p>current weather</p>
        </div>
        <div className="seven-hour-tab">
          <p>seven hour forecast</p>
        </div>
        <div className="ten-day-tab">
          <p>ten day forecast</p>
        </div>
    </div>
  );
};

export default Sustained;
