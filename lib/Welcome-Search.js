import React from 'react';
import Controls from './Controls.js';
import AutoComplete from './autocomplete/AutoComplete.js'


const WelcomeSearch = ({
  setAppState,
  getCurrentWeather,
  searchValue,
  cityTrie,
  suggestionArray,
 }) => {
  return (
      <div className="welcome-screen">
        <h1>welcome to good weather.</h1>
        <Controls
          className='welcome-controls'
          setAppState={setAppState}
          searchValue={searchValue}
          getCurrentWeather={getCurrentWeather}
          cityTrie={cityTrie} />
        <AutoComplete
          className='autocomplete-box'
          suggestionArray={suggestionArray} />
      </div>
    );
};

export default WelcomeSearch;
