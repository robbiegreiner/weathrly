import React from 'react';
import Controls from './Controls.js';


const WelcomeSearch = ({
  setAppState,
  getCurrentWeather,
  searchValue,
 }) => {
  return (
      <div className="welcome-screen">
        <h1>welcome to good weather.</h1>
        <Controls
          className='welcome-controls'
          setAppState={setAppState}
          searchValue={searchValue}
          getCurrentWeather={getCurrentWeather} />
        </div>
    );
};

export default WelcomeSearch;
