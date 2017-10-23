import React, { Component } from 'react';
import GenreList from './GenreList';
import '../App.css';

export default class Profile extends Component {
  render() {
    if (!this.props.artist) {
      return (<div></div>);
    }
    const artist = this.props.artist;

    return (
      <div className="Artist">
        <img
          alt="Artist"
          className="artist_image"
          src={artist.images[0].url}
        />

        <div className="artist_info">
          <div className="artist_name">{artist.name}</div>
          <div>Followers: {artist.followers.total}</div>
          <GenreList genres={artist.genres} />
        </div>

      </div>
    );
  }
}
