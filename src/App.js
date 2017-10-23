import React, { Component } from 'react';

import access_token from './API_KEYS';
import Artist from './components/Artist';
import Search from './components/Search';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'tupac',
      artist: null,
    }
  }

  search() {
    this.setState({ query: '' })
    // console.log(access_token);        
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    // const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
    const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';

    var authOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + access_token
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, authOptions)
      .then(response => response.json())
      .then(json => {
        try {
          const artist = json.artists.items[0];
          this.setState({ artist })
        } catch (error) {
          console.log(error);
          this.setState({ artist: null })
        }
      });
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
        <img className="Logo" src="./logo.png" alt="Spotify" />
        {/* <div className="Title">Spotify Timer</div> */}

        <Search
          value={this.state.query}
          onChange={this.updateQuery.bind(this)}
          onClick={this.search.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
        />

        <Artist artist={this.state.artist} />

        <div className="Gallery">
          Gallery
        </div>
      </div>
    );
  }
}
