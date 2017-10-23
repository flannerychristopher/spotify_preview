import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Title">Spotify Timer</div>

        <div>
          <input placeholder='search ...' />
          <button>search</button>
        </div>

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