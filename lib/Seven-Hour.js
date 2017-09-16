import React from 'react';
import Card from './Card.js';

const SevenHour = ({
  weather,
  convertTime,
  }) => {
    return (
      <div className='seven-hour'>
          {weather.hourlyInfo &&
            weather.hourlyInfo.map((obj, i) => {
              return <Card
                key={i}
                time={convertTime(obj.FCTTIME.hour)}
                condition={obj.condition}
                img={obj.icon_url}
                temp={obj.temp.english} />;
            })}
      </div>
    );
};

export default SevenHour;
