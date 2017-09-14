import React from 'react';

const Current = ({ weather }) => {
  return (
    <div className="current">
      <p className="condition">{weather.condition}</p>
      <img src={weather.img} alt={weather.alttext} />
      <p className="hi">{weather.hi}</p>
      <p className="low">{weather.low}</p>
      <p className="summary">{weather.summary}</p>
    </div>
  );
};

export default Current;
