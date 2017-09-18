import React from 'react';
import Card from './Card.js';

const TenDay = ({ weather }) => {
  return (
      <div>
          {weather.dailyInfo &&
            weather.dailyInfo.map((obj, i) =>
            <Card
              className={'ten-day'}
              key={i}
              time={obj.date.weekday}
              condition={obj.conditions}
              img={obj.icon_url}
              temp={`High: ${obj.high.fahrenheit}°F Low: ${obj.low.fahrenheit}°F`}/>
            )}
      </div>
    );
};

export default TenDay;
