import React, { Component } from 'react';
import '../css/css.js';
const dummyData = require('./dummy-data.js');
import WelcomeSearch from './Welcome-Search.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
      <div>
        <WelcomeSearch />
      </div>
    );
  }
}
