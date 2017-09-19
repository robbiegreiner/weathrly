import React from 'react';

const AutoComplete = ({ suggestionArray, className, setAppState, getCurrentWeather }) => {
  return (
    <div className={className}>
      {
        suggestionArray.map((suggestion, i) => {
          let listItem;
          while (i < 11) {
            listItem = <li
              key = {i}
              onClick={() => {
                setAppState({
                  searchValue: suggestion,
                  suggestions: [],
                });
                document.querySelector('input').value = suggestion;
                document.querySelector('input').focus();
              }}
              >{suggestion}</li>;
          }
          return listItem;
        })
      }
    </div>
  );
};

export default AutoComplete;
