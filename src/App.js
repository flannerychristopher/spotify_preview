import React, { Component } from 'react';

import Search from './components/Search';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  search() {
    console.log('search');
  }

  updateQuery(query) {
    this.setState({ query })
  }

  onKeyPress(event) {
    if (event.key === 'Enter') this.search();
  }

  render() {
    return (
      <div className="App">
        <div className="Title">Spotify Timer</div>

        <Search
          value={this.state.query}
          onChange={this.updateQuery.bind(this)}
          onClick={this.search.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
        />

        <div className="Profile">
          <div>Picture</div>
          <div>Name</div>
        </div>

        <div className="Gallery">
          Gallery
        </div>
      </div>
    );
  }
}
