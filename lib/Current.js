import React from 'react';

const Current = ({ weather }) => {
  return (
    <div className="current">
      <p className="condition">{weather.condition}</p>
      <img src={weather.img} alt={weather.alttext} />
      <p className="hi">High: {weather.high}°F</p>
      <p className="low">Low: {weather.low}°F</p>
      <p className="summary">{weather.summary}</p>
    </div>
  );
};

export default Current;
