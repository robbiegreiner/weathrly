import React from 'react';
import Card from './Card.js';

const SevenHour = ({
  weather,
  }) =>
      <div className='seven-hour'>
          {weather.hourlyInfo &&
            weather.hourlyInfo.map((obj, i) =>
              <Card
                key={i}
                time={obj.FCTTIME.civil}
                condition={obj.condition}
                img={obj.icon_url}
                temp={`${obj.temp.english}°F`} />
            )}
      </div>;

export default SevenHour;
