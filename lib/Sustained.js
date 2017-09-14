import React from 'react';

const Sustained = ({ weather, setAppState, initialSearchValue, getCurrentWeather, changeCurrentViewToTenDay, changeCurrentViewToSevenHour, changeCurrentViewToCurrent }) => {
  return (
    <div className="sustained">
      <div className="sustained-info">
        <p className="city">{weather.city}</p>
        <p className="date">{weather.weekDay}
          <br></br>
          {weather.month} {weather.day}, 2017</p>
        <p className="temp">{weather.temp}°F</p>
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
        <div id="current-tab"
          className="in-view" // change to state
          onClick={changeCurrentViewToCurrent}>
          <p className="single-tab">current weather</p>
        </div>
        <div id="seven-hour-tab"
          // className={state}
          onClick={changeCurrentViewToSevenHour}>
          <p className="single-tab">seven hour forecast</p>
        </div>
        <div id="ten-day-tab"
          // className={state}
          onClick={changeCurrentViewToTenDay}>
          <p className="single-tab">ten day forecast</p>
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Sustained;
