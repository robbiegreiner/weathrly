import React from 'react';

const AutoComplete = ({ suggestionArray, className }) => {
  return (
    <div className={className}>
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
