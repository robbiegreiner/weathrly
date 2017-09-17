import React from 'react';
import AutoComplete from './autocomplete/AutoComplete.js';

const Controls = ({
  setAppState,
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
            setAppState({ searchValue: event.target.value,
                        suggestions: cityTrie.suggest(event.target.value) 
                        });
          }}
        onKeyPress={(e) => {
          const key = e.which;
          if (key === 13) {
            getCurrentWeather();
            setAppState({ searchValue: event.target.value,
                          suggestions: cityTrie.suggest(event.target.value)
            });
          }
        }}
        defaultValue='' />
        <button
          className="controls-search-button"
          onClick={getCurrentWeather}>
          go.
        </button>
      </div>;

export default Controls;
