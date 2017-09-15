import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <p>{this.props.timeFrame}</p>
        <p>{this.props.condition}</p>
        <img src={this.props.img}/>
        <p>{this.props.temp}</p>
      </div>
    );
  }
}
