import React, { Component } from 'react';


export default class WelcomeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputValue: '',
    };
  }

  render() {
    return (
      <div className="welcome-screen">
        <h1>welcome to good weather.</h1>
        <input
          type='text'
          placeholder="enter your city."
          className="initial-search-input"
          onChange={
          (event) => {
            this.setState({ searchInput: event.target.value });
          }
            }
          defaultValue={this.state.searchInputValue} />
        <button className="initial-search-button" onClick={() => {
          // .welcome-screen display: none;
          //  use this.state.searchInput to make API call
          // display sustained content and current forecast
        }}>get your weather.</button>
      </div>
    );
  }
}
