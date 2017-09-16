import React from 'react';

const Current = ({ weather }) => {
  return (
    <div className="current">
      <div className="condition-img">
        <p className="condition">{weather.condition}</p>
        <div className='img-background'>
          <img src={weather.img} alt={weather.condition} />
        </div>
        <div className='high-low'>
          <p className="high">High: {weather.high}°F</p>
          <p className="low">Low: {weather.low}°F</p>
        </div>
      </div>
      <div className="summary">
        <p className="summary-text">{weather.summary}</p>
      </div>
    </div>
  );
};

export default Current;
