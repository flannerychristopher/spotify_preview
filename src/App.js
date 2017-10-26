import React, { Component } from 'react';

import access_token from './API_KEYS';
import Artist from './components/Artist';
import Gallery from './components/Gallery';
import Search from './components/Search';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: null
    }
  }

  search() {
    this.setState({ query: '' })
    const BASE_INFO_URL = 'https://api.spotify.com/v1/search?';
    const INFO_QUERY_URL = BASE_INFO_URL + 'q=' + this.state.query + '&type=artist&limit=1';

    var authOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + access_token
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(INFO_QUERY_URL, authOptions)
      .then(response => response.json())
      .then(json => {
        try {
          let artist = json.artists.items[0];
          this.setState({ artist })

          const BASE_TRACKS_URL = 'https://api.spotify.com/v1/artists/';
          const TRACKS_URL = `${BASE_TRACKS_URL}${this.state.artist.id}/top-tracks?country=US`;
          fetch(TRACKS_URL, authOptions)
            .then(response => response.json())
            .then(json => {
              const tracks = json.tracks;
              this.setState({ tracks })
            });
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

        <Search
          value={this.state.query}
          onChange={this.updateQuery.bind(this)}
          onClick={this.search.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
        />

        <Artist artist={this.state.artist} />

        <Gallery tracks={this.state.tracks} />
      </div>
    );
  }
}
