import React, { Component } from 'react';
import '../App.css';

export default class Gallery extends Component {
  render() {
    if (!this.props.tracks) {
      return (<div></div>);
    }

    let { tracks } = this.props;

    const trackList = <div className="trackList">
      {
        tracks.map((track, i) => {
          return (
            <div key={i} className="track">
              <span className="trackLabel">{track.name}</span>
              <img src={track.album.images[0].url} className="trackImg" alt="album" />
            </div>
          );
        })
      }
    </div>

    return (
      <div className="Gallery">
        {trackList}
      </div>
    );
  }
}