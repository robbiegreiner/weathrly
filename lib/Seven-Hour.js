import React from 'react';
import Card from './Card.js';

export default class SevenHour extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
          {this.props.weather.hourlyInfo &&
            this.props.weather.hourlyInfo.map((obj, i) => {
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
  }
}
