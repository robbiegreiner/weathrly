import React from 'react';
import AutoComplete from './autocomplete/AutoComplete.js';

const Controls = ({
  setAppState,
  searchValue,
  getCurrentWeather,
  cityTrie
}) => {
  return (
    <div className='controls'>
      <input
        type='text'
        placeholder="enter a city."
        className="controls-search-input"
        onChange={
          (event) => {
            if (event.target.value === '') {
              setAppState({ suggestions: [] });
            } else if (event.target.value !== '') {
              setAppState({ searchValue: event.target.value,
                suggestions: cityTrie.suggest(event.target.value) });
            }
          }
        }
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
