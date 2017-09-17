import React from 'react';
import Card from './Card.js';

const SevenHour = ({ weather }) => {
    return (
      <div className='seven-hour'>
          {weather.hourlyInfo &&
            weather.hourlyInfo.map((obj, i) => {
              return <Card
                className={'seven-hour'}
                key={i}
                time={obj.FCTTIME.hour}
                condition={obj.condition}
                img={obj.icon_url}
                temp={obj.temp.english} />;
            })}
      </div>
    );
};

export default SevenHour;
