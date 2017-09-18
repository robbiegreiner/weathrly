import React from 'react';
import AutoComplete from './autocomplete/AutoComplete.js';

const Controls = ({
  setAppState,
  searchValue,
  getCurrentWeather,
  cityTrie,
}) => {
  return (
    <div className='controls'>
      <input
        type='text'
        placeholder="enter a city."
        className="controls-search-input"
        onChange={
          (event) => {
            setAppState({ searchValue: event.target.value });
            let suggestions;
            if (event.target.value === '') {
              suggestions = [];
            } else if (event.target.value !== '') {
              suggestions = cityTrie.suggest(event.target.value);
            }
            setAppState({ suggestions: suggestions });
          }
        }
        onKeyDown={(e) => {
          const key = e.which;
          if (key === 13) {
            getCurrentWeather();
          }
        }}
        defaultValue={searchValue} />
        <button
          className="controls-search-button"
          onClick={getCurrentWeather}>
          go.
        </button>
      </div>
  );
};

export default Controls;
