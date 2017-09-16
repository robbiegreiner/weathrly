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
        placeholder="enter your city."
        className="controls-search-input"
        onChange={
          (event) => {
            setAppState({ searchValue: event.target.value });
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
