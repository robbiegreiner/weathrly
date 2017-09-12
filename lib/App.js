import React, { Component } from 'react';
const dummyData = require('./dummy-data.js');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    const keys = Object.keys(dummyData.current_observation.display_location);
    const locationList = keys.map((key) => {
      return <li> {key} : {dummyData.current_observation.display_location[key]}</li>
    });
    return (
      <div>
        <ul>{locationList}</ul>
      </div>
    );
  }
}
