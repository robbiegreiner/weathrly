import React from 'react';
import Card from './Card.js';

export default class TenDay extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
          {this.props.weather.dailyInfo &&
            this.props.weather.dailyInfo.map((obj, i) => {
            return <Card
              className={'ten-day'}
              key={i}
              time={obj.date.weekday}
              condition={obj.conditions}
              img={obj.icon_url}
              temp={'High: ' + obj.high.fahrenheit + '    Low: ' + obj.low.fahrenheit }/>;
            })}
      </div>
    );
  }
}
