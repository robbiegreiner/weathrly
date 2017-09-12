import React, { Component } from 'react';


export default class WelcomeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
      <div className="welcome-screen">
        <h1>Welcome to Good Weather</h1>
      </div>
    );
  }
}
