import React from 'react';

const Card = ({
  time,
  condition,
  img,
  temp,
}) =>
    <div className='card'>
      <p className='time'>{time}</p>
      <div className='seven-hour-condition'>
        <p>{condition}</p>
      </div>
      <div className='img-background'>
        <img src={img} alt={condition}/>
      </div>
      <p className='temp'>{temp}°F</p>
    </div>;

export default Card;
