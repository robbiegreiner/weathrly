import React from 'react';

const AutoComplete = ({ suggestionArray }) => {
  return (
    <div className="autocomplete-box">
      {
        suggestionArray.map((suggestion,i) => {
          while (i < 11) {
            return <li>{suggestion}</li>
          }

        })
      }
    </div>
  );
};

export default AutoComplete;
