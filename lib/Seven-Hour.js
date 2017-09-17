import React from 'react';
import Card from './Card.js';

const SevenHour = ({
  weather,
  convertTime,
  }) =>
      <div className='seven-hour'>
          {weather.hourlyInfo &&
            weather.hourlyInfo.map((obj, i) =>
              <Card
                key={i}
                time={convertTime(obj.FCTTIME.hour)}
                condition={obj.condition}
                img={obj.icon_url}
                temp={obj.temp.english} />
            )}
      </div>;

export default SevenHour;
