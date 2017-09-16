import React from 'react';
import Controls from './Controls.js';


const WelcomeSearch = ({
  setAppState,
  getCurrentWeather,
 }) =>
      <div className="welcome-screen">
        <h1>welcome to good weather.</h1>
        <Controls
          className='welcome-controls'
          setAppState={setAppState}
          getCurrentWeather={getCurrentWeather} />
        </div>;

export default WelcomeSearch;
