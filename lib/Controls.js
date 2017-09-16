import React from 'react';

const Controls = ({
  setAppState,
  searchValue,
  getCurrentWeather,
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
          }}
        onKeyPress={(e) => {
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
