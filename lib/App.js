import React, { Component } from 'react';

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
        <h1>App Component Workin It!</h1>
      </div>
    );
  }
}
