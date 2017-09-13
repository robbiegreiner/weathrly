import React, { Component } from 'react';
// import WelcomeSearchControls from './Welcome-Search-Controls.js';

const WelcomeSearch = ({ setAppState, getCurrentWeather, initialSearchValue }) => {
  return (
    <div className="welcome-screen">
      <h1>welcome to good weather.</h1>
      <input
        type='text'
        placeholder="enter your city."
        className="initial-search-input"
        onChange={
        (event) => {
          setAppState({ initialSearchValue: event.target.value });
          // console.log(initialSearchValue);
        }
          }
        defaultValue={initialSearchValue} />
      <button
        className="initial-search-button"
        onClick={getCurrentWeather}>
        get your weather.
      </button>
    </div>
  );
};

export default WelcomeSearch;
