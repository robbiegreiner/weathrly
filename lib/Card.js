import React from 'react';

const Card = ({
  time,
  condition,
  img,
  temp,
}) => {
  return (
    <div className='card'>
      <p className='time'>{time}</p>
      <div className='card-condition'>
        <p>{condition}</p>
      </div>
      <div className='img-background'>
        <img src={img}/>
      </div>
      <p className='temp'>{temp}</p>
    </div>
  );
};

export default Card;
