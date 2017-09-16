import React from 'react';

const Card = ({
  time,
  condition,
  img,
  temp,
}) => {
  return (
    <div>
      <p>{time}</p>
      <p>{condition}</p>
      <img src={img}/>
      <p>{temp}</p>
    </div>
  );
};

export default Card;
