import React from 'react';

const AutoComplete = ({ suggestionArray, className, setAppState, getCurrentWeather }) => {
  return (
    <div className={className}>
      {
        suggestionArray.map((suggestion,i) => {
          while (i < 11) {
            return <li
              key = {i}
              onClick={(event) => {
                console.log(suggestion);
                setAppState({
                  searchValue: suggestion,
                  suggestions: [],
                });
                document.querySelector('input').value = suggestion;
                document.querySelector('input').focus();
              }}>{suggestion}</li>;
          }

        })
      }
    </div>
  );
};



export default AutoComplete;
